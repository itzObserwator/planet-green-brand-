import Image from "next/image";
import images from "@/lib/giving-back-images.json";
import { givingBackAlt, type GivingBackKind } from "@/lib/giving-back";
import styles from "./GivingBack.module.css";

export type ArtworkProps = {
  kind?: GivingBackKind;
  className?: string;
  decorative?: boolean;
  eager?: boolean;
  sizes?: string;
};
/** Static, alpha-preserving generated artwork. No runtime generation or vector substitutes. */
export function GivingBackArtwork({
  kind = "master",
  className = "",
  decorative = true,
  eager = false,
  sizes = "(max-width:700px) 85vw, 500px",
}: ArtworkProps) {
  const meta = images[kind];
  return (
    <picture className={`${styles.artwork} ${className}`}>
      <source
        type="image/webp"
        srcSet={[320, 640, 960, 1254]
          .map((w) => `/graphics/giving-back/${kind}-${w}.webp ${w}w`)
          .join(", ")}
        sizes={sizes}
      />
      <Image
        src={`/graphics/giving-back/${kind}-1254.webp`}
        alt={decorative ? "" : givingBackAlt[kind]}
        aria-hidden={decorative ? true : undefined}
        width={meta.width}
        height={meta.height}
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        placeholder="blur"
        blurDataURL={meta.blur}
        draggable={false}
      />
    </picture>
  );
}
export const MasterBrandIllustration = (props: Omit<ArtworkProps, "kind">) => (
  <GivingBackArtwork {...props} kind="master" />
);
export const ReceiveElement = (props: Omit<ArtworkProps, "kind">) => (
  <GivingBackArtwork {...props} kind="receive" />
);
export const RealiseElement = (props: Omit<ArtworkProps, "kind">) => (
  <GivingBackArtwork {...props} kind="realise" />
);
export const RestoreElement = (props: Omit<ArtworkProps, "kind">) => (
  <GivingBackArtwork {...props} kind="restore" />
);
export const BotanicalAccent = ReceiveElement;
export const SupportingHandIllustration = RestoreElement;
export const SeedlingDetail = (props: Omit<ArtworkProps, "kind">) => (
  <GivingBackArtwork {...props} kind="seedling" />
);
