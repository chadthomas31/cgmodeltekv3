"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export type FxHeroCard = {
  title: string;
  description?: string;
  href: string;
  cta?: string;
  colorClass: string; // Tailwind color classes for background
};

export function FxHero({
  eyebrow = "Don't settle for ordinary.",
  title = "Create anything.",
  cards = [],
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  cards: FxHeroCard[];
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative isolate bg-black min-h-screen",
        className
      )}
      aria-label="Hero"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-6xl mx-auto">
          {eyebrow && (
            <p className="text-sm sm:text-base text-gray-400 uppercase tracking-wider mb-6 font-light">{eyebrow}</p>
          )}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light italic leading-[0.95] tracking-tight text-white">
            {title}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-[1400px] mx-auto">
          {cards.map((card) => (
            <article
              key={card.title}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                "h-[60vh] sm:h-[65vh] lg:h-[70vh] min-h-[380px]",
                "transition-all duration-300 ease-in-out will-change-transform",
                "hover:scale-[1.02] hover:shadow-2xl",
                card.colorClass
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex h-full flex-col justify-between p-6 sm:p-8">
                <div className="flex-1" />

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">{card.title}</h3>
                  {card.description && (
                    <p className="text-sm sm:text-base opacity-90 max-w-[36ch]">{card.description}</p>
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
      </div>
    </section>
  );
}
