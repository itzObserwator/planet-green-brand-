"use client";
import { useState } from "react";
import { artworkSpecimens } from "@/lib/giving-back";
import { GivingBackArtwork } from "./GivingBackArtwork";
import { LivingCycleInspector } from "./GivingBackStory";
import { GivingBackApplications } from "./GivingBackApplications";
import styles from "./GivingBack.module.css";

export function GivingBackLibrary() {
  const [dark, setDark] = useState(false);
  const [copied, setCopied] = useState("");
  async function copy(name: string) {
    try {
      await navigator.clipboard.writeText(
        `import { ${name} } from '@/components/giving-back/GivingBackArtwork';\n\n<${name} decorative={false} />`,
      );
      setCopied(name);
    } catch {
      setCopied("Copy unavailable. Select the import shown below.");
    }
  }
  return (
    <div className={styles.library}>
      <div className={styles.libraryHeading}>
        <div>
          <p className={styles.eyebrow}>The living cycle / Raster artwork</p>
          <h2 className={styles.heading}>A shared act of care.</h2>
          <p>
            One approved master. A companion family drawn from the same
            reference.
          </p>
        </div>
        <button
          className={styles.pill}
          aria-pressed={dark}
          onClick={() => setDark(!dark)}
        >
          {dark ? "Show on white" : "Show on Forest"}
        </button>
      </div>
      <div className={styles.libraryGrid}>
        {artworkSpecimens.map((item) => (
          <article key={item.name}>
            <div className={styles.specimen} data-dark={dark}>
              <GivingBackArtwork
                kind={item.kind}
                decorative={false}
                sizes="(max-width:700px) 80vw, 350px"
              />
            </div>
            <h3>{item.name}</h3>
            <p>{item.use}</p>
            <div className={styles.assetLinks}>
              <a href={`/graphics/giving-back/${item.kind}.png`} download>
                PNG master
              </a>
              <a href={`/graphics/giving-back/${item.kind}-1254.webp`} download>
                WebP
              </a>
              <button onClick={() => copy(item.name)}>Copy usage</button>
            </div>
          </article>
        ))}
      </div>
      <p role="status" className={styles.copyStatus}>
        {copied
          ? copied.startsWith("Copy unavailable")
            ? copied
            : `${copied} usage copied.`
          : "Select Copy usage for a reusable React example."}
      </p>
      <details className={styles.designDetails}>
        <summary>Component API & image handling</summary>
        <pre>
          <code>{`import { MasterBrandIllustration } from '@/components/giving-back/GivingBackArtwork';\n\n<MasterBrandIllustration\n  decorative={false}\n  sizes="(max-width: 700px) 90vw, 500px"\n/>\n\n// Shared props: className, decorative, eager, sizes\n// BotanicalAccent reuses Receive; SupportingHandIllustration reuses Restore.`}</code>
        </pre>
        <p className={styles.designNote}>
          Static transparent WebP sources at 320, 640, 960 and 1254 pixels.
          Original lossless PNGs are retained. No image generation occurs at
          runtime.
        </p>
      </details>
      <div className={styles.libraryHeading}>
        <div>
          <p className={styles.eyebrow}>Visual language</p>
          <h2 className={styles.heading}>Five elements. One composition.</h2>
        </div>
      </div>
      <LivingCycleInspector />
      <div className={styles.guidance}>
        <p>
          <strong>Use with space.</strong> Keep the canopy, hand and seedling
          legible. Use the complete master for large compositions; use a
          companion for smaller cards.
        </p>
        <p>
          <strong>Keep it still within.</strong> Move or reveal complete image
          assets. Do not pretend the fingers, leaf veins or water inside a
          flattened raster are independently animated.
        </p>
        <p>
          <strong>Keep the logo original.</strong> This artwork supports the
          identity. It never replaces, masks or reconstructs the Planet Green
          logo.
        </p>
      </div>
      <GivingBackApplications compact />
      <div className={styles.downloadFooter}>
        <a
          className={styles.pill}
          href="/graphics/giving-back/planet-green-living-cycle.zip"
          download
        >
          Download artwork pack
        </a>
        <a href="/graphics/giving-back/provenance.json" download>
          Prompts & provenance
        </a>
        <p>
          Master A approved by the user. Companions generated with A as their
          visual reference and reviewed for consistency.
        </p>
      </div>
    </div>
  );
}
