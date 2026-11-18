# Verification record

Verified on 18 November 2026 against the production static export, using Node 24.18.0 and local Google Chrome.

| Check | Result |
| --- | --- |
| ESLint | Pass, no warnings |
| TypeScript | Pass |
| Unit tests | 2 passed: WCAG sRGB contrast and HEX validation |
| Next.js production build | Pass; `/` and `/explorer/` statically exported |
| Playwright | 9 passed |
| Responsive layouts | No horizontal overflow at 320, 390, 768, 1024, 1440 px |
| Asset loading | No failed HTTP assets in tested routes and application views |
| Logo states | Light/dark and clear-space studies respond; absent artwork downloads disabled |
| Asset export | Provisional JSON download verified |
| Clipboard | Component code copied and read back successfully |
| Applications | Digital, social, print, merchandise and wayfinding controls checked |
| Dialog | Opens, closes with Escape and restores focus to its opener |
| Optional WebGL | No canvas before opt-in; loads on request; unmounts when stopped |
| Axe WCAG 2.2 AA | No violations on identity, asset dialog and default explorer |
| Production dependency audit | 0 vulnerabilities |

Deliberately failing contrast demonstrations in `.contrast-results` are excluded from the page-level colour audit; their ratios and pass/fail states are explicitly labelled. All other page content is included. Automated results do not imply a complete accessibility certification; manual screen-reader testing and final brand-owner review remain outstanding.

## Performance and visual review

Desktop (1440 × 1040) and mobile (390 × 1000) preview screenshots were captured and reviewed; the explorer was also captured at full height. Local screenshots are in `artifacts/`, excluded from source publication.

The hero WebP is 77,220 bytes. A fresh local desktop page load transferred approximately 1.50 MB across all requested resources, including nearby lazy images and Next navigation prefetch. This is a local unthrottled measurement, not a Lighthouse score or a field-performance guarantee. WebGL is isolated in a dynamic import and requires explicit opt-in.

## Known limitations

- Original logo, reference image, approved palette, Brutel font files and approved campaign imagery were absent. Brand-final fidelity and logo-derived graphics cannot be verified until supplied.
- The full development audit reports 14 high entries cascading from the upstream `picomatch` ReDoS advisory. Latest available `picomatch` was 4.0.7; no compatible patched version was available at verification. This does not affect the zero-vulnerability production dependency audit. ESLint 9 is retained to meet installed plugin peer requirements.
- The default explorer preview, identity and asset dialog were checked by Axe. Every possible composition/background combination still requires review when reused.
- Application forms are CSS mockups; production print/manufacturing files require approved assets and supplier specifications.
