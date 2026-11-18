"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sprout } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { GlassBadge } from "@/components/glass/GlassUI";
export function BrandHero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 35, damping: 20 });
  const sy = useSpring(y, { stiffness: 35, damping: 20 });
  const reduce = useReducedMotion();
  return (
    <section
      id="brand-world"
      className="hero"
      aria-labelledby="hero-title"
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.012);
        y.set((e.clientY - r.top - r.height / 2) * 0.012);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        className="hero-art"
        style={reduce ? undefined : { x: sx, y: sy }}
      >
        <Image
          src="/imagery/floating-earth.webp"
          alt="Concept render of a sapling on a floating island of moss and soil with glass spheres and orbital rings"
          fill
          sizes="100vw"
          priority
        />
      </motion.div>
      <div className="hero-vignette" />
      <div className="hero-topline">
        <span className="eyebrow">
          <span className="live-dot" /> A living identity
        </span>
        <span className="hero-edition">Brand system / 01</span>
      </div>
      <div className="hero-copy">
        <h1 id="hero-title">
          Move to
          <br />
          <span>Nature</span>
          <span className="heading-period">.</span>
        </h1>
        <p>
          Sustainable communities, natural farming
          <br className="desktop-break" /> and a healthier way of living.
        </p>
        <Link className="button light" href="#purpose">
          Discover our world <ArrowDown size={17} />
        </Link>
      </div>
      <GlassBadge className="hero-orbit-label">
        <Sprout size={17} />
        <span>
          Rooted in nature.
          <br />
          <strong>Designed for life.</strong>
        </span>
      </GlassBadge>
      <div className="hero-bottom">
        <span>People. Planet. Possibility.</span>
        <span>Generated concept · awaiting approval</span>
        <a href="#purpose" aria-label="Scroll to brand purpose">
          <ArrowDown size={19} />
        </a>
      </div>
    </section>
  );
}
export function Intro() {
  return (
    <div className="page-intro">
      <div>
        <span className="eyebrow muted">
          Planet Green / Brand identity system
        </span>
        <p>A natural way forward.</p>
      </div>
      <Link href="/explorer/">
        Explore the toolkit <ArrowUpRight size={16} />
      </Link>
    </div>
  );
}
