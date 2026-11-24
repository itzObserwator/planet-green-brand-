"use client";

import { useId, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Sprout,
  Wheat,
  House,
  Map,
  Droplets,
  HandHeart,
  Plus,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { BrandApplications } from "@/components/sections/BrandApplications";
import { brandContext } from "@/lib/brand-context";
import { brandElements } from "@/lib/brand-elements";
import { FadedArch, StoryContextPanel } from "./ReferenceStoryComponents";
import { FadedNatureElement } from "./FadedNatureElement";
import { handDrawnElements } from "@/lib/hand-drawn-elements";
import illustratedFrame from "@/lib/illustrated-frame.json";

const earth = "/imagery/cultural-story/bhudevi-sculpture.webp";
const meal = "/imagery/cultural-story/shared-rice-meal.webp";

function ArchFrame({
  src,
  label,
  className = "",
}: {
  src: string;
  label: string;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox={`0 0 ${illustratedFrame.width} ${illustratedFrame.height}`}
      role="img"
      aria-label={label}
      className={`myth-arch-frame ${className}`}
    >
      <defs>
        <clipPath id={`arch-${id}`}>
          <path d={illustratedFrame.aperture} />
        </clipPath>
      </defs>
      <image
        href={src}
        x="70"
        y="180"
        width="870"
        height="1300"
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#arch-${id})`}
      />
      <image
        href="/graphics/hand-drawn/illustrated/frame.webp"
        x="0"
        y="0"
        width={illustratedFrame.width}
        height={illustratedFrame.height}
        preserveAspectRatio="none"
      />
    </svg>
  );
}
function Ornament({
  kind = "flower",
  className = "",
}: {
  kind?: "flower" | "arch";
  className?: string;
}) {
  return kind === "arch" ? (
    <FadedArch className={`myth-ornament ${className}`} />
  ) : (
    <Image
      src="/graphics/hand-drawn/illustrated/rosette.webp"
      width={1254}
      height={1254}
      unoptimized
      className={`myth-ornament ${className}`}
      alt=""
      aria-hidden="true"
      draggable={false}
    />
  );
}
function Photo({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`myth-photo ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width:700px) 100vw, 50vw" />
    </div>
  );
}
function Chapter({
  label,
  title,
  children,
  className = "",
}: {
  label: string;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`myth-chapter-intro ${className}`}>
      <p className="myth-label">{label}</p>
      <h2>{title}</h2>
      {children && <div className="myth-chapter-copy">{children}</div>}
    </div>
  );
}
function Guide({ anchor, children }: { anchor: string; children: ReactNode }) {
  return (
    <Link className="myth-link" href={`/explorer/?tab=guidelines#${anchor}`}>
      {children}
    </Link>
  );
}

export function MythologyIdentity() {
  const [reference, setReference] = useState(0);
  const [philosophy, setPhilosophy] = useState(0);
  const [sample, setSample] = useState("A story we can live.");
  const myth = brandContext.culturalStory.references[reference];
  return (
    <div className="myth-identity">
      <main id="main">
        <section id="brand-world" className="myth-hero">
          <div className="myth-hero-art">
            <Ornament />
            <ArchFrame
              src={earth}
              label="Contemporary Bhudevi sculptural concept in an architectural frame"
            />
            <p>Bhudevi / Contemporary sculptural concept</p>
          </div>
          <div className="myth-hero-copy">
            <p className="myth-label">
              Planet Green / A living cultural identity
            </p>
            <h1>
              Move to
              <br />
              Nature.
            </h1>
            <p className="myth-hero-subtitle">
              An Indian story of earth,
              <br />
              nourishment and care.
            </p>
            <a className="myth-link" href="#purpose">
              Enter the story
            </a>
          </div>
        </section>
        <nav className="myth-story-nav" aria-label="Identity story">
          <a href="#purpose">The context</a>
          <a href="#graphics">The idea</a>
          <a href="#imagery">The cultural roots</a>
          <a href="#logo">The identity</a>
          <a href="#applications">In everyday life</a>
        </nav>

        <section id="purpose" className="myth-chapter myth-context">
          <StoryContextPanel
            label="Context"
            title="The Problem"
            lead={
              <>
                Nature sustains every part of our lives.
                <br />
                Yet that relationship can feel distant.
              </>
            }
          >
            <p>
              Care for the earth becomes meaningful through participation:
              growing food, understanding nourishment, and learning to replenish
              the soil.
            </p>
          </StoryContextPanel>
          <div className="myth-founder">
            <p className="myth-label">Where the thinking took root</p>
            <h3>
              A lived encounter.
              <br />A way to take part.
            </h3>
            <p>{brandContext.founder.story}</p>
            <a
              href={brandContext.founder.source}
              target="_blank"
              rel="noreferrer"
            >
              Vinay Ram · Managing Director / Read the founder’s account
            </a>
          </div>
        </section>

        <section id="language" className="myth-chapter myth-objective">
          <FadedNatureElement
            element="life"
            className="myth-nature-objective"
          />
          <Chapter
            label="Our objective"
            title={
              <>
                To make the relationship
                <br />
                felt in everyday life.
              </>
            }
          >
            <p>
              Planet Green’s vision is to ease the burden on Mother Nature so
              she has room to recover.
            </p>
            <p>
              Its mission gives that commitment a practical form: relearn to
              make food, grow produce and replenish soil. A story becomes useful
              when there is a way to take part in it.
            </p>
          </Chapter>
          <div id="relearning" className="myth-practices">
            {brandContext.relearning.map((step) => (
              <article key={step.title}>
                <Sprout size={23} strokeWidth={1.2} aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="graphics" className="myth-chapter myth-brand-idea">
          <Ornament kind="arch" />
          <p className="myth-label">The brand idea</p>
          <h2>
            What sustains us
            <br />
            <em>deserves our care.</em>
          </h2>
          <p>
            Earth becomes a relationship. Nourishment becomes a connection.
            <br />
            Care becomes something we practise.
          </p>
          <p className="myth-idea-foot">
            Stories carried through culture. Experienced through everyday life.
          </p>
          <div className="myth-nature-gallery">
            <div className="myth-nature-gallery-heading">
              <p className="myth-label">
                Hand-drawn elements / From the living world
              </p>
              <h3>Quiet marks. A living vocabulary.</h3>
            </div>
            <div className="myth-nature-gallery-grid">
              {handDrawnElements.map((element) => (
                <figure key={element.id}>
                  <FadedNatureElement element={element.id} decorative={false} />
                  <figcaption>
                    <h4>{element.name}</h4>
                    <p>{element.meaning}</p>
                    <a href={element.download} download>
                      Download PNG <Download size={14} aria-hidden="true" />
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="imagery"
          className="myth-chapter myth-cultural-story"
          aria-label="Cultural story and Planet Green philosophy"
        >
          <div className="myth-cultural-art">
            <ArchFrame
              src={reference === 0 ? earth : meal}
              label={
                reference === 0
                  ? "Contemporary Bhudevi sculpture photographic concept"
                  : "Photographic concept of a shared rice meal, a contemporary connection to nourishment"
              }
            />
            <span>
              {reference === 0
                ? "A contemporary sculptural interpretation"
                : "Nourishment in the everyday"}
            </span>
          </div>
          <div className="myth-cultural-copy">
            <p className="myth-label">Mythology / A living relationship</p>
            <h2>
              Stories that enter
              <br />
              <em>the way we live.</em>
            </h2>
            <div
              className="myth-reference-tabs"
              role="tablist"
              aria-label="Mythological references"
            >
              {brandContext.culturalStory.references.map((item, i) => (
                <button
                  key={item.name}
                  role="tab"
                  id={`myth-tab-${i}`}
                  aria-controls="myth-reference-panel"
                  aria-selected={reference === i}
                  tabIndex={reference === i ? 0 : -1}
                  onClick={() => setReference(i)}
                  onKeyDown={(event) => {
                    if (
                      !["ArrowLeft", "ArrowRight", "Home", "End"].includes(
                        event.key,
                      )
                    )
                      return;
                    event.preventDefault();
                    const next =
                      event.key === "Home"
                        ? 0
                        : event.key === "End"
                          ? 1
                          : 1 - i;
                    setReference(next);
                    document.getElementById(`myth-tab-${next}`)?.focus();
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div
              id="myth-reference-panel"
              role="tabpanel"
              aria-labelledby={`myth-tab-${reference}`}
              tabIndex={0}
            >
              <h3>{myth.theme}.</h3>
              <p>{myth.story}</p>
              <a href={myth.source} target="_blank" rel="noreferrer">
                Cultural reference · Cleveland Museum of Art
              </a>
            </div>
            <p className="myth-bridge-copy">
              {brandContext.culturalStory.bridge}
            </p>
          </div>
          <div className="myth-philosophy">
            <p className="myth-label">
              The invitation / Choose how to take part
            </p>
            <div>
              {brandContext.philosophy.map((item, i) => (
                <button
                  className="terrain-philosophy-card"
                  key={item.name}
                  aria-pressed={philosophy === i}
                  onClick={() => setPhilosophy(i)}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <p aria-live="polite">
              {brandContext.philosophy[philosophy].description}
            </p>
            <div className="myth-step-controls">
              <button
                aria-label="Previous philosophy"
                onClick={() => setPhilosophy((philosophy + 2) % 3)}
              >
                Previous
              </button>
              <span className="terrain-slide-count">
                0{philosophy + 1} / 03
              </span>
              <button
                aria-label="Next philosophy"
                onClick={() => setPhilosophy((philosophy + 1) % 3)}
              >
                Next
              </button>
            </div>
          </div>
        </section>

        <div id="portfolio" className="myth-chapter myth-positioning">
          <FadedNatureElement
            element="hills"
            className="myth-nature-positioning"
          />
          <div className="myth-position-art">
            <ArchFrame
              src={meal}
              label="A shared meal, a photographic concept for the relationship between land and nourishment"
            />
          </div>
          <div className="myth-position-copy">
            <Chapter
              label="Brand positioning"
              title="Defining the experience."
            />
            <dl>
              <div>
                <dt>Role</dt>
                <dd>A closer relationship with land, food and life.</dd>
              </div>
              <div>
                <dt>Audience</dt>
                <dd>
                  Families, growers and communities who want to take part.
                </dd>
              </div>
              <div>
                <dt>Tone</dt>
                <dd>Rooted, warm, thoughtful and contemporary.</dd>
              </div>
              <div>
                <dt>Promise</dt>
                <dd>Practical ways to experience what sustains us.</dd>
              </div>
            </dl>
          </div>
          <div className="myth-family">
            {brandContext.ecosystem.map((item, i) => (
              <article key={item.name}>
                <p className="myth-label">
                  {
                    [
                      "Cultivation",
                      "Everyday living",
                      "Nourishment",
                      "Access to land",
                    ][i]
                  }
                </p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <a href={item.href} target="_blank" rel="noreferrer">
                  Explore {item.name}
                </a>
              </article>
            ))}
          </div>
        </div>

        <section id="logo" className="myth-chapter myth-system">
          <Chapter
            label="The identity system"
            title={
              <>
                Rooted in meaning.
                <br />
                Crafted for clarity.
              </>
            }
          >
            <p>
              The original signature holds the family together. Architectural
              frames and quiet botanical ornament give the story a cultural
              setting, while the current photography and clear interface
              language keep it present.
            </p>
          </Chapter>
          <div className="myth-brand-board">
            <article className="myth-board-intro">
              <p className="myth-label">Logo & visual language</p>
              <h3>
                A familiar signature.
                <br />A living story.
              </h3>
              <div className="myth-mini-rule" />
              <p>
                Linked organic forms support a contemporary reading of
                interdependence. The cultural interpretation lives around the
                logo; its original geometry and colours remain intact.
              </p>
              <Guide anchor="logo">Logo guidelines</Guide>
            </article>
            <article className="myth-board-primary">
              <p className="myth-label">Original signature</p>
              <BrandLogo />
              <span>Move to Nature.</span>
            </article>
            <article className="myth-board-variants">
              <p className="myth-label">Light & dark settings</p>
              <div>
                <BrandLogo />
                <div>
                  <BrandLogo tone="dark" />
                </div>
              </div>
              <div className="download-group">
                <a href="/brand/planet-green-original.svg" download>
                  Original SVG <Download size={15} aria-hidden="true" />
                </a>
                <a href="/brand/planet-green-original.png" download>
                  Original PNG <Download size={15} aria-hidden="true" />
                </a>
              </div>
            </article>
            <article className="myth-board-reasoning">
              <p className="myth-label">Composition</p>
              <Ornament kind="arch" />
              <h3>A frame for encounter.</h3>
              <p>
                The arch introduces a story. Generous space allows reflection.
                The ornament connects with leaves and growth, giving the imagery
                a quiet rhythm.
              </p>
            </article>
          </div>
        </section>

        <section id="typography" className="myth-chapter myth-type">
          <Chapter
            label="Typography"
            title={
              <>
                A classical presence.
                <br />
                <em>A clear contemporary voice.</em>
              </>
            }
          >
            <p>
              A serif display treatment brings the references’ editorial
              character into the story. Outfit remains the body and interface
              family, preserving the clarity of the existing system.
            </p>
          </Chapter>
          <div className="myth-type-board">
            <article>
              <p className="myth-label">Story display / Georgia</p>
              <span className="myth-serif-sample">Aa</span>
              <p>Earth. Nourishment. Care.</p>
            </article>
            <article>
              <p className="myth-label">Body & interface / Outfit</p>
              <span className="myth-sans-sample">Aa</span>
              <p>
                Regular. Medium. Semibold.
                <br />
                Made for reading, learning and taking part.
              </p>
            </article>
            <div className="myth-type-tester">
              <label htmlFor="myth-type-sample">
                Try the story voice
                <input
                  id="myth-type-sample"
                  maxLength={80}
                  value={sample}
                  onChange={(event) => setSample(event.target.value)}
                />
              </label>
              <p aria-live="polite">{sample || "A story we can live."}</p>
            </div>
          </div>
          <Guide anchor="typography">Explore typography</Guide>
        </section>

        <section id="colour" className="myth-chapter myth-colour">
          <Chapter label="Brand colours" title="The greens we already know.">
            <p>
              Forest, Field, Leaf and Mist come from the original logo. The
              paper is a quiet material backdrop; cultural character comes from
              the composition and story.
            </p>
          </Chapter>
          <div className="myth-colour-strip">
            {[
              { name: "Forest", hex: "#156B37" },
              { name: "Field", hex: "#50AD47" },
              { name: "Leaf", hex: "#B5D5A1" },
              { name: "Mist", hex: "#E8F0E1" },
            ].map((colour) => (
              <div
                key={colour.name}
                style={{
                  background: colour.hex,
                  color: colour.name === "Forest" ? "#fff" : "#1e1e1e",
                }}
              >
                <strong>{colour.name}</strong>
                <span>
                  {colour.hex}
                  <br />
                  Original signature
                </span>
              </div>
            ))}
          </div>
          <Guide anchor="colour">Colour roles & accessibility</Guide>
        </section>

        <section id="surfaces" className="myth-chapter myth-surfaces">
          <FadedNatureElement element="soil" className="myth-nature-surfaces" />
          <Chapter
            label="Where the existing aesthetic belongs"
            title={
              <>
                Texture for the story.
                <br />
                <em>Clarity for the experience.</em>
              </>
            }
          >
            <p>
              The current macro photography, soft layers and rounded components
              sit within the paper-and-arch setting. Information stays clear
              while the natural world remains in view.
            </p>
          </Chapter>
          <div className="myth-surface-study">
            <Photo
              src="/imagery/surface-leaf-veins.webp"
              alt="Macro leaf-vein photographic concept retained from the current identity"
            />
            <a className="myth-glass-pill" href="#relearning">
              <span>
                <Image
                  src="/elements/seed-cluster.webp"
                  alt=""
                  width={75}
                  height={75}
                />
              </span>
              <span>
                <strong>Care begins here.</strong>
                <small>Grow. Prepare. Replenish.</small>
              </span>
              <Plus size={25} strokeWidth={1} aria-hidden="true" />
            </a>
          </div>
          <details className="myth-asset-drawer">
            <summary>Explore the photographic elements</summary>
            <div>
              {brandElements.map((element) => (
                <article key={element.id}>
                  <h3>{element.name}</h3>
                  <p>{element.guidance}</p>
                  <a href={element.download} download>
                    Download {element.format}
                    <Download size={15} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </details>
          <Guide anchor="surfaces">The surface system</Guide>
        </section>

        <section id="icons" className="myth-chapter myth-icons">
          <Chapter label="Everyday signs" title="Small marks. Clear meaning.">
            <p>
              The familiar icon system remains practical: cultivation,
              nourishment, living, land, replenishment and care.
            </p>
          </Chapter>
          <div>
            {[
              { Icon: Sprout, label: "Cultivate" },
              { Icon: Wheat, label: "Nourish" },
              { Icon: House, label: "Inhabit" },
              { Icon: Map, label: "Explore land" },
              { Icon: Droplets, label: "Replenish" },
              { Icon: HandHeart, label: "Care" },
            ].map(({ Icon, label }) => (
              <article key={label}>
                <Icon size={36} strokeWidth={1.2} aria-hidden="true" />
                <h3>{label}</h3>
              </article>
            ))}
          </div>
          <Guide anchor="icons">The icon collection</Guide>
        </section>

        <div className="myth-chapter myth-applications">
          <BrandApplications />
        </div>
        <div className="myth-chapter myth-impact">
          <FadedNatureElement element="seeds" className="myth-nature-impact" />
          <p className="myth-label">The ambition</p>
          <h2>
            A story carried through culture.
            <br />
            <em>A relationship lived today.</em>
          </h2>
          <p>
            What sustains us deserves our care.
            <br />
            Begin with curiosity. Learn through participation.
          </p>
          <div className="myth-impact-words">
            <span>Alive.</span>
            <span>Considered.</span>
            <span>Shared.</span>
          </div>
          <div>
            <Link href="/explorer/">Explore the identity system</Link>
            <Link href="/applications/">See the applications</Link>
          </div>
        </div>
      </main>
      <footer className="myth-footer">
        <BrandLogo />
        <p>
          Planet Green / A living cultural identity
          <br />
          Contemporary concept imagery and application studies.
        </p>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}
