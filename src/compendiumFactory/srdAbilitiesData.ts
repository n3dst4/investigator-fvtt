import { GeneralAbilitiesData, InvestigativeAbilitiesData } from "./types";

export const investigativeAbilities: InvestigativeAbilitiesData = {
  Academic: [
    { name: "Anthropology" },
    { name: "Archaeology" },
    { name: "Architecture" },
    { name: "Art History" },
    { name: "Astronomy" },
    { name: "Botany" },
    { name: "Belle-Lettres" },
    { name: "Comparative Religion" },
    { name: "Culture" },
    { name: "Fashion" },
    { name: "Forensic Accounting" },
    { name: "Forensic Psychology" },
    { name: "Geology" },
    { name: "History" },
    { name: "Languages", hasSpecialities: true },
    { name: "Law" },
    { name: "Linguistics" },
    { name: "Military History" },
    { name: "Military Tactics" },
    { name: "Natural History" },
    { name: "Occult Studies" },
    { name: "Pathology" },
    { name: "Poetry" },
    { name: "Political Science" },
    { name: "Research" },
    { name: "Textual Analysis" },
    { name: "Timecraft" },
    { name: "Trivia" },
  ],
  Interpersonal: [
    { name: "Authority" },
    { name: "Bonhomie" },
    { name: "Bullshit Detector" },
    { name: "Bureaucracy" },
    { name: "Charm" },
    { name: "Cop Talk" },
    { name: "Flattery" },
    { name: "Flirting" },
    { name: "High Society" },
    { name: "Impersonate" },
    { name: "Inspiration" },
    { name: "Interrogation" },
    { name: "Intimidation" },
    { name: "Leadership" },
    { name: "Negotiation" },
    { name: "Oral History" },
    { name: "People Person" },
    { name: "Reassurance" },
    { name: "Respect" },
    { name: "Salt of the Earth" },
    { name: "Society" },
    { name: "Streetwise" },
    { name: "Taunt" },
    { name: "Tradecraft" },
  ],
  Technical: [
    { name: "Ballistics" },
    { name: "Camping" },
    { name: "Chemistry" },
    { name: "Craft", hasSpecialities: true },
    { name: "Counterinsurgency" },
    { name: "Cryptography" },
    { name: "Data Retrieval" },
    { name: "Document Analysis" },
    { name: "Electronic Surveillance" },
    { name: "Evidence Collection" },
    { name: "Explosive Devices" },
    { name: "Farming" },
    { name: "Fingerprinting" },
    { name: "Forensic Anthropology" },
    { name: "Forensic Entomology" },
    { name: "Forgery" },
    { name: "Hacking" },
    { name: "Hunting" },
    { name: "Intuition" },
    { name: "Locksmith" },
    { name: "Medical Expertise" },
    { name: "Notice" },
    { name: "Outdoor Survival" },
    { name: "Painting" },
    { name: "Paradox Prevention" },
    { name: "Photography" },
    { name: "Science!" },
    { name: "Sculpture" },
    { name: "Spying" },
    { name: "Terrain" },
    { name: "Traffic Analysis" },
  ],
  Exotic: [{ name: "Analytic Taste" }, { name: "Aura Reading" }],
};

export const generalAbilities: GeneralAbilitiesData = {
  Physical: [
    { name: "Artillery" },
    { name: "Athletics", refreshesDaily: true },
    { name: "Fighting" },
    { name: "Fleeing" },
    { name: "Health", min: -12, rating: 1, pool: 1, showTracker: true },
    { name: "Infiltration" },
    { name: "Piloting" },
    { name: "Riding" },
    { name: "Scuffling", refreshesDaily: true },
    { name: "Shooting", refreshesDaily: true, goesFirstInCombat: true },
  ],
  Focus: [
    { name: "Battlefield" },
    { name: "Burglary" },
    { name: "Conceal" },
    { name: "Disguise" },
    { name: "Driving", refreshesDaily: true },
    { name: "Explosives" },
    { name: "Filch" },
    { name: "Insurgency" },
    { name: "Mechanics" },
    { name: "Medic" },
    { name: "First Aid" },
    { name: "Network" },
    { name: "Surveillance" },
    { name: "Traps and Bombs" },
    { name: "Unobtrusiveness" },
  ],
  Presence: [
    { name: "Business Affairs" },
    { name: "Stability", min: -12, rating: 1, pool: 1, showTracker: true },
    { name: "Composure", min: -12, rating: 1, pool: 1, showTracker: true },
    { name: "Gambling" },
    { name: "Hypnosis" },
    { name: "Morale" },
    { name: "Politics" },
    { name: "Preparedness" },
    { name: "Public Relations" },
    { name: "Scrounging" },
    { name: "Sense Trouble" },
    { name: "Shrink" },
  ],
  Exotic: [
    { name: "Chronal Stability" },
    { name: "Mutant Power: Blood Spray" },
    { name: "Pathway Amplification" },
    { name: "Reality Anchor" },
    { name: "Viroware Enhancement: Dominator" },
  ],
};
