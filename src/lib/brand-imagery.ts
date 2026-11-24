/** Existing identity assets. Concept/reference imagery, not photographs of the named properties. */
export const brandImagery = {
  landscape: {
    src: "/imagery/rolling-landscape-v2.webp",
    alt: "Green hills and misty valleys in the Planet Green landscape concept",
    label: "Landscape / Purpose",
  },
  cultivation: {
    src: "/imagery/farming.webp",
    alt: "Soil and gardening tools used as a reference for cultivation",
    label: "Soil / Cultivation",
  },
  growth: {
    src: "/imagery/macro.webp",
    alt: "Fresh green leaves and plant growth",
    label: "Plant life / Growth",
  },
  habitation: {
    src: "/imagery/architecture.webp",
    alt: "Architecture within greenery used as a reference for nature-connected living",
    label: "Home / Habitation",
  },
} as const;
export const libraryImageRoles = {
  GlassCard: "landscape",
  GlassButton: "cultivation",
  GlassBadge: "growth",
  GlassModal: "habitation",
  GlassImageFrame: "growth",
  GlassNavbar: "landscape",
} as const;
export function libraryImagery(name: string) {
  const role = libraryImageRoles[name as keyof typeof libraryImageRoles];
  return role ? brandImagery[role] : undefined;
}
