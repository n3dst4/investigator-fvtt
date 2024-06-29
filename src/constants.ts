import system from "../public/system.json";

export const systemId = system.id;
export const version = system.version;
export const defaultMigratedSystemVersion = "0.0.0";
export const defaultSystemPreset = "pathOfCthulhuPreset";
export const templatesPath = `systems/${systemId}/templates` as const;
export const reactTemplatePath =
  `${templatesPath}/react-application.hbs` as const;
export const reactifiedCombatSidebarTemplatePath =
  `${templatesPath}/reactified-combat-sidebar.hbs` as const;
export const customSystem = "customSystem";
export const genericOccupationDefault = "Investigator";
export const showEmptyInvestigativeCategoriesDefault = true;
export const inputThrottleTime = 500;

// item types
export const investigativeAbility = "investigativeAbility";
export const generalAbility = "generalAbility";
export const equipment = "equipment";
export const weapon = "weapon";
export const pc = "pc";
export const npc = "npc";
export const party = "party";
export const mwItem = "mwItem";
export const personalDetail = "personalDetail";
export const card = "card";

// assets
// all generated through https://game-icons.net/
export const investigativeAbilityIcon =
  `/systems/${systemId}/assets/icons/magnifying-glass.webp` as const;
export const generalAbilityIcon =
  `/systems/${systemId}/assets/icons/fist.webp` as const;
export const weaponIcon =
  `/systems/${systemId}/assets/icons/trench-knife.webp` as const;
export const equipmentIcon =
  `/systems/${systemId}/assets/icons/shopping-bag.webp` as const;
export const pcIcon =
  `/systems/${systemId}/assets/icons/sherlock-holmes.webp` as const;
export const npcIcon = `/systems/${systemId}/assets/icons/cowled.webp` as const;
export const partyIcon =
  `/systems/${systemId}/assets/icons/dark-squad.webp` as const;
export const personalDetailIcon =
  `/systems/${systemId}/assets/icons/notebook.webp` as const;
export const cardIcon = `/systems/${systemId}/assets/icons/card.webp` as const;

// packs

export const packNames = {
  niceBlackAgentsAbilities: "niceBlackAgentsAbilities" as const,
  nothingToFearAbilities: "nothingToFearAbilities" as const,
  pallidStarsAbilities: "pallidStarsAbilities" as const,
  pathOfCthulhuAbilities: "pathOfCthulhuAbilities" as const,
  srdAbilities: "srdAbilities" as const,
  castingTheRunesAbilities: "castingTheRunesAbilities" as const,
  moribundWorldAbilities: "moribundWorldAbilities" as const,
  esoterroristsAbilities: "esoterroristsAbilities" as const,
  niceBlackAgentsNPCAbilities: "niceBlackAgentsNPCAbilities" as const,
  mutantCityBluesAbilities: "mutantCityBluesAbilities" as const,
  mutantCityBluesNPCAbilities: "mutantCityBluesNPCAbilities" as const,
};

export const npcPackName = "opponentAbilities";

// hooks
export const newPCPacksUpdated = `${systemId}.newPCPacksUpdated` as const;
export const newNPCPacksUpdated = `${systemId}.newNPCPacksUpdated` as const;
export const settingsSaved = `${systemId}.settingsSaved` as const;
export const requestTurnPass = `${systemId}.requestTurnPass`;
export const socketScope = `system.${systemId}` as const;

// css classes
export const abilityChatMessageClassName = "investigator-ability-test";
export const htmlDataItemId = "data-item-id";
export const htmlDataActorId = "data-actor-id";
export const htmlDataMode = "data-mode";
export const htmlDataModeTest = "test";
export const htmlDataModeSpend = "spend";
export const htmlDataModeAttack = "attack";
export const htmlDataModeMwTest = "mw-test";
export const htmlDataModeMwWallop = "mw-wallop";
export const htmlDataModeMwNegate = "mw-negate";
export const htmlDataRange = "data-range";
export const htmlDataWeaponId = "data-weapon-id";
export const htmlDataName = "data-name";
export const htmlDataImageUrl = "data-image-url";
export const htmlDataMwDifficulty = "data-mw-difficulty";
export const htmlDataMwBoonLevy = "data-mw-boon-levy";
export const htmlDataMwReRoll = "data-mw-re-roll";
export const htmlDataMwPool = "data-mw-pool";
export const htmlDataTokenId = "data-token-id";

// other?
export const mwWallopCost = 5;
export const mwNegateCost = 3;
export const defaultCustomThemePath = "investigator_themes";

// flags

export const passingTurnsRemaining = "passingTurnsRemaining";
export const extraPassingTurns = "extraPassingTurns";
export const extraCssClasses = "extraCssClasses";
export const journalMemories = "journalMemories";

// magic values

export const occupationSlotIndex = -1;
