// These generic concept studies are NOT approved logo-derived assets.
import { writeFile, readFile } from "node:fs/promises";
const start =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"><title>Planet Green — generic concept graphic, pending approval</title><desc>Colours sampled from the logo; generic geometry, not original logo artwork.</desc>';
const end = "</svg>";
const path =
  "M476 52C562 88 580 195 506 252C434 308 396 381 276 359C150 333 50 305 52 220C56 131 98 55 218 64C332 72 386 15 476 52Z";
const forest = "#156B37";
const leaf = "#B5D5A1";
const image = (await readFile("public/imagery/macro.webp")).toString(
  "base64",
);
const assets = {
  "organic-flow": `<path d="${path}" fill="${forest}"/>`,
  halftone: `<defs><pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="${forest}"/></pattern></defs><rect width="600" height="400" fill="url(#dots)"/>`,
  "contour-lines": Array.from(
    { length: 13 },
    (_, i) =>
      `<path d="M${-100 + i * 5} ${380 - i * 26}C150 ${480 - i * 37} 200 ${40 + i * 13} 360 ${130 + i * 20}S650 ${-20 + i * 28} 740 ${60 + i * 26}" fill="none" stroke="${forest}"/>`,
  ).join(""),
  "nature-mask": `<defs><clipPath id="nature"><path d="${path}"/></clipPath></defs><image href="data:image/webp;base64,${image}" width="600" height="400" preserveAspectRatio="xMidYMid slice" clip-path="url(#nature)"/>`,
  "gradient-overlay": `<defs><linearGradient id="env" x2="1" y2="1"><stop stop-color="${forest}"/><stop offset="1" stop-color="${leaf}"/></linearGradient></defs><rect width="600" height="400" fill="url(#env)"/>`,
};
for (const [name, value] of Object.entries(assets))
  await writeFile(`public/graphics/${name}.svg`, start + value + end);
console.log(`Exported ${Object.keys(assets).length} standalone concept SVGs.`);
