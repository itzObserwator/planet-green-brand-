"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Leaf,
  Sprout,
  MapPin,
} from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
export const applicationTabs = [
  "Digital",
  "Social",
  "Print",
  "Objects",
  "Wayfinding",
] as const;
export type ApplicationTab = (typeof applicationTabs)[number];
const tabs = applicationTabs;
export function BrandApplications({
  activeTab,
  onTabChange,
  title = "Out in the world.",
}: {
  activeTab?: ApplicationTab;
  onTabChange?: (tab: ApplicationTab) => void;
  title?: string;
} = {}) {
  const [localTab, setLocalTab] = useState<ApplicationTab>("Digital");
  const tab = activeTab ?? localTab;
  function setTab(next: ApplicationTab) {
    setLocalTab(next);
    onTabChange?.(next);
  }
  const [mobile, setMobile] = useState(false);
  const [portrait, setPortrait] = useState(false);
  return (
    <section id="applications" className="brand-section applications-editorial">
      <header className="applications-editorial-heading">
        <div>
          <p>Brand applications</p>
          <h2>{title}</h2>
        </div>
        <p>
          Everyday encounters. A relationship to experience.
          <br />
          The same invitation, wherever people meet Planet Green: notice,
          participate and care.
        </p>
      </header>
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
        <span className="status-tag">Concept applications</span>
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
              <span>Planet Green / A relationship put into practice</span>
              <div className="segmented">
                <button aria-pressed={!mobile} onClick={() => setMobile(false)}>
                  Desktop
                </button>
                <button aria-pressed={mobile} onClick={() => setMobile(true)}>
                  Mobile
                </button>
              </div>
            </div>
            <div className="digital-editorial-stage">
              <Image
                className="digital-stage-backdrop"
                src="/imagery/moss-garden-device.webp"
                alt=""
                fill
                sizes="(max-width:700px) 100vw, 1200px"
              />
              <div className={`website-mockup ${mobile ? "mobile" : ""}`}>
                <div className="mockup-browser">
                  <span />
                  <span />
                  <span />
                  <small>planetgreen.co.in</small>
                </div>
                <div className="mini-hero">
                  <div className="mini-nav">
                    <BrandLogo compact />
                    <span>Food. Soil. Community.</span>
                  </div>
                  <div className="mini-editorial-layout">
                    <div className="mini-copy">
                      <span className="eyebrow">A closer life. By nature.</span>
                      <h3>
                        Move to
                        <br />
                        Nature.
                      </h3>
                      <p>
                        Relearn to make food,
                        <br />
                        grow produce and replenish soil.
                      </p>
                      <Link href="/#purpose">
                        Find your connection{" "}
                        <Sprout
                          size={17}
                          strokeWidth={1.3}
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                    <div className="mini-nature-frame">
                      <Image
                        src="/imagery/hands-soil-editorial.webp"
                        alt="Hands nurturing living soil and young plant life, a photographic brand concept"
                        fill
                        sizes="(max-width:700px) 80vw, 500px"
                      />
                      <div className="mini-nature-tag">
                        <span>
                          <Sprout size={25} strokeWidth={1} />
                        </span>
                        <p>
                          Grow a closer
                          <br />
                          connection.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mini-site-footer">
                    <span>Begin where you are.</span>
                    <span>Farm Natura / The Eco World</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : tab === "Social" ? (
          <>
            <div className="preview-controls">
              <span>Farm Natura / Cultivation & connection</span>
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
                  src="/imagery/hands-soil-editorial.webp"
                  alt="Hands, living soil and young plant life in a campaign concept"
                  fill
                  sizes="500px"
                />
                <div className="social-shade" />
                <BrandLogo compact tone="dark" />
                <h3>
                  Farm Natura.
                  <br />
                  Grow closer
                  <br />
                  <em>to the land.</em>
                </h3>
                <span className="eyebrow">
                  Move to Nature <ArrowUpRight size={15} />
                </span>
              </div>
              <div className="social-tile text-social">
                <BrandLogo compact tone="dark" />
                <div className="social-seed-photo">
                  <Image
                    src="/elements/seed-cluster.webp"
                    alt=""
                    fill
                    sizes="300px"
                  />
                </div>
                <h3>
                  Indulge.
                  <br />
                  Involve.
                  <br />
                  <em>Impact.</em>
                </h3>
                <span className="eyebrow">
                  Enjoy nature. Take part. Give back.
                </span>
              </div>
            </div>
          </>
        ) : tab === "Print" ? (
          <div className="print-preview">
            <div className="brochure-cover">
              <Image
                src="/imagery/finale-stationery.webp"
                alt="Kraft stationery box with forest-green tissue and a paper booklet, a photographic application concept"
                fill
                sizes="(max-width:700px) 100vw, 600px"
              />
              <div className="brochure-imprint">
                <BrandLogo />
                <h3>
                  Make room
                  <br />
                  for nature.
                </h3>
                <span>The Eco World</span>
              </div>
            </div>
            <div className="print-copy">
              <span className="eyebrow">Brochure / cover study</span>
              <h3>
                Stories that
                <br />
                take root.
              </h3>
              <p>
                A proposed The Eco World community booklet, carrying Planet
                Green’s purpose into the relationship between home, landscape
                and everyday life.
              </p>
              <span className="fine-print">
                A4 portrait · 3 mm bleed to be added in print artwork.
                <br />
                Original logo; concept layout, not print-ready artwork.
              </span>
            </div>
          </div>
        ) : tab === "Objects" ? (
          <div className="merch-grid">
            <div className="merch-item">
              <div className="application-object-photo object-seed-package">
                <Image
                  src="/imagery/finale-stationery.webp"
                  alt="Seed envelope and paper booklet in a kraft community welcome package concept"
                  fill
                  sizes="(max-width:700px) 90vw, 400px"
                />
                <div className="object-package-imprint">
                  <BrandLogo />
                  <span>
                    Grow a closer
                    <br />
                    connection.
                  </span>
                </div>
              </div>
              <span>Community welcome pack</span>
            </div>
            <div className="merch-item">
              <div className="application-object-photo object-brand-card">
                <Image
                  src="/imagery/finale-brand-card.webp"
                  alt="A hand holding a thick paper brand card, a photographic concept"
                  fill
                  sizes="(max-width:700px) 90vw, 400px"
                />
                <BrandLogo />
              </div>
              <span>A personal invitation</span>
            </div>
            <div className="merch-item">
              <div className="application-object-photo object-seed-study">
                <BrandLogo tone="dark" />
                <div>
                  <Image
                    src="/elements/seed-cluster.webp"
                    alt="Photographic seed elements for a seed-sharing identity concept"
                    fill
                    sizes="(max-width:700px) 80vw, 350px"
                  />
                </div>
                <p>
                  Small beginnings.
                  <br />
                  Room to grow.
                </p>
              </div>
              <span>Seed-sharing concept</span>
            </div>
            <p className="fine-print merch-note">
              Photographic application concepts. Final production artwork
              follows the original logo and brand guidelines.
            </p>
          </div>
        ) : (
          <div className="signage-scene">
            <div className="wayfinding-photo-plane">
              <Image
                src="/imagery/farm-wayfinding-display.webp"
                alt="Photographic concept of a timber-supported directional sign beside a sunlit cultivated farm path"
                fill
                sizes="1000px"
              />
              <div className="signage">
                <BrandLogo compact tone="dark" />
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
                <span className="eyebrow">
                  Farm Natura / Wayfinding concept
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
function SproutIcon() {
  return <Sprout size={20} />;
}
