import { systemName } from "./constants";
import Case from "case";
import { Dictionary } from "lodash";
import { settings } from "./settings";
import * as constants from "./constants";
import { SocketHookAction } from "./types";

interface NameHaver {
  name: string|null;
}

export const sortEntitiesByName = <T extends NameHaver>(ents: T[]) => {
  return ents.sort((a, b) => {
    const aName = a.name || "";
    const bName = b.name || "";
    return aName < bName ? -1 : aName > bName ? 1 : 0;
  });
};

/**
 * Given an array (or nullish), a desired length, and a padding element, return
 * an array which is exactly the desired length by either padding or truncating
 * the original.
 */
export const fixLength = <T>(
  originalArray: T[] | null | undefined,
  desiredlength: number,
  paddingElement: T,
): T[] => {
  const paddingSize = Math.max(0, desiredlength - (originalArray?.length ?? 0));
  const result = [
    ...(originalArray || []),
    ...new Array(paddingSize).fill(paddingElement),
  ].slice(0, desiredlength);
  return result;
};

export const mapValues = <V1, V2>(
  mapper: (v: V1) => V2,
  subject: {[k: string]: V1},
): {[k: string]: V2} => {
  const result: {[k: string]: V2} = {};
  for (const k in subject) {
    result[k] = mapper(subject[k]);
  }
  return result;
};

export const isNullOrEmptyString = (x: any) => {
  return x === null || x === undefined || x === "";
};

// Folder type is a bit fucky rn
export const getFolderDescendants = <T extends Document>(folder: any): T[] => {
  return [...folder.children.flatMap(getFolderDescendants), ...folder.content];
};

// version of Object.prototype.hasOwnProperty that's safe even when prototype
// has been overridden
export const hasOwnProperty = (x: any, y: string) =>
  Object.prototype.hasOwnProperty.call(x, y);

/**
 * Check that `game` has been initialised
 */
export function isGame (game: any): game is Game {
  return game instanceof Game;
}

/**
 * Throw if `game` has not been initialized. This is hyper unlikely at runtime
 * but technically possible during a calamitous upfuckage to TS keeps us honest
 * and requires a check.
 */
export function assertGame (game: any): asserts game is Game {
  if (!isGame(game)) {
    throw new Error("game used before init hook");
  }
}

/**
 * The developer mode package allows any module to be put into "debug mode".
 * This is just a convenience function to get the curent value of the debug flag
 * for INVESTIGATOR.
 */
export function getDevMode () {
  assertGame(game);
  return !!((game.modules.get("_dev-mode") as any)?.api?.getPackageDebugValue(
    systemName,
  ));
}

/**
 * convenience method to grab a translated string
 */
export const getTranslated = (
  text: string,
  values: Dictionary<string|number> = {},
) => {
  assertGame(game);
  const debug = settings.debugTranslations.get() && getDevMode();
  const pascal = Case.pascal(text);
  const prefixed = `${systemName}.${pascal}`;
  const local = game.i18n.format(prefixed, values);
  const has = game.i18n.has(prefixed, false);
  return `${debug ? (has ? "✔ " : "❌ ") : ""}${local}`;
};

interface confirmADoodleDoArgs {
  message: string;
  confirmText: string;
  cancelText: string;
  confirmIconClass: string;
  values?: Dictionary<string|number>;
  resolveFalseOnCancel?: boolean;
}

/**
 * Pop up a foundry confirmation box. Returns a promise that resolves `true`
 * when the user clicks the confirm button.
 * The default behaviour is to not resolve at all if the user clicks `cancel`,
 * sine most commonly you want to just do nothing, but if you specify
 * `resolveFalseOnCancel: true` it will resolve `false` in that case.
 */
export const confirmADoodleDo = ({
  message,
  confirmText,
  cancelText,
  confirmIconClass,
  values = {},
  resolveFalseOnCancel = false,
}: confirmADoodleDoArgs) => {
  assertGame(game);
  const tlMessage = getTranslated(message, values);
  const tlConfirmText = getTranslated(confirmText, values);
  const tlCancelText = getTranslated(cancelText, values);
  const promise = new Promise<boolean>((resolve) => {
    const onConfirm = () => {
      resolve(true);
    };
    const onCancel = () => {
      if (resolveFalseOnCancel) {
        resolve(false);
      }
    };
    const d = new Dialog({
      title: "Confirm",
      content: `<p>${tlMessage}</p>`,
      buttons: {
        cancel: {
          icon: '<i class="fas fa-ban"></i>',
          label: tlCancelText,
          callback: onCancel,
        },
        confirm: {
          icon: `<i class="fas ${confirmIconClass}"></i>`,
          label: tlConfirmText,
          callback: onConfirm,
        },
      },
      default: "cancel",
    });
    d.render(true);
  });
  return promise;
};

export function assertNotNull<T> (t: T|undefined|null): asserts t is T {
  if (t === undefined) {
    throw new Error("t was undefined");
  }
}

/**
 * create a new object with a key "renamed" in the same order
 * this keeps the renamed key in the same relative order, if you're relying on
 * JS's object key order being stable
 */
export function renameProperty <T> (oldProp: string, newProp: string, subject: Record<string, T>) {
  const result: Record<string, T> = {};
  for (const p in subject) {
    if (p === oldProp) {
      result[newProp] = subject[oldProp];
    } else {
      result[p] = subject[p];
    }
  }
  return result;
}

export function broadcastHook<T> (hook: string, payload: T) {
  assertGame(game);
  const socketHookAction: SocketHookAction<T> = {
    hook,
    payload,
  };
  game.socket?.emit(constants.socketScope, socketHookAction);
  Hooks.call(hook, payload);
}

export const makeLogger = (name: string) =>
  console.log.bind(console, `[${name}]`);

/**
 * Get a file from the user's computer and return it as a string.
 * Nicked off from various sources:
 * https://code-boxx.com/read-files-javascript/
 * https://github.com/GoogleChromeLabs/text-editor/blob/e3a33c2c0b1832ecdb7221f17d7f8a1b23e1ad19/src/inline-scripts/fallback.js#L28
 * https://stackoverflow.com/questions/26754486/how-to-convert-arraybuffer-to-string
 */
export async function getUserFile (accept: string): Promise<string> {
  const filePicker = document.createElement("input");
  filePicker.type = "file";
  filePicker.accept = accept;
  const file = await new Promise<File>((resolve, reject) => {
    filePicker.onchange = (e) => {
      const file = filePicker.files?.[0];
      if (file) {
        resolve(file);
        return;
      }
      reject(new Error("Aborted"));
    };
    filePicker.click();
  });
  const reader = new FileReader();
  const textPromise = new Promise<string>((resolve, reject) => {
    reader.addEventListener("loadend", () => {
      const text =
        reader.result === null
          ? ""
          : typeof reader.result === "string"
            ? reader.result
            : new TextDecoder("utf-8").decode(new Uint8Array(reader.result));
      resolve(text);
    });
  });
  reader.readAsText(file);
  return textPromise;
}
