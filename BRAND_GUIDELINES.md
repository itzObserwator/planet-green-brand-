# Planet Green · Identity guidelines

**Version 0.1 — provisional implementation study, 18 November 2026.**

## Purpose and voice

“Move to Nature” expresses the supplied brief: sustainable communities, natural farming and a healthier way of living. The voice is clear, warm, confident and grounded. Talk about people, land and nature in harmony. Do not add unverified sustainability claims, metrics or certifications.

## Signature

Use only the exact original Planet Green artwork. Do not simplify, redraw, recolour, trace, distort, rotate, decorate or substitute its central globe. No original logo was supplied for this implementation. The text signature labelled “Logo asset pending” reserves its place and is never a logo deliverable.

Primary, single-colour and symbol variants each need approved source artwork. Do not derive a symbol by guessing a crop. Use SVG for scalable digital use and approved transparent PNG where needed. Never offer an unapproved variant as a download.

Clear-space and minimum-size rules remain pending inspection of the actual logo. The interactive guide is an illustrative study only. A 180 px placeholder slot is not an approved minimum-size rule.

### Integrating supplied artwork

1. Place approved originals in `public/brand/` without altering their geometry.
2. Set the corresponding `brandAssets` paths in `src/lib/brand-tokens.ts`. Use `primary` for original SVG and `primaryPng` for approved PNG. Configure monochrome/symbol only if separately supplied and approved.
3. Adjust intrinsic dimensions in `BrandLogo` to match the artwork's actual aspect ratio. Preserve its natural colours in all previews.
4. Validate contrast on the dark and light preview panels. Mark any unsupported treatment pending approval.
5. Establish clear-space and minimum display sizes from the original art and brand owner's instructions. Update the guide and this document together.
6. Create logo-derived repeat patterns only from approved vector geometry and only with approval.

## Colour

The following are **provisional study values**, introduced because the original logo was absent. They are not final Planet Green brand colours and must not be used for production brand work without approval.

| Study token | HEX       | Intended study use               |
| ----------- | --------- | -------------------------------- |
| Forest      | `#173D2A` | Feature panels and actions       |
| Fern        | `#42734B` | Supporting graphics and surfaces |
| Leaf        | `#B7D598` | Highlights on dark surfaces      |
| Mist        | `#E2E9DC` | Quiet surfaces                   |
| Ink         | `#202720` | Interface neutral, text          |
| Paper       | `#F5F5F0` | Interface neutral, page canvas   |

Sample source vector fills from the supplied logo first; for raster-only artwork, sample opaque interior pixels without antialiasing and confirm values with the brand owner. Replace values in both `tokens.css` and `brand-tokens.ts`, regenerate graphic exports and recheck contrast. Do not manufacture extra approved greens if the source artwork contains fewer colours. Keep neutral whitespace dominant, and reserve deep green for intentional moments.

Body text requires at least 4.5:1 contrast; large text at least 3:1. The palette explorer calculates WCAG sRGB contrast and labels pass/fail combinations. The deliberately failing examples teach contrast; they do not authorise those combinations in real UI.

## Typography

Brutel is the intended display family, subject to licensed font files. Inter is the temporary display fallback and the interface/body family. Inter's package is self-hosted and includes its OFL license. Do not download or distribute unlicensed Brutel files.

After receiving Brutel, add licensed WOFF2 files and local `@font-face` declarations, then update `--pg-font-display`. Apply the display variable to headings and type components, validate glyph coverage, line wrapping and layout shift, and retain Inter for interface text. Current showcase headings inherit the Inter fallback.

| Style        | Fluid size      | Line height | Tracking |
| ------------ | --------------- | ----------- | -------- |
| Display XL   | 4rem–8.5rem     | 0.96        | −0.065em |
| Display LG   | 3rem–6rem       | 1.02        | −0.06em  |
| H1           | 2.5rem–4.5rem   | 1.06        | −0.055em |
| H2           | 2rem–3.25rem    | 1.12        | −0.05em  |
| H3           | 1.4rem–2rem     | 1.2         | −0.035em |
| Body large   | 1.05rem–1.25rem | 1.6         | −0.02em  |
| Body regular | 1rem            | 1.65        | −0.015em |
| Caption      | 0.75rem         | 1.5         | 0        |
| Overline     | 0.6875rem       | 1.5         | 0.14em   |
| Button       | 0.8125rem       | 1.2         | −0.01em  |

Keep tight tracking for large editorial headings only. Use semantic heading levels independently of the visual style. Do not use the smaller display labels for essential long-form content.

## Visual language

Nature-forward, modern and premium, organic and fluid, human-centred, layered and immersive. Use editorial spacing, real photography, quiet borders and depth with purpose. Avoid folk-art, hand-drawn illustrations, unrelated accent colours, neon effects and constant motion.

Generic flow shapes, contour lines, gradients and halftone in this repository are original concept studies, not geometry derived from the Planet Green logo. Do not present them as official brand assets. The logo-derived pattern slot remains pending.

## Surfaces and motion

Use glass selectively on dark imagery with enough contrast. Default cards use a 24 px radius, small surfaces 12 px, pill controls 50 px. GlassCard accepts tint and hover options; GlassImageFrame accepts overlay and blur. Mobile blur is reduced. Maintain readable fallback surfaces when backdrop-filter is unavailable.

Interface transitions use 240 ms and `cubic-bezier(.2,.8,.2,1)`. Hero pointer parallax is subtle and desktop-only in practice (mouse pointers). The opt-in 3D study rotates slowly. Respect reduced motion; avoid scroll hijacking. Do not animate essential information out of reach.

## Icons

Use Lucide React with round caps/joins. Standard sizes: 16, 24, 32 px. Default stroke: 1.5 px; 2 px is available for denser contexts. Inherit shared token colours. Prefer outlined icons; do not fill arbitrary icons. Pair unfamiliar symbols with text and give standalone controls accessible names. These are interface icons, never a replacement for the original globe logo.

## Imagery

Prioritise natural light, real materials, restrained colour, believable farming and human interaction. Categories: macro, landscape, soil/growth, people/nature, architecture/community and natural textures. Use rounded masks, subtle environmental overlays, optional halftone or soft focus. Avoid oversaturation. People-led imagery still needs commissioning; the garden reference is labelled as a placeholder.

The hero render was generated for this study. Photography selections are Unsplash references, not approved Planet Green campaign assets. Verify production rights and any model/property releases for the final use. See the provenance file for exact source URLs and the generation prompt.

## Applications

Website desktop/mobile, square/portrait social, brochure, tote, bottle, tee and environmental signage are interactive concept previews. They use the same components and provisional tokens. None is approved print or manufacturing artwork. Replace the labelled text signature with the original logo before production. Print needs proper bleed, colour management and physical proofing; merchandise needs supplier specifications. Keep directional information simple and high contrast.

## Release checklist

Receive and integrate the original logo and reference, approve sampled colours and permitted variants, validate logo clear space/minimum size, license Brutel, approve imagery and generated artwork, review mobile layouts and assistive technology, verify links and asset downloads, rerun lint/type/build/browser checks. Brand release remains pending these real approvals; the software can be reviewed independently.
