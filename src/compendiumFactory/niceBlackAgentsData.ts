import { GeneralAbilitiesData, InvestigativeAbilitiesData } from "./types";

export const investigativeAbilities: InvestigativeAbilitiesData = {
  Academic: [
    { name: "Accounting" },
    { name: "Archaeology" },
    { name: "Architecture" },
    { name: "Art History" },
    { name: "History" },
    { name: "Languages", hasSpecialities: true },
    { name: "Law" },
    { name: "Military Science" },
    { name: "Occult Studies" },
    { name: "Research" },
  ],
  Interpersonal: [
    { name: "Bullshit Detector" },
    { name: "Bureaucracy" },
    { name: "Cop Talk" },
    { name: "Flattery" },
    { name: "Flirting" },
    { name: "High Society" },
    { name: "Interrogation" },
    { name: "Intimidation" },
    { name: "Negotiation" },
    { name: "Reassurance" },
    { name: "Streetwise" },
    { name: "Tradecraft" },
  ],
  Technical: [
    { name: "Astronomy" },
    { name: "Chemistry" },
    { name: "Cryptography" },
    { name: "Electronic Surveillance" },
    { name: "Forgery", hasSpecialities: true },
    { name: "Notice" },
    { name: "Outdoor Survival" },
    { name: "Photography" },
    { name: "Traffic Analysis" },
  ],
};

export const generalAbilities: GeneralAbilitiesData = {
  General: [
    { name: "Athletics", refreshesDaily: true },
    { name: "Conceal" },
    { name: "Disguise" },
    { name: "Driving", hasSpecialities: true, refreshesDaily: true },
    { name: "Filch" },
    { name: "Gambling" },
    { name: "Hand-to-Hand", refreshesDaily: true, useForCombat: true },
    { name: "Health", max: 15, min: -12, rating: 4, pool: 4, showTracker: true },
    { name: "Infiltration" },
    { name: "Mechanics" },
    { name: "Medic" },
    { name: "Network", excludeFromGeneralRefresh: true },
    { name: "Piloting", hasSpecialities: true, refreshesDaily: true },
    { name: "Preparedness" },
    { name: "Sense Trouble" },
    { name: "Shooting", refreshesDaily: true, useForCombat: true, goesFirstInCombat: true },
    { name: "Shrink" },
    { name: "Stability", max: 15, min: -12, rating: 4, pool: 4, showTracker: true },
    { name: "Surveillance" },
  ],
};
