import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Milling Services | cgmodeltek",
  description: "CNC milling services with tight tolerances and surface finish options.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs className="mb-6" segments={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { href: "/services/milling", label: "Milling" }]} />
      <h1 className="headline-1">Milling</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">High-precision 3- and 4-axis milling for prototypes and production.</p>
      <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Tight tolerances</h2>
          <p className="text-muted-foreground">Process control and inspection plans support demanding drawings.</p>
        </div>
        <div className="aspect-video w-full rounded-lg border bg-muted/40" />
      </section>
      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Ready to quote?</h3>
            <p className="text-sm text-muted-foreground">Send a STEP and PDF drawing for review.</p>
          </div>
          <Link href="/contact" className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground">Request a Quote</Link>
        </div>
      </section>
      <section className="mt-12">
        <h3 className="headline-3">FAQ</h3>
        <div className="mt-4">
          <Accordion items={[{ id: "tol", title: "Typical tolerances?", content: "±0.0005 in typical; tighter by agreement." }, { id: "materials", title: "Materials?", content: "Aluminum, steels, copper alloys, plastics, more." }]} />
        </div>
      </section>
    </div>
  );
}
