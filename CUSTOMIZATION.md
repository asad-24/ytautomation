# Customization Guide

## Quick Start Customization

### 1. Update Brand Colors

In `src/app/globals.css`, update the gradient colors:

```css
/* Primary gradient */
.liquid-gradient {
  background: linear-gradient(
    135deg,
    rgba(YOUR_COLOR_1) 0%,
    rgba(YOUR_COLOR_2) 25%,
    rgba(YOUR_COLOR_3) 50%,
    rgba(YOUR_COLOR_4) 75%,
    rgba(YOUR_COLOR_1) 100%
  );
}
```

### 2. Change Company Information

**Logo & Name**: Update in `src/components/header.tsx` and `src/components/footer.tsx`:
```tsx
<span className="font-bold text-xl">Your Company Name</span>
```

**Contact Email**: In `src/components/footer.tsx`:
```tsx
<a href="mailto:your@email.com">your@email.com</a>
```

### 3. Update Services

Edit `src/components/services-grid.tsx`:
```tsx
const services = [
  {
    icon: YourIcon, // Import from lucide-react
    title: "Your Service",
    description: "Your description",
    gradient: "from-color-1 to-color-2",
  },
  // ... add more services
]
```

### 4. Update Pricing Plans

Edit `src/components/pricing.tsx`:
```tsx
const plans = [
  {
    name: "Your Plan",
    description: "Plan description",
    monthlyPrice: 999,
    annualPrice: 8990,
    features: [
      "Feature 1",
      "Feature 2",
      // ... add features
    ],
    gradient: "from-indigo-500 to-purple-500",
    popular: true,
  },
]
```

### 5. Add Your Testimonials

Edit `src/components/testimonials.tsx`:
```tsx
const testimonials = [
  {
    name: "Client Name",
    role: "Their Role",
    channel: "Channel Name",
    subscribers: "100K",
    content: "Their testimonial quote",
    avatar: "CN", // Initials
    rating: 5,
  },
]
```

### 6. Update Work Gallery Images

Edit `src/components/work-gallery.tsx`:
```tsx
const works = [
  {
    id: 1,
    title: "Project Title",
    category: "Project Type",
    thumbnail: "/path/to/image.jpg", // Use local images in /public
    views: "2M+ views",
  },
]
```

**Note**: For local images, place them in the `/public` folder and reference like:
```tsx
thumbnail: "/images/work-1.jpg"
```

### 7. Update Case Studies

Edit `src/components/case-studies.tsx`:
```tsx
const caseStudies = [
  {
    client: "Client Name",
    niche: "Their Niche",
    metrics: [
      { label: "Views", from: 50000, to: 2000000, suffix: "", icon: Eye },
      // ... more metrics
    ],
    timeframe: "6 months",
    gradient: "from-indigo-500 to-purple-500",
  },
]
```

### 8. Customize Meta Tags & SEO

Edit `src/app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "Your OG Title",
    description: "Your OG Description",
  },
}
```

### 9. Update Navigation Links

Edit `src/components/header.tsx`:
```tsx
const navItems = [
  { label: "Services", href: "#services" },
  { label: "Custom Link", href: "#custom" },
  // ... add or remove links
]
```

### 10. Social Media Links

Edit `src/components/footer.tsx`:
```tsx
const socialLinks = [
  { icon: Youtube, href: "https://youtube.com/@yourhandle", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com/yourhandle", label: "Twitter" },
  // ... update with your links
]
```

## Advanced Customization

### Add New Sections

1. Create component in `src/components/your-section.tsx`
2. Import and add to `src/app/page.tsx`:

```tsx
import { YourSection } from "@/components/your-section"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* ... other sections */}
        <YourSection />
      </main>
      <Footer />
    </>
  )
}
```

### Modify Animations

Adjust animation timing in component files:
```tsx
// Speed up animation
transition={{ duration: 0.3 }} // faster

// Add delay
transition={{ delay: 0.5, duration: 0.6 }}

// Disable for reduced motion
const shouldAnimate = !prefersReducedMotion
```

### Change Theme Colors

Update theme variables in `src/app/globals.css`:
```css
:root {
  --primary: oklch(YOUR_COLOR);
  --background: oklch(YOUR_COLOR);
  /* ... other variables */
}
```

### Disable Animations

To disable all animations, remove Framer Motion components:
```tsx
// Before
<motion.div animate={{ opacity: 1 }}>

// After
<div>
```

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Build Locally
```bash
npm run build
npm start
```

### Environment Variables

Create `.env.local` for API keys:
```
NEXT_PUBLIC_API_KEY=your_key
```

Access in code:
```tsx
process.env.NEXT_PUBLIC_API_KEY
```

## Performance Tips

1. **Optimize Images**: Use WebP/AVIF formats
2. **Lazy Load**: Keep `loading="lazy"` on images
3. **Code Split**: Keep components modular
4. **Reduce Bundle**: Remove unused components
5. **CDN**: Use Vercel or Cloudflare for assets

## Common Issues

### Images Not Loading
- Check image paths in `/public` folder
- Ensure `next.config.ts` has correct remote domains

### Animations Not Smooth
- Check if `prefers-reduced-motion` is enabled
- Reduce animation duration
- Use CSS transforms instead of width/height

### Build Errors
- Run `npm install` to ensure dependencies
- Clear `.next` folder: `rm -rf .next`
- Check Node.js version (18+)

## Support

For issues or questions:
1. Check console for errors (F12)
2. Review component documentation
3. Check Next.js docs: https://nextjs.org/docs
4. Framer Motion: https://www.framer.com/motion/

---

Happy customizing! 🚀
