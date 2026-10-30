"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type AnimatedCardProps = {
  title: string;
  description: string;
  href: string;
  cta?: string;
  animation: ReactNode;
  className?: string;
  textColor?: string;
};

/**
 * Animated card wrapper inspired by labs.google/fx
 * Accepts a custom animation component as a child
 * Features smooth hover effects and clean typography
 */
export function CardAnimated({
  title,
  description,
  href,
  cta = "Learn More",
  animation,
  className,
  textColor = "text-white",
}: AnimatedCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "h-[60vh] sm:h-[65vh] lg:h-[70vh] min-h-[380px]",
        "transition-all duration-300 ease-in-out will-change-transform",
        "hover:scale-[1.02] hover:shadow-2xl",
        className,
      )}
    >
      {/* Animation Background */}
      <div className="absolute inset-0">{animation}</div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />

      {/* Interactive hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content wrapper */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">
        <div className="space-y-3">
          <h3 className={cn("text-2xl sm:text-3xl font-semibold tracking-tight", textColor)}>
            {title}
          </h3>
          <p
            className={cn(
              "text-sm sm:text-base opacity-90 max-w-[42ch] leading-relaxed",
              textColor === "text-white" ? "text-gray-200" : "text-gray-700",
            )}
          >
            {description}
          </p>

          <div className="pt-2">
            <Link
              href={href}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium",
                "border-2 transition-all duration-200",
                "hover:scale-105",
                textColor === "text-white"
                  ? "border-white bg-white text-black hover:bg-gray-100"
                  : "border-black bg-black text-white hover:bg-gray-800",
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
 * Grid container for multiple animated cards
 */
export function AnimatedCardGrid({
  cards,
  className,
}: {
  cards: AnimatedCardProps[];
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
        <CardAnimated key={`${card.title}-${index}`} {...card} />
      ))}
    </div>
  );
}
