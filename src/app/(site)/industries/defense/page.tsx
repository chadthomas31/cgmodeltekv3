import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Defense Industry | cgmodeltek",
  description: "Precision components for defense with documentation, traceability, and security.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs className="mb-6" segments={[{ href: "/", label: "Home" }, { href: "/industries", label: "Industries" }, { href: "/industries/defense", label: "Defense" }]} />
      <h1 className="headline-1">Defense</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Secure handling and documented processes for defense applications.</p>
      <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Process discipline</h2>
          <p className="text-muted-foreground">Change control, inspection, and material traceability on request.</p>
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
          <Accordion items={[{ id: "itars", title: "ITAR?", content: "Discuss current controls and requirements." }, { id: "docs", title: "Documentation?", content: "COC/COA, FAI, inspection, and labeling on request." }]} />
        </div>
      </section>
    </div>
  );
}
