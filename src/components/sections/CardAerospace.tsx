"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type AerospaceCardProps = {
  title: string;
  description: string;
  href: string;
  cta?: string;
  backgroundSrc: string;
  backgroundAlt?: string;
  className?: string;
};

/**
 * Aerospace-themed card inspired by labs.google/fx
 * Features a full-bleed background image with gradient overlay,
 * bold heading, description, and call-to-action button.
 */
export function CardAerospace({
  title,
  description,
  href,
  cta = "Learn More",
  backgroundSrc,
  backgroundAlt = "Aerospace background",
  className,
}: AerospaceCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-xl shadow-lg",
        "h-[60vh] sm:h-[65vh] lg:h-[70vh] min-h-[380px]",
        "transition-all duration-300 ease-in-out will-change-transform",
        "hover:scale-[1.02] hover:shadow-2xl",
        className,
      )}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundSrc}
          alt={backgroundAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
      </div>

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />

      {/* Additional hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content wrapper */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{title}</h3>
          <p className="text-sm sm:text-base text-gray-200 max-w-[42ch] leading-relaxed">
            {description}
          </p>

          <div className="pt-2">
            <Link
              href={href}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold",
                "bg-white text-black",
                "border-2 border-white",
                "transition-all duration-200",
                "hover:bg-gray-100 hover:scale-105",
              )}
            >
              {cta}
              <span aria-hidden className="text-base">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

/**
 * Grid container for multiple aerospace cards
 * Matches the layout pattern from FxHero
 */
export function AerospaceCardGrid({
  cards,
  className,
}: {
  cards: AerospaceCardProps[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        "max-w-[1400px] mx-auto",
        className,
      )}
    >
      {cards.map((card, index) => (
        <CardAerospace key={`${card.title}-${index}`} {...card} />
      ))}
    </div>
  );
}
