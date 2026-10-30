import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Hero } from "@/components/sections/Hero";
import Link from "next/link";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";

export const metadata: Metadata = {
  title: "Aerospace | cgmodeltek",
  description:
    "Aerospace manufacturing excellence: wind tunnel models, flight test components, and aerospace tooling.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-0 pb-12">
      <Hero
        className="mb-8"
        title="Aerospace"
        subtitle="Precision manufacturing for aerodynamic performance and test-readiness."
        titleClassName="font-sans font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl"
        overlayClassName="hidden"
        image={{
          src: "/images/services-hero_v2.png",
          alt: "Aerospace schematic interface with aircraft",
        }}
        topBadge="Aerospace"
        contentPosition="bottom"
        minHeightClass="min-h-[40svh] lg:min-h-[52svh]"
        primary={{ href: "/rfq", label: "Request a Quote" }}
        secondary={{ href: "/contact", label: "Contact" }}
      />

      <div className="px-4">
        <Breadcrumbs
          className="mb-6"
          segments={[
            { href: "/", label: "Home" },
            { href: "/aerospace", label: "Aerospace" },
          ]}
        />

        <section id="wind-tunnel" className="scroll-mt-24 rounded-xl border bg-card p-5">
          <h2 className="headline-3">Wind Tunnel Models</h2>
          <p className="mt-2 text-muted-foreground">
            Scaled models and fixtures built to stringent aerodynamic tolerances. Surface finish and
            profile accuracy optimized for repeatable test data.
          </p>
          <div className="mt-4">
            <Link
              href="/rfq"
              className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground text-sm"
            >
              Request a Quote
            </Link>
          </div>
        </section>

        <section id="flight-test" className="mt-10 scroll-mt-24 rounded-xl border bg-card p-5">
          <h2 className="headline-3">Flight Test Components</h2>
          <p className="mt-2 text-muted-foreground">
            Instrumentation housings, aerodynamic fairings, and structural adapters produced with
            process control and documentation suitable for demanding test campaigns.
          </p>
          <div className="mt-4">
            <Link
              href="/rfq"
              className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground text-sm"
            >
              Request a Quote
            </Link>
          </div>
        </section>

        <section id="tooling" className="mt-10 scroll-mt-24 rounded-xl border bg-card p-5">
          <h2 className="headline-3">Aerospace Tooling</h2>
          <p className="mt-2 text-muted-foreground">
            Precision fixtures, drill guides, and assembly tooling designed for reliability and
            alignment integrity.
          </p>
          <div className="mt-4">
            <Link
              href="/rfq"
              className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground text-sm"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </div>

      <StickyQuoteButton />
    </div>
  );
}
