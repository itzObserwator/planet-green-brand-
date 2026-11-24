"use client";
import { useState, type ReactNode } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Leaf,
  Plus,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { palette } from "@/lib/brand-tokens";
import { GlassModal } from "@/components/glass/GlassUI";
import { BrandPurpose } from "./BrandPurpose";
import { ColorPalette } from "./ColorPalette";
import { TypographyShowcase } from "./TypographyShowcase";
import { LogoSystem } from "@/components/sections/LogoSystem";
import { VisualLanguage } from "@/components/sections/VisualLanguage";
import { SurfaceSystem } from "@/components/sections/SurfaceSystem";
import { GraphicElements } from "@/components/sections/GraphicElements";
import { Iconography, brandIcons } from "@/components/sections/Iconography";
import { ImageryStyle } from "@/components/sections/ImageryStyle";
import { BrandApplications } from "@/components/sections/BrandApplications";
import {
  HalftonePattern,
  ContourLines,
  OrganicShape,
} from "@/components/graphics/Patterns";
const tools = [
  BrandPurpose,
  LogoSystem,
  ColorPalette,
  TypographyShowcase,
  VisualLanguage,
  SurfaceSystem,
  GraphicElements,
  Iconography,
  ImageryStyle,
  BrandApplications,
];
const names = [
  "Brand purpose",
  "Logo system",
  "Colour palette",
  "Typography",
  "Visual language",
  "Glassmorphism / UI surfaces",
  "Graphic elements / Pattern DNA",
  "Iconography",
  "Imagery style",
  "Applications",
];
function Photo({
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
      sizes="(max-width: 700px) 100vw, 55vw"
      preload={preload}
    />
  );
}
function Panel({
  id,
  index,
  onExplore,
  selected,
  className = "",
  children,
}: {
  id: string;
  index: number;
  onExplore: (index: number) => void;
  selected: number | null;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={selected === index ? undefined : id}
      className={`reference-panel ${className}`}
    >
      <h2 className="board-label">
        <button
          onClick={() => onExplore(index)}
          aria-label={`Explore ${names[index]}`}
        >
          <strong>{String(index + 2).padStart(2, "0")}</strong>
          <span>{names[index]}</span>
          <ArrowUpRight size={12} />
        </button>
      </h2>
      {children}
    </section>
  );
}
export function ReferenceBoard() {
  const [selected, setSelected] = useState<number | null>(null);
  const Tool = selected === null ? null : tools[selected];

  return (
    <>
      <div className="reference-board">
        <section id="brand-world" className="reference-panel board-hero">
          <Photo
            src="/imagery/floating-earth.webp"
            alt="Sapling on a floating island of moss and soil with glass spheres and orbital rings"
            preload
          />
          <div className="board-hero-shade" />
          <h2 className="board-label">
            <strong>01</strong>
            <span>Hero / Brand world</span>
          </h2>
          <BrandLogo tone="dark" />
          <div className="board-hero-copy">
            <h1>
              Move to
              <br />
              <span>Nature.</span>
            </h1>
            <p>
              Sustainable communities,
              <br />
              natural farming and a<br />
              healthier way of living.
            </p>
            <a
              href="#purpose"
              aria-label="Explore brand purpose"
              className="board-green-rule"
            />
          </div>
          <HalftonePattern opacity={0.18} size={4} />
        </section>
        <Panel
          selected={selected}
          onExplore={setSelected}
          id="purpose"
          index={0}
          className="board-purpose"
        >
          <Photo src="/imagery/landscape.webp" />
          <div className="board-purpose-shade" />
          <h3>
            People, Land and
            <br />
            Nature in Harmony.
          </h3>
          <span className="board-green-rule" />
        </Panel>
        <Panel
          selected={selected}
          onExplore={setSelected}
          id="logo"
          index={1}
          className="board-logo"
        >
          <div className="board-logo-samples">
            <div>
              <div>
                <BrandLogo tone="dark" />
              </div>
              <span>Full colour / Dark</span>
            </div>
            <div>
              <div className="sample-light">
                <BrandLogo />
              </div>
              <span>Full colour / Light</span>
            </div>
            <div>
              <div className="sample-pending">
                <Leaf size={25} />
                <span>Artwork pending</span>
              </div>
              <span>Single colour / Awaiting asset</span>
            </div>
          </div>
          <div className="download-group">
            <a href="/brand/planet-green-original.svg" download>
              SVG ↓
            </a>
            <a href="/brand/planet-green-original.png" download>
              PNG ↓
            </a>
          </div>
        </Panel>
        <Panel
          selected={selected}
          onExplore={setSelected}
          id="colour"
          index={2}
          className="board-colours"
        >
          <div className="board-swatches">
            {palette.map((c) => (
              <div key={c.hex}>
                <span style={{ background: c.hex }} />
                <p>
                  {c.name}
                  <small>{c.hex}</small>
                </p>
              </div>
            ))}
          </div>
        </Panel>
        <Panel
          selected={selected}
          onExplore={setSelected}
          id="typography"
          index={3}
          className="board-type"
        >
          <div>
            <div>
              <strong>Aa</strong>
              <span>Outfit</span>
              <small>Display / 600</small>
            </div>
            <div>
              <span className="type-light">Aa</span>
              <span>Outfit</span>
              <small>Body / 400</small>
            </div>
          </div>
          <span className="board-green-rule" />
        </Panel>
        <Panel
          selected={selected}
          onExplore={setSelected}
          id="language"
          index={4}
          className="board-language"
        >
          <ul>
            {[
              "Nature forward",
              "Modern & premium",
              "Organic & fluid",
              "Glassmorphism UI",
              "Depth & layering",
            ].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Panel>
        <Panel
          selected={selected}
          onExplore={setSelected}
          id="surfaces"
          index={5}
          className="board-surfaces"
        >
          <div className="surface-demo">
            <div className="glass-stack">
              <i />
              <i />
              <span>Surface / Card</span>
            </div>
            <div className="surface-actions">
              <button onClick={() => setSelected(5)} className="board-primary">
                <ArrowRight size={16} />
                Primary button
              </button>
              <button
                onClick={() => setSelected(5)}
                className="board-secondary"
              >
                <ArrowRight size={16} />
                Secondary
              </button>
              <div>
                {[Leaf, ChartNoAxesColumnIncreasing, Plus].map((Icon, i) => (
                  <button
                    key={i}
                    aria-label={
                      [
                        "Explore nature UI",
                        "Explore data UI",
                        "Explore additional UI",
                      ][i]
                    }
                    onClick={() => setSelected(5)}
                  >
                    <Icon size={17} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Panel>
        <Panel
          selected={selected}
          onExplore={setSelected}
          id="graphics"
          index={6}
          className="board-graphics"
        >
          <div className="board-patterns">
            <div>
              <OrganicShape />
            </div>
            <div>
              <HalftonePattern opacity={0.8} size={4} />
            </div>
            <div>
              <OrganicShape />
            </div>
            <div>
              <ContourLines />
            </div>
            <div className="pattern-gradient" />
            <div>
              <Photo src="/imagery/macro.webp" />
            </div>
          </div>
        </Panel>
        <Panel
          selected={selected}
          onExplore={setSelected}
          id="icons"
          index={7}
          className="board-icons"
        >
          <div>
            {brandIcons.slice(0, 8).map(({ icon: Icon, name, use }) => (
              <div key={name}>
                <Icon size={27} strokeWidth={1.5} />
                <span>{use === "Plant growth" ? "Plant" : use}</span>
              </div>
            ))}
          </div>
        </Panel>
        <Panel
          selected={selected}
          onExplore={setSelected}
          id="imagery"
          index={8}
          className="board-imagery"
        >
          <div>
            {["macro", "forest", "farming", "landscape"].map((name, i) => (
              <div key={name}>
                <Photo
                  src={`/imagery/${name}.webp`}
                  alt={
                    [
                      "Dew on a green leaf",
                      "Misty green forest",
                      "Natural farming study",
                      "Green landscape",
                    ][i]
                  }
                />
              </div>
            ))}
          </div>
        </Panel>
        <Panel
          selected={selected}
          onExplore={setSelected}
          id="applications"
          index={9}
          className="board-applications"
        >
          <div className="board-application-strip">
            <button
              className="board-app-digital"
              onClick={() => setSelected(9)}
              aria-label="Explore digital applications"
            >
              <div className="board-laptop">
                <div className="laptop-screen">
                  <Photo src="/imagery/floating-earth.webp" />
                  <BrandLogo tone="dark" />
                  <h3>
                    Move to
                    <br />
                    <span>Nature.</span>
                  </h3>
                  <span className="mini-app-cta">Explore →</span>
                </div>
                <div className="laptop-base" />
              </div>
            </button>
            <button
              className="board-app-social"
              onClick={() => setSelected(9)}
              aria-label="Explore social applications"
            >
              <div className="board-social-header">
                <Leaf size={15} />
                <span>
                  planetgreen
                  <br />
                  <small>Sponsored</small>
                </span>
                <span>•••</span>
              </div>
              <div className="board-social-image">
                <Photo src="/imagery/macro.webp" />
                <h3>
                  From Healthy Soil
                  <br />
                  to Thriving
                  <br />
                  Communities.
                </h3>
              </div>
              <div className="board-social-footer">
                ♡ &nbsp; ◯ &nbsp; ↗ <span>⌑</span>
              </div>
            </button>
            <button
              className="board-app-print"
              onClick={() => setSelected(9)}
              aria-label="Explore print applications"
            >
              <div className="board-book">
                <Photo src="/imagery/landscape.webp" />
                <BrandLogo tone="dark" />
                <h3>Natural Farming for Thriving Communities.</h3>
                <ContourLines opacity={0.5} />
              </div>
            </button>
            <button
              className="board-app-tote"
              onClick={() => setSelected(9)}
              aria-label="Explore merchandise applications"
            >
              <div className="board-tote">
                <div className="board-tote-handles" />
                <BrandLogo />
                <div className="tote-land">
                  <OrganicShape />
                  <OrganicShape />
                </div>
              </div>
            </button>
            <button
              className="board-app-sign"
              onClick={() => setSelected(9)}
              aria-label="Explore signage applications"
            >
              <Photo src="/imagery/forest.webp" />
              <div className="board-sign">
                <BrandLogo tone="dark" />
                <span>→ &nbsp; Farm</span>
                <span>→ &nbsp; Community</span>
                <span>→ &nbsp; Learning Centre</span>
              </div>
            </button>
          </div>
        </Panel>
      </div>
      <footer className="reference-panel board-banner">
        <Photo src="/imagery/macro.webp" />
        <strong>planet green</strong>
        <p>
          A unified brand ecosystem
          <br />
          for a more natural tomorrow.
        </p>
      </footer>
      <div className="board-footnote">
        <span>Planet Green / Brand identity system</span>
        <span>Original logo · Current photography & concept assets</span>
        <a href="/explorer/">
          Open component library <ArrowUpRight size={13} />
        </a>
      </div>
      <div className="board-tool-dialog">
        <GlassModal
          open={selected !== null}
          onClose={() => setSelected(null)}
          title={selected === null ? "Brand guidelines" : names[selected]}
        >
          {Tool && <Tool />}
        </GlassModal>
      </div>
    </>
  );
}
