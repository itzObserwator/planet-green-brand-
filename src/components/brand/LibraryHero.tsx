import Image from "next/image";
import Link from "next/link";
import { brandImagery } from "@/lib/brand-imagery";

export function LibraryHero() {
  return (
    <div className="library-opening">
      <div className="library-breadcrumb">
        <Link href="/">Planet Green / Brand identity</Link>
        <span>The working collection</span>
      </div>
      <div className="library-landscape-hero">
        <Image
          src={brandImagery.landscape.src}
          alt={brandImagery.landscape.alt}
          fill
          sizes="100vw"
          preload
        />
        <div className="library-landscape-shade" />
        <div className="library-hero-copy">
          <span className="library-kicker">THE LIVING IDENTITY / TOOLKIT</span>
          <h1>
            Component
            <br />
            library.
          </h1>
          <p>
            The details that bring
            <br />a more natural world together.
          </p>
        </div>
        <div className="library-hero-specimen liquid-glass">
          <span className="library-nature-label">LAND / SOIL / LIFE</span>
          <p>
            Rooted in the land.
            <br />
            Made for life.
          </p>
          <div className="library-hero-swatches" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>
          <span>Surfaces. Type. Patterns. Motion.</span>
        </div>
        <div className="library-hero-caption">
          <span>Original logo colours. One connected system.</span>
          <span>Landscape concept / Planet Green</span>
        </div>
      </div>
      <div className="library-introduction">
        <div>
          <span className="library-kicker">EXPLORE. EXPERIMENT. CREATE.</span>
          <h2>
            Made to work
            <br />
            <span>together.</span>
          </h2>
        </div>
        <p>
          Carry Planet Green’s purpose into every touchpoint. Browse the
          components behind a shared identity for Farm Natura and The Eco World,
          from stories about food and soil to home and community.{" "}
          <Link href="/explorer/?tab=artwork">
            Explore The Act of Giving Back artwork.
          </Link>
        </p>
      </div>
    </div>
  );
}
