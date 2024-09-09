import { PresetV1 } from "@lumphammer/investigator-fvtt-types";

import { npcPackName, packNames, systemId } from "./constants";

export const pathOfCthulhuPreset: Required<PresetV1> = {
  schemaVersion: "v1",
  displayName: "Trail of Cthulhu (built-in)",
  defaultThemeName: "tealTheme",
  investigativeAbilityCategories: ["Academic", "Interpersonal", "Technical"],
  generalAbilityCategories: ["General"],
  combatAbilities: ["Scuffling", "Weapons", "Firearms", "Athletics"],
  occupationLabel: "Occupation",
  personalDetails: [{ name: "Drive", type: "item" }],
  longNotes: [
    "Notes, Contacts etc.",
    "Occupational Benefits",
    "Pillars of Sanity",
    "Sources of Stability",
  ],
  newPCPacks: [`${systemId}.${packNames.pathOfCthulhuAbilities}`],
  newNPCPacks: [`${systemId}.${npcPackName}`],
  useBoost: false,
  useMwStyleAbilities: false,
  mwUseAlternativeItemTypes: false,
  useMwInjuryStatus: false,
  genericOccupation: "Investigator",
  mwHiddenShortNotes: [],
  showEmptyInvestigativeCategories: false,
  pcStats: {
    hitThreshold: {
      name: "Hit threshold",
      default: 3,
    },
  },
  npcStats: {
    hitThreshold: {
      name: "Hit threshold",
      default: 3,
    },
    armor: {
      name: "Armor",
      default: 0,
    },
    alertness: {
      name: "Alertness",
      default: 0,
    },
    stealth: {
      name: "Stealth",
      default: 0,
    },
    stabilityLoss: {
      name: "Stability Loss",
      default: 0,
    },
  },
  useNpcCombatBonuses: false,
  useTurnPassingInitiative: false,
  equipmentCategories: {
    general: {
      name: "General",
      fields: {},
    },
    // jqx7v_b6gq$agk440wrca: {
    //   name: "Spells",
    //   fields: {
    //     ctgl8__c9bqkyecw9bnra: {
    //       name: "Type",
    //       type: "string",
    //       default: "",
    //     },
    //   },
    // },
    // q5_505vww9i1bok$i4od8: {
    //   name: "Tomes",
    //   fields: {},
    // },
  },
  useCards: false,
  cardCategories: [],
};

export const niceBlackAgentsPreset: PresetV1 = {
  schemaVersion: "v1",
  displayName: "Night's Black Agents (built-in)",
  defaultThemeName: "niceTheme",
  investigativeAbilityCategories: ["Academic", "Interpersonal", "Technical"],
  generalAbilityCategories: ["General"],
  combatAbilities: ["Hand-to-Hand", "Weapons", "Shooting", "Athletics"],
  occupationLabel: "Background",
  personalDetails: [
    { name: "Drive", type: "item" },
    { name: "Previous Patron", type: "item" },
  ],
  longNotes: ["Covers", "Network Contacts", "Trust"],
  newPCPacks: [`${systemId}.${packNames.niceBlackAgentsAbilities}`],
  newNPCPacks: [
    `${systemId}.${npcPackName}`,
    `${systemId}.${packNames.niceBlackAgentsNPCAbilities}`,
  ],
  useBoost: false,
  useMwStyleAbilities: false,
  mwUseAlternativeItemTypes: false,
  useMwInjuryStatus: false,
  genericOccupation: "Investigator",
  pcStats: pathOfCthulhuPreset.pcStats,
  npcStats: pathOfCthulhuPreset.npcStats,
  equipmentCategories: { general: { name: "General", fields: {} } },
};

