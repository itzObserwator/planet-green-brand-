/** Reusable concept/reference elements. These do not alter the original logo. */
export const brandElements = [
  {
    id: "hills",
    name: "Hills",
    headline: "Space for nature.",
    description:
      "A flowing landscape that gives the story a sense of place and possibility.",
    src: "/imagery/rolling-landscape-v2.webp",
    download: "/imagery/rolling-landscape-v2.webp",
    format: "WebP",
    alt: "Soft green hills and misty valleys in the Planet Green landscape concept",
    kind: "Landscape concept",
    cutout: false,
    uses: ["Hero scenes", "Campaign backgrounds", "Section transitions"],
    guidance:
      "Use wide crops with open space for typography. Keep the land visible and place text over the quieter parts of the image.",
  },
  {
    id: "life",
    name: "Life",
    headline: "Let growth lead.",
    description:
      "Fresh plant forms bring a sense of growth, care and everyday connection.",
    src: "/imagery/macro.webp",
    download: "/imagery/macro.webp",
    format: "WebP",
    alt: "Fresh green leaves and plant growth",
    kind: "Plant photograph",
    cutout: false,
    uses: ["Editorial stories", "Social creatives", "Image framing"],
    guidance:
      "Use close plant details as a focal point or a photographic frame. Preserve the natural colours and give the leaves room around the edges.",
  },
  {
    id: "soil",
    name: "Soil",
    headline: "Return to the source.",
    description:
      "Tactile earth connects our visual language to cultivation and replenishment.",
    src: "/elements/soil-mound.webp",
    download: "/elements/soil-mound.png",
    format: "PNG",
    alt: "Photographic cutout of a mound of dark crumbly soil with fine roots",
    kind: "Transparent photo concept",
    cutout: true,
    uses: ["Mission sections", "Texture accents", "Print layouts"],
    guidance:
      "Anchor the element near a lower edge or pair it with a cultivation story. Use the transparent PNG to place it on white, green or photographic backgrounds.",
  },
  {
    id: "seeds",
    name: "Seeds",
    headline: "A small beginning.",
    description:
      "Seeds express potential, participation and the first step towards a growing future.",
    src: "/elements/seed-cluster.webp",
    download: "/elements/seed-cluster.png",
    format: "PNG",
    alt: "Photographic cutout of a small group of seeds with one beginning to germinate",
    kind: "Transparent photo concept",
    cutout: true,
    uses: ["Launch stories", "Campaign accents", "Small compositions"],
    guidance:
      "Use a small cluster as a focal point, or repeat it sparingly. Leave generous white space and keep the natural size relationships between the seeds.",
  },
] as const;
