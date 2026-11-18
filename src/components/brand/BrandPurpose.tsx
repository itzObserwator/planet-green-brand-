import { ArrowUpRight } from "lucide-react";
import { GlassImageFrame } from "@/components/glass/GlassUI";
import { HalftonePattern } from "@/components/graphics/Patterns";
import { SectionHeading } from "./SectionHeading";
export function BrandPurpose() {
  return (
    <section id="purpose" className="brand-section">
      <SectionHeading number="02" title="Our purpose">
        A deeper connection. A shared future.
      </SectionHeading>
      <div className="purpose-grid">
        <GlassImageFrame
          className="purpose-image"
          src="/imagery/landscape.webp"
          alt="Sunlight falling through a lush green forest"
          overlay={0.3}
        >
          <span className="eyebrow">Our reason for being</span>
          <h3>
            People, Land
            <br />
            and Nature
            <br />
            <em>in Harmony.</em>
          </h3>
          <span className="photo-credit">Photography study · Unsplash</span>
          <HalftonePattern opacity={0.13} />
        </GlassImageFrame>
        <div className="purpose-editorial">
          <span className="tiny-index">01 / OUR PHILOSOPHY</span>
          <h3>
            Life is better
            <br />
            when it grows
            <br />
            <span className="muted">together.</span>
          </h3>
          <p>
            We believe the future begins with a simple connection. To the land
            that sustains us. To the people around us. To the natural world we
            call home.
          </p>
          <p>
            Planet Green brings that belief to life through sustainable
            communities, natural farming and a healthier way of living.
          </p>
          <a className="text-link" href="#language">
            The principles behind the identity <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
