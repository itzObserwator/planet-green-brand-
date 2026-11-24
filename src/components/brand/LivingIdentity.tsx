"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Copy, Download, Plus } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { brandContext } from "@/lib/brand-context";
import styles from "./LivingIdentity.module.css";

const elements = [
  {
    id: "seed",
    name: "Seed",
    word: "The beginning of possibility.",
    description:
      "A small beginning with a world inside it. The seed gives our identity its essential shape: two generous curves meeting at a point.",
    context: "Seeds saved across seasons. Knowledge passed across generations.",
    color: "#e8efc9",
    ink: "#426326",
    action: "Plant a possibility",
    image: "/graphics/hand-drawn/illustrated/seeds.webp",
    download: "/graphics/hand-drawn/illustrated/seeds.png",
  },
  {
    id: "soil",
    name: "Soil",
    word: "The ground that gives.",
    description:
      "Layers, roots and quiet exchanges. Soil becomes a rhythm of flowing lines, grounding our compositions and connecting every part of the story.",
    context: "The field, the grower and the food on our table are connected.",
    color: "#eee1d1",
    ink: "#75503b",
    action: "Return care to the earth",
    image: "/graphics/hand-drawn/illustrated/soil.webp",
    download: "/graphics/hand-drawn/illustrated/soil.png",
  },
  {
    id: "hills",
    name: "Hills",
    word: "Room for a different rhythm.",
    description:
      "A horizon shaped by time. Repeated seed curves become rolling contours: a landscape that holds our stories and makes room for people.",
    context: "The contours of the Deccan. A landscape to live alongside.",
    color: "#dae9dd",
    ink: "#276542",
    action: "Find a closer way to live",
    image: "/graphics/hand-drawn/illustrated/hills.webp",
    download: "/graphics/hand-drawn/illustrated/hills.png",
  },
  {
    id: "life",
    name: "Life",
    word: "Everything grows together.",
    description:
      "One stem, many leaves. The seed opens into growth, expressing the relationship between nourishment, community and the world around us.",
    context: "Care becomes visible in what we grow, prepare and share.",
    color: "#e9edb8",
    ink: "#4b642e",
    action: "Make room for life",
    image: "/graphics/hand-drawn/illustrated/life.webp",
    download: "/graphics/hand-drawn/illustrated/life.png",
  },
] as const;
type ElementName = (typeof elements)[number]["id"];

