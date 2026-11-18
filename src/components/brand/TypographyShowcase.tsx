"use client";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Typography } from "./Typography";
import { typeScale } from "@/lib/brand-tokens";
export function TypographyShowcase() {
  const [sample, setSample] = useState("A little closer to nature.");
  const [all, setAll] = useState(false);
  return (
    <section id="typography" className="brand-section">
      <SectionHeading number="05" title="Words, naturally">
        Expressive in scale. Human in every detail.
      </SectionHeading>
      <div className="type-showcase">
        <div className="type-title">
          <div>
            <span className="eyebrow">The voice of the identity</span>
            <h3>
              Beautifully
              <br />
              <em>down to earth.</em>
            </h3>
          </div>
          <span className="type-aa">Aa</span>
        </div>
        <div className="type-details">
          <div>
            <strong>Inter</strong>
            <span>Display fallback + interface</span>
          </div>
          <div>
            <strong>Brutel</strong>
            <span>Pending licensed font files</span>
          </div>
          <div>
            <strong>Fluid by design</strong>
            <span>320 px → 1440 px and beyond</span>
          </div>
        </div>
      </div>
      <div className="type-playground">
        <label htmlFor="type-sample">
          Make it your own <span>Type a phrase to preview the scale</span>
        </label>
        <input
          id="type-sample"
          value={sample}
          onChange={(e) => setSample(e.target.value)}
          maxLength={72}
          placeholder="Write something worth growing."
        />
        <div className="type-rows">
          {(all
            ? typeScale
            : typeScale.filter((_, i) => [1, 3, 5, 8].includes(i))
          ).map((t) => (
            <div className="type-row" key={t.css}>
              <div className="type-row-label">
                <strong>{t.name}</strong>
                <span>
                  {t.line} line-height / {t.tracking}
                </span>
              </div>
              <Typography variant={t.css}>{sample || t.sample}</Typography>
            </div>
          ))}
        </div>
        <button
          className="text-link"
          onClick={() => setAll(!all)}
          aria-expanded={all}
        >
          {all ? "Show curated scale −" : "View all 10 type styles +"}
        </button>
      </div>
    </section>
  );
}
