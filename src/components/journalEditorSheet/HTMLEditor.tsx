import MonacoEditor, { Monaco, OnMount } from "@monaco-editor/react";
import htmlParser from "prettier/plugins/html";
import prettier from "prettier/standalone";
import React, { useCallback, useMemo, useRef } from "react";
import { AiOutlineFormatPainter } from "react-icons/ai";

import { extraCssClasses, systemId } from "../../constants";
import { systemLogger, throttle } from "../../functions/utilities";
import { settings } from "../../settings/settings";
import { AsyncTextInput } from "../inputs/AsyncTextInput";
// these imports are going around the barrel export because I was getting some
// weird "SyntaxError: Ambiguous import "DocumentMemory"" errors
import { createDocumentMemory } from "./documentMemory/createDocumentMemory";
import { rehydrate } from "./documentMemory/rehydrate";
import { save } from "./documentMemory/save";
import type { DocumentMemory } from "./documentMemory/types";
import { useToolbarContent } from "./magicToolbar";
import { ToolbarButton } from "./magicToolbar/ToolbarButton";

const MEMORY_PERIOD = 10;

interface HTMLEditorProps {
  page: any;
}
type IStandalonCodeEditor = Parameters<OnMount>[0];

export const HTMLEditor: React.FC<HTMLEditorProps> = ({ page }) => {
  const monacoRef = useRef<Monaco | null>(null);
  const editorRef = useRef<IStandalonCodeEditor | null>(null);

  function handleEditorWillMount(monaco: Monaco) {}

  const doFormat = useCallback(async () => {
    await editorRef.current?.getAction("editor.action.formatDocument")?.run();
  }, []);

  const memoryRef = useRef<DocumentMemory>();

  const doSave = useCallback(async () => {
    if (memoryRef.current === undefined) {
      const bareMemory = settings.journalMemories.get()?.[page.id];
      memoryRef.current = bareMemory
        ? rehydrate(bareMemory)
        : createDocumentMemory(MEMORY_PERIOD);
    }
    const content = editorRef.current?.getValue() || "";
    await page.parent.updateEmbeddedDocuments("JournalEntryPage", [
      {
        _id: page.id,
        text: { content },
      },
    ]);
    if (memoryRef.current) {
      memoryRef.current = save(memoryRef.current, content);
    }
    systemLogger.log("Saved", memoryRef.current);
  }, [page.parent, page.id, editorRef]);

  const handleChange = useMemo(
    () =>
      throttle(() => {
        doSave();
      }, 500),
    [doSave],
  );

  const handleEditorDidMount: OnMount = useCallback((editor, monaco) => {
    monacoRef.current = monaco;
    editorRef.current = editor;
    // disable built-in html formatting
    monaco.languages.html.htmlDefaults.setModeConfiguration({
      ...monaco.languages.html.htmlDefaults.modeConfiguration,
      documentFormattingEdits: false,
      documentRangeFormattingEdits: false,
    });
    // use prettier to format html
    monaco.languages.registerDocumentFormattingEditProvider("html", {
      async provideDocumentFormattingEdits(model) {
        const text1 = await prettier.format(model.getValue(), {
          // wrapAttributes: "force",
          parser: "html",
          // plugins: [babel],
          htmlWhitespaceSensitivity: "ignore",
          arrowParens: "always",
          bracketSpacing: true,
          endOfLine: "lf",
          insertPragma: false,
          singleAttributePerLine: false,
          bracketSameLine: false,
          printWidth: 80,
          proseWrap: "preserve",
          quoteProps: "as-needed",
          requirePragma: false,
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          // trailingComma: 'es5',
          useTabs: false,
          vueIndentScriptAndStyle: false,
          plugins: [htmlParser],
        });
        console.log(1);
        return [
          {
            range: model.getFullModelRange(),
            text: text1,
          },
        ];
      },
    });

    // editor.
  }, []);

  const handleFormat = useCallback(async () => {
    await doFormat();
  }, [doFormat]);

  useToolbarContent(
    "HTML",
    useMemo(
      () => (
        <ToolbarButton
          onClick={handleFormat}
          text="Format"
          icon={AiOutlineFormatPainter}
        />
      ),
      [handleFormat],
    ),
  );

  const htmlClasses = page.flags[systemId]?.[extraCssClasses] ?? "";

  const handleChangeClasses = useCallback(
    (classes: string) => {
      page.setFlag(systemId, extraCssClasses, classes);
    },
    [page],
  );

  return (
    <div
      data-testid="html-editor"
      css={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0.5em",
      }}
    >
      <div data-testid="html-classes">
        <AsyncTextInput
          value={htmlClasses}
          onChange={handleChangeClasses}
          placeholder="Page CSS Classes"
        />
      </div>

      <div css={{ position: "relative", flex: 1 }}>
        <MonacoEditor
          key={page.id}
          height="100%"
          width="100%"
          defaultLanguage="html"
          defaultValue={page.text.content}
          theme="vs-dark"
          beforeMount={handleEditorWillMount}
          onMount={handleEditorDidMount}
          onChange={handleChange}
          options={{
            language: "html",
            automaticLayout: true,
            scrollbar: {
              horizontal: "visible",
            },
            wordWrap: "off",
            rulers: [80],
            unicodeHighlight: {
              ambiguousCharacters: false,
            },
          }}
        />
      </div>
    </div>
  );
};

HTMLEditor.displayName = "MonacoWrapper";
