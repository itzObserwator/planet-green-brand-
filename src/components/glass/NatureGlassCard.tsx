"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, Plus } from "lucide-react";
import { EngravedMark } from "@/components/brand/EngravedMark";
import { planetGreenCompany } from "@/lib/planet-green-company";
import { GlassModal } from "./GlassUI";
import styles from "./NatureGlassCard.module.css";

type GlassStory = {
  label: string;
  title: string;
  body: string;
  href: string;
  link: string;
};
type NatureGlassCardProps = {
  title?: string;
  variant?: "forest" | "field" | "mist";
  compact?: boolean;
  stories?: GlassStory[];
  action?: string;
};
const defaultStories: GlassStory[] = planetGreenCompany.philosophy.map(
  (item) => ({
    label: item.name,
    title: item.title,
    body: item.body,
    href: item.href,
    link: item.link,
  }),
);

/** Reference-inspired glass surface using only Planet Green's green palette. */
export function NatureGlassCard({
  title = "MOVE TO NATURE",
  variant = "forest",
  compact = false,
  stories = defaultStories,
  action = "Explore our communities",
}: NatureGlassCardProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<GlassStory | null>(null);
  function explore(story: GlassStory | null) {
    setSelected(story);
    setOpen(true);
  }
  return (
    <>
      <article
        className={`${styles.card} ${styles[variant]} ${compact ? styles.compact : ""}`}
        aria-label={`${title} glass card`}
      >
        <Image
          className={styles.scenery}
          src="/imagery/elements-macro-leaves.webp"
          alt=""
          fill
          sizes="(max-width:700px) 100vw, 760px"
        />
        <div className={styles.refraction} />
        <div className={styles.highlight} />
        <div className={styles.top}>
          <h3>{title}</h3>
          <button
            className={styles.expand}
            onClick={() => explore(null)}
            aria-label={`Expand ${title.toLowerCase()}`}
          >
            <Maximize2 size={23} />
          </button>
        </div>
        <div className={styles.suggestions}>
          {stories.map((story) => (
            <button key={story.label} onClick={() => explore(story)}>
              <span>{story.label}</span>
              <span className={styles.plus}>
                <Plus size={16} />
              </span>
            </button>
          ))}
        </div>
        <a className={styles.action} href="#portfolio">
          <span className={styles.brandSeed}>
            <EngravedMark kind="seed" />
          </span>
          <span>{action}</span>
        </a>
      </article>
      <GlassModal
        open={open}
        onClose={() => setOpen(false)}
        title={selected?.title || title}
      >
        {selected ? (
          <>
            <p className={styles.modalCopy}>{selected.body}</p>
            <a
              className={styles.modalLink}
              href={selected.href}
              onClick={() => setOpen(false)}
            >
              {selected.link}
            </a>
          </>
        ) : (
          <>
            <p className={styles.modalCopy}>
              Indulge. Involve. Impact. Discover Planet Green’s approach to a
              closer relationship with nature.
            </p>
            <div className={styles.modalChoices}>
              {stories.map((story) => (
                <button key={story.label} onClick={() => setSelected(story)}>
                  {story.label}
                  <Plus size={16} />
                </button>
              ))}
            </div>
          </>
        )}
      </GlassModal>
    </>
  );
}
