import {
  ArrowUpRight,
  Layers,
  Leaf,
  MoveUpRight,
  Users,
  Waves,
} from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { NatureMask, ContourLines } from "@/components/graphics/Patterns";
const principles = [
  [Leaf, "Nature-forward", "The living world leads the story."],
  [MoveUpRight, "Modern & premium", "Confidence through restraint."],
  [Waves, "Organic & fluid", "Movement with a natural rhythm."],
  [Users, "Human-centred", "Warmth, clarity and belonging."],
  [Layers, "Layered & immersive", "Depth that invites discovery."],
] as const;
export function VisualLanguage() {
  return (
    <section id="language" className="brand-section">
      <SectionHeading number="06" title="A language of living">
        Five principles. One connected world.
      </SectionHeading>
      <div className="language-grid">
        <div className="language-art">
          <ContourLines opacity={0.25} />
          <NatureMask src="/imagery/macro.webp" />
          <span className="eyebrow">Guided by nature</span>
          <h3>
            Less noise.
            <br />
            More <em>feeling.</em>
          </h3>
          <ArrowUpRight className="language-arrow" size={34} />
        </div>
        <div className="principles">
          {principles.map(([Icon, title, description], i) => (
            <div className="principle" key={title}>
              <Icon size={23} strokeWidth={1.4} />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <span>0{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
