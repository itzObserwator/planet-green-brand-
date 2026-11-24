import Image from "next/image";
import { Download } from "lucide-react";
import { brandElements } from "@/lib/brand-elements";

type ElementId = (typeof brandElements)[number]["id"];
export function NatureElementCard({
  id,
  compact = false,
}: {
  id: ElementId;
  compact?: boolean;
}) {
  const element = brandElements.find((item) => item.id === id);
  if (!element) return null;
  const Heading = compact ? "h3" : "h4";
  return (
    <article
      className={`nature-element-card nature-element-${element.id}${compact ? " nature-element-inline" : ""}`}
    >
      <div
        className={`nature-element-image ${element.cutout ? "is-cutout" : "is-photograph"}`}
      >
        <Image
          src={element.src}
          alt={element.alt}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 45vw, 30vw"
        />
        <span className="nature-element-kind">{element.kind}</span>
      </div>
      <div className="nature-element-copy">
        <Heading>{element.name}</Heading>
        <p className="nature-element-headline">{element.headline}</p>
        {!compact && (
          <>
            <p className="nature-element-description">{element.description}</p>
            <ul
              className="nature-element-uses"
              aria-label={`${element.name} applications`}
            >
              {element.uses.map((use) => (
                <li key={use}>{use}</li>
              ))}
            </ul>
          </>
        )}
        <details className="nature-element-guidance">
          <summary>Composition guidance</summary>
          <p>{element.guidance}</p>
          {compact && (
            <ul
              className="nature-element-uses"
              aria-label={`${element.name} applications`}
            >
              {element.uses.map((use) => (
                <li key={use}>{use}</li>
              ))}
            </ul>
          )}
        </details>
        <a
          href={element.download}
          download
          className="nature-element-download"
          aria-label={`Download ${element.name} ${element.format}`}
        >
          Download {element.format}
          <Download size={15} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
export function NatureElements() {
  return (
    <div
      className="nature-element-gallery"
      role="group"
      aria-label="Hills, life, soil and seeds brand elements"
    >
      <div className="nature-elements-intro">
        <div>
          <p className="terrain-eyebrow">The elements we build with</p>
          <h3>
            From the land.
            <br />
            Into every expression.
          </h3>
        </div>
        <p>
          Four elements carry the same story across websites, campaigns and
          print. Use them with the original logo, Outfit typography and plenty
          of breathing space.
        </p>
      </div>
      <div className="nature-element-grid">
        {brandElements.map((element) => (
          <NatureElementCard key={element.id} id={element.id} />
        ))}
      </div>
    </div>
  );
}
