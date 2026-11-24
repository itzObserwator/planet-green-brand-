"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { brandIcons } from "@/lib/brand-icons";
export { brandIcons } from "@/lib/brand-icons";
import { copyText } from "@/lib/utils";
import { SectionHeading } from "@/components/brand/SectionHeading";

export function Iconography() {
  const [size, setSize] = useState(24);
  const [stroke, setStroke] = useState(1.5);
  const [copied, setCopied] = useState("");
  const [error, setError] = useState("");
  async function copy(name: string) {
    try {
      await copyText(
        `import { ${name} } from 'lucide-react';\n<${name} size={${size}} strokeWidth={${stroke}} aria-hidden="true" />`,
      );
      setCopied(name);
      setError("");
      setTimeout(() => setCopied(""), 1800);
    } catch {
      setError(
        "Clipboard unavailable. Import the selected icon from lucide-react.",
      );
    }
  }
  return (
    <section id="icons" className="brand-section">
      <SectionHeading number="09" title="Small details. Clear meaning.">
        A family of icons, with a human touch.
      </SectionHeading>
      <div className="icon-toolbar">
        <span>Lucide / rounded / outlined</span>
        <div className="segmented">
          {[16, 24, 32].map((n) => (
            <button
              key={n}
              aria-pressed={size === n}
              onClick={() => setSize(n)}
            >
              {n}px
            </button>
          ))}
        </div>
        <label>
          Stroke{" "}
          <select
            value={stroke}
            onChange={(e) => setStroke(Number(e.target.value))}
          >
            <option value={1.5}>1.5 px</option>
            <option value={2}>2 px</option>
          </select>
        </label>
      </div>
      <div className="icon-grid">
        {brandIcons.map(({ icon: Icon, name, use }) => (
          <button
            key={name}
            className="icon-tile"
            onClick={() => copy(name)}
            aria-label={`Copy ${name} icon implementation`}
          >
            <Icon size={size} strokeWidth={stroke} />
            <span>{use}</span>
            <span className="icon-copy">
              {copied === name ? <Check size={12} /> : <Copy size={12} />}
            </span>
          </button>
        ))}
      </div>
      <p className="fine-print">
        Use outlines consistently. Keep Lucide’s round caps and joins. Use fill
        only where the original icon explicitly supports it. Label standalone
        icon controls. Click an icon to copy its implementation.
      </p>
      <p role="status" className="fine-print">
        {error || (copied ? `${copied} implementation copied.` : "")}
      </p>
    </section>
  );
}
