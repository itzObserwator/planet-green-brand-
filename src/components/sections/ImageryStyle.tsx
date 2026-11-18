"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { HalftonePattern } from "@/components/graphics/Patterns";
import { GlassModal } from "@/components/glass/GlassUI";
export const imagery = [
  {
    name: "Up close",
    category: "Macro nature",
    file: "macro",
    alt: "Close view of fresh green leaves",
    direction:
      "Find the extraordinary in the small. Use a shallow depth of field and let natural texture lead.",
  },
  {
    name: "Room to breathe",
    category: "Forests & landscapes",
    file: "landscape",
    alt: "Sunbeams passing through a dense forest",
    direction:
      "Wide perspectives, soft light and room for type. Preserve the natural greens.",
  },
  {
    name: "Where it begins",
    category: "Soil & growth",
    file: "farming",
    alt: "Plants growing in a garden setting",
    direction:
      "Show growth through real soil, seedlings and working environments. Avoid artificial saturation.",
  },
  {
    name: "Growing together",
    category: "People & nature",
    file: "community",
    alt: "Growing food in a shared natural setting",
    direction:
      "Commission authentic human interaction. This garden image is a placeholder for people-led photography.",
  },
  {
    name: "Places to belong",
    category: "Architecture & community",
    file: "architecture",
    alt: "Architecture surrounded by greenery",
    direction:
      "Place buildings in their environmental context. Show daylight, materials and welcoming spaces.",
  },
  {
    name: "Naturally tactile",
    category: "Textures & surfaces",
    file: "texture",
    alt: "Detailed natural green leaf textures",
    direction:
      "Crop close. Let organic repetition and real surfaces create quiet visual depth.",
  },
];
export function ImageryStyle() {
  const [treatment, setTreatment] = useState("Natural");
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <section id="imagery" className="brand-section">
      <SectionHeading number="10" title="See the world differently.">
        Honest imagery. Extraordinary nature.
      </SectionHeading>
      <div className="imagery-toolbar">
        <p>Natural light. Living textures. A sense of place.</p>
        <div className="segmented">
          {["Natural", "Environment", "Halftone", "Soft focus", "Glass"].map(
            (t) => (
              <button
                key={t}
                onClick={() => setTreatment(t)}
                aria-pressed={treatment === t}
              >
                {t}
              </button>
            ),
          )}
        </div>
      </div>
      <div className="imagery-grid">
        {imagery.map((item, i) => (
          <button
            className={`imagery-card treatment-${treatment.toLowerCase().replace(" ", "-")}`}
            key={item.file}
            onClick={() => setSelected(i)}
          >
            <Image
              src={`/imagery/${item.file}.webp`}
              alt={item.alt}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1023px) 50vw, 33vw"
            />
            {treatment === "Halftone" && (
              <HalftonePattern opacity={0.35} size={6} />
            )}
            <div className="imagery-caption">
              <span className="eyebrow">
                0{i + 1} / {item.category}
              </span>
              <h3>{item.name}</h3>
              <ArrowUpRight size={18} />
            </div>
          </button>
        ))}
      </div>
      <p className="fine-print">
        Reference photography from Unsplash; concept selection, not approved
        Planet Green imagery. People-led photography is still required.
      </p>
      <GlassModal
        open={selected !== null}
        onClose={() => setSelected(null)}
        title={selected === null ? "Image direction" : imagery[selected].name}
      >
        {selected !== null && (
          <>
            <div className="modal-image">
              <Image
                src={`/imagery/${imagery[selected].file}.webp`}
                alt={imagery[selected].alt}
                fill
                sizes="600px"
              />
            </div>
            <span className="eyebrow">{imagery[selected].category}</span>
            <p>{imagery[selected].direction}</p>
            <span className="status-tag">
              Reference photography · not approved
            </span>
          </>
        )}
      </GlassModal>
    </section>
  );
}
