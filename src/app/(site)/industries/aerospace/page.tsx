import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aerospace Industry | cgmodeltek",
  description: "Precision components for aerospace with documentation and traceability.",
};

export default function Page() {
  return (
    <div className="relative">
      {/* Page-local blue starfield background above global background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-20">
        <Image
          src="/images/hero.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-35"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/25" />
      </div>
      {/* Page content */}
      <div className="relative z-30 container mx-auto px-4 py-12">
        <Breadcrumbs className="mb-6" segments={[{ href: "/", label: "Home" }, { href: "/industries", label: "Industries" }, { href: "/industries/aerospace", label: "Aerospace" }]} />
        <h1 className="text-6xl font-bold leading-tight">Aerospace</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground text-base">Parts with rigorous documentation and quality requirements.</p>
        <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="headline-2">Flight-worthy processes</h2>
            <p className="text-muted-foreground">Traceability, inspection, and finishes aligned to spec.</p>
          </div>
          <div className="aspect-video w-full rounded-lg border bg-muted/40" />
        </section>
        <section className="mt-12 rounded-lg border bg-primary/5 p-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="headline-3">Discuss requirements</h3>
              <p className="text-sm text-muted-foreground">Share specs and compliance needs.</p>
            </div>
            <Link href="/contact" className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground">Request a Quote</Link>
          </div>
        </section>
        <section className="mt-12">
          <h3 className="headline-3">FAQ</h3>
          <div className="mt-4">
            <Accordion items={[{ id: "docs", title: "Docs?", content: "COC/COA, FAI, PPAP by agreement." }, { id: "trace", title: "Traceability?", content: "Lot tracking and material certs." }]} />
          </div>
        </section>
      </div>
    </div>
  );
}
