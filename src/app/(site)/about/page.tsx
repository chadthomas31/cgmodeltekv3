import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Hero } from "@/components/sections/Hero";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";
import { MDXContent } from "@/components/MDXContent";

export const metadata: Metadata = {
  title: "About Us | cgmodeltek",
  description: "Learn about cgmodeltek's mission, robotics integration, customer reviews, and FAQs.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-0 pb-12">
      <Hero
        className="mb-8"
        title="About Us"
        subtitle="We are an industrial engineering partner focused on precision machining, robotics, and production systems that perform under pressure."
        titleClassName="font-sans font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl"
        overlayClassName="hidden"
        image={{ src: "/images/about_us.png", alt: "Team and advanced manufacturing environment" }}
      />
      <div className="px-4">
        <Breadcrumbs
          className="mb-6"
          segments={[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us" },
          ]}
        />

      {/* Optional long-form MDX content */}
      <div className="mt-6">
        {/* Renders content/about/index.mdx when present */}
        <MDXContent collection="about" slug="index" />
      </div>

      {/* Two-column section */}
      <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Built for reliability</h2>
          <p className="text-muted-foreground">
            From prototypes to production, our processes emphasize repeatability, quality, and
            traceability. Our teams integrate robotic tending where it adds throughput and
            consistency.
          </p>
        </div>
        <div className="aspect-video w-full rounded-lg border bg-muted/40" />
      </section>

      {/* CTA band */}
      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Need a precise part fast?</h3>
            <p className="text-sm text-muted-foreground">Request a quote and we’ll review your CAD same-day.</p>
          </div>
          <Link href="/contact" className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground">
            Request a Quote
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h3 className="headline-3">FAQ</h3>
        <div className="mt-4">
          <Accordion
            items={[
              { id: "tol", title: "What tolerances can you hold?", content: "±0.0005 in typical; tighter possible upon request." },
              { id: "lead", title: "Lead times?", content: "Rapid prototypes in days; production in weeks depending on volume." },
              { id: "materials", title: "Materials?", content: "Aluminum, steels, titanium, copper alloys, engineering plastics, and more." },
            ]}
          />
        </div>
      </section>

      {/* Quick links */}
      <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { href: "/about/company", label: "Company" },
          { href: "/about/robotic-tending", label: "Robotic Tending" },
          { href: "/about/reviews", label: "Customer Reviews" },
          { href: "/about/faq", label: "FAQ" },
        ].map((l) => (
          <Link key={l.href} href={l.href} className="rounded-md border p-4 hover:bg-muted/60">
            {l.label}
          </Link>
        ))}
      </section>
      </div>
    </div>
  );
}
