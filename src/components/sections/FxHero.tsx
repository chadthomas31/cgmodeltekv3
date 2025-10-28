"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

export type FxHeroCard = {
  title: string;
  description?: string;
  href: string;
  cta?: string;
  colorClass: string; // Tailwind color classes for background
  imageSrc?: string; // optional background image
  imageAlt?: string;
};

export function FxHero({
  eyebrow = "Don't settle for ordinary.",
  title = "Create anything.",
  cards = [],
  className = "",
  titleClassName,
}: {
  eyebrow?: string;
  title?: string;
  cards: FxHeroCard[];
  className?: string;
  titleClassName?: string;
}) {
  const [active, setActive] = useState<string | null>(null);

  // Scaffold subsections for each card title. These can be customized later.
  const subsections: Record<string, { label: string; href: string }[]> = {
    "About Us": [
      { label: "Company", href: "/about" },
      { label: "Team", href: "/about#team" },
      { label: "Capabilities", href: "/about#capabilities" },
    ],
    Services: [
      { label: "CAD Modeling", href: "/services#cad" },
      { label: "Prototyping", href: "/services#proto" },
      { label: "FEA / CFD", href: "/services#analysis" },
    ],
    Industries: [
      { label: "Aerospace & Defense", href: "/industries/aerospace" },
      { label: "Automotive", href: "/industries/automotive" },
      { label: "Food & Beverage", href: "/industries/consumer" },
      { label: "Packaging", href: "/industries/consumer" },
      { label: "Medical", href: "/industries/medical" },
      { label: "Oil and Energy", href: "/industries/energy" },
      { label: "OEM & Other Industries", href: "/industries" },
    ],
    "Contact Us": [
      { label: "Request Quote", href: "/contact#quote" },
      { label: "Book a Call", href: "/contact#schedule" },
      { label: "Locations", href: "/contact#locations" },
    ],
  };

  const onCardClick = (title: string) => {
    setActive((prev) => (prev === title ? null : title));
  };
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
        </div>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-[1400px] mx-auto">
          {cards.map((card) => (
            <article
              key={card.title}
              className={cn(
                "group relative overflow-hidden rounded-2xl cursor-pointer",
                "h-[28vh] sm:h-[32vh] lg:h-[36vh] min-h-[180px]",
                "transition-all duration-300 ease-in-out will-change-transform",
                "hover:scale-[1.02] hover:shadow-2xl",
                card.colorClass
              )}
              onClick={() => onCardClick(card.title)}
              aria-expanded={active === card.title}
              role="button"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex h-full flex-col justify-end p-6 sm:p-8">
                <div className="space-y-3 rounded-xl bg-black/45 backdrop-blur-sm p-4 sm:p-5 border border-white/10">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight drop-shadow-md">{card.title}</h3>
                  {card.description && (
                    <p className="text-sm sm:text-base opacity-95 max-w-[36ch] drop-shadow-sm">{card.description}</p>
                  )}

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
            </article>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
