import { FxHero } from "@/components/sections/FxHero";

export default function Home() {
  return (
    <main>
      <FxHero
        eyebrow="CG model Tek"
        title="Precision Engineering & Digital Modeling — From Concept to Reality"
        cards={[
          {
            title: "About Us",
            description: "Learn about our team and story",
            href: "#about",
            cta: "Explore",
            colorClass: "bg-yellow-400 text-black",
          },
          {
            title: "Services",
            description: "What we offer to help you succeed",
            href: "#services",
            cta: "Explore",
            colorClass: "bg-slate-600 text-white",
          },
          {
            title: "Industries",
            description: "Sectors we serve and specialize in",
            href: "#industries",
            cta: "Explore",
            colorClass: "bg-indigo-700 text-white",
          },
          {
            title: "Contact Us",
            description: "Get in touch for quotes and questions",
            href: "#contact",
            cta: "Contact",
            colorClass: "bg-purple-700 text-white",
          },
        ]}
      />
      {/* Anchor sections for smooth in-page navigation */}
      <section id="about" className="scroll-anchor-offset container mx-auto px-4 py-16 md:py-24">
        <h2 className="headline-2 underbar">About Us</h2>
        <p className="mt-4 text-muted-foreground max-w-prose">
          We combine precision engineering with advanced digital modeling to accelerate aerospace innovation.
        </p>
      </section>

      <section id="services" className="scroll-anchor-offset container mx-auto px-4 py-16 md:py-24">
        <h2 className="headline-2 underbar">Services</h2>
        <p className="mt-4 text-muted-foreground max-w-prose">
          CAD modeling, rapid prototyping, FEA/CFD, digital twins, and manufacturing enablement.
        </p>
      </section>

      <section id="industries" className="scroll-anchor-offset container mx-auto px-4 py-16 md:py-24">
        <h2 className="headline-2 underbar">Industries</h2>
        <p className="mt-4 text-muted-foreground max-w-prose">
          Aerospace, defense, space systems, and high-precision industrial applications.
        </p>
      </section>

      <section id="contact" className="scroll-anchor-offset container mx-auto px-4 py-16 md:py-24">
        <h2 className="headline-2 underbar">Contact Us</h2>
        <p className="mt-4 text-muted-foreground max-w-prose">
          Ready to discuss your project? Reach out for quotes and collaboration.
        </p>
      </section>
    </main>
  );
}
