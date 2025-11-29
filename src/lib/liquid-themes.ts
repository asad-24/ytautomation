export type LiquidTheme = {
  name: string
  light: {
    base: string[]
    blobs: string[]
    shine: string[]
    glow: string
  }
  dark: {
    base: string[]
    blobs: string[]
    shine: string[]
    glow: string
  }
}

export const liquidThemes: Record<string, LiquidTheme> = {
  hero: {
    name: "Hero",
    light: {
      base: ["#000000", "#0a0a0a", "#111111"],
      blobs: ["rgba(79, 70, 229, 0.25)", "rgba(139, 92, 246, 0.25)", "rgba(236, 72, 153, 0.2)"],
      shine: ["rgba(79, 70, 229, 0.15)", "rgba(165, 180, 252, 0.1)"],
      glow: "rgba(79, 70, 229, 0.3)",
    },
    dark: {
      base: ["#000000", "#0a0a0a", "#111111"],
      blobs: ["rgba(79, 70, 229, 0.3)", "rgba(139, 92, 246, 0.3)", "rgba(236, 72, 153, 0.25)"],
      shine: ["rgba(165, 180, 252, 0.2)", "rgba(196, 181, 253, 0.15)"],
      glow: "rgba(99, 102, 241, 0.4)",
    },
  },
  services: {
    name: "Services",
    light: {
      base: ["#000000", "#050505", "#0f0f0f"],
      blobs: ["rgba(168, 85, 247, 0.28)", "rgba(236, 72, 153, 0.22)", "rgba(147, 51, 234, 0.22)"],
      shine: ["rgba(168, 85, 247, 0.15)", "rgba(236, 72, 153, 0.12)"],
      glow: "rgba(168, 85, 247, 0.35)",
    },
    dark: {
      base: ["#000000", "#050505", "#0f0f0f"],
      blobs: ["rgba(168, 85, 247, 0.32)", "rgba(236, 72, 153, 0.28)", "rgba(147, 51, 234, 0.25)"],
      shine: ["rgba(192, 132, 252, 0.2)", "rgba(251, 207, 232, 0.15)"],
      glow: "rgba(168, 85, 247, 0.4)",
    },
  },
  caseStudies: {
    name: "Case Studies",
    light: {
      base: ["#000000", "#0a0a0a", "#0f0f0f"],
      blobs: ["rgba(59, 130, 246, 0.26)", "rgba(99, 102, 241, 0.24)", "rgba(6, 182, 212, 0.22)"],
      shine: ["rgba(59, 130, 246, 0.15)", "rgba(147, 197, 253, 0.12)"],
      glow: "rgba(59, 130, 246, 0.35)",
    },
    dark: {
      base: ["#000000", "#0a0a0a", "#0f0f0f"],
      blobs: ["rgba(59, 130, 246, 0.3)", "rgba(99, 102, 241, 0.28)", "rgba(6, 182, 212, 0.25)"],
      shine: ["rgba(147, 197, 253, 0.2)", "rgba(165, 180, 252, 0.15)"],
      glow: "rgba(59, 130, 246, 0.4)",
    },
  },
  pricing: {
    name: "Pricing",
    light: {
      base: ["#000000", "#050505", "#0a0a0a"],
      blobs: ["rgba(79, 70, 229, 0.24)", "rgba(139, 92, 246, 0.24)", "rgba(99, 102, 241, 0.2)"],
      shine: ["rgba(99, 102, 241, 0.15)", "rgba(165, 180, 252, 0.12)"],
      glow: "rgba(79, 70, 229, 0.3)",
    },
    dark: {
      base: ["#000000", "#050505", "#0a0a0a"],
      blobs: ["rgba(79, 70, 229, 0.28)", "rgba(139, 92, 246, 0.28)", "rgba(99, 102, 241, 0.24)"],
      shine: ["rgba(99, 102, 241, 0.18)", "rgba(165, 180, 252, 0.15)"],
      glow: "rgba(79, 70, 229, 0.35)",
    },
  },
  testimonials: {
    name: "Testimonials",
    light: {
      base: ["#000000", "#0a0a0a", "#0f0f0f"],
      blobs: ["rgba(168, 85, 247, 0.26)", "rgba(236, 72, 153, 0.24)", "rgba(219, 39, 119, 0.2)"],
      shine: ["rgba(168, 85, 247, 0.15)", "rgba(236, 72, 153, 0.12)"],
      glow: "rgba(168, 85, 247, 0.32)",
    },
    dark: {
      base: ["#000000", "#0a0a0a", "#0f0f0f"],
      blobs: ["rgba(168, 85, 247, 0.3)", "rgba(236, 72, 153, 0.28)", "rgba(219, 39, 119, 0.24)"],
      shine: ["rgba(192, 132, 252, 0.18)", "rgba(251, 207, 232, 0.15)"],
      glow: "rgba(168, 85, 247, 0.38)",
    },
  },
  footer: {
    name: "Footer",
    light: {
      base: ["#000000", "#050505", "#0a0a0a"],
      blobs: ["rgba(99, 102, 241, 0.24)", "rgba(139, 92, 246, 0.22)", "rgba(79, 70, 229, 0.2)"],
      shine: ["rgba(99, 102, 241, 0.15)", "rgba(165, 180, 252, 0.12)"],
      glow: "rgba(99, 102, 241, 0.3)",
    },
    dark: {
      base: ["#000000", "#050505", "#0a0a0a"],
      blobs: ["rgba(99, 102, 241, 0.28)", "rgba(139, 92, 246, 0.26)", "rgba(79, 70, 229, 0.24)"],
      shine: ["rgba(165, 180, 252, 0.18)", "rgba(196, 181, 253, 0.15)"],
      glow: "rgba(99, 102, 241, 0.35)",
    },
  },
}

export type LiquidThemeName = keyof typeof liquidThemes
