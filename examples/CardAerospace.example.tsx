/**
 * Example usage of CardAerospace components
 *
 * This file demonstrates how to use the aerospace-themed cards
 * in your CG ModelTek application.
 */

import { CardAerospace, AerospaceCardGrid } from "./CardAerospace";

// Example 1: Single Card Usage
export function SingleCardExample() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CardAerospace
        title="Aerospace Innovation"
        description="Explore how CG ModelTek brings aerospace concepts to life through high-tolerance prototypes, digital modeling, and advanced CNC manufacturing."
        href="/services/aerospace"
        cta="Learn More"
        backgroundSrc="/assets/aerospace-card-bg.png"
        backgroundAlt="Aerospace themed background with nebula"
      />
    </div>
  );
}

// Example 2: Multiple Cards in Grid
export function MultipleCardsExample() {
  const aerospaceServices = [
    {
      title: "Prototype Development",
      description:
        'High-precision aerospace prototypes with tolerances down to ±0.001". From concept to reality.',
      href: "/services/prototyping",
      cta: "View Process",
      backgroundSrc: "/assets/aerospace-prototype.png",
    },
    {
      title: "Production Manufacturing",
      description:
        "Scale from prototype to production with consistent quality. AS9100 certified processes.",
      href: "/services/production",
      cta: "See Capabilities",
      backgroundSrc: "/assets/aerospace-production.png",
    },
    {
      title: "Digital Modeling",
      description: "Advanced CAD/CAM solutions for complex aerospace geometries and assemblies.",
      href: "/services/digital-modeling",
      cta: "Explore Services",
      backgroundSrc: "/assets/aerospace-cad.png",
    },
    {
      title: "CNC Machining",
      description:
        "5-axis CNC capabilities for aerospace-grade materials including titanium and Inconel.",
      href: "/services/cnc-machining",
      cta: "View Equipment",
      backgroundSrc: "/assets/aerospace-cnc.png",
    },
  ];

  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm sm:text-base text-gray-400 uppercase tracking-wider mb-6 font-light">
            Precision Engineering
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light italic text-white">
            Aerospace Excellence
          </h2>
        </div>

        <AerospaceCardGrid cards={aerospaceServices} />
      </div>
    </section>
  );
}

// Example 3: Integration with existing page
export function IntegratedExample() {
  return (
    <main className="min-h-screen bg-black">
      {/* Your existing hero section */}
      <section className="py-20">
        <h1 className="text-center text-6xl text-white">CG ModelTek</h1>
      </section>

      {/* Aerospace cards section */}
      <MultipleCardsExample />

      {/* Other sections... */}
    </main>
  );
}

/**
 * NOTES ON IMAGE GENERATION:
 *
 * To create aerospace-themed background images similar to labs.google/fx:
 *
 * 1. Using AI Image Generation:
 *    - Use Imagen 3, DALL-E 3, or Midjourney
 *    - Example prompts:
 *      • "Abstract blue nebula with stars and aerospace elements, high quality, cinematic"
 *      • "Dark cosmic background with metallic aerospace components, professional"
 *      • "Futuristic aerospace machinery in space, dark blue and black tones"
 *      • "Precision CNC machining in a cosmic setting, industrial aesthetic"
 *
 * 2. Image Specifications:
 *    - Recommended size: 1920x1080 or larger (16:9 aspect ratio)
 *    - Format: PNG or WebP for best quality
 *    - Optimize for web: compress to <500KB
 *
 * 3. Placement:
 *    - Save images to: public/assets/
 *    - Reference in component: /assets/your-image-name.png
 *
 * 4. Accessibility:
 *    - Always provide meaningful alt text
 *    - Ensure text contrast meets WCAG standards (gradient overlay helps)
 */
