import { FxHero } from "@/components/sections/FxHero";

export default function Home() {
  return (
    <main className="bg-black">
      <FxHero
        eyebrow="CG Model Tek"
        title="Precision Engineering & Digital Modeling — From Concept to Reality"
        cards={[
          {
            title: "About Us",
            description: "Discover our expertise in precision engineering and advanced modeling",
            href: "/about",
            cta: "Learn More",
            colorClass: "bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 text-black",
          },
          {
            title: "Services",
            description: "CAD modeling, rapid prototyping, FEA/CFD, and digital twin solutions",
            href: "/services",
            cta: "Explore",
            colorClass: "bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-500 text-black",
          },
          {
            title: "Industries",
            description: "Aerospace, defense, space systems, and precision manufacturing",
            href: "/industries",
            cta: "View More",
            colorClass: "bg-gradient-to-br from-purple-500 via-fuchsia-500 to-purple-600 text-white",
          },
          {
            title: "Contact Us",
            description: "Ready to transform your vision into reality? Let's collaborate",
            href: "/contact",
            cta: "Get Started",
            colorClass: "bg-gradient-to-br from-rose-800 via-rose-900 to-red-950 text-white",
          },
        ]}
      />
    </main>
  );
}
