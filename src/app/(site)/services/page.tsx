import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Hero } from "@/components/sections/Hero";
import { Accordion } from "@/components/ui/accordion";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services | cgmodeltek",
  description: "Explore cgmodeltek services: milling, turning, multi-axis, prototyping, production, finishing.",
};

export default function Page() {
  const featured = {
    title: "Precision CNC Machining",
    slug: "precision-cnc-machining",
    blurb:
      "End-to-end precision machining for aerospace models and production components.",
    imageSrc: "/images/services/featured_cnc.jpg",
  };

  const services = [
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
      blurb: "Cutting-edge precision. Mitsubishi 4-Axis Wire EDM for complex contours, fine details, and tight-tolerance aerospace components.",
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
  ];

  return (
    <div className="container mx-auto px-0 pb-12">
      <Hero
        className="mb-8"
        title="Services"
        subtitle="Delivering end-to-end aerospace design, simulation, and modeling solutions — built on precision engineering, innovation, and technical mastery."
        titleClassName="font-sans font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl"
        overlayClassName="hidden"
        topBadge="Services"
        contentPosition="bottom"
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

      {/* Featured + Additional Services */}
      <section className="mt-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Featured Service */}
          <Link
            href={`#${featured.slug}`}
            className="group relative overflow-hidden rounded-2xl border bg-card shadow-sm lg:col-span-2"
          >
            <div className="relative h-[280px] sm:h-[360px]">
              <Image
                src={featured.imageSrc}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  Featured Service
                </div>
                <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white drop-shadow">
                  {featured.title}
                </h3>
                <p className="mt-1 text-white/90 drop-shadow-sm">{featured.blurb}</p>
              </div>
            </div>
          </Link>

          {/* Additional Services */}
          <div className="rounded-2xl border bg-card p-4">
            <h4 className="mb-3 text-lg font-semibold">Additional Services</h4>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <Link key={s.slug} href={`#${s.slug}`} className="group flex items-center gap-3 rounded-lg p-2 hover:bg-muted">
                  <div className="relative h-12 w-12 overflow-hidden rounded-md">
                    <Image src={s.imageSrc} alt={s.title} fill sizes="64px" className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium leading-tight group-hover:underline">{s.title}</div>
                    <div className="text-xs text-muted-foreground line-clamp-2">{s.blurb}</div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-3 text-right text-sm">
              Interested in a quote? <Link href="/rfq" className="text-primary underline">Get in touch</Link>.
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Have a model ready?</h3>
            <p className="text-sm text-muted-foreground">Share your part and required quantities.</p>
          </div>
          <Link href="/rfq" className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground">
            Request a Quote
          </Link>
        </div>
      </section>

      <section className="mt-12 space-y-10">
        <div id={featured.slug} className="scroll-mt-24 rounded-xl border p-5">
          <h3 className="headline-3">{featured.title}</h3>
          <p className="mt-2 text-muted-foreground">{featured.blurb}</p>
        </div>
        {services.map((s) => (
          <div key={s.slug} id={s.slug} className="scroll-mt-24 rounded-xl border p-5">
            <h4 className="text-xl font-semibold">{s.title}</h4>
            <p className="mt-2 text-muted-foreground">{s.blurb}</p>
          </div>
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
      <StickyQuoteButton />
    </div>
  );
}
