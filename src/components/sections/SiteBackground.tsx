"use client";
import Image from "next/image";

export function SiteBackground({
  src = process.env.NEXT_PUBLIC_BG_IMAGE || "/images/hero.svg",
  alt = "",
}: {
  src?: string;
  alt?: string;
}) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover opacity-35 blur-[1px]"
        priority={false}
      />
      {/* overlays for contrast */}
      <div className="hero-overlay absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
    </div>
  );
}