export function LivingMark({
  kind,
  className = "",
}: {
  kind: ElementName;
  className?: string;
}) {
  return (
    <svg
      className={`${styles.mark} ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {kind === "seed" && (
        <>
          <path d="M100 160C24 130 35 58 100 28c65 30 76 102 0 132Z" />
          <path d="M100 160V53M100 125c-23-3-34-17-36-37 23 3 36 16 36 37Zm0-28c23-3 34-17 36-37-23 3-36 16-36 37Z" />
          <path d="M76 173h48" />
        </>
      )}
      {kind === "soil" && (
        <>
          <path d="M25 94c30-14 44 9 75 0s48-14 75 0M25 116c30-14 44 9 75 0s48-14 75 0M25 140c30-14 44 9 75 0s48-14 75 0M25 163c30-14 44 9 75 0s48-14 75 0M100 93V49m0 22C75 72 65 58 65 43c23 0 35 10 35 28Zm0-14c0-20 15-29 35-29 0 20-12 29-35 29Z" />
        </>
      )}
      {kind === "hills" && (
        <>
          <path d="M19 140c26-10 30-62 64-62s34 62 98 62M19 162c30-5 38-48 68-48s41 48 94 48M19 119c19-13 37-72 68-72s48 72 94 72" />
          <circle cx="145" cy="47" r="15" />
        </>
      )}
      {kind === "life" && (
        <>
          <path d="M100 173V37M100 144c-36 0-53-19-53-49 34 0 53 19 53 49Zm0-36c36 0 53-19 53-49-34 0-53 19-53 49ZM100 80C75 77 65 60 68 38c24 3 35 18 32 42Z" />
          <path d="m65 114 35 30m36-66-36 30" />
        </>
      )}
    </svg>
  );
}
function Landscape({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`${styles.landscape} ${className}`}
      viewBox="0 0 1440 420"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 240C180 240 205 62 413 98c179 31 234 186 412 137S1162 35 1440 127V420H0Z"
        fill="#c9dca5"
      />
      <path
        d="M0 302c250-205 401 143 691-18S1158 153 1440 269v151H0Z"
        fill="#7baf6a"
      />
      <path
        d="M0 371c274-160 458-23 689-19s469-172 751-28v96H0Z"
        fill="#156b37"
      />
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M-100 ${285 + i * 22}C190 ${132 + i * 22} 315 ${371 + i * 22} 606 ${291 + i * 22}S1040 ${121 + i * 22} 1540 ${264 + i * 22}`}
          stroke="#f5f8e9"
          strokeOpacity=".38"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
export function LivingIdentity() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState("");
  const item = elements[active];
  async function copyColor(hex: string) {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(hex);
      window.setTimeout(() => setCopied(""), 1800);
    } catch {
      setCopied("Unable to copy. Select the hex value instead.");
    }
  }
  return (
    <div className={styles.page}>
      <main id="main">
        <section className={styles.hero} id="brand-world">
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            <div className={styles.heroEmblem}>
              <span />
              <LivingMark kind="seed" />
              <span />
            </div>
            <p className={styles.eyebrow}>Planet Green · A living identity</p>
            <h1>
              Rooted in earth.
              <br />
              <em>Made for life.</em>
            </h1>
            <p className={styles.heroDescription}>
              A closer relationship with the land.
              <br />A more thoughtful way to grow, nourish and live.
            </p>
            <div className={styles.actions}>
              <a href="#elements" className={styles.primary}>
                Explore the identity
              </a>
              <a href="#purpose" className={styles.secondary}>
                Where it begins
              </a>
            </div>
          </div>
          <div className={styles.heroFoot}>
            <span>Move to Nature.</span>
            <span>Land. Nourishment. Belonging.</span>
          </div>
          <Landscape />
        </section>
        <nav className={styles.chapterNav} aria-label="Identity chapters">
          <a href="#purpose">Our roots</a>
          <a href="#elements">The living language</a>
          <a href="#growth">Connected by nature</a>
          <a href="#identity">The essentials</a>
          <a href="#applications">Out in the world</a>
        </nav>
        <section id="purpose" className={`${styles.section} ${styles.intro}`}>
          <div>
            <p className={styles.eyebrow}>Our roots</p>
            <h2>
              We don’t live apart
              <br />
              from nature.
              <br />
              <em>We live because of it.</em>
            </h2>
          </div>
          <div className={styles.introCopy}>
            <LivingMark kind="life" />
            <p>
              A meal begins with a seed. A seed depends on soil. A home belongs
              to a landscape. Every part of our life is already connected.
            </p>
            <p>
              Planet Green brings that relationship into everyday
              experience—through natural farming, nourishment and places that
              make room for life.
            </p>
            <a
              href={brandContext.founder.source}
              target="_blank"
              rel="noreferrer"
            >
              Discover where the story took root
            </a>
          </div>
        </section>
        <section
          id="elements"
          className={`${styles.section} ${styles.elementsSection}`}
        >
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>The living language</p>
              <h2>
                Four forms.
                <br />
                <em>One connected world.</em>
              </h2>
            </div>
            <p>
              Drawn from the land we belong to.
              <br />A family of shapes that carries our story,
              <br />
              from the smallest detail to the widest horizon.
            </p>
          </div>
          <div className={styles.elementGrid}>
            {elements.map((el, i) => (
              <button
                key={el.id}
                className={styles.elementCard}
                style={
                  {
                    "--element-color": el.color,
                    "--element-ink": el.ink,
                  } as CSSProperties
                }
                onClick={() => {
                  setActive(i);
                  document
                    .getElementById("growth")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                aria-label={`Explore ${el.name}`}
              >
                <span className={styles.cardArt}>
                  <LivingMark kind={el.id} />
                  <span className={styles.cardOrbit} />
                </span>
                <span className={styles.cardBody}>
                  <span className={styles.cardName}>
                    {el.name}
                    <Plus size={20} />
                  </span>
                  <span className={styles.cardDescription}>{el.word}</span>
                  <span className={styles.cardReveal}>
                    Explore the connection
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>
        <section
          id="growth"
          className={`${styles.section} ${styles.growthSection}`}
        >
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>Connected by nature</p>
              <h2>
                One thing becomes
                <br />
                <em>the next.</em>
              </h2>
            </div>
            <p>
              The same curve becomes a seed, a leaf,
              <br />a contour, a field. An identity that grows
              <br />
              from a shared beginning.
            </p>
          </div>
          <div
            className={styles.growthBoard}
            style={
              {
                "--element-color": item.color,
                "--element-ink": item.ink,
              } as CSSProperties
            }
          >
            <div className={styles.growthArt} key={item.id}>
              <div className={styles.growthRings} />
              <LivingMark kind={item.id} />
              <span>{item.context}</span>
              {item.id === "hills" && <Landscape />}
            </div>
            <div className={styles.growthCopy}>
              <div
                className={styles.growthChoices}
                role="group"
                aria-label="Choose a nature element"
              >
                {elements.map((el, i) => (
                  <button
                    key={el.id}
                    aria-pressed={active === i}
                    onClick={() => setActive(i)}
                  >
                    {el.name}
                  </button>
                ))}
              </div>
              <div aria-live="polite" className={styles.growthText}>
                <p className={styles.eyebrow}>{item.name} / The visual idea</p>
                <h3>{item.word}</h3>
                <p>{item.description}</p>
                <span className={styles.practice}>{item.action}.</span>
              </div>
              <div className={styles.stepControls}>
                <button onClick={() => setActive((active + 3) % 4)}>
                  Previous
                </button>
                <span>{item.name}</span>
                <button onClick={() => setActive((active + 1) % 4)}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.landStory}>
          <Image
            src="/imagery/cultural-story/telangana-fields.webp"
            alt="An illustrative landscape of green fields and rolling hills"
            fill
            sizes="100vw"
          />
          <div />
          <p className={styles.eyebrow}>
            An Indian relationship with the earth
          </p>
          <h2>
            In the field.
            <br />
            At the table.
            <br />
            <em>Through generations.</em>
          </h2>
          <p>
            The rhythm of sowing and sharing. The care carried in a home-cooked
            meal. Our sense of belonging begins with these everyday connections.
          </p>
        </section>
        <section
          id="identity"
          className={`${styles.section} ${styles.identitySection}`}
        >
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>The essentials</p>
              <h2>
                Grounded in green.
                <br />
                <em>Open to possibility.</em>
              </h2>
            </div>
            <Link href="/explorer/">Explore the full guidelines</Link>
          </div>
          <div className={styles.identityGrid}>
            <div className={styles.logoBoard}>
              <span className={styles.eyebrow}>Our original signature</span>
              <BrandLogo />
              <span>Move to Nature.</span>
              <a href="/brand/planet-green-original.svg" download>
                <Download size={16} /> Download logo SVG
              </a>
            </div>
            <div className={styles.typeBoard}>
              <p className={styles.eyebrow}>A thoughtful voice</p>
              <span className={styles.typeSample}>
                Naturally
                <br />
                <em>connected.</em>
              </span>
              <p>
                Georgia brings warmth and expression.
                <br />
                Outfit brings clarity to every interaction.
              </p>
              <Link href="/explorer/?tab=guidelines#typography">
                Meet the typography
              </Link>
            </div>
          </div>
          <div className={styles.palette}>
            {[
              ["Forest", "#156B37"],
              ["Field", "#50AD47"],
              ["Leaf", "#B5D5A1"],
              ["Mist", "#E8F0E1"],
            ].map(([name, hex]) => (
              <button
                key={hex}
                onClick={() => copyColor(hex)}
                style={{
                  background: hex,
                  color: name === "Forest" ? "#fff" : "#12321e",
                }}
                aria-label={`Copy ${name} ${hex}`}
              >
                <span>{name}</span>
                <span>
                  {hex}{" "}
                  {copied === hex ? <Check size={15} /> : <Copy size={15} />}
                </span>
              </button>
            ))}
          </div>
          <span className={styles.copyStatus} role="status">
            {copied.startsWith("#")
              ? `${copied} copied to clipboard`
              : copied || "Select a colour to copy its hex value."}
          </span>
        </section>
        <section className={`${styles.section} ${styles.drawings}`}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>A closer look</p>
              <h2>
                Simple at a glance.
                <br />
                <em>Rich in the details.</em>
              </h2>
            </div>
            <p>
              Our symbols lead. Botanical studies add
              <br />
              texture, depth and a closer encounter
              <br />
              with the living world.
            </p>
          </div>
          <div className={styles.drawingGrid}>
            {elements.map((el) => (
              <article key={el.id}>
                <div>
                  <Image
                    src={el.image}
                    alt={`Detailed botanical illustration of ${el.name.toLowerCase()}`}
                    width={600}
                    height={600}
                    sizes="(max-width: 700px) 45vw, 23vw"
                  />
                </div>
                <h3>{el.name}</h3>
                <a href={el.download} download>
                  <Download size={14} /> Download illustration
                </a>
              </article>
            ))}
          </div>
        </section>
        <section
          id="applications"
          className={`${styles.section} ${styles.applications}`}
        >
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>Out in the world</p>
              <h2>
                A living identity.
                <br />
                <em>In everyday life.</em>
              </h2>
            </div>
            <Link href="/applications/">View all applications</Link>
          </div>
          <div className={styles.applicationGrid}>
            <Link href="/applications/" className={styles.poster}>
              <span className={styles.eyebrow}>
                Field notes / A communication study
              </span>
              <LivingMark kind="life" />
              <h3>
                Good things
                <br />
                grow from
                <br />
                <em>the ground up.</em>
              </h3>
              <span>Planet Green · Move to Nature.</span>
            </Link>
            <Link href="/applications/" className={styles.applicationPhoto}>
              <Image
                src="/imagery/finale-stationery.webp"
                alt="Planet Green stationery concept showing the identity on physical materials"
                fill
                sizes="(max-width:700px) 100vw, 50vw"
              />
              <span>
                Small details. A shared identity.
                <Plus size={18} />
              </span>
            </Link>
          </div>
        </section>
        <section className={`${styles.section} ${styles.family}`}>
          <p className={styles.eyebrow}>
            One philosophy. Many ways to take part.
          </p>
          <div>
            {brandContext.ecosystem.map((brand, i) => (
              <a
                href={brand.href}
                key={brand.name}
                target="_blank"
                rel="noreferrer"
              >
                <LivingMark kind={elements[i].id} />
                <h3>{brand.name}</h3>
                <p>
                  {
                    [
                      "Cultivation & farmland living",
                      "Home, landscape & community",
                      "Traditional grains & nourishment",
                      "A route to farmland",
                    ][i]
                  }
                </p>
              </a>
            ))}
          </div>
        </section>
        <section className={styles.finale}>
          <LivingMark kind="seed" />
          <p className={styles.eyebrow}>Planet Green</p>
          <h2>
            Come closer.
            <br />
            <em>There’s life here.</em>
          </h2>
          <a href="/explorer/" className={styles.primary}>
            Explore the brand library
          </a>
          <Landscape />
        </section>
        <footer className={styles.footer}>
          <BrandLogo compact />
          <span>Rooted in earth. Made for life.</span>
          <a href="#top">Back to the beginning</a>
        </footer>
      </main>
    </div>
  );
}
