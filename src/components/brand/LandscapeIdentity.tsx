"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  Sprout,
  Download,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { NatureElementCard } from "./NatureElements";
import { RelearningStory, StoryExperiences } from "./BrandStory";
import { BrandApplications } from "@/components/sections/BrandApplications";
import { brandContext } from "@/lib/brand-context";
import { palette } from "@/lib/brand-tokens";
import { brandIcons } from "@/lib/brand-icons";

const landscape = "/imagery/rolling-landscape-v2.webp";
function Art({
  src = landscape,
  alt = "",
  priority = false,
}: {
  src?: string;
  alt?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 700px) 100vw, 60vw"
      preload={priority}
    />
  );
}
function Guide({
  anchor,
  children,
}: {
  anchor: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="terrain-link" href={`/explorer/?tab=guidelines#${anchor}`}>
      {children}
    </Link>
  );
}
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="terrain-eyebrow">{children}</p>;
}
export function LandscapeIdentity() {
  const [active, setActive] = useState(0);
  const philosophy = brandContext.philosophy[active];
  return (
    <div className="terrain-identity">
      <main id="main">
        <section id="brand-world" className="terrain-hero terrain-scene">
          <Art
            priority
            alt="Original concept landscape of soft green hills and misty valleys"
          />
          <div className="terrain-shade" />
          <div className="terrain-grid-lines" aria-hidden="true" />
          <div className="terrain-hero-top">
            <span>PLANET GREEN / THE LIVING IDENTITY</span>
            <span>LAND. LIFE. COMMUNITY.</span>
          </div>
          <div className="terrain-hero-copy">
            <span className="terrain-glass-tag">
              <Sprout size={15} /> A closer connection to nature
            </span>
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
            <a href="#purpose" className="terrain-white-button">
              Discover our purpose
            </a>
          </div>
          <div className="terrain-hero-note terrain-frost liquid-glass">
            <span>THE PLANET GREEN PHILOSOPHY</span>
            <h2>
              Indulge.
              <br />
              Involve.
              <br />
              Impact.
            </h2>
            <div className="terrain-nature-words">LAND / SOIL / LIFE</div>
            <p>
              Enjoy nature. Take part.
              <br />
              Learn to give back.
            </p>
          </div>
          <div className="terrain-hero-bottom">
            <p>Natural farming & green eco-habitats</p>
            <p>
              Original landscape concept
              <br />
              Brand identity / 2026
            </p>
            <a href="#purpose" aria-label="Explore brand purpose">
              <ArrowDown size={24} />
            </a>
          </div>
        </section>

        <section id="purpose" className="terrain-purpose terrain-wrap">
          <Eyebrow>The vision behind Planet Green</Eyebrow>
          <div className="terrain-statement">
            <h2>
              Give nature
              <br />
              <span>room to heal.</span>
            </h2>
            <div>
              <p>{brandContext.awakening}</p>
              <Guide anchor="purpose">Our purpose & mission</Guide>
            </div>
          </div>
          <div className="terrain-earth-story">
            <div className="terrain-nature-photographs">
              <div className="terrain-scene">
                <Art alt="Green hills and valleys in the landscape concept" />
              </div>
              <div className="terrain-scene">
                <Art
                  src="/imagery/farming.webp"
                  alt="Soil and gardening tools"
                />
              </div>
              <div className="terrain-scene">
                <Art src="/imagery/macro.webp" alt="Fresh green plant growth" />
              </div>
            </div>
            <div className="terrain-earth-captions">
              <div>
                <h3>Hills & landscapes</h3>
                <p>Give nature space.</p>
              </div>
              <div>
                <h3>Soil & roots</h3>
                <p>Care for what sustains us.</p>
              </div>
              <div>
                <h3>Growth & life</h3>
                <p>Make room for life to flourish.</p>
              </div>
            </div>
          </div>
          <RelearningStory />
          <div className="terrain-vision-note">
            <div>
              <Eyebrow>From farming to a way of living</Eyebrow>
              <h3>{brandContext.founder.name}</h3>
              <span>{brandContext.founder.role}</span>
              <p>{brandContext.founder.story}</p>
              <a
                className="terrain-link"
                href={brandContext.founder.source}
                target="_blank"
                rel="noreferrer"
              >
                Read the story on Planet Green
              </a>
            </div>
            <div>
              <Eyebrow>Our vision</Eyebrow>
              <p>{brandContext.vision}</p>
            </div>
            <div>
              <Eyebrow>Our mission</Eyebrow>
              <p>{brandContext.mission}</p>
            </div>
          </div>
        </section>

        <StoryExperiences />

        <section
          id="imagery"
          className="terrain-philosophy terrain-scene"
          aria-label="Planet Green philosophy carousel"
        >
          <Art />
          <div className="terrain-shade" />
          <div className="terrain-grid-lines" aria-hidden="true" />
          <div className="terrain-philosophy-top">
            <Eyebrow>The invitation / A shared responsibility</Eyebrow>
            <Guide anchor="imagery">Imagery & art direction</Guide>
          </div>
          <div className="terrain-philosophy-cards">
            {brandContext.philosophy.map((p, i) => (
              <button
                key={p.name}
                className={`terrain-frost liquid-glass terrain-philosophy-card ${active === i ? "is-active" : ""}`}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
              >
                <span>THE PLANET GREEN PHILOSOPHY</span>
                <h3>{p.name}</h3>
                <div className="terrain-philosophy-photo terrain-scene">
                  <Art
                    src={
                      [
                        landscape,
                        "/imagery/farming.webp",
                        "/imagery/macro.webp",
                      ][i]
                    }
                  />
                </div>
                <p>{p.description}</p>
              </button>
            ))}
          </div>
          <div className="terrain-carousel-controls">
            <button
              aria-label="Previous philosophy"
              onClick={() => setActive((active + 2) % 3)}
            >
              <ChevronLeft />
            </button>
            <span className="terrain-slide-count">0{active + 1} / 03</span>
            <p aria-live="polite">
              <strong>{philosophy.name}.</strong> {philosophy.description}
            </p>
            <button
              aria-label="Next philosophy"
              onClick={() => setActive((active + 1) % 3)}
            >
              <ChevronRight />
            </button>
          </div>
          <span className="terrain-concept-caption">
            Original landscape concept. A visual expression of the brand.
          </span>
        </section>

        <div className="terrain-system terrain-wrap">
          <div className="terrain-section-intro">
            <div>
              <Eyebrow>The visual system</Eyebrow>
              <h2>
                One identity.
                <br />
                Room to grow.
              </h2>
            </div>
            <p>
              Original logo colours. Clear typography.
              <br />
              Organic forms and a little breathing space.
            </p>
          </div>
          <div className="terrain-specimens">
            <div className="terrain-specimen-column">
              <section
                id="typography"
                className="terrain-specimen terrain-type"
              >
                <Eyebrow>A clear voice / Outfit</Eyebrow>
                <div className="terrain-aa">Aa</div>
                <div className="terrain-card-bottom">
                  <span>Regular. Medium. Semibold.</span>
                  <Guide anchor="typography">Explore typography</Guide>
                </div>
              </section>
              <NatureElementCard id="hills" compact />
              <section
                id="surfaces"
                className="terrain-specimen terrain-surface terrain-scene"
              >
                <Art src="/imagery/macro.webp" />
                <div className="terrain-surface-glass terrain-frost liquid-glass">
                  <Sprout size={25} />
                  <h2>
                    A little room
                    <br />
                    to breathe.
                  </h2>
                  <p>
                    Soft layers.
                    <br />A clear point of focus.
                  </p>
                </div>
                <Guide anchor="surfaces">The surface system</Guide>
              </section>
              <section id="icons" className="terrain-specimen terrain-icons">
                <Eyebrow>Small signs. Shared meaning.</Eyebrow>
                <div className="terrain-icon-grid">
                  {brandIcons.map(({ icon: Icon, name, use }) => (
                    <div key={name}>
                      <Icon size={28} strokeWidth={1.3} />
                      <span>{use}</span>
                    </div>
                  ))}
                </div>
                <Guide anchor="icons">The icon collection</Guide>
              </section>
            </div>
            <div className="terrain-specimen-column">
              <section
                id="language"
                className="terrain-specimen terrain-campaign terrain-scene"
              >
                <Art />
                <div className="terrain-shade" />
                <Eyebrow>A living visual language</Eyebrow>
                <div className="terrain-campaign-copy">
                  <span className="terrain-glass-tag">
                    Food. Soil. Community.
                  </span>
                  <h2>
                    A life rooted
                    <br />
                    in nature.
                  </h2>
                  <Guide anchor="language">Explore the visual language</Guide>
                </div>
              </section>
              <NatureElementCard id="life" compact />
              <section id="logo" className="terrain-specimen terrain-signature">
                <Eyebrow>The original signature</Eyebrow>
                <BrandLogo tone="dark" />
                <p>
                  Distinctive by nature.
                  <br />
                  Always the original artwork.
                </p>
                <div className="download-group">
                  <a href="/brand/planet-green-original.svg" download>
                    SVG <Download size={14} />
                  </a>
                  <a href="/brand/planet-green-original.png" download>
                    PNG <Download size={14} />
                  </a>
                </div>
                <Guide anchor="logo">Logo guidelines</Guide>
              </section>
            </div>
            <div className="terrain-specimen-column">
              <section
                id="graphics"
                className="terrain-specimen terrain-graphics"
              >
                <Eyebrow>Textures from nature</Eyebrow>
                <div className="terrain-soil-photo terrain-scene">
                  <Art
                    src="/imagery/farming.webp"
                    alt="Soil and gardening tools as a natural texture"
                  />
                </div>
                <h2>
                  Hills. Soil.
                  <br />
                  Life.
                </h2>
                <Guide anchor="graphics">Shape & pattern</Guide>
              </section>
              <section id="colour" className="terrain-colour">
                <div
                  className="terrain-palette"
                  aria-label="Planet Green colour palette"
                >
                  {palette.map((c) => (
                    <div
                      key={c.hex}
                      style={{ background: c.hex }}
                      title={`${c.name} ${c.hex}`}
                    >
                      <span className="sr-only">
                        {c.name} {c.hex}
                      </span>
                    </div>
                  ))}
                </div>
                <Guide anchor="colour">Colours from the original logo</Guide>
              </section>
              <NatureElementCard id="soil" compact />
              <NatureElementCard id="seeds" compact />
              <div className="terrain-phone-card">
                <div className="terrain-phone">
                  <div className="terrain-phone-top">
                    <span>9:41</span>
                    <span aria-hidden="true">•••</span>
                  </div>
                  <BrandLogo />
                  <h3>
                    A closer life
                    <br />
                    with nature.
                  </h3>
                  <p>
                    Reconnect with nature through growing food and caring for
                    the land.
                  </p>
                  <div className="terrain-phone-image terrain-scene">
                    <Art />
                    <span>Indulge. Involve. Impact.</span>
                  </div>
                  <Link href="/applications/">Explore the applications</Link>
                </div>
                <span className="terrain-phone-caption">
                  The identity, in everyday life.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="terrain-applications terrain-wrap">
          <BrandApplications />
        </div>
        <div className="terrain-closing terrain-wrap">
          <div>
            <Eyebrow>Move to Nature.</Eyebrow>
            <h2>
              Learn to nurture it.
              <br />
              Give it room to heal.
            </h2>
            <p className="story-closing-copy">
              Carry the same purpose into every story, space and everyday
              touchpoint.
            </p>
            <div className="terrain-closing-links">
              <Link href="/explorer/" className="terrain-dark-button">
                Component library
              </Link>
              <Link href="/applications/" className="terrain-link">
                In the world
              </Link>
            </div>
          </div>
          <div className="terrain-closing-art terrain-scene">
            <Art />
            <BrandLogo tone="dark" />
            <p>Move to Nature.</p>
          </div>
        </div>
      </main>
      <footer className="terrain-footer terrain-wrap">
        <BrandLogo />
        <p>
          Planet Green / Brand identity study
          <br />
          Original logo. Concept artwork & applications.
        </p>
        <a href="https://planetgreen.co.in/" target="_blank" rel="noreferrer">
          planetgreen.co.in
        </a>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}
