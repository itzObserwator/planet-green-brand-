/** Illustrated nature studies; original PNG masters preserve their transparent backgrounds. */
export type HandDrawnElementId = "hills" | "soil" | "life" | "seeds";
const studies = [
  {
    id: "hills",
    name: "Hills",
    meaning: "A landscape to belong to.",
    alt: "Detailed green hand-drawn landscape with rolling hills, folded terrain, rock seams, fine grasses and a winding valley",
  },
  {
    id: "soil",
    name: "Soil",
    meaning: "Care beneath every beginning.",
    alt: "Detailed green hand-drawn soil cutaway with branching roots, fine root hairs, porous earth layers, pebbles and grasses",
  },
  {
    id: "life",
    name: "Life",
    meaning: "Room for something to grow.",
    alt: "Detailed green hand-drawn young plant with irregular leaves, finely branching veins, an unfolding leaf and delicate roots",
  },
  {
    id: "seeds",
    name: "Seeds",
    meaning: "The possibility of a beginning.",
    alt: "Detailed green hand-drawn seed studies with layered grain husks, an oval seed, a rounded seed and a germinating grain",
  },
] as const;
export const handDrawnElements = studies.map((study) => ({
  ...study,
  image: `/graphics/hand-drawn/illustrated/${study.id}.webp`,
  download: `/graphics/hand-drawn/illustrated/${study.id}.png`,
  width: 1254,
  height: 1254,
}));
