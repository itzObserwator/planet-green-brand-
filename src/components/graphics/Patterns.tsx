import { CSSProperties, useId } from "react";
import { cn } from "@/lib/utils";
export interface GraphicProps {
  className?: string;
  opacity?: number;
  size?: number;
}
export function HalftonePattern({
  className,
  opacity = 0.2,
  size = 10,
}: GraphicProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("halftone", className)}
      style={{ opacity, "--dot-size": `${size}px` } as CSSProperties}
    />
  );
}
export function ContourLines({ className, opacity = 0.5 }: GraphicProps) {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      aria-hidden="true"
      className={cn("contour-lines", className)}
      style={{ opacity }}
    >
      {Array.from({ length: 13 }, (_, i) => (
        <path
          key={i}
          d={`M ${-100 + i * 5} ${380 - i * 26} C 150 ${480 - i * 37}, 200 ${40 + i * 13}, 360 ${130 + i * 20} S 650 ${-20 + i * 28}, 740 ${60 + i * 26}`}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
export function OrganicShape({ className, opacity = 1 }: GraphicProps) {
  return (
    <svg
      viewBox="0 0 300 300"
      className={cn("organic-shape", className)}
      aria-hidden="true"
      style={{ opacity }}
    >
      <path
        d="M238 39C281 66 290 146 253 189C217 231 198 286 138 269C75 250 25 229 26 165C28 98 49 41 109 48C166 54 193 11 238 39Z"
        fill="currentColor"
      />
    </svg>
  );
}
export function GradientOverlay({ className, opacity = 0.7 }: GraphicProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("gradient-overlay", className)}
      style={{ opacity }}
    />
  );
}
export function NatureMask({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const id = useId().replaceAll(":", "");
  return (
    <svg
      viewBox="0 0 300 300"
      role="img"
      aria-label="Concept nature image in an organic mask"
      className={className}
    >
      <defs>
        <clipPath id={id}>
          <path d="M238 39C281 66 290 146 253 189C217 231 198 286 138 269C75 250 25 229 26 165C28 98 49 41 109 48C166 54 193 11 238 39Z" />
        </clipPath>
      </defs>
      <image
        href={src}
        width="300"
        height="300"
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#${id})`}
      />
    </svg>
  );
}
