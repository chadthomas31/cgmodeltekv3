import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Production Machining | cgmodeltek",
  description: "Production machining with scheduling, repeatability, and documentation.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs className="mb-6" segments={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { href: "/services/production", label: "Production" }]} />
      <h1 className="headline-1">Production</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Consistent output with clear change control and quality checkpoints.</p>
      <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Repeatability & scale</h2>
          <p className="text-muted-foreground">Documented setups, inspection plans, and inventory options.</p>
        </div>
        <div className="aspect-video w-full rounded-lg border bg-muted/40" />
      </section>
      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Plan a build</h3>
            <p className="text-sm text-muted-foreground">Share volumes, cadence, and target price for a proposal.</p>
          </div>
          <Link href="/contact" className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground">Request a Quote</Link>
        </div>
      </section>
      <section className="mt-12">
        <h3 className="headline-3">FAQ</h3>
        <div className="mt-4">
          <Accordion items={[{ id: "mrv", title: "MRP/ERP integration?", content: "We can align on PO cadences and labeling." }, { id: "ppap", title: "PPAP?", content: "Ask about levels and paperwork supported." }]} />
        </div>
      </section>
    </div>
  );
}
