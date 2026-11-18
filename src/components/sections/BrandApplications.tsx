"use client";
import { useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Leaf,
  MapPin,
} from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { HalftonePattern, ContourLines } from "@/components/graphics/Patterns";
const tabs = ["Digital", "Social", "Print", "Objects", "Wayfinding"];
export function BrandApplications() {
  const [tab, setTab] = useState("Digital");
  const [mobile, setMobile] = useState(false);
  const [portrait, setPortrait] = useState(false);
  return (
    <section id="applications" className="brand-section">
      <SectionHeading number="11" title="Out in the world.">
        One connected identity. Endless possibilities.
      </SectionHeading>
      <div className="applications-toolbar">
        <div className="tabs" role="tablist" aria-label="Application types">
          {tabs.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              id={`app-tab-${t}`}
              aria-controls={`app-panel-${t}`}
              tabIndex={tab === t ? 0 : -1}
              onKeyDown={(e) => {
                if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key))
                  return;
                e.preventDefault();
                const index =
                  e.key === "Home"
                    ? 0
                    : e.key === "End"
                      ? tabs.length - 1
                      : (tabs.indexOf(t) +
                          (e.key === "ArrowRight" ? 1 : -1) +
                          tabs.length) %
                        tabs.length;
                setTab(tabs[index]);
                document.getElementById(`app-tab-${tabs[index]}`)?.focus();
              }}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <span className="status-tag">
          Application concepts · approval pending
        </span>
      </div>
      <div
        className="application-preview"
        id={`app-panel-${tab}`}
        role="tabpanel"
        aria-labelledby={`app-tab-${tab}`}
        tabIndex={0}
      >
        {tab === "Digital" ? (
          <>
            <div className="preview-controls">
              <span>Website / responsive hero</span>
              <div className="segmented">
                <button aria-pressed={!mobile} onClick={() => setMobile(false)}>
                  Desktop
                </button>
                <button aria-pressed={mobile} onClick={() => setMobile(true)}>
                  Mobile
                </button>
              </div>
            </div>
            <div className={`website-mockup ${mobile ? "mobile" : ""}`}>
              <div className="mockup-browser">
                <span />
                <span />
                <span />
                <small>planetgreen · homepage concept</small>
              </div>
              <div className="mini-hero">
                <Image
                  src="/imagery/floating-earth.webp"
                  alt="Floating earth artwork in a responsive website application concept"
                  fill
                  sizes="(max-width: 767px) 100vw, 1000px"
                />
                <div className="mini-nav">
                  <BrandLogo compact />
                  <span>
                    Our philosophy &nbsp; Communities &nbsp; Connect{" "}
                    <ArrowUpRight size={12} />
                  </span>
                </div>
                <div className="mini-copy">
                  <span className="eyebrow">A more natural way of living</span>
                  <h3>
                    Move to
                    <br />
                    Nature.
                  </h3>
                  <p>Good things grow here.</p>
                  <a href="#purpose">
                    Find your connection <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : tab === "Social" ? (
          <>
            <div className="preview-controls">
              <span>Social / campaign templates</span>
              <div className="segmented">
                <button
                  aria-pressed={!portrait}
                  onClick={() => setPortrait(false)}
                >
                  Square
                </button>
                <button
                  aria-pressed={portrait}
                  onClick={() => setPortrait(true)}
                >
                  Portrait
                </button>
              </div>
            </div>
            <div className={`social-mockups ${portrait ? "portrait" : ""}`}>
              <div className="social-tile">
                <Image
                  src="/imagery/farming.webp"
                  alt="Plants in a nature campaign concept"
                  fill
                  sizes="500px"
                />
                <div className="social-shade" />
                <BrandLogo compact />
                <h3>
                  From Healthy Soil
                  <br />
                  to Thriving
                  <br />
                  <em>Communities.</em>
                </h3>
                <HalftonePattern opacity={0.2} />
                <span className="eyebrow">
                  Move to Nature <ArrowUpRight size={15} />
                </span>
              </div>
              <div className="social-tile text-social">
                <BrandLogo compact />
                <ContourLines opacity={0.3} />
                <h3>
                  A little closer
                  <br />
                  to what
                  <br />
                  <em>matters.</em>
                </h3>
                <span className="eyebrow">People. Planet. Possibility.</span>
              </div>
            </div>
          </>
        ) : tab === "Print" ? (
          <div className="print-preview">
            <div className="brochure-cover">
              <Image
                src="/imagery/landscape.webp"
                alt="Forest photography on a brochure cover concept"
                fill
                sizes="500px"
              />
              <div className="social-shade" />
              <BrandLogo compact />
              <div>
                <span className="eyebrow">The Planet Green philosophy</span>
                <h3>
                  A place
                  <br />
                  to grow.
                </h3>
                <p>People, Land and Nature in Harmony.</p>
              </div>
              <ContourLines opacity={0.2} />
            </div>
            <div className="print-copy">
              <span className="eyebrow">Brochure / cover study</span>
              <h3>
                Stories that
                <br />
                take root.
              </h3>
              <p>
                Open space, confident typography and a window into the natural
                world.
              </p>
              <span className="fine-print">
                A4 portrait · 3 mm bleed to be added in print artwork.
                <br />
                Placeholder identity; not a print-ready approved asset.
              </span>
            </div>
          </div>
        ) : tab === "Objects" ? (
          <div className="merch-grid">
            <div className="merch-item">
              <div className="tote">
                <div className="tote-handle" />
                <BrandLogo compact />
                <span>Move to Nature.</span>
              </div>
              <span>01 / Cotton tote</span>
            </div>
            <div className="merch-item">
              <div className="bottle">
                <div className="bottle-cap" />
                <Leaf size={26} strokeWidth={1} />
                <BrandLogo compact />
              </div>
              <span>02 / Reusable bottle</span>
            </div>
            <div className="merch-item">
              <div className="shirt">
                <BrandLogo compact />
              </div>
              <span>03 / Everyday tee</span>
            </div>
            <p className="fine-print merch-note">
              CSS form studies with labelled placeholders. Apply the exact
              approved logo before production.
            </p>
          </div>
        ) : (
          <div className="signage-scene">
            <Image
              src="/imagery/forest.webp"
              alt="Forest setting behind an environmental signage concept"
              fill
              sizes="1000px"
            />
            <div className="signage">
              <BrandLogo compact />
              <div>
                <span>
                  <SproutIcon /> Natural farm
                </span>
                <ArrowRight size={25} />
              </div>
              <div>
                <span>
                  <MapPin size={20} /> Community space
                </span>
                <ArrowUpRight size={25} />
              </div>
              <div>
                <span>
                  <Leaf size={20} /> Nature trail
                </span>
                <ArrowDown size={25} />
              </div>
              <ContourLines opacity={0.12} />
              <span className="eyebrow">Take the natural way.</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
function SproutIcon() {
  return <Leaf size={20} />;
}
