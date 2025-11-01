import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";

export const metadata: Metadata = {
  title: "Equipment | cgmodeltek",
  description:
    "5-axis CNC equipment at CG Model Tek: Cincinnati U5, Mazak I-1050T, Mazak 730-5X, VCU 400-5X, I-700. Aerospace-grade precision and repeatability.",
};

const MACHINES = [
  {
    name: "Cincinnati U5",
    travel: "100” X 156” X 40”",
    blurb:
      "Massive working envelope ideal for large-scale components, precision fixtures, and model assemblies requiring tight tolerances over extended lengths.",
    image: "/Equipment/Cincinnati U5_ 100_x_156_x_40.png",
  },
  {
    name: "Mazak I-1050T",
    travel: "47” X 54” X 35”",
    blurb:
      "Powerful and versatile for mid-size aerospace parts, ensuring high-speed, high-accuracy contouring in aluminum and titanium alloys.",
    image: "/Equipment/Mazak_I-1050T_47_x_54_x_35.png",
  },
  {
    name: "Mazak 730-5X",
    travel: "33” X 29” X 22”",
    blurb:
      "Compact precision for detailed geometry, tooling, and aerodynamic surface finishing.",
    image: "/Equipment/Mazak_730-5X_33_x_29_x_22.png",
  },
  {
    name: "Mazak VCU 400-5X",
    travel: "20” X 16” X 20”",
    blurb:
      "Ideal for small-format components, prototype runs, and tight-tolerance finishing operations.",
    image: "/Equipment/Mazak_VCU_400-5X_20_x_16_x_20.jpeg",
  },
  {
    name: "Mazak I-700",
    travel: "24” X 43” X 23”",
    blurb:
      "Delivers efficient 5-axis machining with exceptional surface finish and repeatability, optimized for complex aerospace shapes.",
    image: "/Equipment/Mazak_i-700_24_x_43_x_23.png",
  },
];

export default function Page() {
  const encodeFilename = (p: string) => {
    try {
      if (!p) return p;
      const parts = p.split("/");
      const file = parts.pop() as string;
      return `${parts.join("/")}/${encodeURIComponent(file)}`;
    } catch {
      return p;
    }
  };
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        className="mb-6"
        segments={[
          { href: "/", label: "Home" },
          { href: "/equipment", label: "Equipment" },
        ]}
      />

      <header className="max-w-4xl">
        <h1 className="headline-1">5-Axis CNC Milling Machines</h1>
        <p className="mt-4 text-muted-foreground">
          Precision. Flexibility. Aerospace-Grade Results. At CG Model Tek, our multi-axis machining
          center is designed for absolute precision and repeatability. Using state-of-the-art Mazak and
          Cincinnati 5-Axis CNC systems, we produce intricate wind-tunnel models, structural components,
          and aerodynamic test articles that meet the most demanding aerospace standards.
        </p>
      </header>
      {/* SEO-optimized overview section */}
      <section className="mt-8 max-w-4xl">
        <h2 className="headline-3">Precision Machining for Aerospace Innovation</h2>
        <p className="mt-3 text-muted-foreground">
          At CG Model Tek, our advanced 5-Axis CNC milling machines deliver aerospace-grade precision and flexibility. Using
          industry-leading Mazak and Cincinnati systems, we produce wind-tunnel models, aerodynamic test components, and
          flight-ready prototypes that push the boundaries of design and performance.
        </p>
        <p className="mt-3 text-muted-foreground">
          Our multi-axis machining capability allows simultaneous movement across five independent axes, enabling
          ultra-complex contours and geometries to be machined in a single setup. This eliminates repositioning errors and
          ensures the tightest possible tolerances for high-speed aerodynamic testing and structural validation.
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Equipment & Specifications</h3>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li>
                <div className="font-medium text-foreground">Cincinnati U5</div>
                <div>Work Envelope: 100” × 156” × 40”</div>
                <div>Designed for large-scale aerospace assemblies and full wind-tunnel model fabrication. Ideal for maintaining accuracy across long spans and heavy components.</div>
              </li>
              <li>
                <div className="font-medium text-foreground">Mazak I-1050T</div>
                <div>Work Envelope: 47” × 54” × 35”</div>
                <div>Powerful 5-axis performance for medium-sized structures and aerodynamic surfaces requiring simultaneous precision cutting.</div>
              </li>
              <li>
                <div className="font-medium text-foreground">Mazak 730-5X</div>
                <div>Work Envelope: 33” × 29” × 22”</div>
                <div>Compact, high-speed machining for detailed components, tooling, and complex surface features.</div>
              </li>
              <li>
                <div className="font-medium text-foreground">Mazak VCU 400-5X</div>
                <div>Work Envelope: 20” × 16” × 20”</div>
                <div>Ideal for small components and rapid prototyping with exceptional surface finish quality.</div>
              </li>
              <li>
                <div className="font-medium text-foreground">Mazak I-700</div>
                <div>Work Envelope: 24” × 43” × 23”</div>
                <div>Versatile platform balancing speed, precision, and reliability for advanced aerospace part manufacturing.</div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Core Advantages</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>True simultaneous 5-Axis motion for complex, multi-surface geometries</li>
              <li>Seamless CAD/CAM integration with direct digital workflow</li>
              <li>High-speed spindles and advanced toolpath optimization</li>
              <li>Repeatable micron-level accuracy for mission-critical components</li>
              <li>Expertise in aluminum, titanium, Inconel, and composite machining</li>
            </ul>
            <h3 className="mt-6 text-xl font-semibold">Applications</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Wind-tunnel model fabrication</li>
              <li>Prototype airframe and engine components</li>
              <li>Aerodynamic surface development</li>
              <li>Structural test fixtures and tooling</li>
              <li>Advanced R&amp;D support for aerospace programs</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-muted-foreground">
          <span className="font-medium text-foreground">Precision. Innovation. Excellence.</span> Every component we produce reflects CG Model Tek’s commitment to technical mastery and meticulous attention to detail — transforming complex aerospace concepts into precise, tangible results.
        </p>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {MACHINES.map((m) => {
          const img = encodeFilename(m.image);
          return (
          <a key={m.name} href={img} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border bg-card">
            <div className="relative aspect-[16/10] w-full bg-muted/40">
              {m.image && (
                <Image
                  src={img}
                  alt={m.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  priority={false}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 w-full p-4 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <span className="rounded bg-white/15 px-2 py-0.5 text-xs">{m.travel}</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground">{m.blurb}</p>
            </div>
          </a>
        );})}
      </section>

      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <h2 className="headline-3">Process Highlights</h2>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
          <li>True simultaneous 5-Axis machining</li>
          <li>Advanced CAD/CAM integration for digital-to-physical fidelity</li>
          <li>High-speed spindles with micron-level accuracy</li>
          <li>Adaptive toolpath optimization to minimize cycle times</li>
          <li>Material versatility: Aluminum, titanium, Inconel, composites</li>
        </ul>
        <div className="mt-6 text-right">
          <Link href="/rfq" className="rounded-md bg-primary px-4 py-2 text-primary-foreground">
            Request a Quote
          </Link>
        </div>
      </section>

      <StickyQuoteButton />
    </div>
  );
}
