import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finishing Services | cgmodeltek",
  description: "Finishing options including anodize, chem film, bead blast, and more.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs className="mb-6" segments={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { href: "/services/finishing", label: "Finishing" }]} />
      <h1 className="headline-1">Finishing</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Cosmetic and protective finishes applied to specification.</p>
      <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Cosmetic + functional</h2>
          <p className="text-muted-foreground">Anodize, chem film, passivation, bead blast, paint, and more via qualified vendors.</p>
        </div>
        <div className="aspect-video w-full rounded-lg border bg-muted/40" />
      </section>
      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Specify a finish</h3>
            <p className="text-sm text-muted-foreground">Include notes, callouts, and samples if available.</p>
          </div>
          <Link href="/contact" className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground">Request a Quote</Link>
        </div>
      </section>
      <section className="mt-12">
        <h3 className="headline-3">FAQ</h3>
        <div className="mt-4">
          <Accordion items={[{ id: "color", title: "Color consistency?", content: "We align on expectations and sample parts when needed." }, { id: "spec", title: "Specs supported?", content: "Common MIL/ASTM specs can be supported; ask for details." }]} />
        </div>
      </section>
    </div>
  );
}
