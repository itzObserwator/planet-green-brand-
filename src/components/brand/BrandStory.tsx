import Image from "next/image";
import { brandContext } from "@/lib/brand-context";

export function RelearningStory() {
  return (
    <div id="relearning" className="story-relearning">
      <div className="story-relearning-heading">
        <p className="terrain-eyebrow">The journey begins with relearning</p>
        <h3>
          Learn to nurture
          <br />
          what nurtures us.
        </h3>
        <p>{brandContext.mission}</p>
      </div>
      <div className="story-relearning-steps">
        {brandContext.relearning.map((step) => (
          <div key={step.title}>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StoryExperiences() {
  return (
    <div id="portfolio" className="story-experiences terrain-wrap">
      <div className="terrain-section-intro">
        <div>
          <p className="terrain-eyebrow">A relationship to experience</p>
          <h2>
            Begin where you are.
            <br />
            Find your connection.
          </h2>
        </div>
        <div>
          <p>{brandContext.experienceIntro}</p>
        </div>
      </div>
      <div className="story-experience-grid">
        {brandContext.experiences.map((experience) => (
          <article className="story-experience" key={experience.name}>
            <div className="story-experience-image">
              <Image
                src={experience.image}
                alt={experience.alt}
                fill
                sizes="(max-width: 700px) 100vw, 45vw"
              />
              <span>{experience.domain}</span>
            </div>
            <div className="story-experience-copy">
              <p className="terrain-eyebrow">{experience.name}</p>
              <h3>{experience.headline}</h3>
              <p>{experience.description}</p>
              <div className="story-experience-practice">
                {experience.practice}
              </div>
              <a
                href={experience.href}
                target="_blank"
                rel="noreferrer"
                className="terrain-link"
              >
                Explore {experience.name}
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="story-shared-purpose">
        <span>Planet Green brings the relationship into everyday life.</span>
        <p>
          Farm Natura connects us through cultivation.
          <br />
          The Eco World connects us through habitation.
          <br />
          Veda Bharath connects cultivation with the food on our table.
          <br />
          Green Land Capital offers a practical route to farmland.
        </p>
      </div>
      <p className="terrain-asset-note">
        Concept and reference imagery express the story; they do not depict the
        named properties.
      </p>
    </div>
  );
}
