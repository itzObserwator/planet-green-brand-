"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Sprout,
  Plus,
  Heart,
  SlidersHorizontal,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { brandElements } from "@/lib/brand-elements";
import { GlassCard, GlassBadge } from "@/components/glass/GlassUI";
import { BrandApplications } from "@/components/sections/BrandApplications";
import { brandContext } from "@/lib/brand-context";
import { palette } from "@/lib/brand-tokens";
import { brandIcons } from "@/lib/brand-icons";

const hills = "/imagery/cultural-story/telangana-fields.webp";
const hands = "/imagery/hands-soil-editorial.webp";
const bhudevi = "/imagery/cultural-story/bhudevi-sculpture.webp";
const meal = "/imagery/cultural-story/shared-rice-meal.webp";
function Photo({
  src,
  alt = "",
  priority = false,
}: {
  src: string;
  alt?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 700px) 100vw, 50vw"
      preload={priority}
    />
  );
}
function Guide({ anchor, children }: { anchor: string; children: ReactNode }) {
  return (
    <Link className="folio-link" href={`/explorer/?tab=guidelines#${anchor}`}>
      {children}
    </Link>
  );
}
function Label({ children }: { children: ReactNode }) {
  return <p className="folio-label">{children}</p>;
}
function EarthPill({
  title = "Grow a closer connection.",
  subtitle = "Food. Farming. Living soil.",
  href = "#relearning",
  image = "/elements/seed-cluster.webp",
}: {
  title?: string;
  subtitle?: string;
  href?: string;
  image?: string;
}) {
  return (
    <a className="case-earth-pill" href={href}>
      <span className="case-pill-thumb">
        <Photo src={image} />
      </span>
      <span>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </span>
      <Plus size={26} strokeWidth={1} aria-hidden="true" />
    </a>
  );
}
function CoverCloseupMockup() {
  return (
    <div
      className="case-closeup-mockup"
      role="img"
      aria-label="Close-up angled Planet Green screen mockup with a photographic green seed, translucent Soil and Life circle, and Farm Natura typography"
    >
      <div className="case-closeup-screen">
        <div className="case-closeup-toolbar" aria-hidden="true">
          <Sprout strokeWidth={1} />
        </div>
        <div className="case-closeup-neighbour" aria-hidden="true" />
        <div className="case-closeup-card">
          <span className="case-closeup-badge">Living seed</span>
          <div className="case-closeup-land">
            <Photo src="/elements/cover-green-seed.webp" />
          </div>
          <div className="case-closeup-glass">
            <span>Soil + Life</span>
          </div>
          <div className="case-closeup-caption">
            <span>Farm Natura</span>
            <strong>Grow closer.</strong>
          </div>
        </div>
      </div>
      <div className="case-closeup-focus" aria-hidden="true" />
    </div>
  );
}
function PhonePreview({ paper = false }: { paper?: boolean }) {
  return (
    <div className={`case-phone ${paper ? "case-phone-paper" : ""}`}>
      <div className="case-phone-status">
        <span>9:41</span>
        <span className="case-island" />
        <span aria-hidden="true">•••</span>
      </div>
      <div className="case-phone-screen">
        <BrandLogo tone={paper ? "light" : "dark"} />
        <span className="case-phone-overline">A closer life with nature</span>
        <div className="case-phone-object">
          <Photo
            src={
              paper
                ? "/elements/seed-cluster.webp"
                : "/elements/soil-mound.webp"
            }
          />
        </div>
        <EarthPill
          title="Farm Natura"
          subtitle="Cultivate a connection"
          href="https://farmnatura.vercel.app/"
        />
        <h3>
          Rooted in care.
          <br />
          <span>Open to life.</span>
        </h3>
        <p>Relearn to grow produce and replenish the soil.</p>
        <div className="case-phone-meta">
          <span>
            Our commitment
            <br />
            <strong>Nature’s recovery.</strong>
          </span>
          <Sprout size={30} strokeWidth={1} />
        </div>
        <a className="case-phone-action" href="#purpose">
          Begin exploring <span aria-hidden="true">＋</span>
        </a>
      </div>
    </div>
  );
}
function LivingSoilPreview() {
  return (
    <div className="living-soil-device">
      <div className="living-device-status">
        <span>9:41</span>
        <span className="living-device-island" aria-hidden="true" />
        <span aria-hidden="true">•••</span>
      </div>
      <div className="living-device-brand">
        <BrandLogo />
        <span>The Planet Green practice</span>
      </div>
      <div className="living-device-earth">
        <Photo
          src="/elements/soil-mound.webp"
          alt="Living soil, a photographic brand concept"
        />
        <span>Life begins here.</span>
      </div>
      <div className="living-device-content">
        <p className="living-device-eyebrow">Food / Farming / Soil</p>
        <h3>
          Living soil.
          <br />
          <span>A living future.</span>
        </h3>
        <p className="living-device-description">
          Notice what supports a harvest. Learn by taking part in the care of
          the soil.
        </p>
        <a
          className="living-device-experience"
          href="https://farmnatura.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="living-experience-seeds">
            <Photo src="/elements/seed-cluster.webp" />
          </span>
          <span>
            <strong>Farm Natura</strong>
            <small>Cultivation. Connection. Care.</small>
          </span>
          <Plus size={20} strokeWidth={1} aria-hidden="true" />
        </a>
        <div
          className="living-device-practice"
          aria-label="Our three acts of relearning"
        >
          {brandContext.relearning.map((step) => (
            <span key={step.title}>
              {step.title}
              <Sprout size={16} strokeWidth={1} aria-hidden="true" />
            </span>
          ))}
        </div>
        <a href="#purpose" className="living-device-cta">
          <span className="living-device-cta-icon">
            <Sprout size={20} strokeWidth={1.2} />
          </span>
          Explore the relationship
          <Plus size={20} strokeWidth={1} aria-hidden="true" />
        </a>
      </div>
      <span className="living-device-home" aria-hidden="true" />
    </div>
  );
}
function FinaleCatalogue() {
  return (
    <div className="finale-catalogue-sheet" aria-hidden="true">
      <BrandLogo />
      <span className="finale-preview-eyebrow">A closer life with nature</span>
      <h3>
        Find your
        <br />
        connection.
      </h3>
      <div className="finale-preview-tiles">
        <div>
          <div className="finale-preview-object">
            <Photo src="/elements/seed-cluster.webp" />
          </div>
          <strong>Farm Natura</strong>
          <span>Food. Farming. Soil.</span>
        </div>
        <div>
          <div className="finale-preview-object">
            <Photo src="/imagery/architecture.webp" />
          </div>
          <strong>The Eco World</strong>
          <span>Home. Land. Community.</span>
        </div>
      </div>
      <div className="finale-preview-land">
        <Photo src={hills} />
        <span>Move to Nature.</span>
      </div>
    </div>
  );
}
function FinaleWebsite() {
  return (
    <div className="finale-website-sheet" aria-hidden="true">
      <div className="finale-preview-nav">
        <span>Our purpose</span>
        <BrandLogo />
        <span>Explore</span>
      </div>
      <div className="finale-preview-web-intro">
        <h3>
          A closer life.
          <br />
          By nature.
        </h3>
        <span>Find your connection</span>
      </div>
      <div className="finale-preview-web-story">
        <div>
          {brandContext.relearning.map((step) => (
            <p key={step.title}>
              <Sprout size={10} />
              {step.title}
            </p>
          ))}
        </div>
        <div className="finale-preview-web-photo">
          <Photo src={hands} />
        </div>
      </div>
      <div className="finale-preview-web-leaf">
        <Photo src="/imagery/elements-macro-leaves.webp" />
        <span>
          Learn to nurture
          <br />
          what nurtures us.
        </span>
      </div>
    </div>
  );
}
function FinaleMockups() {
  return (
    <div
      className="case-capsule-finale finale-reference"
      aria-label="Planet Green photography, digital and print mockups"
    >
      <div className="finale-reference-stage">
        <a
          href="#graphics"
          className="finale-reference-panel finale-reference-nature"
          aria-label="Explore Planet Green's photographic elements"
        >
          <div className="finale-nature-hills">
            <Photo src={hills} />
          </div>
          <div className="finale-nature-seeds">
            <Photo src="/elements/seed-cluster.webp" />
          </div>
          <span className="finale-nature-glass" aria-hidden="true">
            <Sprout size={18} strokeWidth={1} />
            Soil. Seeds. Life.
          </span>
        </a>
        <a
          href="#purpose"
          className="finale-reference-panel finale-reference-human"
          aria-label="Explore Planet Green's invitation to a closer life with nature"
        >
          <Photo src={hands} />
          <BrandLogo tone="dark" />
        </a>
        <Link
          href="/explorer/"
          className="finale-reference-panel finale-reference-catalogue"
          aria-label="Explore the Planet Green component library"
        >
          <FinaleCatalogue />
        </Link>
        <a
          href="#purpose"
          className="finale-reference-panel finale-reference-growth"
          aria-label="Discover Planet Green's connection with living nature"
        >
          <Photo
            src="/imagery/macro.webp"
            alt="Close-up photograph of fresh green plant growth"
          />
        </a>
        <Link
          href="/applications/"
          className="finale-reference-panel finale-reference-website"
          aria-label="Explore Planet Green's digital applications"
        >
          <FinaleWebsite />
        </Link>
        <Link
          href="/applications/"
          className="finale-reference-panel finale-reference-business"
          aria-label="Explore Planet Green's print applications"
        >
          <Photo
            src="/imagery/finale-brand-card.webp"
            alt="Concept photograph of a hand holding a thick paper brand card"
          />
          <BrandLogo />
        </Link>
        <Link
          href="/applications/"
          className="finale-reference-panel finale-reference-parcel"
          aria-label="Explore Planet Green's stationery applications"
        >
          <Photo
            src="/imagery/finale-stationery.webp"
            alt="Concept photograph of a kraft stationery box, green tissue, booklet and seed envelope"
          />
          <div className="finale-parcel-imprint">
            <BrandLogo />
            <span>
              A closer life.
              <br />
              By nature.
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
function ExperienceCatalogue() {
  return (
    <GlassCard className="case-catalogue">
      <Label>Experience the relationship</Label>
      <h3>
        A closer life.
        <br />
        <span>By nature.</span>
      </h3>
      <div className="case-catalogue-tools">
        <Sprout size={25} strokeWidth={1} />
        <span>Cultivation & habitation</span>
      </div>
      <div className="case-catalogue-grid">
        {brandContext.experiences.map((experience, i) => (
          <a
            className="case-experience-tile"
            key={experience.name}
            href={experience.href}
            target="_blank"
            rel="noreferrer"
          >
            <GlassBadge>{i === 0 ? "Cultivation" : "Habitation"}</GlassBadge>
            <div className="case-experience-object">
              <Photo
                src={
                  i === 0
                    ? "/elements/seed-cluster.webp"
                    : "/imagery/architecture.webp"
                }
              />
            </div>
            <h4>{experience.name}</h4>
            <p>
              {i === 0 ? "Food. Farming. Soil." : "Home. Landscape. Community."}
            </p>
          </a>
        ))}
      </div>
      <a href="#relearning" className="case-catalogue-foot">
        <span>Begin with the earth.</span>
        <strong>
          Make food.
          <br />
          Grow produce.
          <br />
          Replenish soil.
        </strong>
      </a>
    </GlassCard>
  );
}
export function EditorialPlanetIdentity() {
  const [active, setActive] = useState(0);
  return (
    <div className="folio-identity case-identity">
      <main id="main">
        <section id="brand-world" className="case-cover">
          <div className="case-cover-human folio-photo">
            <Photo
              src={bhudevi}
              alt="Original photographic concept of a contemporary Bhudevi stone sculpture in a garden courtyard, not an historical artefact"
              priority
            />
            <BrandLogo tone="dark" />
            <span className="case-cultural-caption">
              Bhudevi / Contemporary sculptural concept
            </span>
            <h1>Move to Nature.</h1>
            <a href="#purpose">Explore a closer life</a>
          </div>
          <div className="case-cover-product">
            <CoverCloseupMockup />
          </div>
        </section>

        <section id="purpose" className="case-chapter case-about">
          <div className="folio-manifesto">
            <Label>An Indian story of earth, nourishment and care</Label>
            <h2>
              What sustains us <span>deserves our care.</span> A closer life
              begins when we experience that relationship.
            </h2>
          </div>
          <div className="case-intention">
            <Label>A lived encounter gives the idea a place to begin</Label>
            <h3>
              First, an encounter.
              <br />
              Then, a way
              <br />
              to take part.
            </h3>
            <p>{brandContext.founder.story}</p>
            <p>
              The vision is to ease the burden on Mother Nature so she has room
              to recover. The cultural story gives that commitment a familiar
              language; the mission gives people a way to take part.
            </p>
            <div className="case-founder">
              <div className="case-founder-mark">
                <BrandLogo />
              </div>
              <div>
                <strong>{brandContext.founder.name}</strong>
                <span>{brandContext.founder.role}</span>
                <a
                  href={brandContext.founder.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the founder’s vision
                </a>
              </div>
            </div>
          </div>
          <span className="case-circle-symbol" aria-hidden="true">
            <Heart size={24} strokeWidth={1} />
          </span>
        </section>

        <div className="case-tactile folio-photo">
          <Photo
            src={hands}
            alt="Close-up photographic concept of hands, living soil and plant growth"
          />
          <EarthPill
            title="The ground beneath a shared life."
            subtitle="Earth. Nourishment. Care."
            href="#relearning"
          />
        </div>

        <section id="language" className="case-chapter case-mission">
          <div className="case-section-title">
            <h2>A story we can live.</h2>
            <Guide anchor="language">Our story & language</Guide>
          </div>
          <div className="case-challenges case-cultural-origins">
            {brandContext.culturalStory.references.map((reference) => (
              <article key={reference.name}>
                <Label>{reference.name} / A Hindu mythological reference</Label>
                <h3>{reference.theme}.</h3>
                <p className="case-myth-copy">{reference.story}</p>
                <a
                  className="folio-link"
                  href={reference.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the cultural reference
                </a>
              </article>
            ))}
          </div>
          <div className="case-cultural-bridge">
            <p>{brandContext.culturalStory.tension}</p>
            <p>{brandContext.culturalStory.bridge}</p>
          </div>
          <div className="folio-manifesto">
            <Label>The story becomes useful through participation</Label>
            <h2>
              The mission brings earth and nourishment together.{" "}
              <span>Make food. Grow produce.</span> Replenish soil. Learn the
              relationship by taking part.
            </h2>
          </div>
        </section>
        <div className="case-paired-spread">
          <div className="case-seed-composition">
            <div className="case-pale-oval" />
            <div className="case-seed-large">
              <Photo
                src="/elements/seed-cluster.webp"
                alt="Photographic seed elements with a young shoot"
              />
            </div>
            <EarthPill
              title="Every seed, a beginning."
              subtitle="Grow produce. Nurture life."
            />
          </div>
          <div className="case-human-panel folio-photo">
            <Photo
              src={meal}
              alt="Original photographic concept of hands serving a shared rice meal on a banana leaf"
            />
            <h3>
              A meal begins
              <br />
              <span>long before the table.</span>
            </h3>
          </div>
        </div>
        <div id="portfolio" className="case-canopy folio-photo">
          <Photo
            src="/imagery/moss-catalogue-background.webp"
            alt="Original photographic concept of dense moss, tiny leaves and rounded green contours against a pale background"
          />
          <ExperienceCatalogue />
          <p className="case-photo-note">
            Original moss concept / Brand experiences
          </p>
        </div>

        <section
          id="imagery"
          className="case-chapter case-connections"
          aria-label="Planet Green philosophy carousel"
        >
          <div className="case-key-decision">
            <Label>Four ways to make the relationship tangible</Label>
            <h2>
              From the land
              <br />
              <span>to the table,</span>
              <br />
              and the places we call home.
            </h2>
            <div className="case-tiny-pair">
              <div className="folio-photo">
                <Photo src="/imagery/farming.webp" />
                <span>Farm Natura</span>
              </div>
              <div className="folio-photo">
                <Photo src="/imagery/architecture.webp" />
                <span>The Eco World</span>
              </div>
            </div>
          </div>
          <div className="case-device-story">
            <div className="case-device-board">
              <PhonePreview />
            </div>
            <div className="case-device-copy">
              <h3>One.</h3>
              <p>{brandContext.experienceIntro}</p>
              <div className="case-experience-notes">
                {brandContext.ecosystem.map((experience) => (
                  <details key={experience.name}>
                    <summary>{experience.name}</summary>
                    <p>{experience.description}</p>
                    <a href={experience.href} target="_blank" rel="noreferrer">
                      Explore {experience.name}
                    </a>
                  </details>
                ))}
              </div>
              <div className="case-philosophy-select">
                {brandContext.philosophy.map((item, i) => (
                  <button
                    key={item.name}
                    className={`terrain-philosophy-card ${active === i ? "is-active" : ""}`}
                    aria-pressed={active === i}
                    onClick={() => setActive(i)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="case-active-philosophy">
                <h4>{brandContext.philosophy[active].name}.</h4>
                <p aria-live="polite">
                  {brandContext.philosophy[active].description}
                </p>
              </div>
              <div className="case-carousel-controls">
                <button
                  aria-label="Previous philosophy"
                  onClick={() => setActive((active + 2) % 3)}
                >
                  <ChevronLeft strokeWidth={1} />
                </button>
                <span className="terrain-slide-count">0{active + 1} / 03</span>
                <button
                  aria-label="Next philosophy"
                  onClick={() => setActive((active + 1) % 3)}
                >
                  <ChevronRight strokeWidth={1} />
                </button>
              </div>
              <Guide anchor="imagery">Imagery & art direction</Guide>
            </div>
          </div>
        </section>
        <div className="case-halo-spread">
          <div className="case-halo-blur" aria-hidden="true" />
          <div className="case-halo-photo folio-photo">
            <Photo
              src={meal}
              alt="Shared nourishment as a contemporary expression of care, a photographic concept"
            />
          </div>
          <div className="case-halo-copy">
            <p>
              From the earth
              <br />
              <span>to the table,</span>
              <br />a relationship to care for.
            </p>
          </div>
        </div>
        <div id="relearning" className="case-chapter case-process">
          <div className="folio-manifesto">
            <Label>Knowing grows through doing</Label>
            <h2>
              A story becomes real through experience.{" "}
              <span>Prepare a meal. Grow something.</span> Learn what the soil
              needs, and give the next beginning room to grow.
            </h2>
          </div>
          <div className="case-process-note">
            <Label>Three everyday acts</Label>
            <p>
              Make food.
              <br />
              Grow produce.
              <br />
              Replenish soil.
            </p>
            <Guide anchor="purpose">Our vision & everyday practice</Guide>
          </div>
          <span className="case-circle-symbol" aria-hidden="true">
            <Heart size={24} strokeWidth={1} />
          </span>
        </div>
        <div className="case-paired-spread case-paired-return">
          <div className="case-human-panel folio-photo">
            <Photo src={hands} alt="Nurturing living soil" />
            <h3>
              Closer through
              <br />
              <span>participation.</span>
            </h3>
          </div>
          <div className="case-seed-composition">
            <div className="case-pale-oval" />
            <div className="case-seed-large">
              <Photo
                src="/elements/seed-cluster.webp"
                alt="Seeds and germination, a photographic brand concept"
              />
            </div>
            <GlassCard className="case-seed-specimen">
              <GlassBadge>Living soil</GlassBadge>
              <Sprout size={45} strokeWidth={1} />
              <p>
                Small beginnings.
                <br />
                <strong>Room to grow.</strong>
              </p>
              <a href="#graphics">Explore the elements</a>
            </GlassCard>
          </div>
        </div>
        <div className="case-landscape-device folio-photo">
          <Photo
            src="/imagery/moss-garden-device.webp"
            alt="Original photographic concept of rounded moss mounds, grass and young plants against a pale backdrop"
          />
          <div className="case-floating-device">
            <LivingSoilPreview />
          </div>
          <p className="case-photo-note">
            A digital expression of the identity / Botanical concept
          </p>
        </div>

        <div className="case-chapter case-landing-chapter">
          <Label>A clear route from story to experience</Label>
          <h2 className="case-medium-statement">
            The story should help people find their place in it.{" "}
            <span>Explore cultivation, living, food or land.</span> Begin with
            the encounter that speaks to you.
          </h2>
          <div className="case-inset-site">
            <div className="case-inset-nav">
              <span>Our approach</span>
              <BrandLogo />
              <Link href="/explorer/">Explore</Link>
            </div>
            <div className="case-inset-intro">
              <h3>
                A closer life.
                <br />
                By nature.
              </h3>
              <a className="folio-button" href="#relearning">
                Find your connection
              </a>
            </div>
            <div className="case-inset-steps">
              <div>
                {brandContext.relearning.map((step) => (
                  <article key={step.title}>
                    <Sprout size={22} strokeWidth={1} />
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="folio-photo">
                <Photo
                  src={hands}
                  alt="The human relationship with growing food and caring for soil"
                />
              </div>
            </div>
            <div className="case-inset-capsule folio-photo">
              <Photo src="/imagery/texture.webp" alt="Tactile green foliage" />
              <EarthPill
                title="Cultivate a connection."
                subtitle="Food. Soil. Community."
                href="https://farmnatura.vercel.app/"
              />
            </div>
            <div className="case-inset-closing">
              <h3>
                A relationship already here.
                <br />
                A little more attention.
                <br />A place to begin.
              </h3>
              <a href="#portfolio" className="folio-button">
                Explore the experiences
              </a>
            </div>
            <div className="case-inset-pair">
              <div className="folio-photo">
                <Photo
                  src={hands}
                  alt="Hands holding the beginnings of plant life"
                />
              </div>
              <div>
                <PhonePreview />
              </div>
            </div>
          </div>
        </div>

        <section id="surfaces" className="case-surface-spread">
          <div className="case-surface-relief" aria-hidden="true">
            <Photo src="/imagery/surface-leaf-veins.webp" />
          </div>
          <div className="case-leaf-study folio-photo">
            <Photo
              src="/imagery/surface-leaf-veins.webp"
              alt="Original macro photographic concept of soft green leaf veins and tactile natural texture"
            />
          </div>
          <EarthPill
            title="Keep nature in view."
            subtitle="Quiet surfaces. Space for the living world."
            href="/explorer/?tab=components"
          />
          <div className="case-surface-caption">
            <Label>Translucent layers let the landscape carry the story.</Label>
            <Guide anchor="surfaces">The surface system</Guide>
          </div>
        </section>

        <div className="case-system-wrap">
          <section id="logo" className="case-branding-chapter case-chapter">
            <div className="case-branding-intro">
              <span className="case-circle-symbol" aria-hidden="true">
                <SlidersHorizontal size={23} strokeWidth={1} />
              </span>
              <div>
                <Label>
                  Identity reasoning / A cultural idea, a living expression
                </Label>
                <h2>
                  One relationship holds the identity together.{" "}
                  <span>Earth, nourishment and everyday life,</span> seen more
                  closely.
                </h2>
                <p>
                  The Bhudevi sculpture introduces earth as a presence to relate
                  to. The rice meal and Telangana field bring the idea into
                  everyday experience. Rounded frames connect these encounters;
                  translucent layers keep the setting visible. The original
                  signature and greens remain the anchor, with Outfit giving the
                  story a clear contemporary voice.
                </p>
                <div className="download-group">
                  <a href="/brand/planet-green-original.svg" download>
                    SVG <Download size={15} />
                  </a>
                  <a href="/brand/planet-green-original.png" download>
                    PNG <Download size={15} />
                  </a>
                </div>
                <Guide anchor="logo">Logo guidelines</Guide>
              </div>
            </div>
            <div className="case-brand-thumbnails">
              <div className="folio-photo">
                <Photo src={hands} />
                <BrandLogo tone="dark" />
              </div>
              <div>
                <BrandLogo tone="dark" />
                <span>
                  Move to Nature.
                  <br />A closer life begins here.
                </span>
              </div>
              <div className="folio-photo">
                <Photo src="/imagery/macro.webp" />
              </div>
            </div>
            <div className="case-poster-layout">
              <div>
                <h3>
                  One
                  <br />
                  original.
                </h3>
                <p>
                  The linked organic forms in the original globe support a
                  contemporary reading of interdependence. The cultural story
                  lives around the signature, carried by imagery, words and
                  experience. Its original artwork stays intact.
                </p>
              </div>
              <div className="case-poster-oval">
                <Photo
                  src="/imagery/realistic-poster-display.webp"
                  alt="Photographic concept of a charcoal-framed Planet Green poster display on a stone plinth beside a limestone building"
                />
                <div className="case-poster">
                  <BrandLogo tone="dark" />
                  <div className="case-poster-seeds">
                    <Photo src="/elements/seed-cluster.webp" />
                  </div>
                  <p>
                    Grow a closer
                    <br />
                    connection.
                  </p>
                  <span>Food. Farming. Living soil.</span>
                </div>
              </div>
            </div>
          </section>
          <div className="case-specification-row">
            <section id="typography">
              <Label>Typography / Outfit</Label>
              <h2>Aa</h2>
              <p>
                Outfit makes reflection easy to read and action easy to find.
                <br />
                Regular. Medium. Semibold.
              </p>
              <Guide anchor="typography">Explore typography</Guide>
            </section>
            <section id="colour">
              <Label>Greens carried from the original signature</Label>
              <div className="case-palette">
                {palette.map((c) => (
                  <div
                    key={c.hex}
                    style={{ background: c.hex }}
                    title={`${c.name} ${c.hex}`}
                  >
                    <span className="sr-only">
                      {c.name} {c.hex}
                    </span>
                  </div>
                ))}
              </div>
              <h2>
                Rooted
                <br />
                in nature.
              </h2>
              <Guide anchor="colour">Colour roles & accessibility</Guide>
            </section>
            <section id="icons">
              <Label>Simple signs help people take the next step.</Label>
              <div className="case-icon-grid">
                {brandIcons.map(({ icon: Icon, name, use }) => (
                  <div key={name}>
                    <Icon size={25} strokeWidth={1} />
                    <span>{use}</span>
                  </div>
                ))}
              </div>
              <Guide anchor="icons">The icon collection</Guide>
            </section>
          </div>
          <section
            id="graphics"
            className="elements-editorial"
            aria-labelledby="elements-editorial-title"
          >
            <div className="elements-editorial-backdrop">
              <Photo
                src="/imagery/elements-macro-leaves.webp"
                alt="Original macro photographic concept of folded, velvety green leaves"
              />
            </div>
            <p className="elements-editorial-label">
              Look closely. The visual language is already here.
            </p>
            <div
              className="elements-editorial-panels"
              tabIndex={0}
              role="group"
              aria-label="Planet Green brand compositions"
            >
              <article className="elements-message-panel">
                <div className="elements-message-header">
                  <BrandLogo tone="dark" />
                  <a
                    href="https://planetgreen.co.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    planetgreen.co.in
                  </a>
                </div>
                <div className="elements-message-copy">
                  <h2 id="elements-editorial-title">
                    Hills. Life.
                    <br />
                    Soil. Seeds.
                  </h2>
                  <p>
                    A landscape to experience.
                    <br />
                    Small details to notice.
                  </p>
                </div>
              </article>
              <div className="elements-human-panel">
                <Photo
                  src={hands}
                  alt="Hands nurturing living soil and a young plant, a Planet Green photographic concept"
                />
                <BrandLogo tone="dark" />
              </div>
              <div className="elements-life-panel">
                <Photo
                  src="/imagery/macro.webp"
                  alt="A green plant photographed against a pale backdrop"
                />
                <EarthPill
                  title="Life begins here."
                  subtitle="Soil. Seeds. Possibility."
                  href="/explorer/?tab=guidelines#graphics"
                />
              </div>
            </div>
            <div className="elements-editorial-tools">
              <details className="elements-asset-drawer">
                <summary>Explore the four elements</summary>
                <div className="elements-asset-content">
                  {brandElements.map((element) => (
                    <article key={element.id}>
                      <h3>{element.name}</h3>
                      <p>{element.guidance}</p>
                      <a
                        href={element.download}
                        download
                        aria-label={`Download ${element.name} ${element.format}`}
                      >
                        Download {element.format}
                        <Download size={15} aria-hidden="true" />
                      </a>
                    </article>
                  ))}
                </div>
              </details>
              <Guide anchor="graphics">Shape, texture & composition</Guide>
            </div>
          </section>
        </div>
        <div className="case-chapter case-application-chapter">
          <BrandApplications />
        </div>
        <div className="case-chapter case-future">
          <div className="case-section-title">
            <h2>A story lived together.</h2>
            <span className="case-circle-symbol" aria-hidden="true">
              <Heart size={24} strokeWidth={1} />
            </span>
          </div>
          <div className="case-future-intent">
            <Label>Begin with an everyday encounter</Label>
            <h3>
              With a meal.
              <br />
              With something growing.
              <br />
              With the place you live.
            </h3>
            <p>
              Begin at the table with Veda Bharath, in cultivation at Farm
              Natura, in the landscape of everyday living at The Eco World, or
              with a route to farmland through GLC. These are different ways to
              meet the same relationship. Curiosity opens it. Participation
              deepens it. Care gives it continuity.
            </p>
            <Link href="/applications/" className="folio-link">
              See the identity in the world
            </Link>
          </div>
          <div className="folio-manifesto">
            <Label>Move to Nature</Label>
            <h2>
              What sustains us deserves our care.{" "}
              <span>Learn the relationship. Take part in it.</span> Make room
              for life, and give something back to the ground.
            </h2>
          </div>
        </div>
        <FinaleMockups />
        <div className="case-final-links">
          <Link href="/explorer/" className="folio-button">
            Component library
          </Link>
          <Link href="/applications/" className="folio-link">
            In the world
          </Link>
        </div>
      </main>
      <footer className="folio-footer">
        <BrandLogo />
        <p>
          Planet Green / Brand identity
          <br />
          Concept photography & applications.
        </p>
        <a href="https://planetgreen.co.in/" target="_blank" rel="noreferrer">
          planetgreen.co.in
        </a>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}
