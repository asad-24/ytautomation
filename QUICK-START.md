# 🚀 Quick Start Guide - Liquid Crystal System

## What You Got

An advanced liquid-crystal background system that automatically changes based on which section is visible. Each section has its own unique color theme that smoothly transitions as you scroll.

## How It Works (5-Minute Overview)

### 1. Global Background Engine
The `<LiquidBackgroundEngine />` component renders a multi-layered background:
- Animated gradient base
- Floating blob shapes
- Particle connections (WebGL/Canvas)
- Shimmer overlays

### 2. Section Themes
6 pre-defined themes (Hero, Services, Case Studies, Pricing, Testimonials, Footer) with distinct palettes for light & dark modes.

### 3. Auto Theme Switching
Each `<LiquidSection>` component watches for when it's scrolled into view, then tells the background engine to switch themes.

### 4. Interactive Header
Click any navigation item → liquid ripple effect. Header is frosted glass that gets more opaque as you scroll.

## Running the Project

```bash
# Already running on:
http://localhost:3000

# If you need to restart:
npm run dev
```

## Making Quick Changes

### Change a Section's Theme

In `src/app/page.tsx`:

```tsx
<LiquidSection theme="services" id="services">
  <ServicesGrid />
</LiquidSection>

// Change "services" to any theme: 
// "hero" | "services" | "caseStudies" | "pricing" | "testimonials" | "footer"
```

### Adjust Theme Colors

In `src/lib/liquid-themes.ts`:

```typescript
hero: {
  light: {
    base: ["#e0f2fe", "#ddd6fe", "#fce7f3"], // Change these colors
    // ...
  }
}
```

### Trigger Ripple Manually

```tsx
import { useLiquid } from "@/contexts/liquid-context"

function MyComponent() {
  const { triggerRipple } = useLiquid()
  
  return (
    <button onClick={(e) => triggerRipple(e.clientX, e.clientY)}>
      Click for ripple!
    </button>
  )
}
```

### Disable WebGL (Force CSS-only)

In `src/components/liquid-background-engine.tsx`:

```tsx
// Line ~25
setUseWebGL(false) // Force CSS-only mode
```

## Key Files

```
src/
├── contexts/liquid-context.tsx           ← Global state
├── lib/liquid-themes.ts                  ← Color themes
├── components/
│   ├── liquid-background-engine.tsx      ← Main renderer
│   ├── liquid-header.tsx                 ← Interactive header
│   └── liquid-section.tsx                ← Auto-switching wrapper
└── app/page.tsx                          ← How sections are used
```

## Testing Different Themes

1. Open `http://localhost:3000`
2. Scroll down slowly
3. Watch the background morph between sections
4. Click nav items to see ripple effects
5. Toggle light/dark mode (top-right icon)

## Performance

- **Mobile**: WebGL automatically disabled, uses CSS-only animations
- **Desktop**: Full particle system with 40 particles
- **Low memory devices**: Auto-detected and optimized

## Common Issues

### Background not changing?
Make sure each `<LiquidSection>` has a unique `theme` prop.

### Ripples not appearing?
Check that you're calling `triggerRipple(x, y)` with valid screen coordinates.

### Too slow on mobile?
Reduce particle count in `liquid-background-engine.tsx` (line ~57):
```tsx
const particleCount = 20 // Reduce from 40
```

## Next Steps

1. ✅ View the site at http://localhost:3000
2. ✅ Scroll through sections to see theme changes
3. ✅ Click navigation items for ripple effects
4. ✅ Toggle light/dark mode
5. ✅ Customize colors in `liquid-themes.ts`
6. ✅ Read full docs in `LIQUID-SYSTEM.md`

## Architecture Summary

```
User scrolls → LiquidSection detects → Updates context
                                              ↓
Context changes → LiquidBackgroundEngine reacts → Animates new theme
                                              ↓
User clicks nav → LiquidHeader triggers → Ripple effect
```

## Light vs Dark Mode

The system automatically uses different color palettes:

- **Light Mode**: Bright, airy colors with soft transparency
- **Dark Mode**: Deep, rich colors with enhanced glow effects

Toggle with the moon/sun icon in the header (top-right).

## What Makes It Special

1. **Smooth transitions**: 800ms cross-fade between themes (no jarring jumps)
2. **Performance optimized**: Auto-disables heavy effects on mobile
3. **Interactive**: Ripple effects on clicks
4. **Accessible**: Respects `prefers-reduced-motion`
5. **Multi-layered**: 4+ rendering layers for depth
6. **Automatic**: Sections switch themes on scroll

## Quick Customization Examples

### Add a New Theme

```typescript
// In src/lib/liquid-themes.ts
myCustom: {
  name: "My Custom Theme",
  light: {
    base: ["#hex1", "#hex2", "#hex3"],
    blobs: ["rgba(r,g,b,0.15)", "rgba(r,g,b,0.15)", "rgba(r,g,b,0.15)"],
    shine: ["rgba(255,255,255,0.4)", "rgba(r,g,b,0.3)"],
    glow: "rgba(r,g,b,0.3)",
  },
  dark: { /* same structure */ }
}
```

### Use the New Theme

```tsx
// In src/app/page.tsx
<LiquidSection theme="myCustom">
  <YourContent />
</LiquidSection>
```

### Change Transition Speed

```tsx
// In src/components/liquid-background-engine.tsx
// Line ~206
transition={{ duration: 1.2, ease: "easeInOut" }} // Slower
transition={{ duration: 0.4, ease: "easeInOut" }} // Faster
```

---

**🎉 You're all set!** The liquid system is running and ready to customize.

Open http://localhost:3000 and start exploring!