export const nothingToFearPreset: PresetV1 = {
  schemaVersion: "v1",
  displayName: "Fear Itself (built-in)",
  defaultThemeName: "fearTheme",
  investigativeAbilityCategories: [
    "Academic",
    "Interpersonal",
    "Technical",
    "Psychic Powers",
  ],
  generalAbilityCategories: ["General"],
  combatAbilities: ["Scuffling", "Shooting", "Athletics"],
  occupationLabel: "Concept",
  personalDetails: [],
  longNotes: ["Risk Factors", "Sources of Stability", "Notes"],
  newPCPacks: [`${systemId}.${packNames.nothingToFearAbilities}`],
  newNPCPacks: [`${systemId}.${npcPackName}`],
  useBoost: false,
  useMwStyleAbilities: false,
  mwUseAlternativeItemTypes: false,
  useMwInjuryStatus: false,
  genericOccupation: "Investigator",
  pcStats: pathOfCthulhuPreset.pcStats,
  npcStats: pathOfCthulhuPreset.npcStats,
  equipmentCategories: { general: { name: "General", fields: {} } },
};

export const pallidStarsPreset: PresetV1 = {
  schemaVersion: "v1",
  displayName: "Ashen Stars (built-in)",
  defaultThemeName: "pallidTheme",
  investigativeAbilityCategories: [
    "Academic",
    "Interpersonal",
    "Technical",
    "Special",
  ],
  generalAbilityCategories: ["General"],
  combatAbilities: ["Scuffling", "Shooting"],
  occupationLabel: "Species",
  personalDetails: [
    { name: "Drive", type: "item" },
    { name: "Groundside Post", type: "item" },
    { name: "Warpside Post", type: "item" },
  ],
  longNotes: [
    "Personal Arc",
    "Cybernetic Enhancements",
    "Viroware Enhancements",
    "What You Did During The War",
  ],
  newPCPacks: [`${systemId}.${packNames.pallidStarsAbilities}`],
  newNPCPacks: [`${systemId}.${npcPackName}`],
  useBoost: true,
  useMwStyleAbilities: false,
  mwUseAlternativeItemTypes: false,
  useMwInjuryStatus: false,
  genericOccupation: "Investigator",
  pcStats: pathOfCthulhuPreset.pcStats,
  npcStats: pathOfCthulhuPreset.npcStats,
  equipmentCategories: {
    general: {
      name: "Gear",
      fields: {},
    },
    I5ujOaf_930T5m6XF59w0: {
      name: "Cybernetics",
      fields: {
        achu_d$31aq461l3pn1zs: {
          name: "Upkeep",
          type: "number",
          default: 0,
          min: 0,
        },
      },
    },
    omvQkNoORdSNhVgI42hYi: {
      name: "Virusware",
      fields: {
        YdjIcb6lTZpa07DynCO1C: {
          name: "Upkeep",
          type: "number",
          default: 0,
          min: 0,
        },
      },
    },
  },
};

export const castingTheRunesPreset: PresetV1 = {
  schemaVersion: "v1",
  displayName: "Casting the Runes (built-in)",
  defaultThemeName: "antiquarianTheme",
  investigativeAbilityCategories: ["Academic", "Interpersonal", "Technical"],
  generalAbilityCategories: ["General"],
  combatAbilities: ["Scuffling", "Weapons"],
  occupationLabel: "Occupation",
  personalDetails: [{ name: "Drive", type: "item" }],
  longNotes: [
    "Income",
    "Contacts",
    "Magic",
    "Sources of Stability",
    "Things Encountered",
  ],
  newPCPacks: [`${systemId}.${packNames.castingTheRunesAbilities}`],
  newNPCPacks: [`${systemId}.${npcPackName}`],
  useBoost: false,
  useMwStyleAbilities: false,
  mwUseAlternativeItemTypes: false,
  useMwInjuryStatus: false,
  genericOccupation: "Investigator",
  pcStats: pathOfCthulhuPreset.pcStats,
  npcStats: pathOfCthulhuPreset.npcStats,
  equipmentCategories: { general: { name: "General", fields: {} } },
};

