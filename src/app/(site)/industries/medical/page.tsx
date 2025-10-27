import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Industry | cgmodeltek",
  description: "Precision components for medical devices with documentation and finishes.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs className="mb-6" segments={[{ href: "/", label: "Home" }, { href: "/industries", label: "Industries" }, { href: "/industries/medical", label: "Medical" }]} />
      <h1 className="headline-1">Medical</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Components with tight tolerances and cosmetic finishes for medical use.</p>
      <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Precision and finish</h2>
          <p className="text-muted-foreground">Attention to edges, surface quality, and clean handling protocols.</p>
        </div>
        <div className="aspect-video w-full rounded-lg border bg-muted/40" />
      </section>
      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Discuss requirements</h3>
            <p className="text-sm text-muted-foreground">Share specs, materials, and finish needs.</p>
          </div>
          <Link href="/contact" className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground">Request a Quote</Link>
        </div>
      </section>
      <section className="mt-12">
        <h3 className="headline-3">FAQ</h3>
        <div className="mt-4">
          <Accordion items={[{ id: "docs", title: "Docs?", content: "COC/COA, FAI as needed." }, { id: "finish", title: "Finishes?", content: "Anodize, passivation, bead blast, polish." }]} />
        </div>
      </section>
    </div>
  );
}
