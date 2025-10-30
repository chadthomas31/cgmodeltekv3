import { FxHero } from "@/components/sections/FxHero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      {/* Page-local orange background overlay */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-20">
        {/* Tennessee orange base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFA64D] via-[#FF8200] to-[#CC6A00]" />
        {/* transparent grid overlay */}
        <div className="absolute inset-0 bg-hero-grid opacity-30" />
        {/* starfield image removed to avoid blue tint */}
        {/* subtle depth vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />
      </div>
      <FxHero
        className="relative z-30"
        eyebrow=""
        title="CG Model Tek"
        subtitleBanner="Advancing Aerodynamics Through Precision and Innovation"
        titleClassName="font-sans font-semibold tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
        teamMembers={[
          { name: "Chris Athaide", role: "Founder & CEO", img: "", bio: "" },
          { name: "Naresh Kumar", role: "Chief Financial Officer", img: "", bio: "" },
          { name: "Tony Boyce", role: "Title", img: "", bio: "" },
          { name: "Ian Watts", role: "IT & Information Security Leader", img: "/Leadership/Ian_Watts.Info.sec.ofc.png", bio: "" },
          { name: "John M. Nichols", role: "Executive Advisor", img: "/Leadership/John_Nichols.png", bio: "" },
          { name: "John Statum", role: "Vice President of Operations", img: "/Leadership/john_statum.png", bio: "" },
          { name: "Larry Phelps", role: "Shop Supervisor", img: "/Leadership/larry_phelps.png", bio: "" },
          { name: "John Hill", role: "Quality Manager", img: "/Leadership/john_hill.png", bio: "" },
        ]}
        cards={[
          {
            title: "About Us",
            description: "Engineers. Innovators. Makers. At CG Model Tek, precision isn’t a goal — it’s our foundation. From aerospace models to complex CNC components, our team transforms ideas into flight-ready reality.",
            href: "/about",
            cta: "Learn more",
            colorClass: "text-white/95",
            imageSrc: "/images/about_us_v2.png",
            imageAlt: "About Us card background",
          },
          {
            title: "Services",
            description: "From concept design to final machining — we deliver complete precision manufacturing solutions. CNC Milling · Turning · Rapid Prototyping · 3D Modeling · Surface Finishing · Assembly",
            href: "/services",
            cta: "Explore services",
            colorClass: "text-white/95",
            imageSrc: "/images/services-hero_V5.png",
            imageAlt: "Services card background",
          },
          {
            title: "Industries",
            description: "Aerospace, defense, space systems, and precision manufacturing",
            href: "/industries",
            cta: "View more",
            colorClass: "bg-gradient-to-br from-purple-500 via-fuchsia-500 to-purple-600 text-white",
            imageSrc: "/images/Industries_v2.png",
            imageAlt: "Industries card background",
          },
        ]}
      />
    </main>
  );
}
