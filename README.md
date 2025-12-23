# YTAGENCY - Advanced Liquid Crystal Landing Page

A stunning, high-performance Next.js landing page for a YouTube services business featuring an **advanced liquid-crystal background system**, interactive glassmorphism design, section-specific themes, and ultra-smooth animations.

## 🎨 Features

### Visual Design
- **🌊 Advanced Liquid Background Engine**: Multi-layered rendering with WebGL/Canvas particles + CSS fallback
- **🎨 Section-Specific Themes**: 6 unique liquid palettes that morph smoothly on scroll
- **💧 Interactive Liquid Header**: Frosted glass with ripple effects on click/navigation
- **✨ Dynamic Animations**: Smooth micro-animations using Framer Motion
- **🌓 Theme Toggle**: Light/dark mode with distinct liquid crystal palettes
- **⚡ Performance Optimized**: Auto-disables WebGL on low-power devices

### Sections

Each section has its own unique liquid theme that activates on scroll:

1. **Hero** (Cyan→Violet→Pink): Animated headline, CTAs, floating service cards
2. **Trusted By Strip**: Auto-scrolling logo carousel (pause on hover)
3. **Services** (Purple→Pink Glass): 6 service cards with icons, glassmorphic styling
4. **Work Gallery** (Hero theme): Masonry grid with lazy-loaded images & lightbox modal
5. **Case Studies** (Blue→Indigo): Animated metric counters with real growth data
6. **How It Works** (Teal→Blue): Timeline stepper with scroll-triggered animations
7. **Pricing** (Minimal Glass): 3-tier pricing cards with monthly/annual toggle
8. **Testimonials** (Teal→Blue): Slider with client quotes and ratings
9. **Footer** (Navy Crystal): Comprehensive links, social icons, contact info
10. **Sticky CTA**: Color-morphing "Book a Call" button

**🎯 Liquid Header**: Interactive navigation with ripple effects, theme switching, and frosted glass appearance

### Technical Features
- ✅ Next.js 16 (App Router)
- ✅ TypeScript for type safety
- ✅ Tailwind CSS v4 with custom utilities
- ✅ shadcn/ui components (Button, Card, Tabs, Dialog)
- ✅ Framer Motion animations
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized with metadata
- ✅ Accessibility (ARIA labels, keyboard navigation)
- ✅ Reduced-motion support
- ✅ Image optimization (Next/Image)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles + glassmorphism utilities
│   ├── layout.tsx           # Root layout with providers
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── liquid-background-engine.tsx # Advanced liquid rendering system
│   ├── liquid-header.tsx    # Interactive frosted header
│   ├── liquid-section.tsx   # Auto-switching section wrapper
│   ├── hero.tsx             # Hero section
│   ├── trusted-by-strip.tsx # Logo carousel
│   ├── services-grid.tsx    # Services section
│   ├── work-gallery.tsx     # Portfolio gallery
│   ├── case-studies.tsx     # Metrics & results
│   ├── how-it-works.tsx     # Process timeline
│   ├── pricing.tsx          # Pricing cards
│   ├── testimonials.tsx     # Client testimonials
│   ├── sticky-cta.tsx       # Floating CTA button
│   ├── footer.tsx           # Footer section
│   ├── theme-provider.tsx   # Theme context
│   └── theme-toggle.tsx     # Light/dark toggle
├── contexts/
│   └── liquid-context.tsx   # Liquid state management
├── lib/
│   └── liquid-themes.ts     # Section theme definitions
└── hooks/
    └── use-in-view.ts       # Intersection Observer hook
```

## 🎨 Customization

### Colors & Gradients
Update gradient colors in `globals.css`:
```css
.liquid-gradient {
  background: linear-gradient(135deg, ...);
}
```

### Content
- **Services**: Edit `src/components/services-grid.tsx`
- **Pricing**: Modify plans in `src/components/pricing.tsx`
- **Testimonials**: Update array in `src/components/testimonials.tsx`
- **Case Studies**: Change metrics in `src/components/case-studies.tsx`

### Theme Colors
Adjust theme variables in `globals.css` `:root` and `.dark` sections.

## 🔧 Performance Optimizations

- **Image Optimization**: Next/Image with AVIF/WebP formats
- **Code Splitting**: Automatic with Next.js App Router
- **Lazy Loading**: Images load on demand
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **SSR Metadata**: SEO-friendly with OpenGraph tags

## 📱 Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management in modals
- High contrast text on glass panels
- Reduced motion alternatives

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🌊 Liquid System

The landing page features an advanced liquid-crystal background system:

- **Multi-layered rendering**: Base gradients + animated blobs + particle connections + shimmer overlays
- **Section themes**: Each section has unique color palettes for light/dark modes
- **Auto-switching**: IntersectionObserver detects section visibility and morphs background
- **Interactive ripples**: Click navigation → liquid distortion effects
- **Performance**: WebGL disabled on mobile, CSS-only fallback, optimized particle count

See [LIQUID-SYSTEM.md](./LIQUID-SYSTEM.md) for detailed documentation.

## 📄 License

MIT

## 🤝 Contributing

Feel free to submit issues and pull requests!

---

Built with ❤️ using Next.js, Tailwind CSS, Framer Motion, and advanced WebGL/Canvas rendering
