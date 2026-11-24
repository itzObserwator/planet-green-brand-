"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { givingBackStages, livingCycleParts } from "@/lib/giving-back";
import {
  GivingBackArtwork,
  MasterBrandIllustration,
} from "./GivingBackArtwork";
import styles from "./GivingBack.module.css";

export function LivingCycleInspector() {
  const [part, setPart] = useState(0);
  const selected = livingCycleParts[part];
  const [left, top, width, height] = selected.region;
  return (
    <div className={styles.inspector}>
      <div className={styles.inspectorArt}>
        <MasterBrandIllustration decorative={false} />
        <span
          className={styles.inspectorRegion}
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `${width}%`,
            height: `${height}%`,
          }}
          aria-hidden="true"
        />
      </div>
      <div>
        <div
          className={styles.partControls}
          role="group"
          aria-label="Living Cycle elements"
        >
          {livingCycleParts.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setPart(i)}
              aria-pressed={part === i}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className={styles.partMeaning} aria-live="polite">
          <h3>{selected.meaning}</h3>
          <p>{selected.reasoning}</p>
        </div>
      </div>
    </div>
  );
}
export function GivingBackStory() {
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setReduced(mq.matches);
      if (mq.matches) setPlaying(false);
    };
    sync();
    mq.addEventListener("change", sync);
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (!entry.isIntersecting) setPlaying(false);
      },
      { threshold: 0.1 },
    );
    if (root.current) observer.observe(root.current);
    return () => {
      mq.removeEventListener("change", sync);
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!playing || reduced || !visible) return;
    const timer = window.setTimeout(() => {
      if (stage === 2) setPlaying(false);
      else setStage(stage + 1);
    }, 2400);
    return () => window.clearTimeout(timer);
  }, [playing, stage, reduced, visible]);
  return (
    <section
      id="giving-back"
      ref={root}
      className={styles.chapter}
      aria-labelledby="giving-back-heading"
      data-reduced={reduced}
    >
      <div className={styles.chapterTop}>
        <p className={styles.eyebrow}>The act of giving back</p>
        <Link href="/explorer/?tab=artwork">Explore the artwork</Link>
      </div>
      <div className={styles.storyHeader}>
        <h2 id="giving-back-heading" className={styles.heading}>
          What nature gives,
          <br />
          <span>we return through care.</span>
        </h2>
        <p>
          Receive. Realise. Restore.
          <br />
          One continuous relationship.
        </p>
      </div>
      <div
        className={styles.stageCards}
        role="group"
        aria-label="The act of giving back stages"
      >
        {givingBackStages.map((item, i) => (
          <button
            key={item.id}
            onClick={() => {
              setStage(i);
              setPlaying(false);
            }}
            aria-pressed={stage === i}
            style={{ "--art-delay": `${i * 90}ms` } as CSSProperties}
          >
            <GivingBackArtwork kind={item.id} />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
      <div className={styles.stageFoot}>
        <div aria-live="polite">
          <h3>{givingBackStages[stage].title}</h3>
          <p>{givingBackStages[stage].detail}</p>
        </div>
        <div className={styles.motionControls}>
          <button
            disabled={reduced}
            onClick={() => {
              if (!playing) {
                setStage(0);
              }
              setPlaying(!playing);
            }}
            aria-pressed={playing}
          >
            {reduced
              ? "Story motion reduced"
              : playing
                ? "Pause story"
                : "Play story"}
          </button>
          <button
            onClick={() => {
              setStage(0);
              setPlaying(!reduced);
            }}
          >
            Replay
          </button>
        </div>
      </div>
      <details className={styles.designDetails}>
        <summary>Inside the Living Cycle / Five connected elements</summary>
        <LivingCycleInspector />
        <p className={styles.designNote}>
          Interconnected life is expressed through canopy, light, flow, care and
          renewal. The Indian philosophical reference informs their
          relationship; the artwork makes no claim to be a sacred or historical
          symbol.
        </p>
      </details>
    </section>
  );
}
