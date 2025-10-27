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
        "relative isolate bg-background",
        className
      )}
      aria-label="Hero"
    >
      <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          {eyebrow && (
            <h1 className="headline-1 tracking-tight mb-1">{eyebrow}</h1>
          )}
          <div className="text-base sm:text-lg text-muted-foreground">{title}</div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className={cn(
                "group relative overflow-hidden rounded-xl border",
                "h-[64svh] min-h-[420px]",
                "shadow-sm transition-transform duration-200 will-change-transform",
                "hover:-translate-y-0.5",
                card.colorClass
              )}
            >
              <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply" />

              <div className="flex h-full flex-col justify-end p-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold tracking-tight">{card.title}</h3>
                  {card.description && (
                    <p className="text-sm text-muted-foreground max-w-[40ch]">{card.description}</p>
                  )}
                </div>

                <div className="mt-4">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium hover:bg-foreground/10 transition"
                  >
                    {card.cta ?? "Launch"}
                    <span aria-hidden>↗</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
