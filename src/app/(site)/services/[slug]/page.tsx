import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Hero } from "@/components/sections/Hero";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";
import Link from "next/link";

const FEATURED = {
  title: "Precision CNC Machining",
  slug: "precision-cnc-machining",
  blurb: "End-to-end precision machining for aerospace models and production components.",
  imageSrc: "/images/services/featured_cnc.jpg",
};

const SERVICES = [
  {
    title: "CNC Milling",
    slug: "cnc-milling",
    blurb: "High-accuracy 3–5 axis milling for complex geometries.",
    imageSrc: "/images/services/cnc_milling.jpg",
  },
  {
    title: "CNC Turning",
    slug: "cnc-turning",
    blurb: "Tight-tolerance turning for shafts, housings, and custom fittings.",
    imageSrc: "/images/services/cnc_turning.jpg",
  },
  { title: "Wire EDM", slug: "wire-edm", blurb: "Fine-feature cutting with exceptional edge quality.", imageSrc: "/images/services/wire_edm.jpg" },
  { title: "5 Axis Machining", slug: "5-axis-machining", blurb: "Simultaneous multi-axis for reduced setups and superior surface finish.", imageSrc: "/images/services/5_axis.jpg" },
  { title: "Multi Axis Machining", slug: "multi-axis-machining", blurb: "Complex parts, consolidated operations, repeatable results.", imageSrc: "/images/services/multi_axis.jpg" },
  { title: "Aluminum CNC Machining", slug: "aluminum-cnc-machining", blurb: "Rapid, precise aluminum prototypes and production runs.", imageSrc: "/images/services/aluminum_cnc.jpg" },
  { title: "Stainless Steel Machining", slug: "stainless-steel-machining", blurb: "Durable, corrosion-resistant parts for demanding environments.", imageSrc: "/images/services/stainless.jpg" },
  { title: "Prototype Machining", slug: "prototype-machining", blurb: "Fast-turn prototypes that accelerate design validation.", imageSrc: "/images/services/prototype.jpg" },
  { title: "Value Added", slug: "value-added", blurb: "Assembly, finishing, and inspection to ship-ready state.", imageSrc: "/images/services/value_added.jpg" },
] as const;

const ALL = [FEATURED, ...SERVICES];

export async function generateStaticParams() {
  return ALL.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const svc = ALL.find((s) => s.slug === params.slug);
  if (!svc) return {};
  return {
    title: `${svc.title} | Services | cgmodeltek`,
    description: svc.blurb,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const svc = ALL.find((s) => s.slug === params.slug);
  if (!svc) return notFound();

  return (
    <div className="container mx-auto px-0 pb-12">
      <Hero
        className="mb-8"
        title={svc.title}
        subtitle={svc.blurb}
        titleClassName="font-sans font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl"
        overlayClassName="hidden"
        image={{ src: svc.imageSrc, alt: svc.title }}
      />
      <div className="px-4">
        <Breadcrumbs
          className="mb-6"
          segments={[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: `/services/${svc.slug}`, label: svc.title },
          ]}
        />

        <section className="mt-6 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="headline-2">Overview</h2>
            <p className="mt-2 text-muted-foreground">
              {svc.blurb} We combine expert programming, robust fixturing, and in-process inspection to deliver
              repeatable results. Typical deliverables include process plans, inspection records, and finishing to
              specification.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-semibold">Capabilities</h3>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Tight-tolerance aerospace work</li>
                  <li>• Prototype to short-run production</li>
                  <li>• 3–5 axis programming (Siemens NX)</li>
                  <li>• Material certifications and traceability</li>
                </ul>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-semibold">Materials</h3>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Aluminum, stainless steels, tool steels</li>
                  <li>• Superalloys (on review)</li>
                  <li>• Engineering plastics</li>
                </ul>
              </div>
            </div>
          </div>
          <aside className="space-y-4">
            <div className="rounded-lg border p-4">
              <h4 className="text-base font-semibold">Request a Quote</h4>
              <p className="mt-1 text-sm text-muted-foreground">Share your CAD and quantities. We’ll review same-day.</p>
              <Link href="/contact" className="mt-3 inline-block rounded-md bg-primary px-4 py-2 text-primary-foreground">
                Get a quote
              </Link>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="text-base font-semibold">Related Services</h4>
              <ul className="mt-2 space-y-2 text-sm">
                {SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 4).map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-primary hover:underline">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </div>
      <StickyQuoteButton />
    </div>
  );
}
