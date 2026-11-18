"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDownToLine, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { GlassModal } from "./GlassUI";
import { palette, brandAssets } from "@/lib/brand-tokens";
import { downloadText } from "@/lib/utils";
export function GlassNavbar() {
  const path = usePathname();
  const [mobile, setMobile] = useState(false);
  const [assets, setAssets] = useState(false);
  return (
    <>
      <header className="site-header">
        <Link href="/" aria-label="Planet Green home">
          <BrandLogo compact />
        </Link>
        <nav
          className={mobile ? "main-nav open" : "main-nav"}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            aria-current={path === "/" ? "page" : undefined}
            onClick={() => setMobile(false)}
          >
            The identity
          </Link>
          <Link
            href="/explorer/"
            aria-current={path.startsWith("/explorer") ? "page" : undefined}
            onClick={() => setMobile(false)}
          >
            Component library <ArrowUpRight size={13} />
          </Link>
          <Link href="/#applications" onClick={() => setMobile(false)}>
            In the world
          </Link>
        </nav>
        <button className="header-download" onClick={() => setAssets(true)}>
          Brand assets <ArrowDownToLine size={15} />
        </button>
        <button
          className="mobile-menu"
          aria-label={mobile ? "Close menu" : "Open menu"}
          aria-expanded={mobile}
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <X /> : <Menu />}
        </button>
      </header>
      <GlassModal
        open={assets}
        onClose={() => setAssets(false)}
        title="Brand asset library"
      >
        <p className="muted">
          An honest starting point. Original artwork has not been supplied, so
          no logo downloads are presented as approved.
        </p>
        <div className="asset-list">
          {[
            ["Primary logo · SVG", brandAssets.primary],
            ["Primary logo · PNG", brandAssets.primaryPng],
            ["Single-colour artwork", brandAssets.monochrome],
            ["Symbol artwork", brandAssets.symbol],
          ].map(([name, url]) => (
            <div key={name}>
              <span>{name}</span>
              {url ? (
                <a href={url} download>
                  Download
                </a>
              ) : (
                <span className="status-tag">Awaiting asset</span>
              )}
            </div>
          ))}
        </div>
        <button
          className="button dark"
          onClick={() =>
            downloadText(
              "planet-green-PROVISIONAL-tokens.json",
              JSON.stringify(
                {
                  status: "PROVISIONAL — not sampled from logo or approved",
                  palette,
                },
                null,
                2,
              ),
              "application/json",
            )
          }
        >
          Download draft tokens <ArrowDownToLine size={16} />
        </button>
        <p className="fine-print">
          Draft tokens are for interface exploration only. See the guidelines
          for asset handoff.
        </p>
      </GlassModal>
    </>
  );
}
