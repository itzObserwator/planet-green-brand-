# Planet Green · A Living Identity

A responsive Next.js App Router website and reusable identity toolkit. The identity page contains all 11 sections; `/explorer/` includes component previews, API documentation, copyable examples, a complete board, tokens, type, applications and an opt-in 3D study.

## Start locally

Requires Node.js 22.13+ (Node 24 recommended) and npm.

```sh
cd planet-green
npm ci
npm run dev
```

Open http://127.0.0.1:3000. From inside the project directory, omit `cd planet-green`.

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

The build creates a standalone static site in `out/`. To serve the actual production output:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory out
```

`npm start` also serves the static export on port 3000 using Python 3. `next start` does not serve a static export. No backend, API keys or external runtime image requests are required. The Sites hosting manifest points to `out/`.

## Brand asset status — action required

The only supplied attachment was the text brief. **No original logo, visual reference image, approved colour values, licensed Brutel files or approved 3D model was supplied.**

- The text signature is visibly labelled “Logo asset pending”; it is not a replacement logo.
- Greens are **provisional interface study colours**, not sampled or approved brand colours.
- Logo variants, SVG/PNG downloads and logo-derived patterns remain pending. No recolouring or replacement geometry has been invented.
- Inter is self-hosted via Fontsource. Brutel remains a documented fallback requirement.
- The floating-earth hero is generated concept artwork. Other photos are reference selections from Unsplash. All application mockups are concepts.
- The 3D study is a generic procedural experiment, loaded only when requested on larger screens. The production hero uses a 77 KB WebP and lightweight pointer motion.

See [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md) for the asset approval and integration procedure and [ASSET_PROVENANCE.md](ASSET_PROVENANCE.md) for photography and generation details.

## Structure

```text
src/app/                    App Router identity and explorer pages
src/components/brand/       Signature, type, hero, palette, explorer and navigation
src/components/glass/       Reusable configurable glass surfaces and native dialog
src/components/graphics/    Scalable SVG/CSS conceptual graphic elements
src/components/sections/    The remaining brand identity sections and applications
src/components/three/       Dynamically imported R3F/Drei material study
src/lib/                    Asset registry, token data, component docs and WCAG utilities
src/styles/                 Central tokens, effects, glass and explorer styling
public/imagery/             Local, precompressed WebP assets + preserved originals
public/graphics/            Five standalone downloadable SVG concept studies
tests/                      Contrast mathematics and browser integration checks
```

## Reuse a component

```tsx
import { GlassCard, GlassButton } from "@/components/glass/GlassUI";
import { Typography } from "@/components/brand/Typography";

<GlassCard hover>
  <Typography as="h2" variant="heading-h2">
    Space to grow.
  </Typography>
  <GlassButton onClick={openDetails}>Explore</GlassButton>
</GlassCard>;
```

Glass surfaces are designed for dark or photographic contexts. Ensure contrast on each new background. The full prop reference and implementation examples are accessible through the explorer; click a component footer to inspect it.

## Tokens and assets

- CSS variables: `src/styles/tokens.css`.
- Palette metadata, asset paths and typography scale: `src/lib/brand-tokens.ts`.
- Component documentation: `src/lib/component-docs.ts`.
- If changing colours, update both token files together and rerun the contrast tests. Browser exports use the TypeScript data.
- Regenerate baseline SVG concept exports with `node scripts/export-graphics.mjs` after changing their corresponding geometry. Exported nature-mask SVG embeds its photo and works offline. Controls change the preview; downloads provide the baseline concept artwork.
- Preserve original logo geometry; configure `brandAssets` only with approved variants. The image-based signature uses intrinsic dimensions; validate its display ratio against the source art during integration.

## Interaction and accessibility

Semantic sections and navigation, a skip link, visible focus states, native `<dialog>` focus containment/restoration, keyboard-operable application tabs, labelled controls and reduced-motion support are included. Deliberately failing contrast examples are labelled “AA fail”; they are demonstrations, not recommended combinations. Glass blur is reduced on mobile. No continuous WebGL rendering occurs until the 3D study is enabled; stopping it unmounts the canvas.

Next Image provides stable image sizing and loading priorities. Static hosting uses locally precompressed WebPs with `unoptimized: true`, because no image-optimisation server exists on a static export. Only the hero is eagerly loaded. Inter font assets are bundled locally; no runtime font CDN is used.

## Browser verification

Dependency note: all package inputs are pinned to the installed stable versions and recorded in `package-lock.json`. ESLint 9 is retained because Next's current React/import/accessibility plugins declare compatibility through version 9. At verification, `npm audit --omit=dev` reported zero vulnerabilities. The full audit reported 14 high development-tool entries cascading from the unpatched `picomatch` advisory [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf); the registry's latest version was 4.0.7. No forced incompatible dependency replacements were applied.

Start the production static server above, then run:

```sh
npx playwright test
```

The checked-in configuration uses locally installed Google Chrome on macOS. On other systems, remove `launchOptions.executablePath` from `playwright.config.ts` and run `npx playwright install chromium`. The suite checks 320, 390, 768, 1024 and 1440 px layouts, all application modes, asset loading, clipboard and downloads, modal focus, explorer controls and on-demand 3D loading. Axe checks WCAG 2.2 AA on the identity, asset dialog and explorer. Automated tests do not replace manual screen-reader and visual review.

## Approval boundary

This is an implemented and testable identity **study**, not a claim of an approved final identity. Supply the original logo/vector variants, reference image, approved palette, licensed Brutel fonts and approved photography before brand release or merchandise production. No analytics, form submissions, accounts or unrequested data collection are included.
