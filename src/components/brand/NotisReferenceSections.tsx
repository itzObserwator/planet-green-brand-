"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import { Check, Copy, MoreHorizontal, Plus, Quote } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { PhysicalMockup } from "./PhysicalMockup";
import { DesignDecision } from "./DesignDecision";
import { EngravedMark, type EngravedElement } from "./EngravedMark";
import { NatureGlassCard } from "@/components/glass/NatureGlassCard";
import { GlassModal } from "@/components/glass/GlassUI";
import { planetGreenCompany } from "@/lib/planet-green-company";
import styles from "./NotisReferenceSections.module.css";

const names: EngravedElement[] = ["seed", "soil", "hills", "life"];
const palette = [
  ["Forest", "#156B37"],
  ["Field", "#50AD47"],
  ["Leaf", "#B5D5A1"],
  ["Mist", "#E8F0E1"],
];
function Label({ children }: { children: ReactNode }) {
  return <p className={styles.chapterLabel}>{children}</p>;
}
function Photo({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <Image
      className={styles.photo}
      src={src}
      alt={alt}
      fill
      sizes="(max-width:700px) 100vw, 70vw"
    />
  );
}
function BrandChip() {
  return (
    <div className={styles.brandChip}>
      <EngravedMark kind="seed" />
      <span>
        <strong>Planet Green</strong>
        <small>Move to Nature.</small>
      </span>
    </div>
  );
}

