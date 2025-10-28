import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Hero } from "@/components/sections/Hero";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | cgmodeltek",
  description: "Explore cgmodeltek services: milling, turning, multi-axis, prototyping, production, finishing.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-0 pb-12">
      <Hero
        className="mb-8"
        title="Services"
        subtitle="Delivering end-to-end aerospace design, simulation, and modeling solutions — built on precision engineering, innovation, and technical mastery."
        titleClassName="font-sans font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl"
        overlayClassName="hidden"
        image={{ src: "/images/services-hero_v2.png", alt: "Aerospace schematic interface with aircraft and robotic arm" }}
      />
      <div className="px-4">
        <Breadcrumbs
          className="mb-6"
          segments={[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
          ]}
        />

      <section className="mt-4 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Capability, documented</h2>
          <p className="text-muted-foreground">
            Our programming, fixturing, and inspection plans are built for repeatability and scale.
          </p>
        </div>
        <div className="aspect-video w-full rounded-lg border bg-muted/40" />
      </section>

      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Have a model ready?</h3>
            <p className="text-sm text-muted-foreground">Share your part and required quantities.</p>
          </div>
          <Link href="/contact" className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground">
            Request a Quote
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {["milling","turning","multi-axis","prototyping","production","finishing"].map((s) => (
          <Link key={s} href={`/services/${s}`} className="rounded-md border p-4 hover:bg-muted/60 capitalize">
            {s.replace("-"," ")}
          </Link>
        ))}
      </section>

      <section className="mt-12">
        <h3 className="headline-3">FAQ</h3>
        <div className="mt-4">
          <Accordion
            items={[
              { id: "min", title: "Min/Max volumes?", content: "From 1 to thousands, with scheduling options." },
              { id: "qa", title: "Quality?", content: "In-process checks, CMM, and lot traceability available." },
            ]}
          />
        </div>
      </section>
      </div>
    </div>
  );
}
