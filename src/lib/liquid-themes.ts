export type LiquidTheme = {
  name: string
  colors: {
    base: string[]
    blobs: string[]
    shine: string[]
    glow: string
  }
}

export const liquidThemes: Record<string, LiquidTheme> = {
  hero: {
    name: "Hero",
    colors: {
      base: ["#000000", "#0a0a0a", "#111111"],
      blobs: ["rgba(59, 7, 100, 0.3)", "rgba(190, 18, 93, 0.25)", "rgba(6, 182, 212, 0.22)"],
      shine: ["rgba(6, 182, 212, 0.15)", "rgba(14, 165, 233, 0.12)"],
      glow: "rgba(59, 7, 100, 0.35)",
    },
  },
  services: {
    name: "Services",
    colors: {
      base: ["#000000", "#050505", "#0f0f0f"],
      blobs: ["rgba(59, 7, 100, 0.32)", "rgba(6, 182, 212, 0.28)", "rgba(190, 18, 93, 0.26)"],
      shine: ["rgba(6, 182, 212, 0.18)", "rgba(14, 165, 233, 0.14)"],
      glow: "rgba(59, 7, 100, 0.38)",
    },
  },
  caseStudies: {
    name: "Case Studies",
    colors: {
      base: ["#000000", "#0a0a0a", "#0f0f0f"],
      blobs: ["rgba(59, 7, 100, 0.31)", "rgba(6, 182, 212, 0.27)", "rgba(17, 24, 39, 0.24)"],
      shine: ["rgba(6, 182, 212, 0.16)", "rgba(14, 165, 233, 0.13)"],
      glow: "rgba(59, 7, 100, 0.36)",
    },
  },
  pricing: {
    name: "Pricing",
    colors: {
      base: ["#000000", "#050505", "#0a0a0a"],
      blobs: ["rgba(59, 7, 100, 0.29)", "rgba(6, 182, 212, 0.26)", "rgba(190, 18, 93, 0.24)"],
      shine: ["rgba(6, 182, 212, 0.15)", "rgba(14, 165, 233, 0.12)"],
      glow: "rgba(59, 7, 100, 0.34)",
    },
  },
  testimonials: {
    name: "Testimonials",
    colors: {
      base: ["#000000", "#0a0a0a", "#0f0f0f"],
      blobs: ["rgba(59, 7, 100, 0.32)", "rgba(6, 182, 212, 0.28)", "rgba(190, 18, 93, 0.26)"],
      shine: ["rgba(6, 182, 212, 0.18)", "rgba(14, 165, 233, 0.14)"],
      glow: "rgba(59, 7, 100, 0.38)",
    },
  },
  footer: {
    name: "Footer",
    colors: {
      base: ["#000000", "#050505", "#0a0a0a"],
      blobs: ["rgba(6, 182, 212, 0.31)", "rgba(59, 7, 100, 0.29)", "rgba(17, 24, 39, 0.27)"],
      shine: ["rgba(6, 182, 212, 0.16)", "rgba(14, 165, 233, 0.13)"],
      glow: "rgba(59, 7, 100, 0.36)",
    },
  },
}

export type LiquidThemeName = keyof typeof liquidThemes
