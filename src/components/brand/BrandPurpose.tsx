import { brandContext } from "@/lib/brand-context";
import { ArrowUpRight } from "lucide-react";
import { GlassImageFrame } from "@/components/glass/GlassUI";
import { HalftonePattern } from "@/components/graphics/Patterns";
import { SectionHeading } from "./SectionHeading";
export function BrandPurpose() {
  return (
    <section id="purpose" className="brand-section">
      <SectionHeading number="02" title="A closer life">
        Notice what sustains you. Take part in what grows.
      </SectionHeading>
      <div className="purpose-grid">
        <GlassImageFrame
          className="purpose-image"
          src="/imagery/rolling-landscape-v2.webp"
          alt="Green hills and valleys in the Planet Green landscape concept"
          overlay={0.3}
        >
          <span className="eyebrow">Our relationship with life</span>
          <h3>
            People, Land
            <br />
            and Nature
            <br />
            <em>in Harmony.</em>
          </h3>
          <span className="photo-credit">Original landscape concept</span>
          <HalftonePattern opacity={0.13} />
        </GlassImageFrame>
        <div className="purpose-editorial">
          <span className="tiny-index">01 / OUR PHILOSOPHY</span>
          <h3>
            Begin with
            <br />
            what is
            <br />
            <span className="muted">already here.</span>
          </h3>
          <p>{brandContext.awakening}</p>
          <h3 className="story-guideline-title">Earth. Nourishment. Care.</h3>
          <p>{brandContext.culturalStory.bridge}</p>
          {brandContext.culturalStory.references.map((reference) => (
            <p key={reference.name}>
              <strong>{reference.name}.</strong> {reference.story}{" "}
              <a href={reference.source} target="_blank" rel="noreferrer">
                Read the cultural reference
              </a>
            </p>
          ))}
          <p>
            <strong>Vision.</strong> {brandContext.vision}
          </p>
          <p>
            <strong>Mission.</strong> {brandContext.mission}
          </p>
          <h3 className="story-guideline-title">
            Four points of entry. A relationship to experience.
          </h3>
          <p>{brandContext.experienceIntro}</p>
          {brandContext.ecosystem.map((experience) => (
            <p key={experience.name}>
              <strong>{experience.name}.</strong> {experience.description}{" "}
              <a href={experience.href} target="_blank" rel="noreferrer">
                Explore {experience.name}
              </a>
            </p>
          ))}
          <h3 className="story-guideline-title">
            Why the identity looks this way
          </h3>
          {brandContext.identityReasoning.map((reason) => (
            <p key={reason.name}>
              <strong>{reason.name}.</strong> {reason.description}
            </p>
          ))}
          <p>{brandContext.founder.story}</p>
          <p>
            {brandContext.founder.name} / {brandContext.founder.role}
          </p>
          <a
            className="text-link"
            href={brandContext.founder.source}
            target="_blank"
            rel="noreferrer"
          >
            The story behind Planet Green
          </a>
          <a className="text-link" href="#language">
            The principles behind the identity <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
