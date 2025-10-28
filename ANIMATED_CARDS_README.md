# Animated Cards System - CG ModelTek

A complete implementation of Google FX-inspired animated cards for the CG ModelTek aerospace website. Features lightweight CSS/SVG animations and optional Three.js effects.

## 📁 Component Architecture

```
src/
├── components/
│   ├── sections/
│   │   ├── CardAnimated.tsx          # Main card wrapper component
│   │   ├── AnimatedCardsExample.tsx  # Complete usage examples
│   │   └── CardAerospace.tsx         # Static image card variant
│   └── animations/
│       ├── FlowAnimation.tsx         # CSS/SVG flowing shapes
│       ├── ParticleAnimation.tsx     # Canvas particle system
│       └── AerospaceAnimations.tsx   # 4 aerospace-specific animations
```

## 🚀 Quick Start

### 1. Basic Card with Animation

```tsx
import { CardAnimated } from "@/components/sections/CardAnimated";
import { OrbitalAnimation } from "@/components/animations/AerospaceAnimations";

<CardAnimated
  title="Precision Prototyping"
  description="High-tolerance aerospace prototypes with tolerances down to ±0.001 inches."
  href="/services/prototyping"
  cta="Learn More"
  animation={<OrbitalAnimation />}
/>
```

### 2. Grid Layout (4 Cards)

```tsx
import { AnimatedCardGrid } from "@/components/sections/CardAnimated";
import {
  OrbitalAnimation,
  MachiningAnimation,
  GridBlueprintAnimation,
  DigitalWavesAnimation
} from "@/components/animations/AerospaceAnimations";

const services = [
  {
    title: "Prototyping",
    description: "Rapid aerospace prototypes...",
    href: "/services/prototyping",
    animation: <OrbitalAnimation />,
  },
  {
    title: "CNC Machining",
    description: "5-axis CNC capabilities...",
    href: "/services/cnc",
    animation: <MachiningAnimation />,
  },
  {
    title: "Digital Modeling",
    description: "Advanced CAD/CAM solutions...",
    href: "/services/digital",
    animation: <GridBlueprintAnimation />,
  },
  {
    title: "Production",
    description: "AS9100 certified processes...",
    href: "/services/production",
    animation: <DigitalWavesAnimation />,
  },
];

<AnimatedCardGrid cards={services} />
```

## 🎨 Available Animations

### Aerospace-Themed (No Dependencies)

#### 1. **OrbitalAnimation**
Simulates satellite orbits around a central point with floating stars.
- **Best for**: Prototyping, R&D, Space services
- **Colors**: Blue/Indigo gradient
- **Performance**: Excellent (pure SVG)

```tsx
<OrbitalAnimation />
```

#### 2. **MachiningAnimation**
Rotating hexagonal shapes with precision indicators.
- **Best for**: CNC Machining, Manufacturing, Precision services
- **Colors**: Blue with glow effects
- **Performance**: Excellent (pure SVG)

```tsx
<MachiningAnimation />
```

#### 3. **GridBlueprintAnimation**
Technical CAD-style grid with scanning lines.
- **Best for**: Digital Modeling, CAD/CAM, Engineering
- **Colors**: Blueprint blue
- **Performance**: Excellent (pure SVG)

```tsx
<GridBlueprintAnimation />
```

#### 4. **DigitalWavesAnimation**
Flowing waves with floating data points.
- **Best for**: Data Analysis, Production, Optimization
- **Colors**: Cyan/Blue gradient
- **Performance**: Excellent (pure SVG)

```tsx
<DigitalWavesAnimation />
```

### Generic Animations

#### 5. **FlowAnimation** (Configurable)
Customizable flowing patterns with multiple styles.

```tsx
<FlowAnimation
  color="#3b82f6"           // Hex color
  speed="medium"            // "slow" | "medium" | "fast"
  pattern="waves"           // "arrows" | "circles" | "waves"
/>
```

#### 6. **ParticleAnimation** (Canvas-based)
Lightweight particle system with connections (no Three.js required!).

```tsx
<ParticleAnimation
  particleCount={50}        // Number of particles
  color="#60a5fa"           // Hex color
  speed={0.5}               // Movement speed
/>
```

## 🎯 Integration with Your Landing Page

Based on your `App.tsx`, here's how to integrate:

### Replace Services Section

