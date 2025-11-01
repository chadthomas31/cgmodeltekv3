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
  {
    title: "Wire EDM",
    slug: "wire-edm",
    blurb: "Fine-feature cutting with exceptional edge quality.",
    imageSrc: "/images/services/wire_edm.jpg",
  },
  {
    title: "CNC Die-Sink EDM",
    slug: "cnc-die-sink-edm",
    blurb:
      "Electrical precision at its finest. Our 4-Axis EDM machines deliver unmatched accuracy for complex cavities, molds, and fine-detail components.",
    imageSrc: "/images/services/wire_edm.jpg",
  },
  {
    title: "5 Axis Machining",
    slug: "5-axis-machining",
    blurb: "Simultaneous multi-axis for reduced setups and superior surface finish.",
    imageSrc: "/images/services/5_axis.jpg",
  },
  {
    title: "Multi Axis Machining",
    slug: "multi-axis-machining",
    blurb: "Complex parts, consolidated operations, repeatable results.",
    imageSrc: "/images/services/multi_axis.jpg",
  },
  {
    title: "Aluminum CNC Machining",
    slug: "aluminum-cnc-machining",
    blurb: "Rapid, precise aluminum prototypes and production runs.",
    imageSrc: "/images/services/aluminum_cnc.jpg",
  },
  {
    title: "Stainless Steel Machining",
    slug: "stainless-steel-machining",
    blurb: "Durable, corrosion-resistant parts for demanding environments.",
    imageSrc: "/images/services/stainless.jpg",
  },
  {
    title: "Prototype Machining",
    slug: "prototype-machining",
    blurb: "Fast-turn prototypes that accelerate design validation.",
    imageSrc: "/images/services/prototype.jpg",
  },
  {
    title: "Value Added",
    slug: "value-added",
    blurb: "Assembly, finishing, and inspection to ship-ready state.",
    imageSrc: "/images/services/value_added.jpg",
  },
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
    openGraph: {
      title: `${svc.title} | CG Model Tek`,
      description: svc.blurb,
      images: [
        {
          url: svc.imageSrc,
          width: 1200,
          height: 630,
          alt: svc.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${svc.title} | CG Model Tek`,
      description: svc.blurb,
      images: [svc.imageSrc],
    },
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
            {svc.slug === "wire-edm" ? (
              <>
                <h2 className="headline-2">CNC Wire EDM Machines — 4-Axis</h2>
                <p className="mt-2 text-muted-foreground">
                  Unrivaled Precision for Complex Contours. At CG Model Tek, our Mitsubishi FA20S Wire EDM system provides
                  unmatched control for cutting intricate geometries and fine features in conductive materials. Using a
                  thin, electrically charged wire and dielectric fluid, this 4-Axis technology erodes metal with extraordinary
                  accuracy and surface finish — ideal for aerospace tooling, fixtures, and high-precision inserts.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Machine Specifications</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>
                        <span className="font-medium text-foreground">Mitsubishi FA20S</span>
                      </li>
                      <li>Work Envelope: 13” × 19” × 11.5”</li>
                      <li>Renowned for reliability, accuracy, and fine wire control, with 4-axis capability for precise taper cutting and intricate geometries.</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Capabilities & Features</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• True 4-Axis simultaneous control for complex tapers and contours</li>
                      <li>• Sub-micron cutting accuracy for fine-detail components</li>
                      <li>• Superior surface finishes requiring minimal post-processing</li>
                      <li>• Automated wire threading for uninterrupted operation</li>
                      <li>• CAD/CAM integration for digital part precision</li>
                      <li>• Conductive materials: Titanium, Inconel, Aluminum, Steel</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Applications</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Precision tooling and fixtures</li>
                      <li>• Tight-tolerance inserts and molds</li>
                      <li>• Fine-feature prototypes and test articles</li>
                      <li>• Electrical or structural aerospace components</li>
                      <li>• High-strength alloy machining</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-muted-foreground">
                  <span className="font-medium text-foreground">The CG Model Tek Difference:</span> Wire EDM allows us to cut
                  what traditional tools can’t — achieving razor-sharp definition and consistent precision across every edge,
                  hole, and contour.
                </p>
              </>
            ) : svc.slug === "cnc-die-sink-edm" ? (
              <>
                <h2 className="headline-2">CNC Die-Sink EDM Machines — 4-Axis</h2>
                <p className="mt-2 text-muted-foreground">
                  Precision Where Metal Meets Electricity. At CG Model Tek, our 4-Axis Die-Sink EDM (Electrical Discharge
                  Machining) systems allow us to produce intricate geometries, sharp internal corners, and ultra-fine
                  surface finishes unattainable with traditional cutting tools. Using controlled electrical discharges, we
                  shape conductive materials with extreme accuracy — ideal for aerospace tooling, wind-tunnel molds, and
                  precision inserts.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Capabilities & Features</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• 4-Axis simultaneous motion for complex cavity shapes</li>
                      <li>• Ultra-fine electrode control for precision edge definition</li>
                      <li>• Mirror-quality surface finishes ideal for aerodynamic testing</li>
                      <li>• Micron-level accuracy for intricate detail work</li>
                      <li>• Automated tool changing for multi-stage EDM operations</li>
                      <li>• Graphite and copper electrode machining</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Applications</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Precision molds and tooling for composite layups</li>
                      <li>• Tight-tolerance cavities and inserts</li>
                      <li>• Aerodynamic surface detailing</li>
                      <li>• Conductive part micro-machining</li>
                      <li>• Complex internal geometries and thin-wall features</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-muted-foreground">
                  <span className="font-medium text-foreground">Why EDM?</span> EDM technology allows CG Model Tek to
                  machine parts that traditional cutting tools cannot — delivering perfect edges, fine features, and
                  consistent surface finishes for mission-critical aerospace components.
                </p>
              </>
            ) : (
              <>
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
              </>
            )}
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
