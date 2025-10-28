/**
 * Complete integration example for animated cards
 * Shows how to use all animation components with CardAnimated
 *
 * CG ModelTek - Aerospace Services Cards
 */

"use client";

import { CardAnimated, AnimatedCardGrid } from "./CardAnimated";
import { FlowAnimation } from "../animations/FlowAnimation";
import { ParticleAnimation } from "../animations/ParticleAnimation";
import {
  OrbitalAnimation,
  GridBlueprintAnimation,
  MachiningAnimation,
  DigitalWavesAnimation,
} from "../animations/AerospaceAnimations";

/**
 * Example 1: Single animated card
 */
export function SingleAnimatedCardExample() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CardAnimated
        title="Precision Prototyping"
        description="High-tolerance aerospace prototypes with tolerances down to ±0.001 inches. From concept to reality."
        href="/services/prototyping"
        cta="View Capabilities"
        animation={<OrbitalAnimation />}
      />
    </div>
  );
}

/**
 * Example 2: Grid of aerospace service cards with different animations
 */
export function AerospaceServicesGrid() {
  const services = [
    {
      title: "Prototype Development",
      description: "Rapid prototyping with precision aerospace tolerances. From CAD to physical parts in days.",
      href: "/services/prototyping",
      cta: "Learn More",
      animation: <OrbitalAnimation />,
    },
    {
      title: "CNC Machining",
      description: "5-axis CNC capabilities for aerospace-grade materials including titanium and Inconel.",
      href: "/services/cnc-machining",
      cta: "View Equipment",
      animation: <MachiningAnimation />,
    },
    {
      title: "Digital Modeling",
      description: "Advanced CAD/CAM solutions for complex aerospace geometries and assemblies.",
      href: "/services/digital-modeling",
      cta: "Explore Services",
      animation: <GridBlueprintAnimation />,
    },
    {
      title: "Production Manufacturing",
      description: "Scale from prototype to production with consistent quality. AS9100 certified processes.",
      href: "/services/production",
      cta: "See Capabilities",
      animation: <DigitalWavesAnimation />,
    },
  ];

  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm sm:text-base text-gray-400 uppercase tracking-wider mb-6 font-light">
            Precision Engineering Excellence
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light italic text-white">
            Aerospace Solutions
          </h2>
        </div>

        <AnimatedCardGrid cards={services} />
      </div>
    </section>
  );
}

/**
 * Example 3: Using different animation types
 */
export function MixedAnimationsExample() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light italic text-white text-center mb-12">
          Our Capabilities
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-[1400px] mx-auto">
          {/* CSS/SVG Flow Animation */}
          <CardAnimated
            title="Flow Optimization"
            description="Streamlined manufacturing workflows for maximum efficiency."
            href="/services/optimization"
            animation={<FlowAnimation color="#60a5fa" speed="medium" pattern="waves" />}
          />

          {/* Canvas Particle Animation */}
          <CardAnimated
            title="Advanced Analysis"
            description="Data-driven insights for precision manufacturing decisions."
            href="/services/analysis"
            animation={<ParticleAnimation particleCount={60} color="#60a5fa" speed={0.3} />}
          />

          {/* Orbital Animation */}
          <CardAnimated
            title="Quality Assurance"
            description="Comprehensive testing and validation for aerospace standards."
            href="/services/quality"
            animation={<OrbitalAnimation />}
          />

          {/* Machining Animation */}
          <CardAnimated
            title="Precision Machining"
            description="State-of-the-art CNC equipment for complex geometries."
            href="/services/machining"
            animation={<MachiningAnimation />}
          />
        </div>
      </div>
    </section>
  );
}

/**
 * Example 4: Full landing page integration
 */
export function FullLandingPageExample() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative isolate min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm sm:text-base text-gray-400 uppercase tracking-wider mb-6 font-light">
            Aerospace Engineering Excellence
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light italic leading-[0.95] tracking-tight text-white mb-8">
            CG ModelTek
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Precision prototyping and manufacturing for the aerospace industry
          </p>
        </div>
      </section>

      {/* Animated Services Section */}
      <AerospaceServicesGrid />

      {/* Additional Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-white mb-4">
            Ready to start your next project?
          </h2>
          <button className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors">
            Get a Quote
          </button>
        </div>
      </section>
    </main>
  );
}

/**
 * USAGE INSTRUCTIONS:
 *
 * 1. Basic Setup:
 *    Import the components you need:
 *    ```tsx
 *    import { CardAnimated } from "@/components/sections/CardAnimated";
 *    import { OrbitalAnimation } from "@/components/animations/AerospaceAnimations";
 *    ```
 *
 * 2. Single Card:
 *    ```tsx
 *    <CardAnimated
 *      title="Your Title"
 *      description="Your description"
 *      href="/your-link"
 *      animation={<OrbitalAnimation />}
 *    />
 *    ```
 *
 * 3. Card Grid:
 *    ```tsx
 *    const cards = [
 *      {
 *        title: "Card 1",
 *        description: "Description 1",
 *        href: "/link1",
 *        animation: <OrbitalAnimation />,
 *      },
 *      // ... more cards
 *    ];
 *    <AnimatedCardGrid cards={cards} />
 *    ```
 *
 * 4. Animation Options:
 *    - OrbitalAnimation - Satellite orbit paths
 *    - GridBlueprintAnimation - Technical CAD grid
 *    - MachiningAnimation - Rotating geometric shapes
 *    - DigitalWavesAnimation - Flowing data waves
 *    - FlowAnimation - Simple flowing arrows/shapes
 *    - ParticleAnimation - Canvas-based particles (no Three.js required!)
 *
 * 5. For Three.js Particles:
 *    Install Three.js first: npm install three @types/three
 *    Then use the commented code in ParticleAnimation.tsx
 *
 * 6. Customization:
 *    - Adjust colors in animation components
 *    - Modify speed parameters
 *    - Change gradient directions
 *    - Add custom animations following the same pattern
 */
