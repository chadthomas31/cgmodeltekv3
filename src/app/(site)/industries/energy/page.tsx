import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Energy Industry | cgmodeltek",
  description: "Components for energy applications with durability and documentation.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs className="mb-6" segments={[{ href: "/", label: "Home" }, { href: "/industries", label: "Industries" }, { href: "/industries/energy", label: "Energy" }]} />
      <h1 className="headline-1">Energy</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Rugged components for generation, storage, and transmission systems.</p>
      <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Reliability in the field</h2>
          <p className="text-muted-foreground">Material selection and finishes for harsh environments.</p>
        </div>
        <div className="aspect-video w-full rounded-lg border bg-muted/40" />
      </section>
      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Discuss your application</h3>
            <p className="text-sm text-muted-foreground">Share specs and compliance needs.</p>
          </div>
          <Link href="/contact" className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground">Request a Quote</Link>
        </div>
      </section>
      <section className="mt-12">
        <h3 className="headline-3">FAQ</h3>
        <div className="mt-4">
          <Accordion items={[{ id: "specs", title: "Specs?", content: "We align on applicable standards and testing." }, { id: "materials", title: "Materials?", content: "Steels, stainless, aluminum, and coatings." }]} />
        </div>
      </section>
    </div>
  );
}
