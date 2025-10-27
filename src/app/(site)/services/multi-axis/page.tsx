import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Multi-Axis Machining | cgmodeltek",
  description: "5-axis and complex workholding for efficient multi-face machining.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs className="mb-6" segments={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { href: "/services/multi-axis", label: "Multi-Axis" }]} />
      <h1 className="headline-1">Multi-Axis</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Reduced setups and improved accuracy with multi-axis strategies.</p>
      <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Efficiency & precision</h2>
          <p className="text-muted-foreground">Higher geometric fidelity with fewer blends and datum transfers.</p>
        </div>
        <div className="aspect-video w-full rounded-lg border bg-muted/40" />
      </section>
      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Discuss your geometry</h3>
            <p className="text-sm text-muted-foreground">Send models and critical datums for review.</p>
          </div>
          <Link href="/contact" className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground">Request a Quote</Link>
        </div>
      </section>
      <section className="mt-12">
        <h3 className="headline-3">FAQ</h3>
        <div className="mt-4">
          <Accordion items={[{ id: "axes", title: "Axes supported?", content: "Up to 5-axis strategies; inquire for specifics." }, { id: "fixturing", title: "Fixturing?", content: "Custom workholding for repeatability and access." }]} />
        </div>
      </section>
    </div>
  );
}
