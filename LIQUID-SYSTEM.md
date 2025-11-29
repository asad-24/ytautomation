# Advanced Liquid Crystal Background System

## Overview

A sophisticated, performance-optimized liquid-crystal background system with section-specific themes, interactive ripple effects, and seamless light/dark mode support.

## Features

### 🌊 Global Liquid Engine
- **Multi-layered rendering system**
  - Layer 1: Dynamic base gradient
  - Layer 2: Animated blob shapes with blur
  - Layer 3: Canvas particle system with connections
  - Layer 4: Shimmer overlay with blend modes
  
- **Performance optimization**
  - Automatic WebGL/Canvas disable for low-power devices
  - CSS-only fallback for mobile
  - Device memory detection
  - Optimized particle count

- **Smooth transitions**
  - 800ms cross-fade between themes
  - No jarring color changes
  - Animated gradient morphing

### 🎨 Section-Specific Themes

Each section has unique liquid palettes for light & dark modes:

**Hero**: Vibrant cyan → violet → pink neon
**Services**: Soft purple → pink glass
**Case Studies**: Deep blue → indigo crystal
**Pricing**: Minimal white/navy glass
**Testimonials**: Elegant teal → blue
**Footer**: Deep navy crystal pattern

### 🎯 Interactive Liquid Header

- **Frosted glass appearance**
  - Dynamic blur (8px → 16px on scroll)
  - Semi-transparent overlay
  - Subtle neon edge glow
  - iOS-style smoothness

- **Ripple interactions**
  - Click any nav item → liquid ripple
  - Animated distortion effect
  - Fades after 1.5 seconds
  - Multiple concurrent ripples

- **Hover effects**
  - Liquid glow on nav items
  - Floating bubble animations
  - Smooth color transitions

### 📍 Automatic Theme Switching

- IntersectionObserver detects section entry
- Threshold: 30% visibility
- Root margin: -20% top/bottom
- Smooth transition between themes

## Usage

### Basic Setup

1. **Wrap your app with providers** (already done in layout.tsx):

