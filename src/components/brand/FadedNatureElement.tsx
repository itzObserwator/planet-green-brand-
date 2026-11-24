import Image from "next/image";
import {
  handDrawnElements,
  type HandDrawnElementId,
} from "@/lib/hand-drawn-elements";

export function FadedNatureElement({
  element,
  className = "",
  decorative = true,
}: {
  element: HandDrawnElementId;
  className?: string;
  decorative?: boolean;
}) {
  const artwork = handDrawnElements.find((item) => item.id === element)!;
  return (
    <Image
      src={artwork.image}
      width={artwork.width}
      height={artwork.height}
      unoptimized
      className={`faded-nature-element faded-nature-${element} ${className}`}
      alt={decorative ? "" : artwork.alt}
      aria-hidden={decorative || undefined}
      draggable={false}
    />
  );
}
