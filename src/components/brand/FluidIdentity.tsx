"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Download,
  Pause,
  Play,
  Plus,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { DesignDecision } from "./DesignDecision";
import { EngravedMark, type EngravedElement } from "./EngravedMark";
import styles from "./FluidIdentity.module.css";
import { GivingBackStory } from "@/components/giving-back/GivingBackStory";
import { MasterBrandIllustration } from "@/components/giving-back/GivingBackArtwork";
import {
  ReferenceBriefPair,
  ReferenceAbout,
  ReferenceTouchpoints,
  ReferenceTypePalette,
  ReferenceDepth,
  ReferenceWorld,
  ReferenceDetailPair,
  ReferenceHeldStudy,
  ReferenceWebsite,
  ReferenceSocialPair,
  ReferencePracticePair,
} from "./NotisReferenceSections";

const elements: {
  id: EngravedElement;
  name: string;
  title: string;
  description: string;
}[] = [
  {
    id: "seed",
    name: "Seed",
    title: "The beginning of possibility.",
    description:
      "A small beginning, held in care. For new ideas and invitations.",
  },
  {
    id: "soil",
    name: "Soil",
    title: "The ground that gives.",
    description:
      "The living ground beneath every harvest. For nourishment and replenishment.",
  },
  {
    id: "hills",
    name: "Hills",
    title: "Room for a different rhythm.",
    description:
      "A landscape to live alongside. For place, community and belonging.",
  },
  {
    id: "life",
    name: "Life",
    title: "Everything grows together.",
    description:
      "Roots and veins, growing together. For the connections that sustain us.",
  },
];
const colors = [
  { name: "Forest", hex: "#156B37" },
  { name: "Field", hex: "#50AD47" },
  { name: "Leaf", hex: "#B5D5A1" },
  { name: "Mist", hex: "#E8F0E1" },
];
const voiceOptions = [
  {
    name: "Warm",
    title: "Come a little closer.",
    lead: "A meal. A seed. A little more attention.",
    text: "Invite people in. Begin with the familiar.",
  },
  {
    name: "Clear",
    title: "Care begins with a small act.",
    lead: "Grow produce. Prepare food. Replenish soil.",
    text: "Simple words. A clear way to take part.",
  },
  {
    name: "Rooted",
    title: "Begin with the ground.",
    lead: "Our lives are already part of the landscape.",
    text: "Speak of seasons, nourishment and belonging.",
  },
];
function Photo({
  src,
  alt = "",
  className = "",
  eager = false,
}: {
  src: string;
  alt?: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <Image
      className={`${styles.photo} ${className}`}
      src={src}
      alt={alt}
      fill
      sizes="(max-width:700px) 100vw, 65vw"
      loading={eager ? "eager" : "lazy"}
    />
  );
}
function Label({ children }: { children: React.ReactNode }) {
  return <p className={styles.label}>{children}</p>;
}
function Phone({
  kind = "seed",
  compact = false,
}: {
  kind?: EngravedElement;
  compact?: boolean;
}) {
  return (
    <div
      className={`${styles.phone} ${compact ? styles.compactPhone : ""}`}
      aria-label="Planet Green digital identity concept"
    >
      <div className={styles.phoneScreen}>
        <Photo src="/imagery/surface-leaf-veins.webp" />
        <div className={styles.phoneShade} />
        <div className={styles.phoneStatus}>
          <span>9:41</span>
          <span className={styles.island} />
          <span>•••</span>
        </div>
        <div className={styles.phoneHeader}>
          <BrandLogo tone="dark" />
          <SlidersHorizontal size={15} />
        </div>
        <div className={styles.phoneHeading}>
          Move to
          <br />
          Nature.
        </div>
        <div className={styles.phonePills}>
          <span>Communities</span>
          <span>Philosophy</span>
        </div>
        <div className={styles.phoneCards}>
          <div>
            <EngravedMark kind={kind} />
            <span>{elements.find((e) => e.id === kind)?.name}</span>
          </div>
          <div>
            <span>
              Indulge.
              <br />
              Involve.
              <br />
              Impact.
            </span>
            <Plus size={18} />
          </div>
        </div>
        <div className={styles.phoneNote}>
          <span>Our philosophy</span>
          <strong>
            Creating communities
            <br />
            for nature to live on.
          </strong>
          <div>
            <span>Move to Nature.</span>
            <span className={styles.roundControl}>
              <Plus size={16} />
            </span>
          </div>
        </div>
        <div className={styles.homeIndicator} />
      </div>
    </div>
  );
}
function FloatingTag({
  kind,
  title,
  subtitle,
  className = "",
}: {
  kind: EngravedElement;
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div className={`${styles.floatingTag} ${className}`}>
      <span className={styles.tagArt}>
        <EngravedMark kind={kind} />
      </span>
      <span>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </span>
      <span className={styles.tagPlus}>
        <Plus size={15} />
      </span>
    </div>
  );
}
export function FluidIdentity() {
  const [active, setActive] = useState(0);
  const [voice, setVoice] = useState(0);
  const [darkLogo, setDarkLogo] = useState(false);
  const [copied, setCopied] = useState("");
  const [sample, setSample] = useState("Move to Nature.");
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [detail, setDetail] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);
  const selected = elements[active];
  async function copy(hex: string) {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(hex);
    } catch {
      setCopied("Select the hex value to copy it.");
    }
  }
  function select(i: number) {
    setActive(i);
    setDetail(true);
  }
  return (
    <div className={styles.page} data-paused={paused || reduced}>
      <main id="main" className={styles.canvas}>
        <section id="brand-world" className={`${styles.panel} ${styles.hero}`}>
          <Label>Planet Green / Brand identity</Label>
          <div className={styles.coverHeading}>
            <h1>
              A closer life.
              <br />
              <span>Naturally.</span>
            </h1>
          </div>
          <div className={styles.coverScene}>
            <div className={styles.coverLandscape}>
              <Photo
                src="/imagery/cultural-story/telangana-fields.webp"
                alt="Green fields and a landscape close to nature"
                eager
              />
              <span>Move to Nature.</span>
            </div>
            <a
              className={styles.coverEarth}
              href="#giving-back"
              aria-label="Explore the act of giving back"
            >
              <MasterBrandIllustration
                className={styles.coverMaster}
                eager
                sizes="(max-width:700px) 130px, 210px"
              />
              <span>What nature gives, we return.</span>
            </a>
            <a
              className={styles.coverLife}
              href="#purpose"
              aria-label="Discover Planet Green’s purpose"
            >
              <EngravedMark kind="life" />
              <span>Connected by nature.</span>
            </a>
          </div>
          <div className={styles.coverFoot}>
            <span>Earth. Food. Life.</span>
            <a href="#purpose">
              Discover Planet Green <span aria-hidden="true">↓</span>
            </a>
            <button
              onClick={() => setPaused(!paused)}
              disabled={reduced}
              aria-pressed={paused}
            >
              {paused ? <Play size={12} /> : <Pause size={12} />}
              {reduced
                ? "Reduced motion enabled"
                : paused
                  ? "Play animation"
                  : "Pause animation"}
            </button>
          </div>
        </section>

        <ReferenceBriefPair />
        <ReferenceAbout />
        <GivingBackStory />

        <section
          id="identity"
          className={`${styles.panel} ${styles.signaturePanel}`}
          data-dark={darkLogo}
        >
          <div className={styles.panelTop}>
            <Label>02 / The signature</Label>
            <div
              className={styles.segmented}
              role="group"
              aria-label="Logo background"
            >
              <button
                onClick={() => setDarkLogo(false)}
                aria-pressed={!darkLogo}
              >
                Light
              </button>
              <button onClick={() => setDarkLogo(true)} aria-pressed={darkLogo}>
                Dark
              </button>
            </div>
          </div>
          <div className={styles.construction}>
            <div className={styles.constructionLines} />
            <div className={styles.seedHalo} />
            <EngravedMark kind="seed" />
          </div>
          <div className={styles.signatureLogo}>
            <BrandLogo tone={darkLogo ? "dark" : "light"} />
            <span>Move to Nature.</span>
          </div>
          <div className={styles.signatureFoot}>
            <p>
              The original signature anchors a new family of nature
              illustrations.
            </p>
            <a href="/brand/planet-green-original.svg" download>
              <Download size={15} /> Original logo SVG
            </a>
          </div>
        </section>
        <section
          id="elements"
          className={`${styles.panel} ${styles.elementPanel}`}
        >
          <div className={styles.panelTop}>
            <Label>03 / A visual language from the land</Label>
            <span className={styles.smallPill}>Seed. Soil. Hills. Life.</span>
          </div>
          <h2>
            An identity
            <br />
            with life in it.
          </h2>

          <div className={styles.chapterContext}>
            <p>
              A seed begins in soil. A landscape makes room for life. Four
              elements express one connected relationship.
            </p>
            <DesignDecision question="Why engraved detail?">
              Roots, veins and terrain reveal the connections behind growth.
              Fine lines give each subject its own character; a shared green
              treatment holds the family together. They extend the original logo
              into stories of beginnings, nourishment, place and connection.
            </DesignDecision>
          </div>
          <div className={styles.elementShelf}>
            {elements.map((element, i) => (
              <button
                key={element.id}
                onClick={() => select(i)}
                onPointerEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-label={`Explore ${element.name}`}
                aria-pressed={active === i}
              >
                <EngravedMark kind={element.id} />
                <span>{element.name}</span>
                <Plus size={15} />
              </button>
            ))}
          </div>
          <div className={styles.elementDetail} id="motif-inspector">
            <div className={styles.detailArtwork}>
              <EngravedMark kind={selected.id} />
            </div>
            <div aria-live="polite">
              <Label>{selected.name} / The visual idea</Label>
              <h3>{selected.title}</h3>
              <p>{selected.description}</p>
              <a href={`/graphics/engraved/${selected.id}.png`} download>
                <Download size={14} /> Download PNG
              </a>
              <div className={styles.elementNavigation}>
                <button onClick={() => setActive((active + 3) % 4)}>
                  Previous
                </button>
                <span>{selected.name}</span>
                <button onClick={() => setActive((active + 1) % 4)}>
                  Next
                </button>
              </div>
            </div>
          </div>
          {detail && (
            <div className={styles.detailNotice} role="status">
              <span>
                {selected.name} selected. Explore the full illustration below.
              </span>
              <button
                aria-label="Dismiss element selection"
                onClick={() => setDetail(false)}
              >
                <X size={14} />
              </button>
            </div>
          )}
        </section>

        <ReferenceTypePalette
          sample={sample}
          onSample={setSample}
          copied={copied}
          onCopy={copy}
        />
        <section id="voice" className={`${styles.panel} ${styles.voicePanel}`}>
          <div className={styles.panelTop}>
            <Label>05 / A voice for everyday life</Label>
            <span className={styles.smallPill}>The Planet Green voice</span>
          </div>
          <div className={styles.voiceHeading}>
            <h2>
              Words that bring
              <br />
              the world closer.
            </h2>
            <p>The same clarity in words: familiar, practical and welcoming.</p>
          </div>
          <div className={styles.voiceLayout}>
            <div className={styles.voiceSample} aria-live="polite">
              <div className={styles.contextToolbar} aria-hidden="true">
                <span>Aa</span>
                <span>
                  <Plus size={13} />
                </span>
                <span>
                  <SlidersHorizontal size={13} />
                </span>
              </div>
              <h3>{voiceOptions[voice].title}</h3>
              <p>
                <mark>{voiceOptions[voice].lead}</mark>
              </p>
              <p>{voiceOptions[voice].text}</p>
            </div>
            <div className={styles.voiceCard}>
              <EngravedMark kind={elements[voice].id} />
              <div role="group" aria-label="Brand voice examples">
                {voiceOptions.map((option, i) => (
                  <button
                    key={option.name}
                    aria-pressed={voice === i}
                    onClick={() => setVoice(i)}
                  >
                    <span className={styles.voiceRadio}>
                      {voice === i && <Check size={14} />}
                    </span>
                    {option.name}
                    <span>
                      {["An invitation", "A practical act", "A connection"][i]}
                    </span>
                  </button>
                ))}
              </div>
              <span>One voice. Many ways to connect.</span>
            </div>
          </div>
        </section>
        <ReferenceDepth />
        <ReferenceDetailPair />

        <ReferenceWorld />

        <section
          id="applications"
          className={`${styles.panel} ${styles.digitalPanel}`}
        >
          <div className={styles.panelTop}>
            <Label>08 / The identity in everyday use</Label>
            <Link className={styles.smallPill} href="/applications/">
              All applications
            </Link>
          </div>
          <div className={styles.digitalCopy}>
            <h2>Clear by nature.</h2>
            <p>
              The land holds the story.
              <br />
              The interface makes room for it.
            </p>
            <p>
              Photography gives a sense of place. Engravings carry meaning. Type
              and glass keep the next step clear.
            </p>
            <Link href="/explorer/" className={styles.darkButton}>
              Explore the full guidelines
            </Link>
          </div>
          <div className={styles.digitalDevice}>
            <Phone kind={selected.id} />
            <FloatingTag
              kind="life"
              title="Everything is connected."
              subtitle="A living identity, in your hands."
            />
          </div>
          <span className={styles.conceptCaption}>
            Illustrative interface concept / Brand application
          </span>
        </section>
        <ReferenceTouchpoints phone={<Phone kind={selected.id} />} />
        <ReferenceHeldStudy />
        <ReferenceWebsite />
        <ReferenceSocialPair />
        <ReferencePracticePair />
        <section className={`${styles.panel} ${styles.contextBoard}`}>
          <Photo src="/imagery/cultural-story/telangana-fields.webp" />
          <div className={styles.contextWash} />
          <div className={styles.panelTop}>
            <Label>Brand expression / A world of connections</Label>
            <span className={styles.smallPill}>
              Digital composition studies
            </span>
          </div>
          <div className={styles.contextWindows}>
            <div className={`${styles.glassSheet} ${styles.worldSheet}`}>
              <BrandLogo tone="dark" />
              <h3>
                Your closer
                <br />
                life begins here.
              </h3>
              <div className={styles.windowElements}>
                {elements.map((element, i) => (
                  <button
                    key={element.id}
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    aria-label={`Show ${element.name} in composition`}
                  >
                    <EngravedMark kind={element.id} />
                    <span>{element.name}</span>
                  </button>
                ))}
              </div>
              <span className={styles.sheetNote}>Earth. Food. Life.</span>
            </div>
            <div className={`${styles.glassSheet} ${styles.storySheet}`}>
              <div className={styles.sheetTop}>
                <span>Our philosophy</span>
                <span className={styles.roundControl}>
                  <Plus size={13} />
                </span>
              </div>
              <h3>
                A closer look
                <br />
                at {selected.name.toLowerCase()}.
              </h3>
              <p>{selected.description}</p>
              <EngravedMark kind={selected.id} />
              <span>Move to Nature.</span>
            </div>
            <div className={`${styles.glassSheet} ${styles.connectionSheet}`}>
              <div className={styles.contextToolbar} aria-hidden="true">
                <span>Aa</span>
                <span>
                  <Plus size={13} />
                </span>
                <span>
                  <SlidersHorizontal size={13} />
                </span>
              </div>
              <h3>
                Notice what
                <br />
                sustains you.
              </h3>
              <p>
                From the field to the table,
                <br />
                one living connection.
              </p>
              <FloatingTag
                kind="life"
                title="Make room for life."
                subtitle="One small act of care."
              />
              <div className={styles.sheetPalette} aria-hidden="true">
                {colors.map((color) => (
                  <span key={color.hex} style={{ background: color.hex }} />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.contextFoot}>
            <h2>
              Connected by nature.
              <br />
              Clear by design.
            </h2>
            <p>Living detail. Quiet space. One connected expression.</p>
          </div>
        </section>
        <section className={`${styles.panel} ${styles.posterPanel}`}>
          <Photo src="/imagery/elements-macro-leaves.webp" />
          <div className={styles.posterBlur} />
          <div className={styles.posterWindow}>
            <BrandLogo tone="dark" />
            <div className={styles.livingPosterArt}>
              <MasterBrandIllustration />
            </div>
            <h2>
              What sustains us
              <br />
              deserves our care.
            </h2>
            <span>Earth. Nourishment. Belonging.</span>
          </div>
        </section>
        <div className={styles.split}>
          <section className={`${styles.panel} ${styles.essentialsPanel}`}>
            <Label>The essentials / Ready to explore</Label>
            <div className={styles.essentialArt} aria-hidden="true">
              {Array.from({ length: 25 }, (_, i) => (
                <EngravedMark key={i} kind={elements[i % 4].id} />
              ))}
            </div>
            <h2>
              One living
              <br />
              system.
            </h2>
            <Link href="/explorer/" className={styles.lightButton}>
              Open component library
            </Link>
          </section>
          <section className={`${styles.panel} ${styles.finalePanel}`}>
            <div className={styles.finaleGlow} />
            <EngravedMark kind="seed" />
            <BrandLogo tone="light" />
            <h2>
              Move to
              <br />
              Nature.
            </h2>
            <p>A seed. A meal. A place to belong. Come a little closer.</p>
            <a href="#top" className={styles.lightButton}>
              Back to the beginning
            </a>
          </section>
        </div>

        <footer className={styles.footer}>
          <BrandLogo tone="dark" compact />
          <span>Planet Green / A living identity</span>
          <a href="/brand/planet-green-original.svg" download>
            Download original logo
          </a>
        </footer>
      </main>
    </div>
  );
}
