"use client";
import { useEffect, useState } from "react";
import { sections } from "@/lib/brand-tokens";
export function SectionNav() {
  const [active, setActive] = useState("brand-world");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    sections.forEach(([id]) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <nav className="section-nav" aria-label="Identity sections">
      <span className="section-nav-label">The system</span>
      <div>
        {sections.map(([id, label], i) => (
          <a
            href={`#${id}`}
            key={id}
            aria-current={active === id ? "location" : undefined}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
