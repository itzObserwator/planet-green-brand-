"use client";
import {
  ButtonHTMLAttributes,
  CSSProperties,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useId,
  useRef,
} from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  tint?: string;
}
export function GlassCard({
  hover = false,
  tint,
  className,
  style,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn("glass-card", hover && "glass-hover", className)}
      style={
        { ...style, ...(tint ? { "--glass-tint": tint } : {}) } as CSSProperties
      }
      {...props}
    />
  );
}
export interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "icon";
}
export function GlassButton({
  variant = "primary",
  className,
  ...props
}: GlassButtonProps) {
  return (
    <button
      type="button"
      className={cn("glass-button", `glass-button-${variant}`, className)}
      {...props}
    />
  );
}
export function GlassBadge({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("glass-badge", className)} {...props}>
      {children}
    </span>
  );
}
export interface GlassImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: number;
  blur?: number;
  children?: ReactNode;
  priority?: boolean;
}
export function GlassImageFrame({
  src,
  alt,
  className,
  overlay = 0.2,
  blur = 0,
  children,
  priority,
}: GlassImageFrameProps) {
  return (
    <div className={cn("glass-image-frame", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 767px) 100vw, 50vw"
        priority={priority}
        style={{ objectFit: "cover", filter: `blur(${blur}px)` }}
      />
      <div className="image-shade" style={{ opacity: overlay }} />
      {children && <div className="image-content">{children}</div>}
    </div>
  );
}
export interface GlassModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}
export function GlassModal({
  open,
  onClose,
  title,
  children,
}: GlassModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
    if (!open) return;
    const prior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prior;
    };
  }, [open]);
  return (
    <dialog
      ref={ref}
      className="glass-modal"
      aria-labelledby={titleId}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          const rect = e.currentTarget.getBoundingClientRect();
          if (
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
          )
            onClose();
        }
      }}
    >
      <div className="modal-heading">
        <h2 id={titleId}>{title}</h2>
        <GlassButton
          variant="icon"
          onClick={onClose}
          aria-label="Close dialog"
          autoFocus
        >
          <X size={20} />
        </GlassButton>
      </div>
      {children}
    </dialog>
  );
}
