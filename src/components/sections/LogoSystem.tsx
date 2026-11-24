"use client";
import { useState } from "react";
import { ArrowDownToLine, Moon, Sun, Ruler } from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { brandAssets } from "@/lib/brand-tokens";
export function LogoSystem() {
  const [dark, setDark] = useState(true);
  const [guides, setGuides] = useState(false);
  return (
    <section id="logo" className="brand-section">
      <SectionHeading number="03" title="The signature">
        One identity. Every expression.
      </SectionHeading>
      <div className="logo-grid">
        <div
          className={`logo-main ${dark ? "on-dark" : "on-light"} ${guides ? "show-guides" : ""}`}
        >
          <div className="panel-top">
            <span className="eyebrow">Primary signature</span>
            <div className="control-group">
              <button
                onClick={() => setGuides(!guides)}
                aria-pressed={guides}
                aria-label="Show clear-space study"
              >
                <Ruler size={16} />
              </button>
              <button
                onClick={() => setDark(!dark)}
                aria-pressed={!dark}
                aria-label="Toggle light logo background"
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>
          <div className="logo-stage">
            <div className="clearspace">
              <BrandLogo tone={dark ? "dark" : "light"} />
              <span className="clearspace-label">
                Illustrative clear space · pending validation
              </span>
            </div>
          </div>
          <div className="panel-bottom">
            <span>Original vector artwork · colours preserved</span>
            <div className="download-group">
              {[
                ["SVG", dark ? brandAssets.onDark : brandAssets.primary],
                ["PNG", dark ? brandAssets.onDarkPng : brandAssets.primaryPng],
              ].map(([label, url]) =>
                url ? (
                  <a href={url} download key={label}>
                    {label} <ArrowDownToLine size={13} />
                  </a>
                ) : (
                  <button
                    key={label}
                    disabled
                    title="Original approved asset has not been supplied"
                  >
                    {label} <ArrowDownToLine size={13} />
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="logo-secondary">
          <div className="logo-small">
            <span className="eyebrow">Single colour</span>
            <BrandLogo variant="monochrome" />
            <span className="status-tag">Pending brand approval</span>
          </div>
          <div className="logo-small symbol-preview">
            <span className="eyebrow">Original symbol</span>
            <div className="symbol-pending">
              Standalone
              <br />
              symbol<span>Original globe present in the full logo</span>
            </div>
            <span className="status-tag">Standalone use pending approval</span>
          </div>
        </div>
      </div>
      <div className="guideline-strip">
        <span>
          <Ruler size={17} /> Space to breathe
        </span>
        <p>
          Clear space and minimum sizes must be validated against the original
          artwork. A provisional 180 px web slot is shown here; it is not a
          brand rule.
        </p>
      </div>
    </section>
  );
}
