import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Company | About Us | cgmodeltek",
  description: "Company overview of cgmodeltek: mission, capabilities, and quality systems.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        className="mb-6"
        segments={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About Us" },
          { href: "/about/company", label: "Company" },
        ]}
      />

      <h1 className="headline-1">Company</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        cgmodeltek is a precision manufacturing partner delivering reliable parts and assemblies
        with a commitment to quality and on-time delivery.
      </p>

      <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Our mission</h2>
          <p className="text-muted-foreground">
            We help teams ship confidently by combining modern CNC capability with robust quality
            assurance and traceability.
          </p>
        </div>
        <div className="aspect-video w-full rounded-lg border bg-muted/40" />
      </section>

      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Ready to start?</h3>
            <p className="text-sm text-muted-foreground">
              Send a model or drawing to get a same-day quote.
            </p>
          </div>
          <Link
            href="/contact"
            className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="headline-3">FAQ</h3>
        <div className="mt-4">
          <Accordion
            items={[
              {
                id: "capacity",
                title: "Capacity?",
                content: "Multi-shift availability with surge options.",
              },
              {
                id: "certs",
                title: "Certifications?",
                content: "Ask about current certifications and COA formats.",
              },
              {
                id: "shipping",
                title: "Shipping?",
                content: "North America with global logistics on request.",
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
