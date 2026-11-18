import { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { typeScale } from "@/lib/brand-tokens";
export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: (typeof typeScale)[number]["css"];
}
export function Typography({
  as: Tag = "p",
  variant = "body-regular",
  className,
  ...props
}: TypographyProps) {
  return <Tag className={cn(variant, className)} {...props} />;
}