export function ReferenceBriefPair() {
  const [practice, setPractice] = useState(0);
  const [copied, setCopied] = useState(false);
  const practices = [
    {
      name: "Grow",
      title: (
        <>
          Grow with
          <br />
          the land.
        </>
      ),
      body: "A seed, a season, a little care. Take part in what grows.",
      kind: "seed",
    },
    {
      name: "Nourish",
      title: (
        <>
          Know what
          <br />
          sustains you.
        </>
      ),
      body: "From the ground to the table. Know what nourishes you.",
      kind: "soil",
    },
    {
      name: "Belong",
      title: (
        <>
          Make room
          <br />
          for life.
        </>
      ),
      body: "Home, landscape and community. A closer way to live.",
      kind: "life",
    },
  ] as const;
  const intention =
    "Bring people closer to nature by relearning how to prepare food, grow produce and replenish the soil.";
  return (
    <div className={styles.pair} id="purpose">
      <section className={`${styles.panel} ${styles.brief}`}>
        <Label>01 / The purpose</Label>
        <div className={styles.briefContent}>
          <span className={styles.quoteIcon}>
            <Quote size={19} fill="currentColor" />
          </span>
          <p className={styles.selectedText}>
            <span>{intention}</span>
          </p>
          <BrandChip />
        </div>
        <div className={styles.briefActions}>
          <button
            aria-label="Copy Planet Green brand intention"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(intention);
                setCopied(true);
              } catch {
                setCopied(false);
              }
            }}
          >
            {copied ? <Check size={17} /> : <Copy size={17} />}
          </button>
          <a href="#brand-story" aria-label="Read the Planet Green brand story">
            <MoreHorizontal size={20} />
          </a>
          <span aria-live="polite">{copied ? "Copied" : ""}</span>
        </div>
      </section>
      <section className={`${styles.panel} ${styles.practicePoster}`}>
        <Photo
          src="/imagery/surface-leaf-veins.webp"
          alt="Green leaf veins and living texture"
        />
        <div className={styles.posterShade} />
        <EngravedMark kind={practices[practice].kind} />
        <div className={styles.practiceCopy} aria-live="polite">
          <h2>{practices[practice].title}</h2>
          <p>{practices[practice].body}</p>
        </div>
        <div className={styles.practiceBottom}>
          <p>
            Begin with a little care.<span aria-hidden="true">│</span>
          </p>
          <div role="group" aria-label="Ways to take part">
            {practices.map((item, i) => (
              <button
                key={item.name}
                onClick={() => setPractice(i)}
                aria-pressed={practice === i}
              >
                {i === practice && <span className={styles.pillCount}>✓</span>}
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export function ReferenceAbout() {
  return (
    <section id="brand-story" className={`${styles.panel} ${styles.about}`}>
      <Label>The idea / Move to Nature</Label>
      <div className={styles.ideaComposition}>
        <h2 className={styles.ideaLead}>
          A living connection{" "}
          <span className={styles.ideaInline}>
            <EngravedMark kind="life" />
          </span>
          <br />
          to the world around us.
        </h2>
        <p className={styles.ideaEcho}>
          Through the food we grow.
          <br />
          And the places we call home.
        </p>
        <div className={styles.ideaMiddle}>
          <div className={styles.ideaPrinciples}>
            <div className={styles.ideaTokens} aria-hidden="true">
              <span>
                <EngravedMark kind="seed" />
              </span>
              <span>
                <EngravedMark kind="soil" />
              </span>
              <span>
                <EngravedMark kind="hills" />
              </span>
            </div>
            <h3>
              Indulge.
              <br />
              Involve.
              <br />
              Impact.
            </h3>
          </div>
          <div className={styles.ideaGlass}>
            <NatureGlassCard
              title="MOVE TO NATURE"
              compact
              action="Explore our communities"
            />
          </div>
        </div>
        <p className={styles.ideaClosing}>
          Different beginnings.
          <br />
          One connected way of living.
        </p>
        <div className={styles.ideaSignature}>
          <EngravedMark kind="seed" />
          <p>
            Seed. Soil. Life.
            <span>The connections that shape our identity.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
export function ReferenceTouchpoints({ phone }: { phone: ReactNode }) {
  return (
    <div className={styles.pair}>
      <section className={`${styles.panel} ${styles.deviceStudy}`}>
        <Photo src="/imagery/cultural-story/telangana-fields.webp" />
        <div className={styles.studyBlur} />
        <Label>Digital identity / A concept in context</Label>
        <div className={styles.deviceHolder}>{phone}</div>
        <span className={styles.footCaption}>
          Digital concept / Landscape first, content clearly framed.
        </span>
      </section>
      <section className={`${styles.panel} ${styles.connectionPoster}`}>
        <Photo src="/imagery/elements-macro-leaves.webp" />
        <div className={styles.connectionVeil} />
        <EngravedMark kind="life" />
        <div className={styles.brandWidget}>
          <span>
            <EngravedMark kind="seed" />
          </span>
          <div>
            <strong>Planet Green</strong>
            <p>A closer life.</p>
            <a href="#portfolio">Explore the living world</a>
          </div>
        </div>
      </section>
    </div>
  );
}
export function ReferenceTypePalette({
  sample,
  onSample,
  copied,
  onCopy,
}: {
  sample: string;
  onSample: (value: string) => void;
  copied: string;
  onCopy: (hex: string) => void;
}) {
  return (
    <section
      id="typography"
      className={`${styles.panel} ${styles.typePalette}`}
    >
      <Label>04 / Giving the idea a clear voice</Label>
      <div className={styles.typeFamilies}>
        <div>
          <h2>Outfit</h2>
          <p>Font family</p>
        </div>
        <div className={styles.typeAccent}>
          Aa<span>Regular · Medium · Semibold</span>
        </div>
      </div>
      <p className={styles.editorialCaption}>
        Outfit brings a calm, clear rhythm to the detail of nature.
      </p>
      <DesignDecision question="Why Outfit?">
        Rounded forms echo the organic imagery; simple geometry keeps it
        contemporary. One family creates continuity: Medium for headlines,
        Regular for reading and Semibold for emphasis. Scale and spacing do the
        work of hierarchy.
      </DesignDecision>
      <div className={styles.specRow}>
        <span>Display</span>
        <div>
          <strong>Medium</strong>
          <small>Font weight</small>
        </div>
        <div>
          <strong>110–120%</strong>
          <small>Line height</small>
        </div>
        <div>
          <strong>64–112px</strong>
          <small>Responsive display</small>
        </div>
        <div>
          <strong>−3%</strong>
          <small>Display tracking</small>
        </div>
      </div>
      <div className={styles.typeExample}>
        <label htmlFor="fluid-type-sample">Try the brand voice</label>
        <input
          id="fluid-type-sample"
          value={sample}
          maxLength={55}
          onChange={(e) => onSample(e.target.value)}
        />
        <p>
          A closer relationship.
          <br />
          <span>A more thoughtful life.</span>
        </p>
        <h3 className={styles.typeAccent}>New beginnings</h3>
        <p className={styles.bodyExample}>
          A meal begins with a seed. A home belongs to a landscape. Everything
          is connected.
        </p>
      </div>
      <div className={styles.bodySpecs}>
        <span>Body & interface</span>
        <div>
          <strong>Regular / Medium</strong>
          <small>Outfit</small>
        </div>
        <div>
          <strong>160%</strong>
          <small>Body line height</small>
        </div>
        <div>
          <strong>16–18px</strong>
          <small>Reading size</small>
        </div>
      </div>
      <div className={styles.colourChapter}>
        <Label>Colour / Carrying the signature forward</Label>
        <p className={styles.editorialCaption}>
          Forest anchors. Field accents. Leaf and Mist soften. White gives each
          colour room.
        </p>
        <DesignDecision question="How does the palette work?">
          Forest and Field carry the core greens forward. Leaf and Mist extend
          them into lighter surfaces. Forest gives text and actions weight;
          Field adds emphasis. White space keeps the whole system open and
          quiet.
        </DesignDecision>
        <div className={styles.paletteStrip}>
          {palette.map(([name, hex], i) => (
            <div className={styles.palettePair} key={name}>
              <button
                onClick={() => onCopy(hex)}
                aria-label={`Copy ${name} ${hex}`}
              >
                <small>{hex}</small>
                <span style={{ background: hex }} />
                <strong>
                  {name}{" "}
                  {copied === hex ? <Check size={12} /> : <Copy size={12} />}
                </strong>
              </button>
              <div className={styles.paletteArt}>
                <EngravedMark kind={names[i]} />
              </div>
            </div>
          ))}
        </div>
        <p className={styles.copyStatus} role="status">
          {copied.startsWith("#")
            ? `${copied} copied to clipboard`
            : copied || "Select a colour to copy its hex value."}
        </p>
        <div className={styles.paletteGlass}>
          <NatureGlassCard
            title="PLANET GREEN"
            compact
            action="Explore our communities"
          />
        </div>
      </div>
    </section>
  );
}
export function ReferenceDepth() {
  const [blur, setBlur] = useState(24);
  return (
    <section id="glass-depth" className={`${styles.panel} ${styles.depth}`}>
      <Label>06 / Bringing the layers together</Label>
      <div className={styles.depthHeading}>
        <h2>Frosted glass</h2>
        <p>
          With the elements, type and colour in place, translucent surfaces
          bring them together.
        </p>
        <h2>& living depth.</h2>
      </div>
      <DesignDecision question="Why frosted glass?">
        The landscape remains present beneath the content. Blur quietens its
        detail, a light edge defines the surface, and solid text preserves a
        clear reading order. Rounded frames and generous space let detailed
        imagery breathe.
      </DesignDecision>
      <div className={styles.depthStudy}>
        <EngravedMark kind="life" />
        <div
          className={styles.depthGlass}
          style={{ "--demo-blur": `${blur}px` } as CSSProperties}
        >
          <div>
            <EngravedMark kind="seed" />
            <EngravedMark kind="soil" />
          </div>
          <span>Small details. A living world.</span>
        </div>
      </div>
      <label className={styles.blurControl}>
        Glass blur
        <input
          type="range"
          min="4"
          max="40"
          value={blur}
          onChange={(event) => setBlur(Number(event.target.value))}
        />
        <span>{blur}px</span>
      </label>
    </section>
  );
}
const moments = [
  {
    name: "Seed",
    kind: "seed",
    copy: "Potential, held in care. A seed begins the story.",
  },
  {
    name: "Soil",
    kind: "soil",
    copy: "Living layers beneath every harvest. Care begins with the ground.",
  },
  {
    name: "Hills",
    kind: "hills",
    copy: "A wider horizon. A landscape to belong to.",
  },
  {
    name: "Life",
    kind: "life",
    copy: "Branching roots, reaching leaves. Life grows through connection.",
  },
  {
    name: "Nourishment",
    image: "/imagery/cultural-story/shared-rice-meal.webp",
    copy: "The grain, the grower and the meal we share.",
  },
  {
    name: "Belonging",
    image: "/imagery/architecture.webp",
    copy: "Home and landscape, in one living relationship.",
  },
];
export function ReferenceWorld() {
  const [chosen, setChosen] = useState<number | null>(null);
  return (
    <>
      <section id="portfolio" className={`${styles.panel} ${styles.world}`}>
        <Photo src="/imagery/cultural-story/telangana-fields.webp" />
        <div className={styles.worldVeil} />
        <div className={styles.worldFrame} />
        <Label>07 / From the land to a place to belong</Label>
        <div className={styles.worldEmblem}>
          <EngravedMark kind="seed" />
        </div>
        <div className={styles.momentGrid}>
          {moments.map((moment, i) => (
            <button key={moment.name} onClick={() => setChosen(i)}>
              {moment.image ? (
                <Photo src={moment.image} />
              ) : (
                <EngravedMark kind={moment.kind as EngravedElement} />
              )}
              <span>{moment.name}</span>
              <small>
                {
                  [
                    "A beginning",
                    "Living ground",
                    "A wider horizon",
                    "Room to grow",
                    "At the table",
                    "Everyday life",
                  ][i]
                }
              </small>
            </button>
          ))}
        </div>
        <h2>
          Find your way
          <br />
          back to nature.
        </h2>

        <div className={styles.familyLinks}>
          {planetGreenCompany.communities.map((brand) => (
            <a
              href={brand.href}
              key={brand.name}
              target="_blank"
              rel="noreferrer"
            >
              {brand.name}
            </a>
          ))}
        </div>
      </section>
      <GlassModal
        open={chosen !== null}
        onClose={() => setChosen(null)}
        title={chosen !== null ? moments[chosen].name : "A living connection"}
      >
        {chosen !== null && (
          <div className={styles.momentDetail}>
            {moments[chosen].kind && (
              <EngravedMark kind={moments[chosen].kind as EngravedElement} />
            )}
            <p>{moments[chosen].copy}</p>
            <a href="#elements" onClick={() => setChosen(null)}>
              Explore the nature elements
            </a>
          </div>
        )}
      </GlassModal>
    </>
  );
}
export function ReferenceDetailPair() {
  const [kind, setKind] = useState<EngravedElement>("life");
  return (
    <div className={styles.pair}>
      <section
        id="philosophy-study"
        className={`${styles.panel} ${styles.glassCloseup}`}
      >
        <div className={styles.closeupCard}>
          <NatureGlassCard title="OUR PHILOSOPHY" compact />
        </div>
        <span className={styles.footCaption}>Indulge. Involve. Impact.</span>
      </section>
      <section className={`${styles.panel} ${styles.botanicalCloseup}`}>
        <Photo src="/imagery/elements-macro-leaves.webp" />
        <div className={styles.botanicalVeil} />
        <EngravedMark kind={kind} />
        <div
          className={styles.botanicalControls}
          role="group"
          aria-label="Botanical close-up"
        >
          <button
            aria-pressed={kind === "life"}
            onClick={() => setKind("life")}
          >
            Life
          </button>
          <button
            aria-pressed={kind === "seed"}
            onClick={() => setKind("seed")}
          >
            Seed
          </button>
        </div>
      </section>
    </div>
  );
}
export function ReferenceHeldStudy() {
  return (
    <section className={`${styles.panel} ${styles.heldStudy}`}>
      <Label>In your hands / A digital expression</Label>
      <Image
        src="/imagery/planet-green-held-phone-brand.webp"
        alt="Generated photographic concept of a hand holding Planet Green's digital identity"
        width={1024}
        height={1536}
        sizes="(max-width:700px) 100vw, 800px"
      />
      <span className={styles.heldCaption}>
        Digital concept / The original signature, green palette and nature
        elements in one view.
      </span>
    </section>
  );
}
export function ReferenceWebsite() {
  return (
    <section
      id="website-study"
      className={`${styles.panel} ${styles.websiteStage}`}
    >
      <Label>Website / An identity in use</Label>
      <div className={styles.website}>
        <header>
          <BrandLogo />
          <nav aria-label="Website concept navigation">
            <a href="#brand-story">The idea</a>
            <a href="#elements">The elements</a>
            <a href="#portfolio">Our world</a>
          </nav>
        </header>
        <h2>CLOSER TO LIFE</h2>
        <div className={styles.websiteHero}>
          <Photo
            src="/imagery/cultural-story/telangana-fields.webp"
            alt="Green fields and rolling terrain as a landscape concept"
          />
          <div />
          <EngravedMark kind="hills" />
          <span>Planet Green / Move to Nature.</span>
        </div>
        <div className={styles.websiteIntro}>
          <h3>
            Designed for
            <br />a closer relationship
            <br />
            with nature.
          </h3>
          <p>{planetGreenCompany.purpose}</p>
        </div>
        <div className={styles.websitePractices}>
          {[
            {
              kind: "seed",
              name: "Cultivation",
              text: "Know the season, the soil and the care behind a harvest.",
            },
            {
              kind: "soil",
              name: "Nourishment",
              text: "Connect what is on the table with the land that sustains it.",
            },
            {
              kind: "life",
              name: "Belonging",
              text: "Make room for landscape, community and life around us.",
            },
          ].map((item) => (
            <article key={item.name}>
              <EngravedMark kind={item.kind as EngravedElement} />
              <h4>{item.name}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className={styles.websiteStatement}>
          A landscape is never a single thing.
          <br />
          Neither is our relationship with it.
        </div>
        <div className={styles.websiteFoot}>
          <BrandLogo />
          <a href="/applications/">Explore brand applications</a>
        </div>
      </div>
    </section>
  );
}
export function ReferenceSocialPair() {
  return (
    <div className={styles.pair}>
      <section className={`${styles.panel} ${styles.futurePoster}`}>
        <Photo src="/imagery/surface-leaf-veins.webp" />
        <div className={styles.futureVeil} />
        <span>Make room for the living world.</span>
        <h2>
          Grow a closer
          <br />
          connection.
        </h2>
        <p>One small act of care. A connection that grows.</p>
        <EngravedMark kind="life" />
      </section>
      <section
        id="business-card-mockup"
        className={`${styles.panel} ${styles.physicalPanel}`}
      >
        <PhysicalMockup kind="card" />
      </section>
    </div>
  );
}
export function ReferencePracticePair() {
  return (
    <div className={styles.pair}>
      <section
        id="booklet-mockup"
        className={`${styles.panel} ${styles.physicalPanel}`}
      >
        <PhysicalMockup kind="booklet" />
      </section>
      <section
        id="wayfinding-mockup"
        className={`${styles.panel} ${styles.physicalPanel}`}
      >
        <PhysicalMockup kind="wayfinding" />
      </section>
    </div>
  );
}
