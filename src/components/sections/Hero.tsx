import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero({
  title,
  subtitle,
  primary,
  secondary,
  image,
  titleClassName,
  overlayClassName,
  className = "",
  contentPosition = "center",
}: {
  title: string;
  subtitle?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  image: { src: string; alt: string };
  titleClassName?: string;
  overlayClassName?: string;
  className?: string;
  contentPosition?: "center" | "bottom";
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
        <div className={cn(overlayClassName ?? "hero-overlay", "absolute inset-0")} />
        {contentPosition === "bottom" && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        )}
      </div>

      <div className={cn(
        "container mx-auto grid min-h-[72svh] px-4 py-16 md:py-24 lg:min-h-[78svh]",
        contentPosition === "bottom" ? "items-end" : "items-center"
      )}>
        <div className={cn("max-w-2xl", contentPosition === "bottom" && "rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur-sm") }>
          <h1 className={cn(titleClassName ?? "headline-1", "text-foreground") }>
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
