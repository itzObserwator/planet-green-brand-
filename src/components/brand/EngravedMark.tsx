import Image from "next/image";
import styles from "./EngravedMark.module.css";

export type EngravedElement = "seed" | "soil" | "hills" | "life";

/** Generated botanical illustrations; PNG masters and alpha-preserving WebPs live together. */
export function EngravedMark({
  kind,
  className = "",
}: {
  kind: EngravedElement;
  className?: string;
}) {
  return (
    <Image
      className={`${styles.artwork} ${className}`}
      src={`/graphics/engraved/${kind}.webp`}
      width={1254}
      height={1254}
      sizes="(max-width: 700px) 35vw, 260px"
      alt=""
      aria-hidden="true"
      draggable={false}
      unoptimized
    />
  );
}
