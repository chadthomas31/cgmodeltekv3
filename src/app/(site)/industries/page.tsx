import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Industries | cgmodeltek",
  description: "Industries served by cgmodeltek: aerospace, automotive, medical, energy, consumer, defense.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        className="mb-6"
        segments={[
          { href: "/", label: "Home" },
          { href: "/industries", label: "Industries" },
        ]}
      />
      <h1 className="headline-1">Industries</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        We support demanding applications across multiple sectors with certified processes and
        documented quality.
      </p>

      <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Application-focused</h2>
          <p className="text-muted-foreground">
            Tolerance needs, finishes, and documentation vary by industry. We adapt our process to
            meet your requirements.
          </p>
        </div>
        <div className="aspect-video w-full rounded-lg border bg-muted/40" />
      </section>

      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Discuss your application</h3>
            <p className="text-sm text-muted-foreground">Share specs and compliance needs for a tailored quote.</p>
          </div>
          <Link href="/contact" className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground">
            Request a Quote
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          { slug: "aerospace", label: "Aerospace" , img: "/images/industries/aerospace.jpg" },
          { slug: "automotive", label: "Automotive" , img: "/images/industries/automotive.jpg" },
          { slug: "medical", label: "Medical" , img: "/images/industries/medical.jpg" },
          { slug: "energy", label: "Energy" , img: "/images/industries/energy.jpg" },
          { slug: "consumer", label: "Consumer" , img: "/images/industries/consumer.jpg" },
          { slug: "defense", label: "Defense" , img: "/images/industries/defense.jpg" },
        ].map((t) => (
          <Link
            key={t.slug}
            href={`/industries/${t.slug}`}
            className="group relative block overflow-hidden rounded-xl border border-white/10 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <div className="relative aspect-[16/9] w-full">
              {t.img && (
                <Image
                  src={t.img}
                  alt={t.label}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-all duration-300 group-hover:brightness-90"
                  priority={false}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/80 group-hover:via-black/30" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/55 px-4 py-3 text-white transition-colors duration-300 group-hover:bg-black/60">
                <span className="text-sm font-semibold">{t.label}</span>
                <span aria-hidden className="opacity-80 group-hover:opacity-100">→</span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="mt-12">
        <h3 className="headline-3">FAQ</h3>
        <div className="mt-4">
          <Accordion
            items={[
              { id: "docs", title: "Documentation?", content: "COC/COA, FAI, inspection, PPAP on request." },
              { id: "trace", title: "Traceability?", content: "Lot tracking and material certs supported." },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
