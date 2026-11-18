"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import { LeadershipGrid } from "@/components/sections/LeadershipGrid";

export type FxHeroCard = {
  title: string;
  description?: string;
  href: string;
  cta?: string;
  colorClass: string; // Tailwind color classes for background
  imageSrc?: string; // optional background image
  imageAlt?: string;
  bareImage?: boolean; // if true, show only the image with no overlays/content
};

export type TeamMember = {
  name: string;
  role: string;
  img: string;
  bio: string;
};

export function FxHero({
  eyebrow = "Don't settle for ordinary.",
  title = "Create anything.",
  cards = [],
  className = "",
  titleClassName,
  subtitleBanner,
  teamMembers,
  ctaPrimary,
  ctaSecondary,
  badgeText,
  heroLogoSrc,
  heroLogoClass,
}: {
  eyebrow?: string;
  title?: string;
  cards: FxHeroCard[];
  className?: string;
  titleClassName?: string;
  subtitleBanner?: string;
  teamMembers?: TeamMember[];
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  badgeText?: string;
  heroLogoSrc?: string;
  heroLogoClass?: string;
}) {
  const [active, setActive] = useState<string | null>(null);

  // Scaffold subsections for each card title. These can be customized later.
  const subsections: Record<string, { label: string; href: string }[]> = {
    "About Us": [
      { label: "Company", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Reviews", href: "/about/reviews" },
    ],
    Services: [
      { label: "All Services", href: "/services" },
      { label: "Precision CNC Machining", href: "/services/precision-cnc-machining" },
      { label: "Prototype Machining", href: "/services/prototype-machining" },
    ],
    "Aerospace Excellence": [
      { label: "Aerospace Manufacturing", href: "/aerospace" },
      { label: "Wind Tunnel Models", href: "/aerospace#wind-tunnel" },
      { label: "Flight Test Components", href: "/aerospace#flight-test" },
    ],
    "Contact Us": [{ label: "Contact", href: "/contact" }],
  };

  // Mini services list for dropdown grid (links to detailed pages)
  const servicesMini = [
    { title: "Precision CNC Machining", slug: "precision-cnc-machining" },
    { title: "CNC Milling", slug: "cnc-milling" },
    { title: "CNC Turning", slug: "cnc-turning" },
    { title: "Wire EDM", slug: "wire-edm" },
    { title: "5 Axis Machining", slug: "5-axis-machining" },
    { title: "Multi Axis Machining", slug: "multi-axis-machining" },
    { title: "Aluminum CNC Machining", slug: "aluminum-cnc-machining" },
    { title: "Stainless Steel Machining", slug: "stainless-steel-machining" },
    { title: "Prototype Machining", slug: "prototype-machining" },
    { title: "Value Added", slug: "value-added" },
  ];

  // Aerospace capabilities with thumbnails
  const aerospaceMini = [
    {
      title: "Wind Tunnel Models",
      href: "/aerospace#wind-tunnel",
      image: "/images/industries/aerospace.png",
    },
    {
      title: "Flight Test Components",
      href: "/aerospace#flight-test",
      image: "/images/industries/aerospace.png",
    },
    {
      title: "Aerospace Tooling",
      href: "/aerospace#tooling",
      image: "/images/industries/aerospace.png",
    },
    {
      title: "Complex Geometries",
      href: "/aerospace#geometries",
      image: "/images/industries/aerospace.png",
    },
  ];

  return (
    <section className={cn("relative isolate min-h-screen", className)} aria-label="Hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-6xl mx-auto">
          {heroLogoSrc && (
            <div className="mb-6 sm:mb-8 flex justify-center opacity-0 animate-fade-in">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8200] to-[#4ECDC4] rounded-full blur-2xl opacity-30" />
                <Image
                  src={heroLogoSrc}
                  alt="Site Logo"
                  width={800}
                  height={200}
                  priority
                  className={
                    (heroLogoClass?.trim() || "h-16 sm:h-24 md:h-28 lg:h-32 xl:h-36") +
                    " relative w-auto object-contain drop-shadow-[0_4px_20px_rgba(255,130,0,0.4)]"
                  }
                />
              </div>
            </div>
          )}
          {eyebrow && (
            <p className="text-sm sm:text-base text-white/60 uppercase tracking-[0.2em] mb-6 font-medium opacity-0 animate-slide-up delay-100">
              {eyebrow}
            </p>
          )}
          {title?.trim() && (
            <h1
              className={cn(
                titleClassName ??
                  "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold",
                "leading-[0.95] tracking-tight text-white text-glow-white opacity-0 animate-slide-up delay-200",
              )}
            >
              {title}
            </h1>
          )}
          {subtitleBanner?.trim() && (
            <div className="mt-6 mx-auto w-full max-w-[1400px] px-4 text-center text-lg sm:text-2xl md:text-3xl font-semibold text-white/90 opacity-0 animate-slide-up delay-300">
              <div className="inline-block glass-dark px-8 py-4 rounded-2xl">
                {subtitleBanner}
              </div>
            </div>
          )}
          {badgeText?.trim() && (
            <div className="mt-4 flex justify-center opacity-0 animate-slide-up delay-400">
              <span className="inline-flex items-center rounded-full glass px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-lg glow-orange">
                <span className="mr-2 h-2 w-2 bg-[#4ECDC4] rounded-full animate-pulse" />
                {badgeText}
              </span>
            </div>
          )}
          {(ctaPrimary || ctaSecondary) && (
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 px-4 opacity-0 animate-slide-up delay-500">
              {ctaPrimary && (
                <Link
                  href={ctaPrimary.href}
                  className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF8200] to-[#FF6B35] text-white px-8 py-4 text-base font-bold shadow-xl hover:shadow-[0_0_40px_rgba(255,130,0,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
                >
                  {ctaPrimary.label}
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="group inline-flex items-center justify-center rounded-full glass border-2 border-white/30 text-white px-8 py-4 text-base font-semibold hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
                >
                  {ctaSecondary.label}
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              )}
            </div>
          )}
        </div>

        <div className="max-w-[1400px] mx-auto" onMouseLeave={() => setActive(null)}>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <div
                key={card.title}
                className={cn(
                  "group relative overflow-hidden rounded-3xl transition-all duration-500 min-h-[360px] sm:min-h-[460px] lg:min-h-[520px]",
                  "hover:scale-[1.02] hover:shadow-2xl",
                  "opacity-0 animate-slide-up",
                  index === 0 && "delay-100",
                  index === 1 && "delay-200",
                  index === 2 && "delay-300",
                  card.colorClass,
                )}
                onMouseEnter={() => setActive(card.title)}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF8200] to-[#4ECDC4] rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                {card.imageSrc && (
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt || card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index < 3}
                  />
                )}
                {!card.bareImage && (
                  <>
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none" />

                    {/* Glassmorphism card */}
                    <div className="flex h-full flex-col justify-end p-4 sm:p-6">
                      <div className="relative mx-auto mb-2 w-full max-w-sm space-y-3 rounded-2xl glass-dark p-4 sm:p-5 transform transition-all duration-500 group-hover:translate-y-[-8px]">
                        {/* Accent border glow */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF8200]/30 to-[#4ECDC4]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                        <h3 className="relative text-center text-2xl sm:text-3xl font-bold tracking-tight text-white text-glow-white">
                          {card.title}
                        </h3>
                        <p className="relative text-center text-sm sm:text-base text-white/80 line-clamp-2">
                          {card.description}
                        </p>
                        <div className="relative pt-2 flex justify-center">
                          <Link
                            href={card.href}
                            className={cn(
                              "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold",
                              "bg-gradient-to-r from-[#FF8200] to-[#FF6B35] text-white",
                              "border border-white/20 shadow-lg",
                              "transition-all duration-300",
                              "hover:shadow-[0_0_30px_rgba(255,130,0,0.6)] hover:scale-105 hover:border-white/40",
                              "active:scale-95",
                            )}
                          >
                            {card.cta ?? "Launch"}
                            <span aria-hidden className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                              →
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Dropdown panel under cards */}
          <div
            className={cn(
              "mx-auto mt-6 w-full max-w-[1400px] overflow-hidden rounded-3xl",
              "transition-all duration-700 ease-in-out",
              active ? "h-[50vh] opacity-100 scale-100" : "h-0 opacity-0 scale-95 pointer-events-none",
            )}
            aria-hidden={!active}
          >
            <div className="relative h-full glass-dark shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF8200]/10 via-transparent to-[#4ECDC4]/10" />
              <div className="relative z-10 h-full p-6 sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h4 className="text-2xl font-bold text-white">{active ?? ""}</h4>
                  <button
                    className="rounded-full glass px-4 py-2 text-sm font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    onClick={() => setActive(null)}
                    aria-label="Close section"
                  >
                    ✕ Close
                  </button>
                </div>
                {active === "About Us" && teamMembers && teamMembers.length > 0 ? (
                  <div className="h-full overflow-y-auto rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6">
                    <div className="space-y-4 text-sm sm:text-base text-white/90">
                      <h3 className="text-2xl font-semibold text-white">Welcome to CG Model Tek</h3>
                      <p>
                        At CG Model Tek, we are redefining precision in aerospace modeling and
                        design. As a pioneering startup in the aerospace manufacturing industry, our
                        mission is to deliver precision, innovation, and excellence in every project
                        we undertake.
                      </p>
                      <p>
                        Our team of highly skilled professionals brings decades of combined
                        experience in aerospace design, machining, and program management. Together,
                        we push the boundaries of technology to deliver cutting-edge solutions
                        tailored to each client’s unique needs.
                      </p>
                      <p>
                        We take pride in our state-of-the-art equipment and advanced manufacturing
                        capabilities, engineered to meet the highest standards of quality and
                        efficiency. From rapid prototyping to full-scale production, CG Model Tek
                        combines expertise, technology, and passion to transform ideas into
                        flight-ready reality.
                      </p>
                      <h4 className="pt-6 text-xl font-semibold text-white text-center">
                        Meet the Team
                      </h4>
                    </div>
                    <LeadershipGrid
                      textOnly
                      gridClassName="grid gap-3 sm:grid-cols-3 lg:grid-cols-6"
                      cardClassName="p-2"
                      modalEnabled={false}
                      linkToBase="/team"
                      people={teamMembers}
                    />
                    <div className="mt-4 text-right">
                      <Link
                        href="/team"
                        className="rounded-md border border-white/20 px-3 py-1.5 text-xs sm:text-sm hover:bg-white/10"
                      >
                        View full team
                      </Link>
                    </div>
                  </div>
                ) : active === "Services" ? (
                  <div className="h-full overflow-y-auto rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6">
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                      {servicesMini.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="group flex aspect-square items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-center hover:bg-white/10 hover:border-orange-400"
                        >
                          <span className="text-sm sm:text-base font-semibold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
                            {s.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 text-right">
                      <Link
                        href="/services"
                        className="rounded-md border border-white/20 px-3 py-1.5 text-xs sm:text-sm hover:bg-white/10"
                      >
                        View all services
                      </Link>
                    </div>
                  </div>
                ) : active === "Aerospace Excellence" ? (
                  <div className="h-full overflow-y-auto rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                      {aerospaceMini.map((i) => (
                        <Link
                          key={i.href}
                          href={i.href}
                          className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-orange-400"
                        >
                          <div className="relative aspect-square w-full">
                            <Image
                              src={i.image}
                              alt={i.title}
                              fill
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                              unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-2 text-center">
                              <span className="text-sm font-semibold text-white drop-shadow">
                                {i.title}
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 text-right">
                      <Link
                        href="/aerospace"
                        className="rounded-md border border-white/20 px-3 py-1.5 text-xs sm:text-sm hover:bg-white/10"
                      >
                        View all aerospace capabilities
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {(active && subsections[active] ? subsections[active] : []).map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
                      >
                        <span className="text-base font-medium">{item.label}</span>
                        <span aria-hidden className="opacity-70 group-hover:opacity-100">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
