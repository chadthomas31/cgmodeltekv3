import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Robotic Tending | About Us | cgmodeltek",
  description: "How cgmodeltek integrates robotic tending to improve throughput and quality.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        className="mb-6"
        segments={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About Us" },
          { href: "/about/robotic-tending", label: "Robotic Tending" },
        ]}
      />

      <h1 className="headline-1">Robotic Tending</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        We deploy robotics where it drives consistency and capacity while maintaining quality.
      </p>

      <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Throughput without compromise</h2>
          <p className="text-muted-foreground">
            Automated loading and in-process checks enable longer unattended runs and tighter
            process control.
          </p>
        </div>
        <div className="aspect-video w-full rounded-lg border bg-muted/40" />
      </section>

      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Scale your output</h3>
            <p className="text-sm text-muted-foreground">
              Talk with our automation team about your goals.
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
                id: "cells",
                title: "Do you build custom cells?",
                content: "We integrate off-the-shelf robotics into proven cell designs.",
              },
              {
                id: "inspection",
                title: "What about inspection?",
                content: "In-process probing and offline CMM ensure quality.",
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
