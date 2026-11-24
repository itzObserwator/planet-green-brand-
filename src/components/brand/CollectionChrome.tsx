import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sprout } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { OrganicShape } from "@/components/graphics/Patterns";
export function CollectionHero({ kind }: { kind: "library" | "world" }) {
  const library = kind === "library";
  return (
    <>
      <div className="collection-running">
        <Link href="/">Planet Green / Brand identity</Link>
        <span>
          {library ? "01 / The working collection" : "02 / Identity in use"}
        </span>
      </div>
      <div
        className={`collection-hero ${library ? "collection-library-hero" : "collection-world-hero"}`}
      >
        <div className="collection-hero-copy">
          <span className="collection-kicker">
            {library ? "A connected toolkit" : "From the screen to the field"}
          </span>
          <h1>
            {library ? (
              <>
                Component
                <br />
                library.
              </>
            ) : (
              <>
                Out in
                <br />
                the world.
              </>
            )}
          </h1>
          <p>
            {library
              ? "Explore the components, colours and graphic details that hold the identity together."
              : "One purpose, expressed through Farm Natura and The Eco World: reconnecting people with food, soil, home and community."}
          </p>
          <div className="collection-hero-facts">
            <span>
              <strong>{library ? "14" : "05"}</strong>
              {library ? "Component specimens" : "Application formats"}
            </span>
            <span>
              <strong>{library ? "06" : "01"}</strong>
              {library ? "Core colours" : "Connected identity"}
            </span>
          </div>
        </div>
        <div
          className={`collection-hero-art ${library ? "collection-library-art" : "collection-world-art"}`}
        >
          <Image
            src={"/imagery/rolling-landscape-v2.webp"}
            alt={
              library
                ? "Original green landscape concept behind a translucent toolkit specimen"
                : "Original green landscape concept used in a Planet Green campaign composition"
            }
            fill
            sizes="(max-width: 700px) 100vw, 45vw"
            preload
          />
          {library ? (
            <div className="collection-glass liquid-glass">
              <span>PLANET GREEN / TOOLKIT</span>
              <Sprout size={40} strokeWidth={1.1} />
              <p>
                Made to
                <br />
                work together.
              </p>
              <span>Surfaces. Type. Patterns. Motion.</span>
            </div>
          ) : (
            <>
              <div className="collection-mini-poster">
                <BrandLogo tone="dark" />
                <p>
                  Move to
                  <br />
                  Nature.
                </p>
                <span>Indulge. Involve. Impact.</span>
              </div>
              <div className="collection-mini-tote">
                <i />
                <BrandLogo />
                <div>
                  <OrganicShape />
                  <OrganicShape />
                </div>
              </div>
            </>
          )}
          <span className="collection-art-caption">
            {library
              ? "Nature / Clarity / Connection"
              : "Digital / Print / Objects / Places"}
          </span>
        </div>
      </div>
    </>
  );
}
export function CollectionFooter() {
  return (
    <footer className="collection-footer">
      <BrandLogo />
      <p>
        Planet Green
        <br />
        The living identity / 2026
      </p>
      <div>
        <Link href="/explorer/">
          Component library
          <ArrowUpRight size={13} />
        </Link>
        <Link href="/applications/">
          In the world
          <ArrowUpRight size={13} />
        </Link>
      </div>
      <a href="#top">
        Back to top
        <ArrowUpRight size={15} />
      </a>
    </footer>
  );
}
