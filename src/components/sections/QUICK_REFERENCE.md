# Animated Cards - Quick Reference

## 🎯 Import Statements

```tsx
// Card Components
import { CardAnimated, AnimatedCardGrid } from "@/components/sections/CardAnimated";

// Aerospace Animations
import {
  OrbitalAnimation,
  GridBlueprintAnimation,
  MachiningAnimation,
  DigitalWavesAnimation
} from "@/components/animations/AerospaceAnimations";

// Generic Animations
import { FlowAnimation } from "@/components/animations/FlowAnimation";
import { ParticleAnimation } from "@/components/animations/ParticleAnimation";
```

## 🚀 Single Card (Copy & Paste)

```tsx
<CardAnimated
  title="Your Title"
  description="Your description text here"
  href="/your-link"
  cta="Button Text"
  animation={<OrbitalAnimation />}
/>
```

## 📊 4-Card Grid (Copy & Paste)

```tsx
<AnimatedCardGrid
  cards={[
    {
      title: "Service 1",
      description: "Description 1",
      href: "/link1",
      animation: <OrbitalAnimation />,
    },
    {
      title: "Service 2",
      description: "Description 2",
      href: "/link2",
      animation: <MachiningAnimation />,
    },
    {
      title: "Service 3",
      description: "Description 3",
      href: "/link3",
      animation: <GridBlueprintAnimation />,
    },
    {
      title: "Service 4",
      description: "Description 4",
      href: "/link4",
      animation: <DigitalWavesAnimation />,
    },
  ]}
/>
```

## 🎨 Animation Cheat Sheet

| Animation | Best For | Colors | Deps |
|-----------|----------|--------|------|
| `<OrbitalAnimation />` | Prototyping, R&D | Blue/Indigo | None |
| `<MachiningAnimation />` | CNC, Manufacturing | Blue glow | None |
| `<GridBlueprintAnimation />` | CAD/CAM, Engineering | Blueprint | None |
| `<DigitalWavesAnimation />` | Data, Production | Cyan/Blue | None |
| `<FlowAnimation />` | General purpose | Custom | None |
| `<ParticleAnimation />` | Modern, dynamic | Custom | None |

## ⚙️ Configuration Options

### FlowAnimation
```tsx
<FlowAnimation
  color="#3b82f6"
  speed="medium"     // "slow" | "medium" | "fast"
  pattern="waves"    // "arrows" | "circles" | "waves"
/>
```

### ParticleAnimation
```tsx
<ParticleAnimation
  particleCount={50}
  color="#60a5fa"
  speed={0.5}
/>
```

## 🎯 Common Use Cases

### Landing Page Hero Cards
```tsx
const heroServices = [
  { title: "Prototyping", animation: <OrbitalAnimation /> },
  { title: "Manufacturing", animation: <MachiningAnimation /> },
  { title: "Engineering", animation: <GridBlueprintAnimation /> },
  { title: "Analytics", animation: <DigitalWavesAnimation /> },
];
```

### Services Section
```tsx
<section className="bg-black py-20">
  <h2 className="text-4xl text-white text-center mb-12">Our Services</h2>
  <AnimatedCardGrid cards={services} />
</section>
```

### Single Feature Highlight
```tsx
<div className="container mx-auto px-4 py-8">
  <CardAnimated
    title="Featured Service"
    description="Highlight your best offering"
    href="/featured"
    animation={<OrbitalAnimation />}
    className="max-w-2xl mx-auto"
  />
</div>
```

## 🎨 Color Customization

### Matching Your Brand
```tsx
// Blue theme
<OrbitalAnimation /> // Default blue

// Custom background
<OrbitalAnimation className="bg-gradient-to-br from-purple-950 to-black" />
```

### Animation Colors
```tsx
// FlowAnimation
<FlowAnimation color="#10b981" /> // Green

// ParticleAnimation
<ParticleAnimation color="#f59e0b" /> // Amber
```

## 📱 Responsive Grid Options

```tsx
// 1 column mobile, 2 tablet, 4 desktop (default)
<AnimatedCardGrid cards={cards} />

// Custom layout
<AnimatedCardGrid
  cards={cards}
  className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
/>
```

## ⚡ Performance Tips

1. **Limit particles**: `particleCount < 100`
2. **Use SVG animations** for multiple cards (OrbitalAnimation, etc.)
3. **Lazy load** heavy animations on mobile
4. **Test scroll performance** with all cards active

## 🐛 Quick Fixes

### Animation not showing?
- Add `"use client"` to top of file
- Check imports are correct
- Verify parent has height set

### Performance slow?
- Reduce `particleCount`
- Use simpler animations (Grid/Orbital)
- Check browser console

### Layout broken?
- Ensure Tailwind classes not purged
- Check parent container width
- Verify z-index hierarchy

## 📦 Installation (If needed)

```bash
# For Three.js particles (optional)
npm install three @types/three
```

## 🎯 Your App.tsx Integration

```tsx
// services section in App.tsx:
<section id="services" className="scroll-panel grid-bg p-6 bg-gray-900" ref={servicesRef}>
  <div className="w-full max-w-6xl">
    <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
      Core <span className="text-yellow-400">Services</span>
    </h2>
    <AnimatedCardGrid cards={services} />
  </div>
</section>
```

## 📚 Full Examples

See complete implementations in:
- `AnimatedCardsExample.tsx` - Full examples
- `CardAerospace.example.tsx` - Static image variant
- `ANIMATED_CARDS_README.md` - Complete documentation