export const moribundWorldPreset: PresetV1 = {
  schemaVersion: "v1",
  displayName: "Dying Earth (built-in)",
  defaultThemeName: "olderThanMemoryTheme",
  investigativeAbilityCategories: [],
  generalAbilityCategories: [
    "Persuade",
    "Rebuff",
    "Attack",
    "Defense",
    "Resist",
    "Magic",
    "Health",
    "General",
  ],
  combatAbilities: [
    "Strength",
    "Speed",
    "Finesse",
    "Cunning",
    "Ferocity",
    "Caution",
  ],
  occupationLabel: "Précis",
  personalDetails: [{ name: "Series level", type: "item" }],
  longNotes: [
    "General",
    "Facial Features",
    "Hair",
    "Notable Mannerisms",
    "Costume",
  ],
  newPCPacks: [`${systemId}.${packNames.moribundWorldAbilities}`],
  newNPCPacks: [`${systemId}.${packNames.moribundWorldAbilities}`],
  useBoost: false,
  useMwStyleAbilities: true,
  mwUseAlternativeItemTypes: true,
  mwHiddenShortNotes: ["Sympathy points"],
  useMwInjuryStatus: true,
  genericOccupation: "Character",
  pcStats: pathOfCthulhuPreset.pcStats,
  npcStats: pathOfCthulhuPreset.npcStats,
};

export const esoterroristsPreset: PresetV1 = {
  schemaVersion: "v1",
  displayName: "The Esoterrorists (built-in)",
  defaultThemeName: "unsafeRealityTheme",
  investigativeAbilityCategories: ["Academic", "Interpersonal", "Technical"],
  generalAbilityCategories: ["General"],
  combatAbilities: ["Scuffling", "Shooting", "Athletics"],
  occupationLabel: "Off-duty Occupation",
  personalDetails: [],
  longNotes: ["Notes"],
  newPCPacks: [`${systemId}.${packNames.esoterroristsAbilities}`],
  newNPCPacks: [`${systemId}.${npcPackName}`],
  useBoost: false,
  useMwStyleAbilities: false,
  mwUseAlternativeItemTypes: false,
  useMwInjuryStatus: false,
  genericOccupation: "Investigator",
  pcStats: pathOfCthulhuPreset.pcStats,
  npcStats: pathOfCthulhuPreset.npcStats,
  equipmentCategories: { general: { name: "General", fields: {} } },
};

export const mutantCityBluesPreset: PresetV1 = {
  schemaVersion: "v1",
  displayName: "Mutant City Blues (built-in)",
  defaultThemeName: "mutantCityBlueTheme",
  investigativeAbilityCategories: [
    "Academic",
    "Interpersonal",
    "Technical",
    "Investigative Powers",
  ],
  generalAbilityCategories: [
    "Focus",
    "Physical",
    "Presence",
    "Focus Powers",
    "Physical Powers",
    "Presence Powers",
  ],
  combatAbilities: ["Scuffling", "Shooting"],
  occupationLabel: "Concept",
  personalDetails: [],
  longNotes: ["Notes"],
  newPCPacks: [
    `${systemId}.${packNames.mutantCityBluesAbilities}`,
    `${systemId}.${packNames.mutantCityBluesPowers}`,
  ],
  newNPCPacks: [`${systemId}.${npcPackName}`],
  useBoost: false,
  useMwStyleAbilities: false,
  mwUseAlternativeItemTypes: false,
  useMwInjuryStatus: false,
  genericOccupation: "Detective",
  pcStats: {
    hitThreshold: {
      name: "Hit threshold",
      default: 3,
    },
  },
  npcStats: {
    hitThreshold: {
      name: "Hit threshold",
      default: 3,
    },
  },
  equipmentCategories: { general: { name: "General", fields: {} } },
  useCards: true,
  cardCategories: [
    {
      id: "stress",
      singleName: "Stress",
      pluralName: "Stresses",
      styleKey: "stress",
      threshold: 3,
      thresholdType: "none",
    },
    {
      id: "grf",
      singleName: "Genetic Risk Factor",
      pluralName: "Genetic Risk Factors",
      styleKey: "grf",
      threshold: 3,
      thresholdType: "none",
    },
  ],
};

export const basePresets = {
  pathOfCthulhuPreset,
  niceBlackAgentsPreset,
  nothingToFearPreset,
  pallidStarsPreset,
  castingTheRunesPreset,
  moribundWorldPreset,
  esoterroristsPreset,
  mutantCityBluesPreset,
};