\`\`\`tsx
<ThemeProvider>
  <LiquidProvider>
    {children}
  </LiquidProvider>
</ThemeProvider>
\`\`\`

2. **Add background engine** (once per page):

\`\`\`tsx
<LiquidBackgroundEngine />
\`\`\`

3. **Use LiquidSection for each section**:

\`\`\`tsx
<LiquidSection theme="hero" id="hero">
  <YourContent />
</LiquidSection>

<LiquidSection theme="services" id="services">
  <ServicesGrid />
</LiquidSection>
\`\`\`

### Available Themes

\`\`\`typescript
type LiquidThemeName = 
  | "hero" 
  | "services" 
  | "caseStudies" 
  | "pricing" 
  | "testimonials" 
  | "footer"
\`\`\`

### Triggering Ripples Manually

\`\`\`tsx
import { useLiquid } from "@/contexts/liquid-context"

function MyComponent() {
  const { triggerRipple } = useLiquid()
  
  const handleClick = (e: React.MouseEvent) => {
    triggerRipple(e.clientX, e.clientY)
  }
  
  return <button onClick={handleClick}>Click me</button>
}
\`\`\`

### Changing Theme Programmatically

\`\`\`tsx
import { useLiquid } from "@/contexts/liquid-context"

function MyComponent() {
  const { setActiveTheme } = useLiquid()
  
  const goToServices = () => {
    setActiveTheme("services")
    // Scroll to section...
  }
}
\`\`\`

## Architecture

### Components

\`\`\`
src/
├── contexts/
│   └── liquid-context.tsx        # Global state management
├── lib/
│   └── liquid-themes.ts          # Theme definitions
└── components/
    ├── liquid-background-engine.tsx  # Main rendering engine
    ├── liquid-header.tsx         # Interactive header
    └── liquid-section.tsx        # Section wrapper
\`\`\`

### State Flow

1. **LiquidProvider** stores:
   - Current active theme
   - Array of active ripples
   - Transition state

2. **LiquidSection** observes scroll:
   - Detects when 30% visible
   - Calls `setActiveTheme()`

3. **LiquidBackgroundEngine** reacts:
   - Animates theme transition
   - Updates gradients, blobs, particles
   - Renders ripple effects

4. **LiquidHeader** triggers:
   - Ripple on nav click
   - Theme change on section select

## Customization

### Adding New Themes

Edit `src/lib/liquid-themes.ts`:

\`\`\`typescript
export const liquidThemes = {
  myCustomTheme: {
    name: "My Theme",
    light: {
      base: ["#color1", "#color2", "#color3"],
      blobs: ["rgba(...)", "rgba(...)", "rgba(...)"],
      shine: ["rgba(...)", "rgba(...)"],
      glow: "rgba(...)",
    },
    dark: {
      // Same structure
    },
  },
}
\`\`\`

### Adjusting Animation Speed

In `liquid-background-engine.tsx`:

\`\`\`tsx
// Change transition duration (default: 800ms)
transition={{ duration: 0.8, ease: "easeInOut" }}

// Adjust blob animation speed
className="animate-blob" // 20s by default
\`\`\`

### Disabling WebGL

Force CSS-only mode:

\`\`\`tsx
// In LiquidBackgroundEngine
setUseWebGL(false)
\`\`\`

## Performance Notes

### Optimizations Applied

- WebGL disabled on mobile devices
- Particle count: 40 (tuned for 60fps)
- Canvas operations throttled
- Ripples auto-cleanup after 1.5s
- CSS transforms used (GPU-accelerated)

### Device Detection

\`\`\`typescript
const isLowPower = 
  /Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
  (navigator as any).deviceMemory < 4
\`\`\`

### Memory Management

- Particles reuse instances
- No memory leaks (proper cleanup)
- Animation frames cancelled on unmount
- Observers disconnected properly

## Light vs Dark Mode

### Automatic Switching

Theme colors automatically adapt based on the user's preference:

\`\`\`tsx
const { theme } = useTheme() // "light" | "dark" | "system"
const themeColors = isDark ? currentTheme.dark : currentTheme.light
\`\`\`

### Color Philosophy

**Light Mode**:
- Bright, airy colors
- Soft shadows
- Glass-like transparency

**Dark Mode**:
- Deep, rich colors
- Subtle glows
- Enhanced depth

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers
- ⚠️ Graceful degradation for older browsers

## Troubleshooting

### Background not changing?

Check IntersectionObserver thresholds:
\`\`\`tsx
// In LiquidSection
threshold: [0.3, 0.5, 0.7]
\`\`\`

### Ripples not appearing?

Verify click coordinates:
\`\`\`tsx
const rect = element.getBoundingClientRect()
triggerRipple(e.clientX, e.clientY)
\`\`\`

### Performance issues?

1. Reduce particle count
2. Disable WebGL
3. Increase animation duration
4. Check device memory

## Examples

### Full Hero Section

\`\`\`tsx
<LiquidSection theme="hero" id="hero">
  <div className="min-h-screen flex items-center">
    <h1>Welcome to the Liquid Crystal Experience</h1>
    <p>Smooth, interactive, beautiful.</p>
  </div>
</LiquidSection>
\`\`\`

### Interactive Card

\`\`\`tsx
function Card() {
  const { triggerRipple } = useLiquid()
  
  return (
    <div
      onClick={(e) => triggerRipple(e.clientX, e.clientY)}
      className="glass-light p-8 rounded-2xl cursor-pointer"
    >
      Click me for ripples!
    </div>
  )
}
\`\`\`

---

## Credits

Built with:
- Next.js 16
- Framer Motion
- TypeScript
- Tailwind CSS

Inspired by iOS liquid glass design and modern fluid interfaces.