```tsx
// BEFORE: Manual card layout
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  <CardAnimated ... />
  <CardAnimated ... />
  ...
</div>

// AFTER: Use AnimatedCardGrid
import { AnimatedCardGrid } from "@/components/sections/CardAnimated";
import {
  OrbitalAnimation,
  MachiningAnimation,
  GridBlueprintAnimation,
  DigitalWavesAnimation
} from "@/components/animations/AerospaceAnimations";

const services = [
  {
    title: "CFD & Aerodynamics",
    description: "Hypersonic flow, aerodynamic load prediction, and launch vehicle ascent analysis.",
    href: "#services-cfd",
    cta: "Explore CFD",
    animation: <DigitalWavesAnimation />,
  },
  {
    title: "Structural Mechanics (FEA)",
    description: "Vibro-acoustic, thermal-structural, and composite material analysis.",
    href: "#services-fea",
    cta: "Explore FEA",
    animation: <GridBlueprintAnimation />,
  },
  {
    title: "Thermal & Propulsion",
    description: "Propulsion system modeling, heat transfer, and ablative material analysis.",
    href: "#services-thermal",
    cta: "Explore Thermal",
    animation: <MachiningAnimation />,
  },
  {
    title: "Digital Twin & Simulation",
    description: "Creating high-fidelity, real-time digital replicas of complex aerospace systems.",
    href: "#services-digitaltwin",
    cta: "Explore Digital Twin",
    animation: <OrbitalAnimation />,
  },
];

<AnimatedCardGrid cards={services} />
```

## ⚙️ Customization

### Card Styling

Modify `CardAnimated.tsx` to adjust:
- Card dimensions: Change `h-[60vh]` class
- Border radius: Change `rounded-2xl` class
- Hover effects: Modify `hover:scale-[1.02]`
- Text colors: Adjust `textColor` prop

### Animation Customization

Each animation accepts customization:

```tsx
// Custom colors
<OrbitalAnimation className="bg-gradient-to-br from-purple-950 to-black" />

// Custom speeds in FlowAnimation
<FlowAnimation speed="slow" />  // 30s animation
<FlowAnimation speed="fast" />  // 10s animation
```

### Creating Custom Animations

Follow this pattern:

```tsx
export function MyCustomAnimation({ className }: { className?: string }) {
  return (
    <div className={cn("w-full h-full bg-gradient-to-br from-blue-950 to-black", className)}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Your SVG animation here */}
        <circle cx="50" cy="50" r="20" fill="#60a5fa">
          <animate
            attributeName="r"
            values="20;30;20"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
```

## 🎬 Animation Performance Tips

1. **Use CSS/SVG for multiple cards**: Aerospace animations are optimized for grids
2. **Limit particle count**: Keep `particleCount < 100` for smooth performance
3. **Test on mobile**: Some animations may need reduced complexity on small screens
4. **Lazy load Three.js**: If using the optional 3D particle system, lazy load it

```tsx
const ParticleAnimation3D = lazy(() => import("@/components/animations/ParticleAnimation3D"));
```

## 📦 Dependencies

### Required (Already in your project)
- React
- Next.js
- Tailwind CSS
- `cn` utility from `@/lib/utils`

### Optional (For Three.js particles)
```bash
npm install three @types/three
```

## 🎨 Color Palette

The animations use your existing dark theme:

```css
--bg-black: #000000
--bg-blue-950: #172554
--bg-indigo-950: #1e1b4b
--text-blue: #60a5fa
--text-purple: #8b5cf6
--text-cyan: #06b6d4
```

## 📱 Responsive Design

All cards are responsive by default:

- **Mobile**: Single column, `min-h-[380px]`
- **Tablet**: 2 columns
- **Desktop**: 3 columns
- **XL Desktop**: 4 columns

Adjust in `AnimatedCardGrid`:

```tsx
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
```

## 🐛 Troubleshooting

### Animations not showing
- Check that the animation component is properly imported
- Ensure `"use client"` directive is at the top of animation files

### Performance issues
- Reduce `particleCount` in ParticleAnimation
- Use simpler animations on mobile devices
- Check browser console for errors

### Layout issues
- Ensure parent container has proper height
- Check z-index conflicts with other elements
- Verify Tailwind classes are not being purged

## 📚 Examples

See complete examples in:
- `src/components/sections/AnimatedCardsExample.tsx`
- `src/components/sections/CardAerospace.example.tsx`

## 🎯 Next Steps

1. **Choose your animations**: Select from the 6 available animations
2. **Customize colors**: Match your brand palette
3. **Test performance**: Check on various devices
4. **Add more cards**: Create additional aerospace service cards
5. **Optimize**: Adjust particle counts and animation speeds as needed

## 🚀 Production Checklist

- [ ] Test all animations on mobile devices
- [ ] Verify hover states work correctly
- [ ] Check accessibility (keyboard navigation, screen readers)
- [ ] Optimize images if using static card variant
- [ ] Test scroll performance with all animations active
- [ ] Verify links work correctly
- [ ] Check loading states for lazy-loaded components

---

**Built with ❤️ for CG ModelTek's aerospace excellence**
