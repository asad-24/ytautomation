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
      blobs: ["rgba(220, 38, 38, 0.28)", "rgba(239, 68, 68, 0.25)", "rgba(185, 28, 28, 0.22)"],
      shine: ["rgba(239, 68, 68, 0.15)", "rgba(252, 165, 165, 0.1)"],
      glow: "rgba(220, 38, 38, 0.35)",
    },
    dark: {
      base: ["#000000", "#0a0a0a", "#111111"],
      blobs: ["rgba(220, 38, 38, 0.32)", "rgba(239, 68, 68, 0.3)", "rgba(185, 28, 28, 0.28)"],
      shine: ["rgba(252, 165, 165, 0.2)", "rgba(254, 202, 202, 0.15)"],
      glow: "rgba(239, 68, 68, 0.4)",
    },
  },
  services: {
    name: "Services",
    light: {
      base: ["#000000", "#050505", "#0f0f0f"],
      blobs: ["rgba(239, 68, 68, 0.3)", "rgba(220, 38, 38, 0.26)", "rgba(185, 28, 28, 0.24)"],
      shine: ["rgba(239, 68, 68, 0.16)", "rgba(252, 165, 165, 0.12)"],
      glow: "rgba(239, 68, 68, 0.38)",
    },
    dark: {
      base: ["#000000", "#050505", "#0f0f0f"],
      blobs: ["rgba(239, 68, 68, 0.35)", "rgba(220, 38, 38, 0.3)", "rgba(185, 28, 28, 0.28)"],
      shine: ["rgba(252, 165, 165, 0.22)", "rgba(254, 202, 202, 0.16)"],
      glow: "rgba(239, 68, 68, 0.42)",
    },
  },
  caseStudies: {
    name: "Case Studies",
    light: {
      base: ["#000000", "#0a0a0a", "#0f0f0f"],
      blobs: ["rgba(220, 38, 38, 0.28)", "rgba(185, 28, 28, 0.26)", "rgba(153, 27, 27, 0.22)"],
      shine: ["rgba(239, 68, 68, 0.15)", "rgba(252, 165, 165, 0.12)"],
      glow: "rgba(220, 38, 38, 0.36)",
    },
    dark: {
      base: ["#000000", "#0a0a0a", "#0f0f0f"],
      blobs: ["rgba(220, 38, 38, 0.32)", "rgba(185, 28, 28, 0.3)", "rgba(153, 27, 27, 0.26)"],
      shine: ["rgba(252, 165, 165, 0.2)", "rgba(254, 202, 202, 0.16)"],
      glow: "rgba(220, 38, 38, 0.4)",
    },
  },
  pricing: {
    name: "Pricing",
    light: {
      base: ["#000000", "#050505", "#0a0a0a"],
      blobs: ["rgba(239, 68, 68, 0.26)", "rgba(220, 38, 38, 0.26)", "rgba(185, 28, 28, 0.22)"],
      shine: ["rgba(239, 68, 68, 0.15)", "rgba(252, 165, 165, 0.12)"],
      glow: "rgba(239, 68, 68, 0.32)",
    },
    dark: {
      base: ["#000000", "#050505", "#0a0a0a"],
      blobs: ["rgba(239, 68, 68, 0.3)", "rgba(220, 38, 38, 0.3)", "rgba(185, 28, 28, 0.26)"],
      shine: ["rgba(252, 165, 165, 0.18)", "rgba(254, 202, 202, 0.15)"],
      glow: "rgba(239, 68, 68, 0.36)",
    },
  },
  testimonials: {
    name: "Testimonials",
    light: {
      base: ["#000000", "#0a0a0a", "#0f0f0f"],
      blobs: ["rgba(220, 38, 38, 0.28)", "rgba(239, 68, 68, 0.26)", "rgba(185, 28, 28, 0.22)"],
      shine: ["rgba(239, 68, 68, 0.15)", "rgba(252, 165, 165, 0.12)"],
      glow: "rgba(220, 38, 38, 0.34)",
    },
    dark: {
      base: ["#000000", "#0a0a0a", "#0f0f0f"],
      blobs: ["rgba(220, 38, 38, 0.32)", "rgba(239, 68, 68, 0.3)", "rgba(185, 28, 28, 0.26)"],
      shine: ["rgba(252, 165, 165, 0.2)", "rgba(254, 202, 202, 0.16)"],
      glow: "rgba(220, 38, 38, 0.4)",
    },
  },
  footer: {
    name: "Footer",
    light: {
      base: ["#000000", "#050505", "#0a0a0a"],
      blobs: ["rgba(185, 28, 28, 0.26)", "rgba(220, 38, 38, 0.24)", "rgba(153, 27, 27, 0.22)"],
      shine: ["rgba(239, 68, 68, 0.15)", "rgba(252, 165, 165, 0.12)"],
      glow: "rgba(220, 38, 38, 0.32)",
    },
    dark: {
      base: ["#000000", "#050505", "#0a0a0a"],
      blobs: ["rgba(185, 28, 28, 0.3)", "rgba(220, 38, 38, 0.28)", "rgba(153, 27, 27, 0.26)"],
      shine: ["rgba(252, 165, 165, 0.18)", "rgba(254, 202, 202, 0.15)"],
      glow: "rgba(220, 38, 38, 0.36)",
    },
  },
}

export type LiquidThemeName = keyof typeof liquidThemes
