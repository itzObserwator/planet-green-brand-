"use client";
import { Component, ReactNode, useState, type CSSProperties } from "react";
import Image from "next/image";
import { brandImagery, libraryImagery } from "@/lib/brand-imagery";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Leaf,
  Search,
  SlidersHorizontal,
  Sun,
  Moon,
  Box,
} from "lucide-react";
import { componentDocs } from "@/lib/component-docs";
import { palette, sections } from "@/lib/brand-tokens";
import { copyText, downloadText } from "@/lib/utils";
import { BrandLogo } from "./BrandLogo";
import { CollectionFooter } from "./CollectionChrome";
import { LibraryHero } from "./LibraryHero";
import { GivingBackLibrary } from "@/components/giving-back/GivingBackLibrary";
import {
  GlassBadge,
  GlassButton,
  GlassCard,
  GlassImageFrame,
  GlassModal,
} from "@/components/glass/GlassUI";
import {
  ContourLines,
  GradientOverlay,
  HalftonePattern,
  NatureMask,
  OrganicShape,
} from "@/components/graphics/Patterns";
import { ColorPalette } from "./ColorPalette";
import { TypographyShowcase } from "./TypographyShowcase";
import { BrandApplications } from "@/components/sections/BrandApplications";
const Scene = dynamic(() => import("@/components/three/OrganicHeroScene"), {
  ssr: false,
  loading: () => <p className="scene-loading">Loading the 3D study…</p>,
});
class SceneBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <p className="scene-loading">
        3D is unavailable on this device. The image-based hero remains
        available.
      </p>
    ) : (
      this.props.children
    );
  }
}
import { BrandPurpose } from "./BrandPurpose";
import { LogoSystem } from "@/components/sections/LogoSystem";
import { VisualLanguage } from "@/components/sections/VisualLanguage";
import { SurfaceSystem } from "@/components/sections/SurfaceSystem";
import { GraphicElements } from "@/components/sections/GraphicElements";
import { Iconography } from "@/components/sections/Iconography";
import { ImageryStyle } from "@/components/sections/ImageryStyle";

