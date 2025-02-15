import { assertGame } from "../functions/utilities";
import { InvestigatorItem } from "../module/InvestigatorItem";
import { settings } from "../settings/settings";
import { WeaponSystemData } from "../types";
import { isWeaponItem } from "../v10Types";

export const installItemCombatAbilityHandler = () => {
  Hooks.on(
    "preCreateItem",
    (
      item: InvestigatorItem,
      createData: unknown,
      options: unknown,
      userId: string,
    ) => {
      assertGame(game);
      const combatAbilities = settings.combatAbilities.get();
      const combatAbility = settings.combatAbilities.get()[0];

      if (
        // if the user isn't the owner, we can't do anything
        game.userId !== userId ||
        // we only want to update weapons
        !isWeaponItem(item) ||
        // if no combat abilities defined, we can't do anything
        combatAbility === undefined ||
        // if the item already has a valid combat ability, leave it alone
        combatAbilities.includes(item.system.ability)
      ) {
        return;
      }

      const updateData: Partial<WeaponSystemData> = {
        ability: combatAbility,
      };

      item.updateSource({
        system: updateData,
      });
    },
  );
};
