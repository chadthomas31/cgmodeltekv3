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
    blurb: "Fine-feature cutting with exceptional edge quality.",
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
] as const;

const ALL = [FEATURED, ...SERVICES];

export async function generateStaticParams() {
  return ALL.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
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
            {svc.slug === "precision-cnc-machining" ? (
              <>
                <h2 className="headline-2">Precision CNC Machining</h2>
                <p className="mt-2 text-muted-foreground">
                  End-to-end precision machining for aerospace models and production components. At
                  CG Model Tek, we deliver the highest standards of accuracy, repeatability, and
                  surface finish for mission-critical aerospace parts, wind tunnel models, and
                  complex assemblies. From initial CAD review to final inspection, our process
                  ensures every dimension meets specification.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Our Approach</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Collaborative DFM (Design for Manufacturability) review</li>
                      <li>• Advanced CAD/CAM programming using Siemens NX</li>
                      <li>• Multi-axis machining strategies to minimize setups</li>
                      <li>• In-process dimensional verification</li>
                      <li>• Full material traceability and certifications</li>
                      <li>• Final inspection with CMM and optical systems</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Tolerance Standards</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Standard tolerances: ±0.005&quot; (±0.127 mm)</li>
                      <li>• Precision tolerances: ±0.0005&quot; (±0.013 mm)</li>
                      <li>• Ultra-precision: Tighter on request with proper setup</li>
                      <li>• Surface finish: Ra 32 to Ra 8 or better</li>
                      <li>• Geometric tolerancing (GD&amp;T) expertise</li>
                      <li>• AS9100 quality management practices</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Capabilities</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• 3-axis, 4-axis, and 5-axis CNC machining</li>
                      <li>• CNC turning and mill-turn operations</li>
                      <li>• Wire EDM and die-sink EDM</li>
                      <li>• Complex assemblies and fixtures</li>
                      <li>• Prototype through short-run production (1–500 parts)</li>
                      <li>• Finishing, coating coordination, and assembly</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Industries Served</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Aerospace &amp; Defense</li>
                      <li>• Wind Tunnel Testing (NASA, AEDC, university labs)</li>
                      <li>• Research &amp; Development</li>
                      <li>• Medical Device Prototyping</li>
                      <li>• Automotive Testing &amp; Validation</li>
                      <li>• Industrial Tooling &amp; Fixtures</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-muted-foreground">
                  <span className="font-medium text-foreground">Why CG Model Tek?</span> With
                  decades of aerospace machining experience, we understand the critical nature of
                  your components. Every part receives the attention, precision, and documentation
                  it deserves — from first article to final delivery.
                </p>
              </>
            ) : svc.slug === "cnc-milling" ? (
              <>
                <h2 className="headline-2">CNC Milling Services</h2>
                <p className="mt-2 text-muted-foreground">
                  High-accuracy 3–5 axis milling for complex geometries. CG Model Tek specializes in
                  precision milling operations that transform solid material into intricate
                  aerospace components, tooling, and prototypes. Our advanced CNC milling centers
                  deliver exceptional dimensional accuracy, surface finish, and repeatability across
                  a wide range of materials and geometries.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Milling Capabilities</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• 3-axis vertical and horizontal machining centers</li>
                      <li>• 4-axis indexing and continuous milling</li>
                      <li>• 5-axis simultaneous contouring</li>
                      <li>• High-speed machining for aluminum and soft materials</li>
                      <li>• Heavy-duty roughing and precision finishing</li>
                      <li>• Micro-milling for fine features and thin walls</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Machine Specifications</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Work envelopes from 20&quot; to 60&quot; depending on machine</li>
                      <li>• Spindle speeds up to 15,000 RPM</li>
                      <li>• Tool libraries with 40+ automatic tool changers</li>
                      <li>• Live tooling for mill-turn operations</li>
                      <li>• Probing systems for in-process verification</li>
                      <li>• CAM programming in Siemens NX</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Common Applications</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Aerospace structural components</li>
                      <li>• Wind tunnel model bodies and fairings</li>
                      <li>• Complex pocketed and ribbed parts</li>
                      <li>• Precision mounting fixtures and tooling</li>
                      <li>• Brackets, housings, and adapters</li>
                      <li>• Rapid prototypes from CAD models</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Materials We Mill</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Aluminum alloys (2xxx, 6xxx, 7xxx series)</li>
                      <li>• Stainless steels (300, 400, 17-4 PH)</li>
                      <li>• Tool steels and alloy steels</li>
                      <li>• Titanium (Grade 2, Grade 5)</li>
                      <li>• Copper and brass alloys</li>
                      <li>• Engineering plastics (PEEK, Ultem, Delrin)</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-muted-foreground">
                  <span className="font-medium text-foreground">Precision Matters:</span> Our
                  milling operations maintain typical tolerances of ±0.0005&quot; with proper
                  fixturing and setup. Combined with our CAM expertise, we optimize toolpaths for
                  cycle time, tool life, and surface finish — delivering parts right the first time.
                </p>
              </>
            ) : svc.slug === "cnc-turning" ? (
              <>
                <h2 className="headline-2">CNC Turning Services</h2>
                <p className="mt-2 text-muted-foreground">
                  Tight-tolerance turning for shafts, housings, and custom fittings. At CG Model
                  Tek, our precision CNC lathes and turning centers produce cylindrical components
                  with exceptional roundness, concentricity, and surface finish. From simple shafts
                  to complex multi-diameter parts with internal features, we deliver turning
                  solutions for aerospace, tooling, and prototype applications.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Turning Capabilities</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• 2-axis CNC lathe operations</li>
                      <li>• Live tooling for milling, drilling, and tapping on turned parts</li>
                      <li>• C-axis positioning for precise angular features</li>
                      <li>• Sub-spindle for complete parts in single setup</li>
                      <li>• Swiss-style turning for small, high-precision components</li>
                      <li>• Bar feeding for production runs</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Precision &amp; Specifications</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Diameter capacity: 0.125&quot; to 12&quot;</li>
                      <li>• Length capacity: Up to 24&quot; between centers</li>
                      <li>• Roundness and concentricity: ±0.0002&quot; TIR</li>
                      <li>• Surface finish: Ra 32 to Ra 8 or better</li>
                      <li>• Thread cutting: UN, UNF, metric, custom pitches</li>
                      <li>• Tight tolerance turning: ±0.0005&quot; typical</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Common Turned Parts</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Precision shafts and spindles</li>
                      <li>• Bushings and sleeves</li>
                      <li>• Threaded fasteners and adapters</li>
                      <li>• Cylindrical housings and fittings</li>
                      <li>• Nozzles and orifice components</li>
                      <li>• Custom pins, studs, and standoffs</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Materials</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Aluminum alloys for lightweight assemblies</li>
                      <li>• Stainless steels for corrosion resistance</li>
                      <li>• Carbon and alloy steels for structural strength</li>
                      <li>• Brass and copper for electrical/thermal applications</li>
                      <li>• Titanium for aerospace-grade components</li>
                      <li>• Engineering plastics (Delrin, PEEK, Nylon)</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Why Choose Our Turning Services?
                  </span>{" "}
                  Precision turning requires attention to tool geometry, speeds, feeds, and
                  workholding. Our machinists program and set up each job to minimize runout and
                  maintain dimensional stability — ensuring your turned components meet print every
                  time.
                </p>
              </>
            ) : svc.slug === "5-axis-machining" ? (
              <>
                <h2 className="headline-2">5-Axis CNC Machining</h2>
                <p className="mt-2 text-muted-foreground">
                  Simultaneous multi-axis for reduced setups and superior surface finish. CG Model
                  Tek&apos;s 5-axis machining centers enable us to produce the most complex
                  aerospace geometries with continuous tool orientation and minimal repositioning.
                  By controlling all five axes simultaneously, we achieve unmatched surface quality,
                  tighter tolerances, and faster cycle times for your most demanding components.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">5-Axis Advantages</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Single-setup machining reduces handling errors</li>
                      <li>• Continuous surface machining eliminates witness lines</li>
                      <li>• Optimized tool engagement for better tool life</li>
                      <li>• Access to undercuts and complex internal features</li>
                      <li>• Reduced fixturing complexity and setup time</li>
                      <li>• Improved accuracy through minimal workpiece repositioning</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Machine Capabilities</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Simultaneous 5-axis contouring</li>
                      <li>• 3+2 positional (indexed) 5-axis</li>
                      <li>• Swivel-head and trunnion configurations</li>
                      <li>• High-speed spindles (15,000+ RPM)</li>
                      <li>• Advanced collision detection and simulation</li>
                      <li>• Integrated probing for setup verification</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Ideal Applications</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Aerospace turbine and impeller components</li>
                      <li>• Sculptured wind tunnel model surfaces</li>
                      <li>• Complex molds and forming dies</li>
                      <li>• Medical implants and prosthetics</li>
                      <li>• Manifolds with compound angles</li>
                      <li>• Organic contoured parts</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Programming Expertise</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Siemens NX CAM for advanced toolpath strategies</li>
                      <li>• Full machine and fixture simulation</li>
                      <li>• Optimized axis motion for smooth surface finish</li>
                      <li>• Collision avoidance and safe zone verification</li>
                      <li>• Post-processing tailored to machine kinematics</li>
                      <li>• Verification and G-code validation</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-muted-foreground">
                  <span className="font-medium text-foreground">The 5-Axis Advantage:</span> When
                  part complexity demands it, 5-axis machining delivers results that 3-axis simply
                  cannot match. From organic contours to multi-sided features, we leverage 5-axis
                  technology to reduce your lead times, improve quality, and eliminate secondary
                  operations.
                </p>
              </>
            ) : svc.slug === "multi-axis-machining" ? (
              <>
                <h2 className="headline-2">Multi-Axis CNC Machining</h2>
                <p className="mt-2 text-muted-foreground">
                  Complex parts, consolidated operations, repeatable results. Multi-axis machining
                  at CG Model Tek encompasses 4-axis, 5-axis, and mill-turn technologies that enable
                  us to complete intricate components in fewer setups. By combining rotation,
                  tilting, and live tooling capabilities, we machine parts with multiple faces,
                  compound angles, and complex features — all while maintaining tight tolerances and
                  dimensional integrity.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Multi-Axis Capabilities</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• 4-axis indexed and continuous rotary machining</li>
                      <li>• 5-axis simultaneous and 3+2 positional</li>
                      <li>• Mill-turn centers with live tooling</li>
                      <li>• Horizontal and vertical machining centers with rotary tables</li>
                      <li>• Tombstone and pallet systems for batch work</li>
                      <li>• Integrated probing and part inspection</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Key Benefits</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Reduced setup time and handling</li>
                      <li>• Improved dimensional accuracy from fewer operations</li>
                      <li>• Complex features machined without refixturing</li>
                      <li>• Shorter lead times through operation consolidation</li>
                      <li>• Enhanced surface continuity and finish</li>
                      <li>• Lower cost per part for complex geometries</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Common Applications</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Aerospace structural brackets and fittings</li>
                      <li>• Turbine components and impellers</li>
                      <li>• Multi-sided housings and enclosures</li>
                      <li>• Angled port and manifold blocks</li>
                      <li>• Complex fixtures and tooling assemblies</li>
                      <li>• Rotational symmetry parts with milled features</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Our Approach</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Strategic operation planning to minimize setups</li>
                      <li>• CAM simulation to verify clearances and collisions</li>
                      <li>• Custom workholding and fixture design</li>
                      <li>• In-process verification between operations</li>
                      <li>• Optimized tool selection and cutting strategies</li>
                      <li>• Full documentation and first article inspection</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-muted-foreground">
                  <span className="font-medium text-foreground">Complexity Simplified:</span>{" "}
                  Multi-axis machining transforms what would traditionally require multiple machines
                  and setups into a streamlined, single-setup operation. The result? Faster
                  turnaround, better accuracy, and lower total cost for your complex components.
                </p>
              </>
            ) : svc.slug === "aluminum-cnc-machining" ? (
              <>
                <h2 className="headline-2">Aluminum CNC Machining</h2>
                <p className="mt-2 text-muted-foreground">
                  Rapid, precise aluminum prototypes and production runs. Aluminum is the material
                  of choice for aerospace, automotive, and high-performance applications due to its
                  excellent strength-to-weight ratio, machinability, and thermal properties. At CG
                  Model Tek, we specialize in machining aluminum alloys with optimized speeds,
                  feeds, and tooling to deliver fast turnaround times without compromising
                  precision.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Aluminum Alloys We Machine</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• 6061-T6: General purpose, excellent weldability</li>
                      <li>• 7075-T6: High strength aerospace alloy</li>
                      <li>• 2024-T3/T4: Aerospace structural applications</li>
                      <li>• 6063-T5: Architectural and extrusion grade</li>
                      <li>• 5052-H32: Marine and corrosion-resistant</li>
                      <li>• MIC-6 / ATP-5: Cast tooling plate for stability</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Machining Advantages</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• High-speed machining for rapid material removal</li>
                      <li>• Excellent surface finish capabilities (Ra 16 or better)</li>
                      <li>• Tight tolerances achievable: ±0.0005&quot;</li>
                      <li>• Reduced tool wear compared to harder materials</li>
                      <li>• Faster cycle times = lower cost per part</li>
                      <li>• Lightweight parts ideal for weight-critical assemblies</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Common Aluminum Parts</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Aircraft structural components and brackets</li>
                      <li>• Wind tunnel model bodies and fairings</li>
                      <li>• Prototype enclosures and housings</li>
                      <li>• Heat sinks and thermal management components</li>
                      <li>• Aerospace fixtures and tooling</li>
                      <li>• Lightweight robotic and automation parts</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Finishing Options</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• As-machined (mill finish)</li>
                      <li>• Bead blasting for uniform matte finish</li>
                      <li>• Anodizing (Type II, Type III hard coat)</li>
                      <li>• Alodine / Chem-film (chromate conversion)</li>
                      <li>• Powder coating and wet painting</li>
                      <li>• Polishing for cosmetic or optical applications</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-muted-foreground">
                  <span className="font-medium text-foreground">Fast and Precise:</span>{" "}
                  Aluminum&apos;s machinability allows us to produce complex parts quickly without
                  sacrificing quality. Whether you need a single prototype or a short production
                  run, our aluminum machining expertise ensures you get precision parts on time and
                  on budget.
                </p>
              </>
            ) : svc.slug === "stainless-steel-machining" ? (
              <>
                <h2 className="headline-2">Stainless Steel Machining</h2>
                <p className="mt-2 text-muted-foreground">
                  Durable, corrosion-resistant parts for demanding environments. Stainless steel
                  offers exceptional strength, corrosion resistance, and temperature stability —
                  making it ideal for aerospace, medical, marine, and food-grade applications. At CG
                  Model Tek, we have the expertise, tooling, and machining strategies to efficiently
                  process stainless steel alloys while maintaining tight tolerances and excellent
                  surface finishes.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Stainless Alloys We Machine</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• 304/304L: Austenitic, excellent corrosion resistance</li>
                      <li>• 316/316L: Marine-grade, enhanced corrosion resistance</li>
                      <li>• 17-4 PH: Precipitation hardening, high strength</li>
                      <li>• 303: Free-machining austenitic stainless</li>
                      <li>• 410/416: Martensitic, heat-treatable</li>
                      <li>• 15-5 PH: Aerospace-grade precipitation hardening</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Machining Challenges &amp; Solutions</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Work hardening: Controlled feeds and sharp tooling</li>
                      <li>• Heat generation: Optimized coolant delivery systems</li>
                      <li>• Tool wear: Carbide and coated inserts for longevity</li>
                      <li>• Chip control: Proper chipbreaker geometry and feeds</li>
                      <li>• Surface finish: Precision grinding and honing available</li>
                      <li>• Tight tolerances: ±0.0005&quot; achievable with proper setup</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Common Applications</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Aerospace fasteners and structural fittings</li>
                      <li>• Medical device components and implants</li>
                      <li>• Marine hardware and fittings</li>
                      <li>• Food processing equipment parts</li>
                      <li>• Chemical processing components</li>
                      <li>• High-temperature housings and fixtures</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Why Stainless Steel?</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Superior corrosion and oxidation resistance</li>
                      <li>• High strength and impact resistance</li>
                      <li>• Maintains properties at elevated temperatures</li>
                      <li>• Biocompatible and non-reactive (medical-grade)</li>
                      <li>• Aesthetic appeal with polished finishes</li>
                      <li>• Long service life in harsh environments</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-muted-foreground">
                  <span className="font-medium text-foreground">Expertise Matters:</span> Machining
                  stainless steel requires specialized knowledge and proper techniques. Our team
                  understands the material behavior, selects appropriate tooling, and applies
                  optimized parameters to deliver precision stainless components that meet your
                  exact specifications.
                </p>
              </>
            ) : svc.slug === "prototype-machining" ? (
              <>
                <h2 className="headline-2">Prototype Machining Services</h2>
                <p className="mt-2 text-muted-foreground">
                  Fast-turn prototypes that accelerate design validation. At CG Model Tek, we
                  understand that speed matters in product development. Our prototype machining
                  services deliver functional, production-intent parts in days — not weeks —
                  allowing you to test, iterate, and refine your designs quickly. Whether you need a
                  single proof-of-concept or a small batch for testing, we&apos;re equipped to
                  support your development cycle.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Rapid Prototyping Capabilities</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Same-day quote turnaround on CAD uploads</li>
                      <li>• 3–5 day typical lead time for simple prototypes</li>
                      <li>• 1–2 week turnaround for complex multi-part assemblies</li>
                      <li>• On-demand DFM feedback and design optimization</li>
                      <li>• Flexible quantities: 1 to 50+ units</li>
                      <li>• Expedited service available for urgent projects</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Materials &amp; Processes</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Production-intent materials (aluminum, stainless, plastics)</li>
                      <li>• 3-axis, 4-axis, and 5-axis CNC milling</li>
                      <li>• CNC turning for cylindrical features</li>
                      <li>• Wire EDM for fine features and hard materials</li>
                      <li>• Surface finishing and assembly services</li>
                      <li>• Material certifications available upon request</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Prototype Use Cases</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Concept validation and proof-of-concept models</li>
                      <li>• Form, fit, and function testing</li>
                      <li>• Wind tunnel and aerodynamic test articles</li>
                      <li>• Design iteration and geometry refinement</li>
                      <li>• Pre-production pilot runs</li>
                      <li>• Trade show and presentation models</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Our Prototyping Process</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Upload CAD files (STEP, Parasolid, IGES)</li>
                      <li>• Receive DFM feedback and quote within 24 hours</li>
                      <li>• Approve and we begin programming immediately</li>
                      <li>• Machining with priority scheduling</li>
                      <li>• Inspection, finishing, and packaging</li>
                      <li>• Fast shipping with tracking</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-muted-foreground">
                  <span className="font-medium text-foreground">Accelerate Your Development:</span>{" "}
                  Don&apos;t let long lead times slow your innovation. Our prototype machining
                  services are designed to keep your projects moving forward with rapid turnaround,
                  production-quality parts, and expert manufacturing guidance every step of the way.
                </p>
              </>
            ) : svc.slug === "value-added" ? (
              <>
                <h2 className="headline-2">Value-Added Services</h2>
                <p className="mt-2 text-muted-foreground">
                  Assembly, finishing, and inspection to ship-ready state. Beyond precision
                  machining, CG Model Tek offers comprehensive value-added services that take your
                  parts from raw machined components to fully finished, inspected, and
                  assembly-ready products. We coordinate secondary operations, manage finishing
                  processes, and provide turnkey solutions — saving you time, reducing logistics
                  complexity, and ensuring quality at every step.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Finishing Services</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Deburring and edge break to specification</li>
                      <li>• Bead blasting and media finishing</li>
                      <li>• Anodizing (Type II, Type III hard coat)</li>
                      <li>• Powder coating and wet paint</li>
                      <li>• Chromate conversion (Alodine, Chem-film)</li>
                      <li>• Passivation and electropolishing for stainless steel</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Assembly &amp; Integration</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Mechanical assembly per drawings or work instructions</li>
                      <li>• Hardware installation (fasteners, inserts, bearings)</li>
                      <li>• Press-fit and interference fit operations</li>
                      <li>• Sub-assembly kitting and packaging</li>
                      <li>• Welding and brazing coordination</li>
                      <li>• Final testing and functional verification</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Inspection &amp; Quality</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• First article inspection (FAI) reports</li>
                      <li>• CMM dimensional verification</li>
                      <li>• Optical comparison and surface inspection</li>
                      <li>• Material certifications and traceability</li>
                      <li>• Certificate of Conformance (C of C)</li>
                      <li>• AS9100 quality management practices</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Logistics &amp; Packaging</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• Custom packaging for delicate or precision parts</li>
                      <li>• Protective foam and anti-corrosion wrapping</li>
                      <li>• Kitting and labeling per customer requirements</li>
                      <li>• Inventory management and scheduled releases</li>
                      <li>• Drop-shipping directly to your customers or sites</li>
                      <li>• Documentation and packing list coordination</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-muted-foreground">
                  <span className="font-medium text-foreground">
                    One Partner, Complete Solution:
                  </span>{" "}
                  By consolidating machining, finishing, inspection, and assembly under one roof, we
                  reduce your vendor management burden and accelerate your project timeline. Receive
                  fully finished, tested, and documented products ready for immediate use or
                  integration.
                </p>
              </>
            ) : svc.slug === "wire-edm" ? (
              <>
                <h2 className="headline-2">CNC Wire EDM Machines — 4-Axis</h2>
                <p className="mt-2 text-muted-foreground">
                  Unrivaled Precision for Complex Contours. At CG Model Tek, our Mitsubishi FA20S
                  Wire EDM system provides unmatched control for cutting intricate geometries and
                  fine features in conductive materials. Using a thin, electrically charged wire and
                  dielectric fluid, this 4-Axis technology erodes metal with extraordinary accuracy
                  and surface finish — ideal for aerospace tooling, fixtures, and high-precision
                  inserts.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Machine Specifications</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>
                        <span className="font-medium text-foreground">Mitsubishi FA20S</span>
                      </li>
                      <li>Work Envelope: 13&quot; × 19&quot; × 11.5&quot;</li>
                      <li>
                        Renowned for reliability, accuracy, and fine wire control, with 4-axis
                        capability for precise taper cutting and intricate geometries.
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Capabilities &amp; Features</h3>
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
                  <span className="font-medium text-foreground">The CG Model Tek Difference:</span>{" "}
                  Wire EDM allows us to cut what traditional tools can&apos;t — achieving
                  razor-sharp definition and consistent precision across every edge, hole, and
                  contour.
                </p>
              </>
            ) : svc.slug === "cnc-die-sink-edm" ? (
              <>
                <h2 className="headline-2">CNC Die-Sink EDM Machines — 4-Axis</h2>
                <p className="mt-2 text-muted-foreground">
                  Precision Where Metal Meets Electricity. At CG Model Tek, our 4-Axis Die-Sink EDM
                  (Electrical Discharge Machining) systems allow us to produce intricate geometries,
                  sharp internal corners, and ultra-fine surface finishes unattainable with
                  traditional cutting tools. Using controlled electrical discharges, we shape
                  conductive materials with extreme accuracy — ideal for aerospace tooling,
                  wind-tunnel molds, and precision inserts.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-semibold">Capabilities &amp; Features</h3>
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
                  <span className="font-medium text-foreground">Why EDM?</span> EDM technology
                  allows CG Model Tek to machine parts that traditional cutting tools cannot —
                  delivering perfect edges, fine features, and consistent surface finishes for
                  mission-critical aerospace components.
                </p>
              </>
            ) : (
              <>
                <h2 className="headline-2">Overview</h2>
                <p className="mt-2 text-muted-foreground">
                  {svc.blurb} We combine expert programming, robust fixturing, and in-process
                  inspection to deliver repeatable results. Typical deliverables include process
                  plans, inspection records, and finishing to specification.
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
              <p className="mt-1 text-sm text-muted-foreground">
                Share your CAD and quantities. We’ll review same-day.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-block rounded-md bg-primary px-4 py-2 text-primary-foreground"
              >
                Get a quote
              </Link>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="text-base font-semibold">Related Services</h4>
              <ul className="mt-2 space-y-2 text-sm">
                {SERVICES.filter((s) => s.slug !== svc.slug)
                  .slice(0, 4)
                  .map((s) => (
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
