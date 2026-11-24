import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  MoveRight,
  Sprout,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { BrandPortfolio } from "./BrandPortfolio";
import { brandContext } from "@/lib/brand-context";
import { palette } from "@/lib/brand-tokens";
import { brandIcons } from "@/lib/brand-icons";
import { BrandApplications } from "@/components/sections/BrandApplications";
import { OrganicShape, ContourLines } from "@/components/graphics/Patterns";
function Art({
  src,
  alt = "",
  preload = false,
}: {
  src: string;
  alt?: string;
  preload?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 40vw"
      preload={preload}
    />
  );
}
function Label({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bio-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}
function Tool({
  anchor,
  children,
}: {
  anchor: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="bio-tool" href={`/explorer/?tab=guidelines#${anchor}`}>
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}
export function BioIdentity() {
  return (
    <div className="bio-identity">
      <main id="main" className="bio-shell">
        <div className="bio-running">
          <span>NATURAL FARMING / LIVING COMMUNITIES</span>
          <span>PLANET GREEN — 2026</span>
        </div>
        <section id="brand-world" className="bio-cover">
          <div className="bio-cover-frame">
            <div className="bio-cover-window">
              <Art
                src="/imagery/floating-earth.webp"
                alt="A sapling on floating earth, surrounded by glass spheres and orbital rings"
                preload
              />
              <div className="bio-cover-shade" />
              <div className="bio-cover-copy">
                <BrandLogo tone="dark" />
                <h1>
                  Move to
                  <br />
                  Nature.
                </h1>
                <p>
                  {brandContext.heroLines[0]}
                  <br />
                  {brandContext.heroLines[1]}
                  <br />
                  {brandContext.heroLines[2]}
                </p>
                <a
                  href="#purpose"
                  className="bio-cover-next"
                  aria-label="Explore brand purpose"
                >
                  <ArrowDown size={22} />
                </a>
              </div>
              <span className="bio-cover-caption">01 / A living identity</span>
            </div>
            <div className="bio-metal-word" aria-hidden="true">
              planet green
            </div>
          </div>
        </section>
        <BrandPortfolio theme="contemporary" />
        <div className="bio-grid">
          <div className="bio-column">
            <section id="purpose" className="bio-card bio-purpose">
              <Art src="/imagery/forest.webp" alt="Misty green forest" />
              <Label number="02">Rooted in nature</Label>
              <div className="bio-purpose-capsule">
                <span>NATURAL FARMING / GREEN ECO-HABITATS</span>
                <Sprout size={28} strokeWidth={1.2} />
                <h2>
                  People,
                  <br />
                  land &<br />
                  nature.
                </h2>
                <span className="bio-tiny-dots" aria-hidden="true">
                  ●<br />●<br />●<br />●<br />●
                </span>
                <span>IN HARMONY.</span>
              </div>
              <Tool anchor="purpose">Our purpose</Tool>
            </section>
            <section id="surfaces" className="bio-card bio-surface">
              <div className="bio-campaign-heading">
                <span>07 / SURFACE SYSTEM</span>
                <p>
                  Clarity.
                  <br />
                  Through layers.
                </p>
              </div>
              <div className="bio-surface-art">
                <Art
                  src="/imagery/floating-earth.webp"
                  alt="Floating-earth artwork behind a translucent surface specimen"
                />
                <div className="bio-floating-glass">
                  <span>PLANET GREEN</span>
                  <h2>
                    A little room
                    <br />
                    to breathe.
                  </h2>
                  <MoveRight size={30} />
                </div>
                <div className="bio-pixel-grid" />
              </div>
              <Tool anchor="surfaces">Inspect glass surfaces</Tool>
            </section>
          </div>
          <div className="bio-column">
            <section id="language" className="bio-card bio-language">
              <Label number="06">One connected world</Label>
              <nav className="bio-pill-stack" aria-label="Brand principles">
                <a href="#purpose">INDULGE</a>
                <a href="#imagery">INVOLVE</a>
                <a href="#applications" className="bio-active-pill">
                  <span>
                    <ArrowRight size={27} />
                  </span>
                  MOVE TO NATURE
                </a>
                <a href="#graphics">IMPACT</a>
                <a href="#portfolio">COMMUNITIES</a>
              </nav>
              <span className="bio-language-mark">
                <Sprout size={35} strokeWidth={1.4} />
              </span>
            </section>
            <section id="typography" className="bio-card bio-type">
              <Label number="05">A clear voice / Outfit</Label>
              <div className="bio-type-art">
                <span>Aa</span>
                <span className="bio-type-orbit" aria-hidden="true" />
                <p>
                  Regular.
                  <br />
                  Semibold.
                  <br />
                  Naturally clear.
                </p>
              </div>
              <div className="bio-type-caption">
                <h2>
                  LAND.
                  <br />
                  LIFE.
                  <br />
                  COMMUNITY.
                </h2>
                <Tool anchor="typography">Explore typography</Tool>
              </div>
            </section>
            <section id="colour" className="bio-card bio-colour">
              <Label number="04">The core palette</Label>
              <div className="bio-colour-bands">
                {palette.map((c) => (
                  <div
                    key={c.hex}
                    style={{
                      background: c.hex,
                      color: ["#156B37", "#1E1E1E"].includes(c.hex)
                        ? "#ffffff"
                        : "#132216",
                    }}
                  >
                    <span>{c.name}</span>
                    <span>{c.hex}</span>
                  </div>
                ))}
              </div>
              <Tool anchor="colour">Colour values & contrast</Tool>
            </section>
          </div>
          <div className="bio-column">
            <section id="logo" className="bio-card bio-logo">
              <Label number="03">The original signature</Label>
              <BrandLogo />
              <div className="download-group">
                <a href="/brand/planet-green-original.svg" download>
                  SVG
                  <ArrowDown size={13} />
                </a>
                <a href="/brand/planet-green-original.png" download>
                  PNG
                  <ArrowDown size={13} />
                </a>
              </div>
              <Tool anchor="logo">Logo guidelines</Tool>
            </section>
            <section id="graphics" className="bio-card bio-graphics">
              <Art
                src="/imagery/architecture.webp"
                alt="Architecture and greenery as a setting for an organic graphic study"
              />
              <Label number="08">Organic, by design</Label>
              <div className="bio-organic-sculpture">
                <OrganicShape />
                <ContourLines />
              </div>
              <div className="bio-graphic-capsule">
                <Sprout size={27} />
                <Tool anchor="graphics">The graphic language</Tool>
              </div>
            </section>
            <section id="icons" className="bio-card bio-icons">
              <Label number="09">Small signs. Shared meaning.</Label>
              <div>
                {brandIcons.map(({ icon: Icon, name, use }) => (
                  <div key={name}>
                    <Icon size={31} strokeWidth={1.3} />
                    <span>{use}</span>
                  </div>
                ))}
              </div>
              <Tool anchor="icons">Copy & customise icons</Tool>
            </section>
          </div>
        </div>
        <section id="imagery" className="bio-imagery">
          <div className="bio-imagery-title">
            <Label number="10">The world, up close.</Label>
            <h2>
              Land.
              <br />
              Food.
              <br />
              Family.
            </h2>
            <Tool anchor="imagery">Photography & treatments</Tool>
          </div>
          <div className="bio-photo-strip">
            {[
              {
                file: "macro",
                caption: "01 / The details",
                alt: "Fresh green leaves",
              },
              {
                file: "landscape",
                caption: "02 / The landscape",
                alt: "Sunlight in a green forest",
              },
              {
                file: "farming",
                caption: "03 / The beginnings",
                alt: "Soil and tools in a farming study",
              },
            ].map((p) => (
              <figure key={p.file}>
                <Art src={`/imagery/${p.file}.webp`} alt={p.alt} />
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
        <div className="bio-applications">
          <BrandApplications />
        </div>
        <div className="bio-closing">
          <p>INDULGE. INVOLVE. IMPACT.</p>
          <h2>
            A more natural
            <br />
            way forward.
            <ArrowUpRight />
          </h2>
          <Link href="/explorer/">
            Explore the complete toolkit
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </main>
      <footer className="bio-footer">
        <BrandLogo />
        <p>
          Planet Green / Identity study © 2026
          <br />
          Original logo. Concept artwork & applications.
        </p>
        <p>
          People. Land. Nature.
          <br />A more natural way forward.
        </p>
        <a href="#top">
          Back to top
          <ArrowUpRight size={15} />
        </a>
      </footer>
    </div>
  );
}
