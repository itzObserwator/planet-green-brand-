import Image from "next/image";
import { brandAssets } from "@/lib/brand-tokens";
import { cn } from "@/lib/utils";
export interface BrandLogoProps {
  variant?: "primary" | "monochrome" | "symbol";
  className?: string;
  compact?: boolean;
  tone?: "light" | "dark";
}
export function BrandLogo({
  variant = "primary",
  className,
  compact = false,
  tone = "light",
}: BrandLogoProps) {
  const src =
    variant === "primary" && tone === "dark"
      ? brandAssets.onDark
      : brandAssets[variant];
  return src ? (
    <Image
      className={cn("brand-logo", compact && "brand-logo-compact", className)}
      src={src}
      width={595.279}
      height={215.189}
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
