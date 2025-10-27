import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prototyping Services | cgmodeltek",
  description: "Rapid prototyping with DFM feedback and fast iteration cycles.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs className="mb-6" segments={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { href: "/services/prototyping", label: "Prototyping" }]} />
      <h1 className="headline-1">Prototyping</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Move from concept to part quickly with practical DFM guidance.</p>
      <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Fast and informative</h2>
          <p className="text-muted-foreground">We prioritize feedback and lead times to accelerate your design loop.</p>
        </div>
        <div className="aspect-video w-full rounded-lg border bg-muted/40" />
      </section>
      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Start a prototype</h3>
            <p className="text-sm text-muted-foreground">Share your CAD and target materials.</p>
          </div>
          <Link href="/contact" className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground">Request a Quote</Link>
        </div>
      </section>
      <section className="mt-12">
        <h3 className="headline-3">FAQ</h3>
        <div className="mt-4">
          <Accordion items={[{ id: "time", title: "Typical turnaround?", content: "As fast as a few days depending on complexity." }, { id: "dfm", title: "DFM coverage?", content: "We flag risk areas and propose practical adjustments." }]} />
        </div>
      </section>
    </div>
  );
}
