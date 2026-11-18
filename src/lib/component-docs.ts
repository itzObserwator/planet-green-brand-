export const componentDocs = [
  {
    name: "GlassCard",
    category: "Surfaces",
    description:
      "A configurable frosted surface for dark photographic contexts.",
    props: "hover?: boolean · tint?: string · HTMLAttributes<HTMLDivElement>",
    code: '<GlassCard hover tint="rgb(255 255 255 / .12)">\n  <h3>Space to grow.</h3>\n</GlassCard>',
    path: "@/components/glass/GlassUI",
  },
  {
    name: "GlassButton",
    category: "Surfaces",
    description:
      "Primary, secondary and icon controls with focus, hover and disabled states.",
    props: "variant?: primary | secondary | icon · ButtonHTMLAttributes",
    code: '<GlassButton variant="primary" onClick={openPreview}>\n  Explore <ArrowRight size={16} />\n</GlassButton>',
    path: "@/components/glass/GlassUI",
  },
  {
    name: "GlassBadge",
    category: "Surfaces",
    description: "A compact frosted label with optional icon support.",
    props: "children: ReactNode · HTMLAttributes<HTMLSpanElement>",
    code: "<GlassBadge>\n  <Leaf size={14} /> Rooted in nature\n</GlassBadge>",
    path: "@/components/glass/GlassUI",
  },
  {
    name: "GlassModal",
    category: "Surfaces",
    description:
      "Native modal dialog with keyboard containment, Escape dismissal and focus restoration.",
    props:
      "open: boolean · onClose: () => void · title: string · children: ReactNode",
    code: '<GlassModal open={open} onClose={() => setOpen(false)}\n  title="A little room to breathe">\n  <p>Meaningful content, naturally.</p>\n</GlassModal>',
    path: "@/components/glass/GlassUI",
  },
  {
    name: "GlassImageFrame",
    category: "Surfaces",
    description:
      "A Next Image composition with adjustable environmental overlay and background blur.",
    props:
      "src: string · alt: string · overlay?: number · blur?: number · priority?: boolean",
    code: '<GlassImageFrame src="/imagery/forest.webp"\n  alt="Light through a forest" overlay={0.3} blur={0}>\n  <h3>Room to breathe.</h3>\n</GlassImageFrame>',
    path: "@/components/glass/GlassUI",
  },
  {
    name: "GlassNavbar",
    category: "Surfaces",
    description:
      "Sticky responsive navigation with active route, mobile menu and an honest asset library.",
    props:
      "No required props. Uses Next.js routing and the shared brand asset registry.",
    code: "<GlassNavbar />",
    path: "@/components/glass/GlassNavbar",
  },
  {
    name: "Typography",
    category: "Foundations",
    description:
      "Ten fluid styles built on the central scale. Inter is the documented Brutel fallback.",
    props:
      "variant?: display-xl | display-lg | heading-h1 | heading-h2 | heading-h3 | body-lg | body-regular | caption | overline | button-label · as?: ElementType",
    code: '<Typography as="h1" variant="display-xl">\n  Move to Nature\n</Typography>',
    path: "@/components/brand/Typography",
  },
  {
    name: "BrandLogo",
    category: "Foundations",
    description:
      "Renders the exact approved asset when configured. Otherwise displays a labelled text placeholder.",
    props:
      "variant?: primary | monochrome | symbol · compact?: boolean · className?: string",
    code: '<BrandLogo variant="primary" compact />',
    path: "@/components/brand/BrandLogo",
  },
  {
    name: "HalftonePattern",
    category: "Graphics",
    description:
      "A scalable CSS dot texture. An original concept, not a logo-derived pattern.",
    props: "size?: number · opacity?: number · className?: string",
    code: '<div className="relative">\n  <HalftonePattern size={10} opacity={0.2} />\n</div>',
    path: "@/components/graphics/Patterns",
  },
  {
    name: "ContourLines",
    category: "Graphics",
    description:
      "SVG terrain-inspired linework that inherits the current text colour.",
    props: "opacity?: number · className?: string",
    code: "<ContourLines opacity={0.4} />",
    path: "@/components/graphics/Patterns",
  },
  {
    name: "OrganicShape",
    category: "Graphics",
    description:
      "A generic organic SVG for supporting compositions. Never use it as a replacement logo.",
    props: "opacity?: number · className?: string",
    code: "<OrganicShape opacity={0.7} />",
    path: "@/components/graphics/Patterns",
  },
  {
    name: "GradientOverlay",
    category: "Graphics",
    description:
      "An environmental gradient that uses shared provisional palette variables.",
    props: "opacity?: number · className?: string",
    code: "<GradientOverlay opacity={0.6} />",
    path: "@/components/graphics/Patterns",
  },
  {
    name: "NatureMask",
    category: "Graphics",
    description: "An SVG organic clip for existing local nature imagery.",
    props: "src: string · className?: string",
    code: '<NatureMask src="/imagery/texture.webp" />',
    path: "@/components/graphics/Patterns",
  },
  {
    name: "Reveal",
    category: "Motion",
    description:
      "A one-time scroll entrance. Respects reduced motion and retains visible server content.",
    props: "children: ReactNode · className?: string",
    code: "<Reveal>\n  <BrandPurpose />\n</Reveal>",
    path: "@/components/brand/Reveal",
  },
] as const;
