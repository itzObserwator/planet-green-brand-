import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Leaf,
  MapPin,
  Sprout,
} from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import styles from "./PhysicalMockup.module.css";
import { MasterBrandIllustration } from "@/components/giving-back/GivingBackArtwork";

export function PhysicalMockup({
  kind,
}: {
  kind: "booklet" | "wayfinding" | "card";
}) {
  const asset = {
    booklet: {
      src: "finale-stationery.webp",
      alt: "Planet Green Eco World booklet and seed envelope in a kraft welcome box",
    },
    wayfinding: {
      src: "farm-wayfinding-display.webp",
      alt: "Planet Green Farm Natura wayfinding sign beside a cultivated farm path",
    },
    card: {
      src: "finale-brand-card.webp",
      alt: "A hand holding a textured Planet Green business card",
    },
  }[kind];
  return (
    <div
      className={`${styles.mockup} ${styles[kind]}`}
      role="img"
      aria-label={asset.alt}
    >
      <div className={styles.plane} aria-hidden="true">
        <Image
          src={`/imagery/${asset.src}`}
          alt=""
          fill
          sizes="(max-width:700px) 100vw, 65vw"
        />
        {kind === "booklet" && (
          <div className={styles.bookletPrint}>
            <BrandLogo />
            <span className={styles.bookletTitle}>
              Make room
              <br />
              for nature.
            </span>
            <span className={styles.bookletBrand}>The Eco World</span>
            <MasterBrandIllustration className={styles.bookletArtwork} />
          </div>
        )}
        {kind === "card" && <BrandLogo className={styles.cardPrint} />}
        {kind === "wayfinding" && (
          <div className={styles.signPrint}>
            <BrandLogo tone="dark" />
            <div>
              <span>
                <Sprout />
                Natural farm
              </span>
              <ArrowRight />
            </div>
            <div>
              <span>
                <MapPin />
                Community space
              </span>
              <ArrowUpRight />
            </div>
            <div>
              <span>
                <Leaf />
                Nature trail
              </span>
              <ArrowDown />
            </div>
            <small>Farm Natura / Wayfinding concept</small>
          </div>
        )}
      </div>
    </div>
  );
}
