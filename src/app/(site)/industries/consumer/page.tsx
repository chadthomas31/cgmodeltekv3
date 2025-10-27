import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consumer Industry | cgmodeltek",
  description: "Precision parts for consumer products with cosmetic and functional needs.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs className="mb-6" segments={[{ href: "/", label: "Home" }, { href: "/industries", label: "Industries" }, { href: "/industries/consumer", label: "Consumer" }]} />
      <h1 className="headline-1">Consumer</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Cosmetic finishes and consistent quality for consumer hardware.</p>
      <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Look and function</h2>
          <p className="text-muted-foreground">Attention to edges, textures, and color consistency.</p>
        </div>
        <div className="aspect-video w-full rounded-lg border bg-muted/40" />
      </section>
      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Plan your build</h3>
            <p className="text-sm text-muted-foreground">Share target finishes, colors, and volumes.</p>
          </div>
          <Link href="/contact" className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground">Request a Quote</Link>
        </div>
      </section>
      <section className="mt-12">
        <h3 className="headline-3">FAQ</h3>
        <div className="mt-4">
          <Accordion items={[{ id: "cosmetic", title: "Cosmetic standards?", content: "We define pass/fail with samples or callouts." }, { id: "finishes", title: "Finishes?", content: "Anodize, bead blast, paint, powder, more via partners." }]} />
        </div>
      </section>
    </div>
  );
}
