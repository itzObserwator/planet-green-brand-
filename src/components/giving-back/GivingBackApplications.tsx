"use client";
import { useState } from "react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { GivingBackArtwork, SeedlingDetail } from "./GivingBackArtwork";
import styles from "./GivingBack.module.css";

const formats = [
  {
    id: "banner",
    name: "Website banner",
    note: "Keep the master beside the message and preserve open space.",
  },
  {
    id: "editorial",
    name: "Editorial",
    note: "A botanical companion carries the story without repeating the full master.",
  },
  {
    id: "social",
    name: "Social template",
    note: "Use one clear message and a legible master illustration.",
  },
  {
    id: "presentation",
    name: "Presentation",
    note: "Generous space gives an introductory slide its pace.",
  },
  {
    id: "card",
    name: "Digital card",
    note: "A supporting hand makes the invitation to participate tangible.",
  },
  {
    id: "poster",
    name: "Poster",
    note: "The complete Living Cycle holds the campaign together.",
  },
  {
    id: "packaging",
    name: "Packaging",
    note: "One shared illustration on a quiet welcome-kit concept.",
  },
] as const;
export function GivingBackApplications({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [format, setFormat] =
    useState<(typeof formats)[number]["id"]>("banner");
  const selected = formats.find((f) => f.id === format)!;
  return (
    <section
      className={`${styles.applications} ${compact ? styles.compactApplications : ""}`}
      aria-label="Living Cycle brand applications"
    >
      <div className={styles.libraryHeading}>
        <div>
          <p className={styles.eyebrow}>The artwork in use</p>
          <h2 className={styles.heading}>Care, in every context.</h2>
        </div>
        <p>
          One illustration family.
          <br />
          Seven considered applications.
        </p>
      </div>
      <div
        className={styles.formatControls}
        role="group"
        aria-label="Living Cycle application formats"
      >
        {formats.map((f) => (
          <button
            key={f.id}
            onClick={() => setFormat(f.id)}
            aria-pressed={format === f.id}
          >
            {f.name}
          </button>
        ))}
      </div>
      <div className={styles.applicationStage} data-format={format}>
        <div className={styles.applicationPrint}>
          <BrandLogo />
          <div className={styles.applicationCopy}>
            <span>Planet Green / Move to Nature.</span>
            <h3>
              {format === "editorial" ? (
                <>
                  Begin with
                  <br />
                  what sustains us.
                </>
              ) : format === "card" ? (
                <>
                  Give a little
                  <br />
                  care back.
                </>
              ) : format === "packaging" ? (
                <>
                  A little care.
                  <br />A new beginning.
                </>
              ) : (
                <>
                  What nature gives,
                  <br />
                  we return through care.
                </>
              )}
            </h3>
            <p>Receive. Realise. Restore.</p>
          </div>
          <GivingBackArtwork
            key={format}
            kind={
              format === "editorial"
                ? "receive"
                : format === "card"
                  ? "restore"
                  : "master"
            }
            decorative={false}
            className={styles.applicationArt}
          />
          <span className={styles.applicationCaption}>
            {format === "packaging"
              ? "Planet Green / Community welcome kit"
              : "Earth. Food. Life."}
          </span>
        </div>
        {format === "packaging" && (
          <div className={styles.packageTag}>
            <SeedlingDetail />
            <span>
              Room for
              <br />
              new life.
            </span>
          </div>
        )}
      </div>
      <p className={styles.applicationNote} aria-live="polite">
        {selected.note} Illustrative application concept.
      </p>
    </section>
  );
}
