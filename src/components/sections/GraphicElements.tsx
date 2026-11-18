"use client";
import { useState } from "react";
import { ArrowDownToLine } from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import {
  ContourLines,
  GradientOverlay,
  HalftonePattern,
  NatureMask,
  OrganicShape,
} from "@/components/graphics/Patterns";
const graphics = [
  "Organic flow",
  "Halftone",
  "Contour lines",
  "Nature masks",
  "Gradient overlays",
] as const;
export function GraphicElements() {
  const [opacity, setOpacity] = useState(65);
  const [size, setSize] = useState(10);
  return (
    <section id="graphics" className="brand-section">
      <SectionHeading number="08" title="The shape of things">
        An adaptable graphic language, inspired by nature.
      </SectionHeading>
      <div className="graphics-controls">
        <span className="status-tag">
          Concept graphics · not derived from approved logo
        </span>
        <label>
          Opacity{" "}
          <input
            aria-label="Graphic opacity"
            type="range"
            min="15"
            max="100"
            value={opacity}
            onChange={(e) => setOpacity(Number(e.target.value))}
          />
          <output>{opacity}%</output>
        </label>
        <label>
          Dot spacing{" "}
          <input
            aria-label="Halftone dot spacing"
            type="range"
            min="5"
            max="20"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          />
          <output>{size}px</output>
        </label>
      </div>
      <div className="graphics-grid">
        {graphics.map((name, i) => (
          <div className={`graphic-tile graphic-tile-${i}`} key={name}>
            <div className="graphic-art">
              {i === 0 ? (
                <OrganicShape opacity={opacity / 100} />
              ) : i === 1 ? (
                <HalftonePattern opacity={opacity / 100} size={size} />
              ) : i === 2 ? (
                <ContourLines opacity={opacity / 100} />
              ) : i === 3 ? (
                <NatureMask src="/imagery/texture.webp" />
              ) : (
                <GradientOverlay opacity={opacity / 100} />
              )}
            </div>
            <div className="graphic-caption">
              <span>{name}</span>
              <a
                href={`/graphics/${["organic-flow", "halftone", "contour-lines", "nature-mask", "gradient-overlay"][i]}.svg`}
                download
                aria-label={`Download concept ${name} SVG`}
              >
                <ArrowDownToLine size={15} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="guideline-strip">
        <strong>Logo-derived pattern</strong>
        <p>
          Reserved for the approved globe vector. No substitute geometry has
          been invented. Concept downloads are generic nature studies.
        </p>
      </div>
    </section>
  );
}
