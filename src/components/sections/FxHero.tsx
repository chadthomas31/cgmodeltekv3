"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import { LeadershipImage } from "@/components/LeadershipImage";
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
    "Contact Us": [
      { label: "Contact", href: "/contact" },
    ],
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
    { title: "Wind Tunnel Models", href: "/aerospace#wind-tunnel", image: "/images/industries/aerospace.png" },
    { title: "Flight Test Components", href: "/aerospace#flight-test", image: "/images/industries/aerospace.png" },
    { title: "Aerospace Tooling", href: "/aerospace#tooling", image: "/images/industries/aerospace.png" },
    { title: "Complex Geometries", href: "/aerospace#geometries", image: "/images/industries/aerospace.png" },
  ];

  return (
    <section
      className={cn(
        "relative isolate min-h-screen",
        className
      )}
      aria-label="Hero"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-6xl mx-auto">
          {heroLogoSrc && (
            <div className="mb-4 sm:mb-6 flex justify-center">
              <Image
                src={heroLogoSrc}
                alt="Site Logo"
                width={800}
                height={200}
                priority
                className={(heroLogoClass?.trim() || "h-16 sm:h-24 md:h-28 lg:h-32 xl:h-36") + " w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"}
              />
            </div>
          )}
          {eyebrow && (
            <p className="text-sm sm:text-base text-gray-400 uppercase tracking-wider mb-6 font-light">{eyebrow}</p>
          )}
          {title?.trim() && (
            <h1 className={cn(
              titleClassName ?? "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light",
              "leading-[0.95] tracking-tight text-white"
            )}>
              {title}
            </h1>
          )}
          {subtitleBanner?.trim() && (
            <div className="mt-5 mx-auto w-full max-w-[1400px] px-4 text-center text-lg sm:text-2xl md:text-3xl font-semibold text-white">
              {subtitleBanner}
            </div>
          )}
          {badgeText?.trim() && (
            <div className="mt-3 flex justify-center">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                {badgeText}
              </span>
            </div>
          )}
          {(ctaPrimary || ctaSecondary) && (
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 px-4">
              {ctaPrimary && (
                <Link href={ctaPrimary.href} className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-white/90 w-full sm:w-auto">
                  {ctaPrimary.label}
                </Link>
              )}
              {ctaSecondary && (
                <Link href={ctaSecondary.href} className="inline-flex items-center justify-center rounded-full border border-white/30 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/10 w-full sm:w-auto">
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          )}
        </div>

        <div
          className="max-w-[1400px] mx-auto"
          onMouseLeave={() => setActive(null)}
        >
          <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.title}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border-2 shadow-xl transition-all duration-300 min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] hover:border-orange-400",
                  card.colorClass
                )}
                onMouseEnter={() => setActive(card.title)}
              >
                {card.imageSrc && (
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt ?? ""}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover"
                    priority={false}
                  />
                )}
                {!card.bareImage && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="flex h-full flex-col justify-end p-3 sm:p-4">
                      <div className="mx-auto mb-1 w-full max-w-sm space-y-2 rounded-lg bg-black/35 backdrop-blur-sm p-3 sm:p-3 border border-white/5">
                        <h3 className="text-center text-xl sm:text-2xl font-semibold tracking-tight text-white drop-shadow">{card.title}</h3>
                        <div className="pt-2">
                          <Link
                            href={card.href}
                            className={cn(
                              "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium",
                              "border-2 transition-all duration-250",
                              "hover:bg-black/20 hover:scale-105"
                            )}
                          >
                            {card.cta ?? "Launch"}
                            <span aria-hidden className="text-lg">→</span>
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
            "mx-auto mt-4 w-full max-w-[1400px] overflow-hidden rounded-2xl border",
            "transition-all duration-500 ease-in-out",
            active ? "h-[50vh] opacity-100" : "h-0 opacity-0 pointer-events-none"
          )}
          aria-hidden={!active}
        >
          <div className="relative h-full bg-black/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent" />
            <div className="relative z-10 h-full p-6 sm:p-8">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-xl font-semibold">
                  {active ?? ""}
                </h4>
                <button
                  className="rounded-md bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
                  onClick={() => setActive(null)}
                  aria-label="Close section"
                >
                  Close
                </button>
              </div>
              {active === "About Us" && teamMembers && teamMembers.length > 0 ? (
                <div className="h-full overflow-y-auto rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6">
                  <div className="space-y-4 text-sm sm:text-base text-white/90">
                    <h3 className="text-2xl font-semibold text-white">Welcome to CG Model Tek</h3>
                    <p>
                      At CG Model Tek, we are redefining precision in aerospace modeling and design. As a pioneering startup in the aerospace manufacturing industry, our mission is to deliver precision, innovation, and excellence in every project we undertake.
                    </p>
                    <p>
                      Our team of highly skilled professionals brings decades of combined experience in aerospace design, machining, and program management. Together, we push the boundaries of technology to deliver cutting-edge solutions tailored to each client’s unique needs.
                    </p>
                    <p>
                      We take pride in our state-of-the-art equipment and advanced manufacturing capabilities, engineered to meet the highest standards of quality and efficiency. From rapid prototyping to full-scale production, CG Model Tek combines expertise, technology, and passion to transform ideas into flight-ready reality.
                    </p>
                    <h4 className="pt-6 text-xl font-semibold text-white text-center">Meet the Team</h4>
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
                    <Link href="/team" className="rounded-md border border-white/20 px-3 py-1.5 text-xs sm:text-sm hover:bg-white/10">
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
                        <span className="text-sm sm:text-base font-semibold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">{s.title}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 text-right">
                    <Link href="/services" className="rounded-md border border-white/20 px-3 py-1.5 text-xs sm:text-sm hover:bg-white/10">
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
                            <span className="text-sm font-semibold text-white drop-shadow">{i.title}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 text-right">
                    <Link href="/aerospace" className="rounded-md border border-white/20 px-3 py-1.5 text-xs sm:text-sm hover:bg-white/10">
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
                      <span aria-hidden className="opacity-70 group-hover:opacity-100">→</span>
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
