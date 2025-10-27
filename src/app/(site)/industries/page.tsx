import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries | cgmodeltek",
  description: "Industries served by cgmodeltek: aerospace, automotive, medical, energy, consumer, defense.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        className="mb-6"
        segments={[
          { href: "/", label: "Home" },
          { href: "/industries", label: "Industries" },
        ]}
      />
      <h1 className="headline-1">Industries</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        We support demanding applications across multiple sectors with certified processes and
        documented quality.
      </p>

      <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Application-focused</h2>
          <p className="text-muted-foreground">
            Tolerance needs, finishes, and documentation vary by industry. We adapt our process to
            meet your requirements.
          </p>
        </div>
        <div className="aspect-video w-full rounded-lg border bg-muted/40" />
      </section>

      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Discuss your application</h3>
            <p className="text-sm text-muted-foreground">Share specs and compliance needs for a tailored quote.</p>
          </div>
          <Link href="/contact" className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground">
            Request a Quote
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {["aerospace","automotive","medical","energy","consumer","defense"].map((s) => (
          <Link key={s} href={`/industries/${s}`} className="rounded-md border p-4 hover:bg-muted/60 capitalize">
            {s}
          </Link>
        ))}
      </section>

      <section className="mt-12">
        <h3 className="headline-3">FAQ</h3>
        <div className="mt-4">
          <Accordion
            items={[
              { id: "docs", title: "Documentation?", content: "COC/COA, FAI, inspection, PPAP on request." },
              { id: "trace", title: "Traceability?", content: "Lot tracking and material certs supported." },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
