import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Reviews | About Us | cgmodeltek",
  description: "Read what customers say about cgmodeltek's precision, reliability, and support.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        className="mb-6"
        segments={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About Us" },
          { href: "/about/reviews", label: "Customer Reviews" },
        ]}
      />

      <h1 className="headline-1">Customer Reviews</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Teams choose us for consistent quality, responsive communication, and dependable lead times.
      </p>

      <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Trusted by engineers</h2>
          <p className="text-muted-foreground">
            We partner closely with customers to ensure manufacturability and predictable outcomes.
          </p>
        </div>
        <div className="aspect-video w-full rounded-lg border bg-muted/40" />
      </section>

      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Ready to get started?</h3>
            <p className="text-sm text-muted-foreground">Send a model or drawing to get a same-day quote.</p>
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
              { id: "nps", title: "Satisfaction?", content: "High repeat business with strong NPS from engineering teams." },
              { id: "comm", title: "Communication?", content: "Clear, proactive updates and DFM feedback." },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
