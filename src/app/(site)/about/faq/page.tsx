import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | About Us | cgmodeltek",
  description: "Frequently asked questions about cgmodeltek's capabilities, lead times, and quality.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        className="mb-6"
        segments={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About Us" },
          { href: "/about/faq", label: "FAQ" },
        ]}
      />

      <h1 className="headline-1">Frequently Asked Questions</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Answers to common questions about tolerances, materials, and timelines.
      </p>

      <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Clear, practical guidance</h2>
          <p className="text-muted-foreground">
            We aim to remove uncertainty by sharing our standard practices and options up front.
          </p>
        </div>
        <div className="aspect-video w-full rounded-lg border bg-muted/40" />
      </section>

      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Have a different question?</h3>
            <p className="text-sm text-muted-foreground">Contact us and we’ll get back quickly.</p>
          </div>
          <Link href="/contact" className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground">
            Request a Quote
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="headline-3">FAQ</h3>
        <div className="mt-4">
          <Accordion
            items={[
              { id: "q1", title: "Do you sign NDAs?", content: "Yes. We can use your NDA or supply ours." },
              { id: "q2", title: "Supported file types?", content: "STEP, Parasolid, SolidWorks, PDF drawings, and more." },
              { id: "q3", title: "Quality documentation?", content: "COC/COA, FAI, inspection reports as required." },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
