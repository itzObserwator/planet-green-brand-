import {
  ArrowUpRight,
  Layers,
  Leaf,
  MoveUpRight,
  Users,
  Waves,
} from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import Image from "next/image";
import { brandContext } from "@/lib/brand-context";
const principles = [
  [Leaf, "Indulge", brandContext.philosophy[0].description],
  [MoveUpRight, "Involve", brandContext.philosophy[1].description],
  [Waves, "Impact", brandContext.philosophy[2].description],
  [
    Users,
    "Families & community",
    "Connect urban Indian families with green eco-habitats.",
  ],
  [
    Layers,
    "One parent brand",
    "Dates County, Farm Natura, Green Land Capital and Veda Bharat.",
  ],
] as const;
export function VisualLanguage() {
  return (
    <section id="language" className="brand-section">
      <SectionHeading number="06" title="A language of living">
        Indulge. Involve. Impact. A shared relationship with the land.
      </SectionHeading>
      <div className="language-grid">
        <div className="language-art">
          <div className="language-nature-photo">
            <Image
              src="/imagery/macro.webp"
              alt="Fresh green foliage"
              fill
              sizes="(max-width: 700px) 100vw, 45vw"
            />
          </div>
          <span className="eyebrow">Guided by nature</span>
          <h3>
            Closer to nature.
            <br />
            More <em>involved.</em>
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
