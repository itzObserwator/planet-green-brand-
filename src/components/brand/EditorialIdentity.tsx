import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { palette } from "@/lib/brand-tokens";
import { BrandApplications } from "@/components/sections/BrandApplications";
import { brandIcons } from "@/lib/brand-icons";
import {
  OrganicShape,
  HalftonePattern,
  ContourLines,
} from "@/components/graphics/Patterns";
function ToolLink({
  anchor,
  children,
}: {
  anchor: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="case-link" href={`/explorer/?tab=guidelines#${anchor}`}>
      {children}
      <ArrowUpRight size={15} />
    </Link>
  );
}
function Index({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="case-index">
      <span>{number}</span>
      {children}
    </div>
  );
}
function Picture({
  src,
  alt,
  preload = false,
}: {
  src: string;
  alt: string;
  preload?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 700px) 100vw, 65vw"
      preload={preload}
    />
  );
}
export function EditorialIdentity() {
  return (
    <div className="editorial-case">
      <main id="main" className="case-shell">
        <div className="case-running">
          <span>Planet Green / Visual identity</span>
          <span>Brand study, 2026</span>
        </div>
        <section id="brand-world" className="case-opening">
          <div className="case-opening-copy">
            <Index number="01">A natural way forward</Index>
            <h1>
              Move to
              <br />
              Nature.
            </h1>
            <p>
              Sustainable communities.
              <br />
              Natural farming.
              <br />A healthier way of living.
            </p>
            <a className="case-link" href="#purpose">
              Inside the identity
              <ArrowDown size={15} />
            </a>
          </div>
          <figure className="case-opening-art">
            <Picture
              src="/imagery/floating-earth.webp"
              alt="A sapling on a floating island of moss and soil, with glass spheres and orbital rings"
              preload
            />
            <figcaption>Brand world / Floating-earth concept</figcaption>
          </figure>
        </section>
        <div className="case-directory">
          <span>In this study</span>
          <a href="#logo">The foundations</a>
          <a href="#language">The visual language</a>
          <a href="#imagery">The photography</a>
          <a href="#applications">
            The applications
            <ArrowUpRight size={13} />
          </a>
        </div>
        <section id="purpose" className="case-purpose">
          <Index number="02">Our purpose</Index>
          <div>
            <h2>
              People, land
              <br />
              and nature
              <br />
              in harmony.
            </h2>
            <p>
              Planet Green connects the places we live with the land that
              sustains us. The identity brings sustainable communities and
              natural farming into the same frame.
            </p>
          </div>
          <figure>
            <Picture
              src="/imagery/landscape.webp"
              alt="Sunlight passing through a green forest"
            />
            <figcaption>The land gives the identity its context.</figcaption>
          </figure>
        </section>
        <div className="case-section-intro">
          <h2>The foundations.</h2>
          <p>
            One signature. A considered palette.
            <br />A clear voice across every touchpoint.
          </p>
        </div>
        <div className="case-foundations">
          <section id="logo" className="case-signature">
            <Index number="03">The original signature</Index>
            <div className="case-logo-pair">
              <div>
                <BrandLogo />
                <span>01 / On light</span>
              </div>
              <div>
                <BrandLogo tone="dark" />
                <span>02 / On dark</span>
              </div>
            </div>
            <div className="case-signature-foot">
              <p>Preserve the original proportions, colours and lettering.</p>
              <div className="download-group">
                <a href="/brand/planet-green-original.svg" download>
                  SVG <ArrowDown size={13} />
                </a>
                <a href="/brand/planet-green-original.png" download>
                  PNG <ArrowDown size={13} />
                </a>
              </div>
            </div>
            <ToolLink anchor="logo">Logo guidelines</ToolLink>
          </section>
          <section id="colour" className="case-palette">
            <Index number="04">Colours from the logo</Index>
            <div className="case-colour-stack">
              {palette.map((c) => (
                <div key={c.hex}>
                  <span style={{ background: c.hex }} />
                  <span>{c.name}</span>
                  <code>{c.hex}</code>
                </div>
              ))}
            </div>
            <ToolLink anchor="colour">Colour values & contrast</ToolLink>
          </section>
        </div>
        <section id="typography" className="case-type">
          <div>
            <Index number="05">Typography</Index>
            <h2>Clear by nature.</h2>
            <p>
              Outfit for headlines, stories and everyday information. Scale and
              spacing create the hierarchy.
            </p>
            <ToolLink anchor="typography">Explore the type scale</ToolLink>
          </div>
          <div className="case-type-specimen">
            <span>Aa</span>
            <p>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789
            </p>
            <span>Outfit / Regular & Semibold</span>
          </div>
        </section>
        <section id="language" className="case-language">
          <Index number="06">The visual language</Index>
          <h2>
            Let the natural
            <br />
            world lead.
          </h2>
          <div>
            <p>
              Keep the imagery close to the land. Use colour with restraint.
              Leave enough space for the original signature to be recognised.
            </p>
            <dl>
              <div>
                <dt>Nature forward</dt>
                <dd>Soil, leaves, light and living landscapes.</dd>
              </div>
              <div>
                <dt>Human in scale</dt>
                <dd>Readable information and familiar gestures.</dd>
              </div>
              <div>
                <dt>Depth with purpose</dt>
                <dd>Layering that supports a clear foreground.</dd>
              </div>
            </dl>
          </div>
        </section>
        <section id="surfaces" className="case-surface">
          <figure>
            <Picture
              src="/imagery/forest.webp"
              alt="Misty forest used behind a translucent interface specimen"
            />
            <div className="case-glass-specimen">
              <span>Interface study</span>
              <h3>
                A little room
                <br />
                to breathe.
              </h3>
              <span>Light / Layer / Clarity</span>
            </div>
          </figure>
          <div>
            <Index number="07">Surfaces & interface</Index>
            <h2>
              A window into
              <br />
              the landscape.
            </h2>
            <p>
              A translucent surface belongs where it makes content readable over
              imagery. On the page, simple lines and open space do most of the
              work.
            </p>
            <ToolLink anchor="surfaces">Inspect the surface system</ToolLink>
          </div>
        </section>
        <section id="graphics" className="case-graphics">
          <div>
            <Index number="08">Graphic elements</Index>
            <h2>A shared rhythm.</h2>
            <ToolLink anchor="graphics">Adjust & export graphics</ToolLink>
          </div>
          <div className="case-graphic-specimens">
            <figure>
              <OrganicShape />
              <figcaption>Organic form</figcaption>
            </figure>
            <figure>
              <HalftonePattern opacity={0.5} size={7} />
              <figcaption>Halftone</figcaption>
            </figure>
            <figure>
              <ContourLines />
              <figcaption>Contour lines</figcaption>
            </figure>
          </div>
        </section>
        <section id="icons" className="case-icons">
          <Index number="09">The everyday vocabulary</Index>
          <div>
            {brandIcons.map(({ icon: Icon, name, use }) => (
              <div key={name}>
                <Icon size={30} strokeWidth={1.4} />
                <span>{use}</span>
              </div>
            ))}
          </div>
          <ToolLink anchor="icons">Copy & customise icons</ToolLink>
        </section>
        <section id="imagery" className="case-imagery">
          <div className="case-section-intro">
            <h2>Close to the land.</h2>
            <div>
              <Index number="10">Photography</Index>
              <p>Texture, place and the conditions for growth.</p>
            </div>
          </div>
          <div className="case-photo-grid">
            {[
              {
                file: "landscape",
                name: "Light & landscape",
                alt: "Light falling between trees in a green forest",
              },
              {
                file: "macro",
                name: "A closer observation",
                alt: "Close view of fresh green leaves",
              },
              {
                file: "farming",
                name: "Where growth begins",
                alt: "Soil and tools in a natural farming study",
              },
              {
                file: "architecture",
                name: "Places to belong",
                alt: "Architecture surrounded by greenery",
              },
            ].map((p, i) => (
              <figure key={p.file}>
                <div>
                  <Picture src={`/imagery/${p.file}.webp`} alt={p.alt} />
                </div>
                <figcaption>
                  <span>
                    0{i + 1} / {p.name}
                  </span>
                  <span>Photography study</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ToolLink anchor="imagery">
            View all photography & treatments
          </ToolLink>
        </section>
        <BrandApplications />
        <p className="case-production-note">
          Original Planet Green logo. Generated hero artwork, photography
          selections and application studies remain concepts. Single-colour
          artwork, standalone symbol use and production applications require
          review.
        </p>
      </main>
      <footer className="case-footer">
        <BrandLogo />
        <p>
          Planet Green
          <br />
          Identity study / 2026
        </p>
        <Link href="/explorer/">
          The component library <ArrowUpRight size={15} />
        </Link>
        <a href="#top">
          Back to top <ArrowUpRight size={15} />
        </a>
      </footer>
    </div>
  );
}
