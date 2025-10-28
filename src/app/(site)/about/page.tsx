import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Hero } from "@/components/sections/Hero";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";
import { MDXContent } from "@/components/MDXContent";
import Image from "next/image";

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
        image={{ src: "/images/about_us_v2.png", alt: "Team and advanced manufacturing environment" }}
        contentPosition="bottom"
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

      {/* Leadership */}
      <section className="mt-12">
        <h2 className="headline-2">Leadership</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">Meet the team guiding our engineering, operations, and customer success.</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Chris Athaide", role: "Founder & CEO", img: "", bio: "Chris Athaide is the Founder and CEO of CG Model Tek LLC. He began his career as a Design and Test Engineer of wind tunnel test models at Boeing/McDonnell Douglas and later served as a CAD/CAM trainer for Unigraphics through EDS and at Boeing. Since 1999, he has held executive roles at Tri Models Inc., serving as Vice President of Sales and Contracts and as Facility Security Officer, leading proposals, pricing, customer engagement, sales, marketing, and senior corporate management while supporting Engineering, Fabrication, and Quality Assurance. He also oversaw IT as IT Manager and served as ISSM for information systems security, Facility Security Officer, ITAR Officer, and Export Compliance Officer. On October 1, 2024, he founded CG Model Tek in Tullahoma, TN, acquiring the assets of Micro Craft and relaunching as a more focused, lean specialty company in the same field. Specialties include wind tunnel model design; full-project estimation and proposal preparation; Siemens NX CAD and surfacing; and client/server troubleshooting, repair, and management." },
            { name: "Naresh Kumar", role: "Chief Financial Officer", img: "", bio: "" },
            { name: "Tony Bryce", role: "Title", img: "", bio: "" },
            { name: "Name Here", role: "Title", img: "", bio: "Short 2–3 sentence bio goes here." },
            { name: "Name Here", role: "Title", img: "", bio: "Short 2–3 sentence bio goes here." },
            { name: "Name Here", role: "Title", img: "", bio: "Short 2–3 sentence bio goes here." },
            { name: "Name Here", role: "Title", img: "", bio: "Short 2–3 sentence bio goes here." },
            { name: "Name Here", role: "Title", img: "", bio: "Short 2–3 sentence bio goes here." },
          ].map((p, i) => (
            <div key={i} className="rounded-xl border bg-card p-4">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <div className="aspect-square w-full bg-muted/50" />
                {(() => {
                  const encoded = encodeURIComponent(p.name);
                  const fallback = `/Leadership/${encoded}.jpg`;
                  const src = p.img || fallback;
                  return (
                    <Image
                      src={src}
                      alt={p.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="object-cover"
                      priority={false}
                    />
                  );
                })()}
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-tight">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
              </div>
            </div>
          ))}
        </div>
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
