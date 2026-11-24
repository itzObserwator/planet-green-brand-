"use client";
import { useState, type CSSProperties } from "react";
import {
  ArrowRight,
  Check,
  Leaf,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import {
  GlassBadge,
  GlassButton,
  GlassCard,
  GlassImageFrame,
  GlassModal,
} from "@/components/glass/GlassUI";
export function SurfaceSystem() {
  const [modal, setModal] = useState(false);
  const [saved, setSaved] = useState(false);
  const [blur, setBlur] = useState(8);
  return (
    <section id="surfaces" className="brand-section">
      <SectionHeading number="07" title="Light. Layers. Possibility.">
        Liquid glass. Soft refraction. Clear content.
      </SectionHeading>
      <div className="surface-grid">
        <GlassImageFrame
          className="surface-scene"
          src="/imagery/macro.webp"
          alt="Green plant growth behind a liquid-glass surface"
          overlay={0.25}
        >
          <GlassBadge>
            <Sparkles size={13} /> A softer kind of digital
          </GlassBadge>
          <GlassCard
            className="surface-demo"
            style={{ "--liquid-blur": `${blur}px` } as CSSProperties}
            hover
          >
            <span className="demo-icon">
              <Leaf size={24} strokeWidth={1.4} />
            </span>
            <h3>
              Space to
              <br />
              feel connected.
            </h3>
            <p>
              Natural depth. Considered detail.
              <br />A little room to breathe.
            </p>
            <GlassButton onClick={() => setModal(true)}>
              Explore the surface <ArrowRight size={16} />
            </GlassButton>
          </GlassCard>
          <span className="photo-credit">
            Photography study · not approved imagery
          </span>
        </GlassImageFrame>
        <div className="surface-controls">
          <span className="eyebrow">The component collection</span>
          <h3>
            Clarity comes
            <br />
            <em>naturally.</em>
          </h3>
          <p>
            Translucent layers bring dimension without getting between people
            and the message.
          </p>
          <div className="component-chips">
            {[
              "GlassCard",
              "GlassButton",
              "GlassNavbar",
              "GlassModal",
              "GlassBadge",
              "GlassImageFrame",
            ].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <label className="range-label" htmlFor="surface-blur">
            <span>
              <SlidersHorizontal size={15} /> Backdrop blur
            </span>
            <output>{blur} px</output>
          </label>
          <input
            id="surface-blur"
            type="range"
            min="0"
            max="40"
            value={blur}
            onChange={(e) => setBlur(Number(e.target.value))}
          />
          <div className="button-demos">
            <button className="button dark" onClick={() => setModal(true)}>
              Open modal <ArrowRight size={15} />
            </button>
            <button
              className="button outline"
              onClick={() => setSaved(!saved)}
              aria-pressed={saved}
            >
              {saved && <Check size={15} />}
              {saved ? "Saved for this visit" : "Try secondary"}
            </button>
            <button className="button outline" disabled>
              Disabled
            </button>
          </div>
        </div>
      </div>
      <GlassModal
        open={modal}
        onClose={() => setModal(false)}
        title="A little room to breathe."
      >
        <GlassBadge>
          <Leaf size={14} /> GlassModal
        </GlassBadge>
        <p className="modal-description">
          A native dialog with a frosted surface. Keyboard focus stays inside,
          Escape closes it, and focus returns to the control that opened it.
        </p>
        <div className="modal-specs">
          <span>
            Radius <strong>24 px</strong>
          </span>
          <span>
            Backdrop <strong>{blur} px</strong>
          </span>
          <span>
            Motion <strong>240 ms</strong>
          </span>
        </div>
        <button className="button dark" onClick={() => setModal(false)}>
          Feels good <Check size={16} />
        </button>
      </GlassModal>
    </section>
  );
}
