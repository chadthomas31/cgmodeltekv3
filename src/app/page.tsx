import { FxHero } from "@/components/sections/FxHero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      {/* Page-local blue background overlay */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-20">
        {/* vivid blue base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b4dd9] via-[#0a3aa8] to-[#071f5a]" />
        {/* starfield image over gradient */}
        <Image
          src="/images/hero.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-80"
          priority={false}
        />
        {/* subtle depth vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />
      </div>
      <FxHero
        className="relative z-30"
        eyebrow=""
        title="CG Model Tek"
        titleClassName="font-sans font-semibold tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
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
            imageSrc: "/images/services-hero_v2.png",
            imageAlt: "Aerospace schematics and robotic arm",
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
          {
            title: "Contact Us",
            description: "Ready to transform your vision into reality? Let's collaborate",
            href: "/contact",
            cta: "Get started",
            colorClass: "bg-gradient-to-br from-rose-800 via-rose-900 to-red-950 text-white",
          },
        ]}
      />
    </main>
  );
}
