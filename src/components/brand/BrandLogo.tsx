import Image from "next/image";
import { brandAssets } from "@/lib/brand-tokens";
import { cn } from "@/lib/utils";
export interface BrandLogoProps {
  variant?: "primary" | "monochrome" | "symbol";
  className?: string;
  compact?: boolean;
}
export function BrandLogo({
  variant = "primary",
  className,
  compact = false,
}: BrandLogoProps) {
  const src = brandAssets[variant];
  return src ? (
    <Image
      className={className}
      src={src}
      width={180}
      height={64}
      alt="Planet Green"
    />
  ) : (
    <span className={cn("brand-placeholder", compact && "compact", className)}>
      <span className="brand-name">
        planet green<span className="brand-dot">.</span>
      </span>
      <span className="brand-placeholder-note">
        {variant === "primary"
          ? "Logo asset pending"
          : `${variant} · pending approval`}
      </span>
    </span>
  );
}
