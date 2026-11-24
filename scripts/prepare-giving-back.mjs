// Offline asset preparation only. Generation is performed with the image_gen tool,
// using output/giving-back/companion-workflow.json and approved master A as reference.
// No image API keys, network requests or runtime generation are involved here.
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { mkdir, readFile, copyFile, writeFile } from "node:fs/promises";
const root = new URL("../", import.meta.url);
const source = JSON.parse(
  await readFile(new URL("output/giving-back/sources.json", root), "utf8"),
);
const workflow = JSON.parse(
  await readFile(
    new URL("output/giving-back/companion-workflow.json", root),
    "utf8",
  ),
);
if (!source.masterApproved)
  throw new Error("Master approval must be recorded before asset preparation.");
const directory = new URL("public/graphics/giving-back/", root);
await mkdir(directory, { recursive: true });
const manifest = {};
for (const [id, input] of Object.entries(source.sources)) {
  const metadata = await sharp(input).metadata();
  if (!metadata.hasAlpha)
    throw new Error(`${id}: a transparent master is required`);
  await copyFile(input, new URL(`${id}.png`, directory));
  for (const width of [320, 640, 960, 1254]) {
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 92, alphaQuality: 100, effort: 4 })
      .toFile(fileURLToPath(new URL(`${id}-${width}.webp`, directory)));
  }
  const blur = await sharp(input).resize(20).webp({ quality: 60 }).toBuffer();
  manifest[id] = {
    width: metadata.width,
    height: metadata.height,
    blur: `data:image/webp;base64,${blur.toString("base64")}`,
  };
  console.log(`Prepared ${id}: lossless PNG, four responsive alpha WebPs.`);
}
await writeFile(
  new URL("src/lib/giving-back-images.json", root),
  JSON.stringify(manifest, null, 2) + "\n",
);
await writeFile(
  new URL("provenance.json", directory),
  JSON.stringify(
    {
      title: "Planet Green — The Act of Giving Back",
      generator: source.generator,
      master: "A — explicitly approved by user",
      companions:
        "Generated with the approved master as the image reference; reviewed for visual consistency",
      reference: "Existing Planet Green botanical engraving",
      palette: ["#156B37", "#50AD47", "#B5D5A1", "#E8F0E1"],
      files: Object.keys(source.sources),
      editing:
        "Alpha-preserving resizing and WebP encoding only; no programmed primary illustrations",
      prompts: workflow.deliverables.map(({ id, prompt }) => ({ id, prompt })),
    },
    null,
    2,
  ) + "\n",
);
