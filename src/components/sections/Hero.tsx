import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero({
  title,
  subtitle,
  primary,
  secondary,
  image,
  className = "",
}: {
  title: string;
  subtitle?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  image: { src: string; alt: string };
  className?: string;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden", className)} aria-label="Hero">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          fetchPriority="high"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="container mx-auto grid min-h-[72svh] items-center px-4 py-16 md:py-24 lg:min-h-[78svh]">
        <div className="max-w-2xl">
          <h1 className="headline-1 text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          )}

          {(primary || secondary) && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {primary && (
                <Link
                  href={primary.href}
                  className="focus-ring rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  {primary.label}
                </Link>
              )}
              {secondary && (
                <Link
                  href={secondary.href}
                  className="focus-ring rounded-md border px-5 py-3 text-sm font-semibold hover:bg-muted/60"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Vignette edge */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-schematic-vignette" aria-hidden />
    </section>
  );
}
