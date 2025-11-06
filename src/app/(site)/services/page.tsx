import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Hero } from "@/components/sections/Hero";
import { Accordion } from "@/components/ui/accordion";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services | cgmodeltek",
  description:
    "Explore cgmodeltek services: milling, turning, multi-axis, prototyping, production, finishing.",
};

export default function Page() {
  const featured = {
    title: "Precision CNC Machining",
    slug: "precision-cnc-machining",
    blurb: "End-to-end precision machining for aerospace models and production components.",
    imageSrc: "/images/services/featured_cnc.jpg",
  };

  const services = [
    {
      title: "CNC Milling",
      slug: "cnc-milling",
      blurb: "High-accuracy 3–5 axis milling for complex geometries.",
      imageSrc: "/Equipment/Haas_VF-9_84_x_40_x_30.jpeg",
    },
    {
      title: "CNC Turning",
      slug: "cnc-turning",
      blurb: "Tight-tolerance turning for shafts, housings, and custom fittings.",
      imageSrc: "/Equipment/2-Axis/Mazak_QTN_450_20_Dia._x_80.jpeg",
    },
    {
      title: "Wire EDM",
      slug: "wire-edm",
      blurb:
        "Cutting-edge precision. Mitsubishi 4-Axis Wire EDM for complex contours, fine details, and tight-tolerance aerospace components.",
      imageSrc: "/Equipment/4 Axis/Mitsubishi_FA20S_13_x_19_x_11.5.jpeg",
    },
    {
      title: "CNC Die-Sink EDM",
      slug: "cnc-die-sink-edm",
      blurb:
        "Electrical precision at its finest. Our 4-Axis EDM machines deliver unmatched accuracy for complex cavities, molds, and fine-detail components.",
      imageSrc: "/Equipment/4 Axis/Mitsubishi_DWC90HA_10_x_12_x_6.5.jpeg",
    },
    {
      title: "5 Axis Machining",
      slug: "5-axis-machining",
      blurb: "Simultaneous multi-axis for reduced setups and superior surface finish.",
      imageSrc: "/Equipment/Mazak_730-5X_33_x_29_x_22.png",
    },
    {
      title: "Multi Axis Machining",
      slug: "multi-axis-machining",
      blurb: "Complex parts, consolidated operations, repeatable results.",
      imageSrc: "/Equipment/Mazak_VCU_400-5X_20_x_16_x_20.jpeg",
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
        image={{
          src: "/images/services-hero_v2.png",
          alt: "Aerospace schematic interface with aircraft and robotic arm",
        }}
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
              href={`/services/${featured.slug}`}
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
                  {/* JSON-LD FAQ schema */}
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                          {
                            "@type": "Question",
                            name: "What tolerances can you hold?",
                            acceptedAnswer: {
                              "@type": "Answer",
                              text: "Typical ±0.0005 in; tighter possible based on geometry and setup.",
                            },
                          },
                          {
                            "@type": "Question",
                            name: "What materials do you machine?",
                            acceptedAnswer: {
                              "@type": "Answer",
                              text: "Aluminum, steels, stainless, titanium, copper alloys, and engineering plastics.",
                            },
                          },
                          {
                            "@type": "Question",
                            name: "What file formats do you accept?",
                            acceptedAnswer: {
                              "@type": "Answer",
                              text: "STEP, Parasolid, IGES, and 2D drawings (PDF/DWG/DXF).",
                            },
                          },
                          {
                            "@type": "Question",
                            name: "How fast can you deliver?",
                            acceptedAnswer: {
                              "@type": "Answer",
                              text: "Prototypes in days; production in weeks depending on volume and process.",
                            },
                          },
                          {
                            "@type": "Question",
                            name: "Do you provide DFM feedback?",
                            acceptedAnswer: {
                              "@type": "Answer",
                              text: "Yes. We review critical features, tolerances, and fixturing early in the process.",
                            },
                          },
                        ],
                      }),
                    }}
                  />
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
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-3 rounded-lg p-2 hover:bg-muted"
                  >
                    <div className="relative h-12 w-12 overflow-hidden rounded-md">
                      <Image
                        src={s.imageSrc}
                        alt={s.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium leading-tight group-hover:underline">
                        {s.title}
                      </div>
                      <div className="text-xs text-muted-foreground line-clamp-2">{s.blurb}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-3 text-right text-sm">
                Interested in a quote?{" "}
                <Link href="/rfq" className="text-primary underline">
                  Get in touch
                </Link>
                .
              </div>
            </div>
          </div>
        </section>

        {/* Educational: What is Precision CNC Machining? */}
        <section className="mt-12 rounded-xl border p-5">
          <h2 className="headline-3">What is Precision CNC Machining?</h2>
          <p className="mt-3 text-muted-foreground">
            CNC (Computer Numerical Control) machining uses computer-guided toolpaths to cut parts
            from material blocks with high repeatability. Precision CNC machining focuses on
            achieving tight tolerances, excellent surface finish, and consistent dimensional
            accuracy — ideal for aerospace components, wind tunnel models, and tooling.
          </p>
          <div className="mt-3 text-sm">
            Learn more about our services:
            <div className="mt-2 flex flex-wrap gap-2">
              <Link href="/services/precision-cnc-machining" className="underline">
                Precision CNC Machining
              </Link>
              <span>·</span>
              <Link href="/services/cnc-milling" className="underline">
                CNC Milling
              </Link>
              <span>·</span>
              <Link href="/services/cnc-turning" className="underline">
                CNC Turning
              </Link>
              <span>·</span>
              <Link href="/services/wire-edm" className="underline">
                Wire EDM
              </Link>
              <span>·</span>
              <Link href="/services/5-axis-machining" className="underline">
                5 Axis Machining
              </Link>
              <span>·</span>
              <Link href="/services/multi-axis-machining" className="underline">
                Multi Axis Machining
              </Link>
            </div>
          </div>
          <div className="mt-4 text-right">
            <Link
              href="/rfq"
              className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground"
            >
              Request a Quote
            </Link>
          </div>
        </section>

        {/* Process overview */}
        <section className="mt-10 rounded-xl border p-5">
          <h2 className="headline-3">Our Process</h2>
          <ol className="mt-3 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
            <li>
              <span className="font-medium text-foreground">1) RFQ & DFM</span> — Share
              CAD/drawings; we provide design-for-manufacturing feedback.
            </li>
            <li>
              <span className="font-medium text-foreground">2) Programming</span> — Toolpaths
              created and simulated for accuracy and finish.
            </li>
            <li>
              <span className="font-medium text-foreground">3) Machining</span> — Multi-axis
              strategies minimize setups and variation.
            </li>
            <li>
              <span className="font-medium text-foreground">4) Inspection</span> — In‑process checks
              and final verification per requirements.
            </li>
            <li>
              <span className="font-medium text-foreground">5) Finishing</span> — Deburr, surface
              treatments, and value‑add as specified.
            </li>
            <li>
              <span className="font-medium text-foreground">6) Pack & Ship</span> — Protected
              packaging and documentation.
            </li>
          </ol>
          <div className="mt-4 text-right">
            <Link
              href="/rfq"
              className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground"
            >
              Start Your RFQ
            </Link>
          </div>
        </section>

        {/* Materials and tolerances */}
        <section className="mt-10 rounded-xl border p-5">
          <h2 className="headline-3">Materials and Tolerances</h2>
          <p className="mt-3 text-muted-foreground">
            Typical machining tolerances are ±0.0005 in (±0.013 mm) with tighter tolerances
            achievable on request depending on geometry and setup. We commonly machine aluminum
            (2xxx/6xxx/7xxx), steels (including stainless), titanium, copper alloys, and engineering
            plastics.
          </p>
          <div className="mt-4 text-right">
            <Link
              href="/rfq"
              className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground"
            >
              Discuss Your Spec
            </Link>
          </div>
        </section>

        {/* Lead times */}
        <section className="mt-10 rounded-xl border p-5">
          <h2 className="headline-3">Lead Times</h2>
          <p className="mt-3 text-muted-foreground">
            Prototype parts can ship in days depending on complexity and material availability.
            Production timelines vary by volume and process. We’ll propose schedule options aligned
            to your milestones.
          </p>
        </section>

        {/* Quality & certifications (placeholder for Chris inputs) */}
        <section className="mt-10 rounded-xl border p-5">
          <h2 className="headline-3">Quality and Certifications</h2>
          <p className="mt-3 text-muted-foreground">
            In‑process inspection and final verification ensure conformance. We will update this
            section with specific certifications and equipment details provided by leadership.
          </p>
        </section>

        <section className="mt-12 rounded-lg border bg-primary/5 p-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="headline-3">Have a model ready?</h3>
              <p className="text-sm text-muted-foreground">
                Share your part and required quantities.
              </p>
            </div>
            <Link
              href="/rfq"
              className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground"
            >
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
                {
                  id: "tol",
                  title: "What tolerances can you hold?",
                  content: "Typical ±0.0005 in; tighter possible based on geometry and setup.",
                },
                {
                  id: "materials",
                  title: "What materials do you machine?",
                  content:
                    "Aluminum, steels, stainless, titanium, copper alloys, and engineering plastics.",
                },
                {
                  id: "files",
                  title: "What file formats do you accept?",
                  content: "STEP, Parasolid, IGES, and 2D drawings (PDF/DWG/DXF).",
                },
                {
                  id: "lead",
                  title: "How fast can you deliver?",
                  content:
                    "Prototypes in days; production in weeks depending on volume and process.",
                },
                {
                  id: "dfm",
                  title: "Do you provide DFM feedback?",
                  content:
                    "Yes. We review critical features, tolerances, and fixturing early in the process.",
                },
              ]}
            />
          </div>
        </section>
      </div>
      <StickyQuoteButton />
    </div>
  );
}
