// Retained for the earlier vector studies; the current illustrated set uses PNG masters.
import fs from "node:fs/promises";
import { handDrawnElements } from "../src/lib/hand-drawn-vector-studies.ts";

const output = new URL("../public/graphics/hand-drawn/", import.meta.url);
await fs.mkdir(output, { recursive: true });
for (const item of handDrawnElements) {
  const lines = item.lines.map((line) => `<path d="${line}"/>`).join("");
  const detail = item.detail.map((line) => `<path d="${line}"/>`).join("");
  const fine = item.fine.map((line) => `<path d="${line}"/>`).join("");
  const echo = item.lines
    .slice(0, 4)
    .map((line) => `<path d="${line}"/>`)
    .join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" role="img" aria-labelledby="title desc"><title id="title">${item.name}</title><desc id="desc">${item.alt}</desc><defs><linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#156B37"/><stop offset=".6" stop-color="#156B37" stop-opacity=".9"/><stop offset="1" stop-color="#156B37" stop-opacity=".05"/></linearGradient></defs><g opacity=".28" fill="url(#fade)" stroke="url(#fade)" stroke-linecap="round" stroke-linejoin="round"><path d="${item.wash}" stroke="none" fill-opacity=".04"/><g fill="none" stroke-width="2.1">${lines}</g><g fill="none" stroke-width="1.15">${detail}</g><g fill="none" stroke-width=".8">${fine}</g><g fill="none" stroke-width="1.1" opacity=".16" transform="translate(2.1 -1.4)">${echo}</g></g></svg>`;
  await fs.writeFile(new URL(`${item.id}.svg`, output), svg);
}
console.log(`Exported ${handDrawnElements.length} hand-drawn SVG elements.`);