type Doc = (typeof componentDocs)[number];
function ComponentPreview({
  name,
  onAction,
  dark = true,
}: {
  name: string;
  onAction: () => void;
  dark?: boolean;
}) {
  if (name === "GlassCard")
    return (
      <GlassCard hover className="library-glass-card">
        <Leaf size={22} />
        <h3>Space to grow.</h3>
        <p>Natural depth, thoughtful detail.</p>
      </GlassCard>
    );
  if (name === "GlassButton")
    return (
      <div className="library-buttons">
        <GlassButton className="liquid-glass liquid-control" onClick={onAction}>
          Explore <ArrowRight size={15} />
        </GlassButton>
        <GlassButton
          className="liquid-glass liquid-control"
          variant="secondary"
          onClick={onAction}
        >
          Secondary
        </GlassButton>
        <GlassButton className="liquid-glass liquid-control" disabled>
          Disabled
        </GlassButton>
      </div>
    );
  if (name === "GlassBadge")
    return (
      <GlassBadge className="liquid-glass liquid-control">
        <Leaf size={14} /> Rooted in nature
      </GlassBadge>
    );
  if (name === "GlassModal")
    return (
      <GlassButton className="liquid-glass liquid-control" onClick={onAction}>
        Open dialog <ArrowUpRight size={15} />
      </GlassButton>
    );
  if (name === "GlassImageFrame")
    return (
      <GlassImageFrame
        className="library-image-frame"
        src={brandImagery.growth.src}
        alt={brandImagery.growth.alt}
      >
        <GlassBadge className="liquid-glass liquid-control">
          A window to nature
        </GlassBadge>
      </GlassImageFrame>
    );
  if (name === "GlassNavbar")
    return (
      <div className="library-navbar liquid-glass">
        <BrandLogo compact tone="dark" />
        <span>Our world</span>
        <button onClick={onAction} aria-label="Open navigation demo">
          <ArrowUpRight size={16} />
        </button>
      </div>
    );
  if (name === "Typography")
    return (
      <p className="library-type">
        Move to
        <br />
        <em>Nature.</em>
      </p>
    );
  if (name === "BrandLogo") return <BrandLogo tone={dark ? "dark" : "light"} />;
  if (name === "HalftonePattern")
    return <HalftonePattern size={10} opacity={0.55} />;
  if (name === "ContourLines") return <ContourLines opacity={0.8} />;
  if (name === "OrganicShape") return <OrganicShape opacity={0.8} />;
  if (name === "GradientOverlay") return <GradientOverlay opacity={1} />;
  if (name === "NatureMask")
    return (
      <NatureMask src={brandImagery.growth.src} className="library-mask" />
    );
  return (
    <div className="motion-preview">
      <span />
      <p>Subtle, by nature.</p>
    </div>
  );
}
export function IdentityExplorer() {
  const query = useSearchParams();
  const initialTab = query.get("tab");
  const [tab, setTab] = useState(
    initialTab &&
      [
        "tokens",
        "typography",
        "applications",
        "guidelines",
        "artwork",
      ].includes(initialTab)
      ? initialTab
      : "components",
  );
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);
  const [selected, setSelected] = useState<Doc | null>(null);
  const [demo, setDemo] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState("");
  const [scene, setScene] = useState(false);
  const [sceneError, setSceneError] = useState("");
  const filtered = componentDocs.filter(
    (c) =>
      (filter === "All" || c.category === filter) &&
      `${c.name} ${c.description}`.toLowerCase().includes(search.toLowerCase()),
  );
  async function copy() {
    if (!selected) return;
    try {
      await copyText(
        `import { ${selected.name} } from '${selected.path}';\n\n${selected.code}`,
      );
      setCopied(true);
      setCopyError("");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopyError("Clipboard unavailable. Select and copy the code below.");
    }
  }
  function enableScene() {
    const canvas = document.createElement("canvas");
    if (window.matchMedia("(max-width: 767px)").matches) {
      setSceneError(
        "The 3D study is reserved for larger screens. The lightweight image-based hero works on mobile.",
      );
      return;
    }
    if (!canvas.getContext("webgl2")) {
      setSceneError(
        "WebGL 2 is unavailable. The image-based hero remains available.",
      );
      return;
    }
    setScene(true);
  }
  const exportTokens = () =>
    downloadText(
      "planet-green-logo-colours.json",
      JSON.stringify(
        {
          status:
            "Sampled from original logo SVG; usage roles are design guidance",
          colours: palette,
          radii: { card: "24px", small: "12px" },
          motion: { duration: "240ms", easing: "cubic-bezier(.2,.8,.2,1)" },
        },
        null,
        2,
      ),
      "application/json",
    );
  return (
    <main
      id="main"
      className="explorer-shell collection-shell library-landscape"
    >
      <LibraryHero />
      <nav className="explorer-tabs" aria-label="Toolkit views">
        {[
          ["components", "Components"],
          ["artwork", "Giving back"],
          ["board", "Identity board"],
          ["guidelines", "Guidelines"],
          ["tokens", "Design tokens"],
          ["typography", "Typography"],
          ["applications", "Applications"],
          ["3d", "3D study"],
        ].map(([id, label]) => (
          <button key={id} aria-pressed={tab === id} onClick={() => setTab(id)}>
            {label}
          </button>
        ))}
        <button className="export-tokens" onClick={exportTokens}>
          Colour tokens <ArrowDownToLine size={15} />
        </button>
      </nav>
      {tab === "artwork" && <GivingBackLibrary />}
      {tab === "components" && (
        <>
          <div className="library-toolbar">
            <div className="search-input">
              <Search size={16} />
              <input
                aria-label="Search components"
                placeholder="Find a component…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="library-filters">
              {["All", "Foundations", "Surfaces", "Graphics", "Motion"].map(
                (f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    aria-pressed={filter === f}
                  >
                    {f}
                  </button>
                ),
              )}
            </div>
            <button
              className="preview-theme"
              onClick={() => setDark(!dark)}
              aria-pressed={dark}
              aria-label="Toggle component preview background"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
              <span>{dark ? "Light previews" : "Dark previews"}</span>
            </button>
          </div>
          <p className="library-count" role="status" aria-live="polite">
            {filtered.length} components{" "}
            <span>Select a specimen to inspect its API and example.</span>
          </p>
          <div className="library-grid">
            {filtered.map((doc) => (
              <article
                key={doc.name}
                className={`library-item specimen-${doc.name.toLowerCase()}`}
                style={
                  libraryImagery(doc.name)
                    ? ({
                        "--library-image": `url("${libraryImagery(doc.name)?.src}")`,
                      } as CSSProperties)
                    : undefined
                }
              >
                <div
                  className={`library-preview ${dark ? "preview-dark" : "preview-light"} preview-${doc.category.toLowerCase()}`}
                >
                  <ComponentPreview
                    name={doc.name}
                    dark={dark}
                    onAction={() => setDemo(true)}
                  />
                  {libraryImagery(doc.name) && (
                    <span className="library-image-label">
                      {libraryImagery(doc.name)?.label}
                    </span>
                  )}
                </div>
                <button
                  className="library-item-info"
                  onClick={() => {
                    setSelected(doc);
                    setCopied(false);
                    setCopyError("");
                  }}
                >
                  <span>
                    <strong>{doc.name}</strong>
                    <small>{doc.category}</small>
                    <span className="library-item-description">
                      {doc.description}
                    </span>
                  </span>
                  <Code2 size={17} />
                </button>
              </article>
            ))}
          </div>
          {!filtered.length && (
            <div className="empty-state">
              <Search size={28} />
              <h2>No components found.</h2>
              <p>Try a different term or clear the filters.</p>
              <button
                className="button dark"
                onClick={() => {
                  setSearch("");
                  setFilter("All");
                }}
              >
                Clear search
              </button>
            </div>
          )}
        </>
      )}
      {tab === "board" && (
        <div className="identity-board">
          {sections.map(([id, name], i) => (
            <Link key={id} href={`/#${id}`} className={`board-tile board-${i}`}>
              <span className="eyebrow">
                {String(i + 1).padStart(2, "0")} / {name}
              </span>
              {i === 0 ? (
                <div className="board-hero">
                  <span>
                    Move to
                    <br />
                    Nature.
                  </span>
                </div>
              ) : i === 1 ? (
                <h3>
                  People, Land
                  <br />
                  and Nature
                  <br />
                  in Harmony.
                </h3>
              ) : i === 2 ? (
                <BrandLogo />
              ) : i === 3 ? (
                <div className="board-palette">
                  {palette.slice(0, 4).map((c) => (
                    <span key={c.hex} style={{ background: c.hex }} />
                  ))}
                </div>
              ) : i === 4 ? (
                <span className="board-aa">Aa</span>
              ) : i === 5 ? (
                <Leaf size={70} strokeWidth={0.7} />
              ) : i === 6 ? (
                <GlassBadge>Thoughtful surfaces</GlassBadge>
              ) : i === 7 ? (
                <ContourLines />
              ) : i === 8 ? (
                <div className="board-icons">
                  <Leaf />
                  <SlidersHorizontal />
                  <Box />
                </div>
              ) : i === 9 ? (
                <div className="board-identity-photos">
                  {[
                    brandImagery.landscape,
                    brandImagery.cultivation,
                    brandImagery.growth,
                  ].map((photo) => (
                    <div key={photo.src}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width:700px) 30vw, 12vw"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <h3>
                  Out in
                  <br />
                  the world.
                </h3>
              )}
              <ArrowUpRight className="board-arrow" size={18} />
            </Link>
          ))}
        </div>
      )}
      {tab === "tokens" && (
        <div className="explorer-content">
          <ColorPalette />
          <div className="token-table">
            <h2>The supporting system</h2>
            {[
              ["--pg-radius", "24px", "Feature cards & image frames"],
              ["--pg-radius-sm", "12px", "Inputs & small surfaces"],
              ["--pg-duration", "240ms", "Interface transitions"],
              ["--pg-ease", "cubic-bezier(.2,.8,.2,1)", "Organic motion curve"],
              ["--pg-font-display", "Outfit", "Headlines & display text"],
              ["--pg-font-body", "Outfit", "Body & interface text"],
            ].map(([name, value, use]) => (
              <div key={name}>
                <code>{name}</code>
                <strong>{value}</strong>
                <span>{use}</span>
              </div>
            ))}
          </div>
          <p className="fine-print">
            Source of truth: src/styles/tokens.css and src/lib/brand-tokens.ts.
            Greens are sampled from original Planet Green SVG fills. Neutral
            surfaces and colour usage roles are documented in the guidelines.
          </p>
        </div>
      )}
      {tab === "guidelines" && (
        <div className="explorer-content">
          <BrandPurpose />
          <LogoSystem />
          <ColorPalette />
          <TypographyShowcase />
          <VisualLanguage />
          <SurfaceSystem />
          <GraphicElements />
          <Iconography />
          <ImageryStyle />
          <BrandApplications />
        </div>
      )}
      {tab === "typography" && (
        <div className="explorer-content">
          <TypographyShowcase />
        </div>
      )}
      {tab === "applications" && (
        <div className="explorer-content">
          <BrandApplications />
        </div>
      )}
      {tab === "3d" && (
        <div className="scene-study">
          <div>
            <span className="eyebrow">
              Procedural material study / optional
            </span>
            <h2>
              A little
              <br />
              <em>dimension.</em>
            </h2>
            <p>
              A lightweight geometric experiment using React Three Fiber, Drei
              and Three.js. This is a procedural concept, not an approved asset
              or photoreal model.
            </p>
            <p>
              Loaded only on request. Drag to orbit; animation respects reduced
              motion. Mobile uses the image-based hero.
            </p>
            {!scene ? (
              <button className="button dark" onClick={enableScene}>
                Enable 3D study <Box size={16} />
              </button>
            ) : (
              <button
                className="button outline"
                onClick={() => setScene(false)}
              >
                Stop 3D preview
              </button>
            )}
            <p role="status" className="fine-print">
              {sceneError}
            </p>
          </div>
          <div
            className="scene-canvas"
            role="img"
            aria-label="Optional interactive floating island material study"
          >
            {scene ? (
              <SceneBoundary>
                <Scene />
              </SceneBoundary>
            ) : (
              <div className="scene-placeholder liquid-glass">
                <Box size={48} strokeWidth={0.8} />
                <span>Ready when you are.</span>
              </div>
            )}
          </div>
        </div>
      )}
      <CollectionFooter />
      <GlassModal
        open={selected !== null}
        onClose={() => setSelected(null)}
        title={selected?.name || "Component"}
        className="liquid-glass liquid-paper library-liquid-dialog"
      >
        {selected && (
          <>
            <span className="status-tag">{selected.category}</span>
            <p>{selected.description}</p>
            <h3 className="docs-label">Props</h3>
            <p className="docs-props">{selected.props}</p>
            <div className="code-heading">
              <h3 className="docs-label">Implementation</h3>
              <button onClick={copy} className="text-link">
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copied" : "Copy code"}
              </button>
            </div>
            <pre className="code-block">
              <code>{`import { ${selected.name} } from '${selected.path}';\n\n${selected.code}`}</code>
            </pre>
            <p role="status" className="fine-print">
              {copyError ||
                (copied
                  ? "Implementation copied to clipboard."
                  : "All colours come from shared tokens. Brand approval is pending.")}
            </p>
          </>
        )}
      </GlassModal>
      <GlassModal
        open={demo}
        onClose={() => setDemo(false)}
        title="A thoughtful interaction."
        className="liquid-glass liquid-paper library-liquid-dialog"
      >
        <GlassBadge>
          <Leaf size={14} /> Component preview
        </GlassBadge>
        <p>
          This control opens a real native dialog. Try Tab to move between
          controls, or Escape to close.
        </p>
        <button className="button dark" onClick={() => setDemo(false)}>
          Back to the library <ArrowRight size={16} />
        </button>
      </GlassModal>
    </main>
  );
}
