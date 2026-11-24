export type GivingBackKind =
  "master" | "receive" | "realise" | "restore" | "seedling";
export const givingBackStages = [
  {
    id: "receive",
    name: "Receive",
    title: "Nature gives us life.",
    detail: "Food, shelter and the ground that sustains us.",
  },
  {
    id: "realise",
    name: "Realise",
    title: "We recognise the connection.",
    detail: "Our everyday lives belong to a larger living system.",
  },
  {
    id: "restore",
    name: "Restore",
    title: "We return care.",
    detail:
      "Through the food we grow, the soil we replenish and the places we nurture.",
  },
] as const;
export const livingCycleParts = [
  {
    id: "canopy",
    name: "Botanical canopy",
    meaning: "Nature provides.",
    reasoning:
      "A generous leaf shelters the composition; fine veins make its living structure visible.",
    region: [3, 4, 70, 38],
  },
  {
    id: "awareness",
    name: "Light & awareness",
    meaning: "We recognise our responsibility.",
    reasoning:
      "Diffused light opens the canopy into the flow. Understanding is suggested through atmosphere, not a literal sun.",
    region: [64, 5, 32, 32],
  },
  {
    id: "flow",
    name: "Flow & continuity",
    meaning: "Everything is connected.",
    reasoning:
      "Translucent organic folds carry the eye toward the hand, without arrows or a recycling symbol.",
    region: [65, 30, 34, 49],
  },
  {
    id: "gesture",
    name: "The giving gesture",
    meaning: "Humanity gives back.",
    reasoning:
      "An open, supporting palm makes care a human action. The green engraving connects it to the botanical world.",
    region: [7, 70, 81, 26],
  },
  {
    id: "new-life",
    name: "New life",
    meaning: "Care enables life to continue.",
    reasoning:
      "A small seedling contrasts with the large canopy. Renewal is the focus, rather than decoration.",
    region: [44, 59, 29, 22],
  },
] as const;
export const givingBackAlt: Record<GivingBackKind, string> = {
  master:
    "A green engraved canopy flows through soft light toward a cupped human hand supporting a tiny seedling",
  receive:
    "A gracefully curved botanical canopy with finely engraved green leaf veins",
  realise:
    "Pale green light passes through a translucent flowing botanical form toward new growth",
  restore:
    "An open, green engraved human hand gently supports soil and a two-leaf seedling",
  seedling:
    "A delicate two-leaf green seedling grows from a small patch of living soil",
};
export const artworkSpecimens = [
  {
    name: "MasterBrandIllustration",
    kind: "master",
    use: "Campaign compositions and hero accents.",
  },
  {
    name: "ReceiveElement",
    kind: "receive",
    use: "Nature’s generosity, food and cultivation.",
  },
  {
    name: "RealiseElement",
    kind: "realise",
    use: "Connection, awareness and transitions.",
  },
  {
    name: "RestoreElement",
    kind: "restore",
    use: "Participation and returning care.",
  },
  {
    name: "BotanicalAccent",
    kind: "receive",
    use: "A quiet canopy accent; reuses Receive.",
  },
  {
    name: "SupportingHandIllustration",
    kind: "restore",
    use: "An editorial gesture; reuses Restore.",
  },
  {
    name: "SeedlingDetail",
    kind: "seedling",
    use: "A small detail for beginnings and renewal.",
  },
] as const;
