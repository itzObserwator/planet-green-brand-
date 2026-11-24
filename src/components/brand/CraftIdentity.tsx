"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Check, Copy, Download } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { EngravedMark } from "./EngravedMark";
import styles from "./CraftIdentity.module.css";

const motifs = [
  {
    id: "seed",
    title: "Seed",
    heading: "The beginning of possibility.",
    description:
      "A small beginning with a world inside it. Finely engraved seed casings and a germinating shoot hold the promise of everything that follows.",
    illustration: "seeds",
  },
  {
    id: "soil",
    title: "Soil",
    heading: "The ground that gives.",
    description:
      "Layers, roots and quiet exchanges. An engraved soil cutaway reveals the living ground that connects a grower, a harvest and a meal.",
    illustration: "soil",
  },
  {
    id: "hills",
    title: "Hills",
    heading: "Room for a different rhythm.",
    description:
      "A horizon shaped by time. Engraved rock seams, grasses and rolling terrain connect the identity with the landscape we grow in and live alongside.",
    illustration: "hills",
  },
  {
    id: "life",
    title: "Life",
    heading: "Everything grows together.",
    description:
      "One stem, many leaves. Fine leaf veins and delicate roots make the relationship between growth, nourishment and care visible.",
    illustration: "life",
  },
] as const;
const colors = [
  ["Forest", "#156B37"],
  ["Field", "#50AD47"],
  ["Leaf", "#B5D5A1"],
  ["Mist", "#E8F0E1"],
] as const;
function Photo({
  src,
  alt,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`${styles.photo} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 700px) 100vw, 70vw"
        loading={eager ? "eager" : "lazy"}
      />
    </div>
  );
}
function MotifGrid({
  compact = false,
  interactive = false,
  onSelect,
}: {
  compact?: boolean;
  interactive?: boolean;
  onSelect?: (index: number) => void;
}) {
  const [highlight, setHighlight] = useState<number | null>(null);
  return (
    <div
      className={`${styles.pattern} ${compact ? styles.compactPattern : ""} ${interactive ? styles.interactivePattern : ""}`}
      aria-label={interactive ? "Explore the modular motif grid" : undefined}
      aria-hidden={interactive ? undefined : true}
      onMouseLeave={() => setHighlight(null)}
    >
      {Array.from({ length: compact ? 12 : 24 }, (_, i) => {
        const index = (i * 3 + Math.floor(i / 6)) % 4;
        const art = (
          <span
            className={`${styles.tileComposition} ${i % 5 === 2 ? styles.fourfold : ""}`}
            style={
              {
                "--turn": `${[0, 90, 180, 0, 270, 0][i % 6]}deg`,
              } as CSSProperties
            }
          >
            {i % 5 === 2 ? (
              [0, 1, 2, 3].map((n) => (
                <EngravedMark key={n} kind={motifs[index].id} />
              ))
            ) : (
              <EngravedMark kind={motifs[index].id} />
            )}
          </span>
        );
        return interactive ? (
          <button
            key={i}
            className={styles.gridTile}
            aria-label={`Inspect ${motifs[index].title} arrangement ${i + 1}`}
            data-highlighted={highlight === i}
            onPointerEnter={() => setHighlight(i)}
            onFocus={() => setHighlight(i)}
            onBlur={() => setHighlight(null)}
            onClick={() => {
              setHighlight(i);
              onSelect?.(index);
            }}
          >
            {art}
          </button>
        ) : (
          <div key={i}>{art}</div>
        );
      })}
    </div>
  );
}
function AnimatedTile({ index }: { index: number }) {
  return (
    <span
      className={styles.animatedTile}
      style={{ "--tile-delay": `${index * -0.7}s` } as CSSProperties}
    >
      <span>
        <EngravedMark kind={motifs[index].id} />
      </span>
      <span className={styles.tileAlternate}>
        {[0, 1, 2, 3].map((n) => (
          <EngravedMark key={n} kind={motifs[index].id} />
        ))}
      </span>
    </span>
  );
}
function SignatureStage({
  dark = false,
  replay = 0,
}: {
  dark?: boolean;
  replay?: number;
}) {
  return (
    <div
      key={replay}
      className={`${styles.signatureAnimation} ${dark ? styles.signatureDark : ""}`}
    >
      <div className={styles.signatureMotifs}>
        {motifs.map((m, i) => (
          <span key={m.id} style={{ "--motif-order": i } as CSSProperties}>
            <EngravedMark kind={m.id} />
          </span>
        ))}
      </div>
      <div className={styles.signatureLogo}>
        <BrandLogo tone={dark ? "dark" : "light"} />
      </div>
      <span className={styles.signatureTagline}>Move to Nature.</span>
    </div>
  );
}
function Book({ second = false }: { second?: boolean }) {
  return (
    <div className={`${styles.book} ${second ? styles.secondBook : ""}`}>
      <MotifGrid compact />
      <span>planet green</span>
      <h3>
        Field
        <br />
        notes.
      </h3>
      <p>Land. Nourishment. Life.</p>
    </div>
  );
}
export function CraftIdentity() {
  const [active, setActive] = useState(0);
  const [inspectorOpen, setInspectorOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [replay, setReplay] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(preference.matches);
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);
  const pageRef = useRef<HTMLDivElement>(null);
  const contextRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: contextRef,
    offset: ["start 80%", "end 35%"],
  });
  const boxLines = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const boxPattern = useTransform(scrollYProgress, [0.35, 0.7], [0, 1]);
  const boxRotation = useTransform(scrollYProgress, [0, 1], [-7, 2]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.setAttribute("data-seen", "true");
        }),
      { threshold: 0.12 },
    );
    pageRef.current
      ?.querySelectorAll("section")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const [copied, setCopied] = useState("");
  const [slide, setSlide] = useState(0);
  const dragStart = useRef<number | null>(null);
  const motif = motifs[active];
  async function copy(hex: string) {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(hex);
    } catch {
      setCopied("Select the hex value to copy it.");
    }
  }
  function choose(i: number) {
    setActive(i);
    setInspectorOpen(true);
    window.requestAnimationFrame(() =>
      document.getElementById("motif-inspector")?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "center",
      }),
    );
  }
  return (
    <div
      className={styles.page}
      ref={pageRef}
      data-paused={paused || !!reducedMotion}
    >
      <main id="main">
        <section id="brand-world" className={styles.hero}>
          <button
            className={styles.motionControl}
            onClick={() => setPaused(!paused)}
            aria-pressed={paused}
            disabled={!!reducedMotion}
          >
            {reducedMotion
              ? "Reduced motion enabled"
              : paused
                ? "Play animation"
                : "Pause animation"}
          </button>
          <div className={styles.heroCopy}>
            <p className={styles.label}>Planet Green / Brand identity</p>
            <h1>
              A living identity,
              <br />
              rooted in the earth
              <br />
              and the Indian way
              <br />
              of growing together.
            </h1>
            <dl className={styles.projectMeta}>
              <div>
                <dt>Brand</dt>
                <dd>Planet Green</dd>
              </div>
              <div>
                <dt>Idea</dt>
                <dd>Move to Nature.</dd>
              </div>
              <div>
                <dt>Our world</dt>
                <dd>Land & life</dd>
              </div>
              <div>
                <dt>The system</dt>
                <dd>
                  Identity
                  <br />
                  Applications
                </dd>
              </div>
            </dl>
          </div>
          <div className={styles.heroTiles}>
            {motifs.map((m, i) => (
              <button
                key={m.id}
                onClick={() => choose(i)}
                aria-label={`Explore ${m.title}`}
              >
                <AnimatedTile index={i} />
              </button>
            ))}
          </div>
        </section>
        <section id="purpose" className={styles.opening}>
          <p>
            Planet Green brings natural farming, nourishment and
            nature-connected living into one story. An identity that makes our
            relationship with the land feel present in everyday life.
          </p>
          <Photo
            src="/imagery/hands-soil-editorial.webp"
            alt="Hands holding living soil, an editorial concept for care of the land"
            eager
          />
        </section>
        <section ref={contextRef} className={styles.context}>
          <div className={styles.contextArt}>
            <div className={styles.packageCanvas}>
              <motion.div
                className={styles.evolvingBox}
                style={{ rotate: reducedMotion ? 0 : boxRotation }}
              >
                <span className={styles.boxSide} />
                <span className={styles.boxFront} />
                <motion.div
                  className={styles.boxLines}
                  style={{ opacity: reducedMotion ? 1 : boxLines }}
                />
                <motion.div
                  className={styles.boxPrint}
                  style={{ opacity: reducedMotion ? 1 : boxPattern }}
                >
                  <MotifGrid compact />
                </motion.div>
                <BrandLogo />
              </motion.div>
            </div>
            <span className={styles.caption}>
              A blank surface. A framework. A living identity.
            </span>
          </div>
          <div className={styles.contextCopy}>
            <h2>
              Close to the earth.
              <br />
              Rooted in Indian life.
              <br />
              Expressed for today.
            </h2>
            <p>
              A seed saved for another season. A meal prepared with care. A home
              that belongs to its landscape. Our connection with nature lives in
              these everyday acts.
            </p>
            <h2>
              A world within
              <br />
              every element.
            </h2>
            <p>
              Our visual language begins with what sustains us: seeds, soil,
              hills and life. Each carries a story of its own. Together, they
              form a family that can move between a field, a page and a place.
            </p>
            <p>
              The existing Planet Green signature holds the system together. The
              supporting motifs give it rhythm, texture and room to grow.
            </p>
          </div>
        </section>
        <section id="elements" className={styles.motifStory}>
          <p className={styles.centerIntro}>
            Our elements come from the living landscape.
            <br />
            Familiar forms, brought together through a modern graphic system.
          </p>
          <div className={styles.offsetPanels}>
            <div className={styles.squarePanel}>
              {motifs.map((m) => (
                <div key={m.id}>
                  <AnimatedTile index={motifs.indexOf(m)} />
                </div>
              ))}
            </div>
            <div className={styles.offsetSecond}>
              <div className={styles.squarePanel}>
                {motifs
                  .slice()
                  .reverse()
                  .map((m) => (
                    <div key={m.id}>
                      <AnimatedTile index={motifs.indexOf(m)} />
                    </div>
                  ))}
              </div>
              <p>
                One vocabulary. Different arrangements.
                <br />
                Scale, repetition and contrast let the same elements tell a new
                story every time.
              </p>
            </div>
          </div>
          <div className={styles.centerHeading}>
            <h2>
              Many elements,
              <br />
              <em>one living system.</em>
            </h2>
            <p>
              A modular grid makes room for individual expression.
              <br />
              Motifs can stand alone, gather into patterns,
              <br />
              or frame the stories of land and life.
            </p>
          </div>
          <MotifGrid interactive onSelect={choose} />
          <div
            id="motif-inspector"
            className={styles.inspector}
            hidden={!inspectorOpen}
          >
            <div
              className={styles.inspectorTabs}
              role="group"
              aria-label="Choose a nature element"
            >
              {motifs.map((m, i) => (
                <button
                  key={m.id}
                  aria-pressed={active === i}
                  onClick={() => setActive(i)}
                >
                  {m.title}
                </button>
              ))}
            </div>
            <div className={styles.inspectorBody}>
              <EngravedMark kind={motif.id} />
              <div aria-live="polite">
                <p className={styles.label}>{motif.title} / The visual idea</p>
                <h3>{motif.heading}</h3>
                <p>{motif.description}</p>
                <a href={`/graphics/engraved/${motif.id}.png`} download>
                  <Download size={15} /> Download illustration
                </a>
              </div>
            </div>
            <div className={styles.inspectorControls}>
              <button onClick={() => setActive((active + 3) % 4)}>
                Previous
              </button>
              <span>{motif.title}</span>
              <button onClick={() => setActive((active + 1) % 4)}>Next</button>
            </div>
          </div>
        </section>
        <section id="identity" className={styles.logoSection}>
          <div className={styles.logoIntro}>
            <h2>The signature.</h2>
            <p>
              The original Planet Green logo connects every expression of the
              brand. Its organic forms and familiar greens remain the anchor of
              the identity.
            </p>
            <Link href="/explorer/">Explore the full guidelines</Link>
          </div>
          <div className={styles.logoStage}>
            <SignatureStage replay={replay} />
            <button
              className={styles.replayControl}
              onClick={() => setReplay(replay + 1)}
            >
              Replay logo reveal
            </button>
          </div>
          <p className={styles.logoFoot}>
            A consistent signature. An expressive supporting world.
            <br />
            The nature motifs adapt to each story, while the original logo
            brings the family together.
          </p>
          <a
            className={styles.download}
            href="/brand/planet-green-original.svg"
            download
          >
            <Download size={16} /> Download original logo
          </a>
        </section>
        <section className={styles.paletteSection}>
          <div className={styles.colorIntro}>
            <div className={styles.colorLeaves} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <h2>
                The colours
                <br />
                of belonging.
              </h2>
              <p>
                Forest, Field, Leaf and Mist. The original greens connect the
                deepest shade of the landscape with the lightness of new growth.
              </p>
              <p>
                Space, contrast and natural surfaces allow each colour to find
                its own expression.
              </p>
            </div>
          </div>
          <div className={styles.swatches}>
            {colors.map(([name, hex]) => (
              <button
                key={hex}
                onClick={() => copy(hex)}
                aria-label={`Copy ${name} ${hex}`}
              >
                <span style={{ background: hex }} />
                <strong>{name}</strong>
                <span>
                  {hex}{" "}
                  {copied === hex ? <Check size={13} /> : <Copy size={13} />}
                </span>
              </button>
            ))}
          </div>
          <p className={styles.copyStatus} role="status">
            {copied.startsWith("#")
              ? `${copied} copied to clipboard`
              : copied || "Select a colour to copy its hex value."}
          </p>
        </section>
        <section id="typography" className={styles.typography}>
          <h2>
            What sustains us
            <br />
            deserves our care.
            <br />
            <em>
              A closer life begins
              <br />
              with the earth.
            </em>
          </h2>
          <div>
            <p>
              <strong>Outfit</strong> carries the whole identity—from expressive
              headlines to clear, everyday details. Regular, Medium and Semibold
              create a consistent hierarchy.
            </p>
            <Link href="/explorer/?tab=guidelines#typography">
              Explore typography
            </Link>
          </div>
          <div
            className={styles.bookScene}
            aria-label="Planet Green field notes publication concept"
          >
            <Book second />
            <Book />
          </div>
        </section>
        <section id="applications" className={styles.applicationSection}>
          <div
            className={styles.applicationTrack}
            onPointerDown={(event) => {
              dragStart.current = event.clientX;
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerUp={(event) => {
              if (dragStart.current !== null) {
                const distance = event.clientX - dragStart.current;
                if (Math.abs(distance) > 45)
                  setSlide((current) =>
                    Math.max(0, Math.min(2, current + (distance < 0 ? 1 : -1))),
                  );
              }
              dragStart.current = null;
            }}
            onPointerCancel={() => {
              dragStart.current = null;
            }}
            style={{ "--slide": slide } as CSSProperties}
          >
            <article className={styles.wrapStudy}>
              <div className={styles.package}>
                <MotifGrid compact />
                <BrandLogo />
                <span>A little closer to nature.</span>
              </div>
              <span className={styles.studyCaption}>
                Packaging / Concept study
              </span>
            </article>
            <article className={styles.cardStudy}>
              <div>
                <EngravedMark kind="life" />
                <span>Planet Green</span>
                <strong>
                  Grow a<br />
                  closer life.
                </strong>
              </div>
              <div>
                <EngravedMark kind="seed" />
                <span>Move to Nature.</span>
              </div>
              <span className={styles.studyCaption}>
                Correspondence / Concept study
              </span>
            </article>
            <article className={styles.paperStudy}>
              <div>
                <EngravedMark kind="hills" />
                <h3>
                  Belong to
                  <br />
                  something
                  <br />
                  <em>living.</em>
                </h3>
                <BrandLogo />
              </div>
              <span className={styles.studyCaption}>
                Editorial / Concept study
              </span>
            </article>
            <article className={styles.wrapStudy}>
              <div className={styles.package}>
                <MotifGrid compact />
                <BrandLogo />
                <span>Land. Nourishment. Life.</span>
              </div>
              <span className={styles.studyCaption}>A system made to grow</span>
            </article>
          </div>
          <div className={styles.galleryControls}>
            <span>Identity in everyday life</span>
            <div>
              <button
                disabled={slide === 0}
                onClick={() => setSlide(slide - 1)}
              >
                Previous
              </button>
              <button
                disabled={slide === 2}
                onClick={() => setSlide(slide + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </section>
        <section className={styles.darkSection}>
          <p className={styles.darkLead}>
            The grid gives us structure.
            <br />
            The elements give us expression.
            <br />
            Together, they bring the same living identity
            <br />
            to the things we hold, share and inhabit.
          </p>
          <div className={styles.craftDemos}>
            <div
              className={styles.stampDemo}
              aria-label="Animated concept of a nature motif being stamped on paper"
            >
              <div className={styles.stampPaper}>
                <MotifGrid compact />
                <BrandLogo />
              </div>
              <div className={styles.stampBlock}>
                <EngravedMark kind="life" />
              </div>
              <span>Impression / A digital process study</span>
            </div>
            <div
              className={styles.assemblyDemo}
              aria-label="Animated concept of nature motifs composing into a printed surface"
            >
              <MotifGrid compact />
              <span>Composition / A digital process study</span>
            </div>
          </div>
          <div className={styles.materialHeading}>
            <h2>Made to be lived with.</h2>
            <p>
              From a simple printed page to a place in the landscape. Clear
              forms, natural imagery and considered materials carry the story
              into daily life.
            </p>
          </div>
          <div className={styles.materialGrid}>
            <div className={styles.materialTile}>
              <EngravedMark kind="soil" />
              <span>Care for the ground.</span>
            </div>
            <div className={styles.materialTile}>
              <MotifGrid compact />
              <span>A pattern of connections.</span>
            </div>
            <div className={styles.signStudy}>
              <Photo
                src="/imagery/farm-wayfinding-display.webp"
                alt="A signboard in a green farm setting, used as an illustrative wayfinding concept"
              />
              <div className={styles.signLettering}>
                <BrandLogo tone="dark" />
                <span>Grow a closer life.</span>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.process}>
          <div className={styles.processIntro}>
            <h2>
              From the land.
              <br />
              <em>Into the details.</em>
            </h2>
            <p>
              Our engraved nature elements carry the same detailed visual
              language through every composition: the contours of hills, the
              branching of roots, the structure of a leaf, the casing of a seed.
            </p>
          </div>
          <Photo
            src="/imagery/cultural-story/telangana-fields.webp"
            alt="Illustrative green fields and rolling terrain in the Deccan landscape"
            className={styles.landscapePhoto}
          />
          <p className={styles.processNote}>
            A landscape is never a single thing. It is a relationship between
            many things. The identity follows that same logic, from its smallest
            mark to its broadest composition.
          </p>
          <div className={styles.botanicalPair}>
            {[motifs[2], motifs[3]].map((m) => (
              <figure key={m.id}>
                <Image
                  src={`/graphics/engraved/${m.id}.webp`}
                  width={700}
                  height={700}
                  alt={`Detailed ${m.title.toLowerCase()} illustration from Planet Green's existing nature set`}
                  sizes="(max-width:700px) 90vw, 45vw"
                />
                <figcaption>{m.title} / Botanical study</figcaption>
              </figure>
            ))}
          </div>
          <div className={styles.processDetail}>
            <Photo
              src="/imagery/finale-stationery.webp"
              alt="Existing Planet Green stationery concept showing the identity on physical materials"
            />
            <p>
              From a detailed study to a simple impression.
              <br />A shared visual language connects each surface.
            </p>
          </div>
          <div className={styles.brandPair}>
            <SignatureStage replay={replay} />
            <SignatureStage dark replay={replay} />
          </div>
          <div className={styles.mealRow}>
            <Photo
              src="/imagery/cultural-story/shared-rice-meal.webp"
              alt="A shared rice meal, an illustrative connection between the field and the table"
            />
            <div>
              <h2>
                Culture lives
                <br />
                in the everyday.
              </h2>
              <p>
                In the field, at the table, through generations. Indian identity
                comes through our relationship with nourishment and the land,
                expressed with the space and clarity of modern design.
              </p>
            </div>
          </div>
          <div className={styles.finalPoster}>
            <div className={styles.posterSheet}>
              <MotifGrid />
              <div>
                <BrandLogo />
                <span>Move to Nature.</span>
              </div>
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          <div>
            <p className={styles.label}>Explore the living identity</p>
            <Link href="/applications/">Planet Green, out in the world.</Link>
          </div>
          <Link href="/explorer/">Component library</Link>
          <a href="#top">Back to top</a>
          <div className={styles.footerInvitation}>
            <Link href="/explorer/">Move to Nature.</Link>
            <div>
              <p>Land. Nourishment. Life.</p>
              <p>A living identity for Planet Green.</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <BrandLogo tone="dark" compact />
            <span>Planet Green / A living brand system</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
