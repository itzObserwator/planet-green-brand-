import { useId, type ReactNode } from "react";

/** A filled architectural silhouette; intentionally open at its fading foot. */
export function FadedArch({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 970 1572"
      className={`reference-faded-arch ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`arch-fade-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" />
          <stop offset=".25" stopColor="currentColor" stopOpacity=".85" />
          <stop offset=".48" stopColor="currentColor" stopOpacity=".4" />
          <stop offset=".73" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M136 1180V354C220 326 224 285 299 260C364 238 397 198 465 165C533 198 566 238 631 260C706 285 710 326 794 354V1180ZM273 1180V500C273 463 306 436 346 416C390 394 423 383 465 363C507 383 540 394 584 416C624 436 657 463 657 500V1180Z"
        fill={`url(#arch-fade-${id})`}
        fillRule="evenodd"
      />
    </svg>
  );
}

/** Layered botanical linework, separate from the Planet Green signature. */
export function ReferenceMandala({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 640"
      className={`reference-mandala ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2">
        {Array.from({ length: 16 }, (_, i) => (
          <g key={i} transform={`rotate(${i * 22.5} 320 320)`}>
            <path d="M320 306C290 277 282 231 320 194C358 231 350 277 320 306Z" />
            <path d="M320 294C307 268 307 237 320 214C333 237 333 268 320 294Z" />
            <path d="M320 193C271 170 270 107 320 60C370 107 369 170 320 193Z" />
            <path d="M320 174C291 149 292 113 320 79C348 113 349 149 320 174Z" />
            <path d="M320 195C291 179 276 152 282 130C306 136 321 160 320 195Z" />
            <path d="M320 195C349 179 364 152 358 130C334 136 319 160 320 195Z" />
            <path d="M320 60C299 38 306 19 320 7C334 19 341 38 320 60Z" />
            <path d="M282 79C261 59 260 39 270 27C288 33 294 55 282 79Z" />
            <path d="M358 79C379 59 380 39 370 27C352 33 346 55 358 79Z" />
          </g>
        ))}
        <circle cx="320" cy="320" r="14" />
        <circle cx="320" cy="320" r="23" />
        <circle cx="320" cy="320" r="130" />
        <circle cx="320" cy="320" r="138" />
        <circle cx="320" cy="320" r="263" />
        <circle cx="320" cy="320" r="273" />
      </g>
    </svg>
  );
}

/** Proportions follow the uploaded 1400 × 788 context composition. */
export function StoryContextPanel({
  label = "Context",
  title,
  lead,
  children,
  className = "",
}: {
  label?: string;
  title: string;
  lead: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="reference-context-shell">
      <div className={`reference-context-panel ${className}`}>
        <ReferenceMandala />
        <div className="reference-context-content">
          <p className="reference-context-label">{label}</p>
          <h2>{title}</h2>
          <div className="reference-context-copy">
            <p>{lead}</p>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
