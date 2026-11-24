"use client";
import { useState } from "react";
import { Check, Copy, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { palette } from "@/lib/brand-tokens";
import { contrast, copyText, hexToRgb } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
export function ColorPalette() {
  const [copied, setCopied] = useState("");
  const [error, setError] = useState("");
  const [foreground, setForeground] = useState<"#FFFFFF" | "#1E1E1E">(
    "#FFFFFF",
  );
  async function copy(hex: string) {
    try {
      await copyText(hex);
      setCopied(hex);
      setError("");
      setTimeout(() => setCopied(""), 1800);
    } catch {
      setError(`Copy unavailable. Select this value: ${hex}`);
    }
  }
  return (
    <section id="colour" className="brand-section">
      <SectionHeading number="04" title="Colours with roots">
        <Link href="/explorer/?tab=tokens">
          Inspect the tokens <ArrowUpRight size={14} />
        </Link>
      </SectionHeading>
      <div className="palette-intro">
        <p>A considered spectrum, from deep forest to soft light.</p>
        <span className="status-tag">
          Sampled from original Planet Green artwork
        </span>
      </div>
      <div className="palette-grid">
        {palette.map((c, i) => (
          <button
            key={c.hex}
            className={`swatch swatch-${i}`}
            onClick={() => copy(c.hex)}
            aria-label={`Copy ${c.name} HEX ${c.hex}`}
          >
            <div
              className="swatch-colour"
              style={{
                background: c.hex,
                color:
                  contrast(c.hex, "#FFFFFF") >= 4.5 ? "#FFFFFF" : "#1E1E1E",
              }}
            >
              <span className="swatch-number">0{i + 1}</span>
              <span>
                {copied === c.hex ? <Check size={18} /> : <Copy size={16} />}
              </span>
              <span className="swatch-sample">Aa</span>
            </div>
            <div className="swatch-meta">
              <strong>{c.name}</strong>
              <span>{c.hex}</span>
              <small>{hexToRgb(c.hex).join(" / ")}</small>
            </div>
          </button>
        ))}
      </div>
      <div className="contrast-panel">
        <div>
          <h3>Made to be read.</h3>
          <p>AA body text requires a contrast ratio of 4.5:1.</p>
        </div>
        <div className="segmented" aria-label="Contrast foreground">
          <button
            aria-pressed={foreground === "#FFFFFF"}
            onClick={() => setForeground("#FFFFFF")}
          >
            White text
          </button>
          <button
            aria-pressed={foreground === "#1E1E1E"}
            onClick={() => setForeground("#1E1E1E")}
          >
            Ink text
          </button>
        </div>
        <div className="contrast-results">
          {palette.slice(0, 4).map((c) => {
            const ratio = contrast(c.hex, foreground);
            return (
              <div key={c.hex} style={{ background: c.hex, color: foreground }}>
                <strong>Aa</strong>
                <span>{ratio.toFixed(2)}:1</span>
                <small>{ratio >= 4.5 ? "AA pass" : "AA fail"}</small>
              </div>
            );
          })}
        </div>
      </div>
      <p role="status" className="sr-only">
        {copied ? `${copied} copied` : error}
      </p>
      {error && <p>{error}</p>}
    </section>
  );
}
