import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Hero } from "@/components/sections/Hero";
import { StickyQuoteButton } from "@/components/StickyQuoteButton";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Equipment | cgmodeltek",
  description:
    "State-of-the-art CNC machining equipment: 5-axis mills, turning centers, Wire EDM, and precision inspection tools.",
};

export default function Page() {
  const equipment = {
    milling: [
      {
        name: "Haas VF-9",
        specs: '84" × 40" × 30"',
        image: "/Equipment/Haas_VF-9_84_x_40_x_30.jpeg",
        description: "High-performance vertical machining center",
      },
      {
        name: "Mazak i-700",
        specs: '24" × 43" × 23"',
        image: "/Equipment/Mazak_i-700_24_x_43_x_23.png",
        description: "Intelligent vertical machining center",
      },
      {
        name: "Cincinnati Lancer",
        specs: '40" × 20" × 21"',
        image: "/Equipment/Cincinnati _Lancer_40_x_20_x_21.png",
        description: "Precision 3-axis machining center",
      },
      {
        name: "Cincinnati Sabre 1000",
        specs: '40" × 20" × 21"',
        image: "/Equipment/Cincinnati _Sabre_1000_40_x_20_x_21.png",
        description: "High-precision vertical mill",
      },
      {
        name: "Cincinnati Sabre 2000",
        specs: '40" × 20" × 21"',
        image: "/Equipment/Cincinnati _Sabre_2000_40_x_20_x_21.png",
        description: "Advanced 3-axis machining",
      },
      {
        name: "Cincinnati U5",
        specs: '100" × 156" × 40"',
        image: "/Equipment/Cincinnati U5_ 100_x_156_x_40.png",
        description: "Large format 5-axis gantry mill",
      },
      {
        name: "Mazak VTC 250",
        specs: '69" × 25" × 26"',
        image: "/Equipment/Mazak_VTC_250by50_69_x_25_x_26 - Copy.png",
        description: "Vertical traveling column machining center",
      },
      {
        name: "Milltronics VKM2",
        specs: '30" × 15" × 11"',
        image: "/Equipment/Milltronics_VKM2_30_x_15_x_11.jpeg",
        description: "Compact vertical machining center",
      },
      {
        name: "Milltronics VKM3",
        specs: '30" × 15" × 11"',
        image: "/Equipment/Milltronics_VKM3_30_x_15_x_11.jpeg",
        description: "Precision 3-axis mill",
      },
      {
        name: "Milltronics VKM4",
        specs: '30" × 15" × 11"',
        image: "/Equipment/Milltronics_VKM4_30_x_15_x_11.jpeg",
        description: "High-accuracy machining center",
      },
    ],
    fiveAxis: [
      {
        name: "Mazak 730-5X",
        specs: '33" × 29" × 22"',
        image: "/Equipment/Mazak_730-5X_33_x_29_x_22.png",
        description: "5-axis simultaneous machining center",
      },
      {
        name: "Mazak VCU 400-5X",
        specs: '20" × 16" × 20"',
        image: "/Equipment/Mazak_VCU_400-5X_20_x_16_x_20.jpeg",
        description: "Compact 5-axis vertical machining center",
      },
    ],
    turning: [
      {
        name: "Mazak I-1050T",
        specs: '47" × 54" × 35"',
        image: "/Equipment/Mazak_I-1050T_47_x_54_x_35.png",
        description: "Multi-tasking turning center",
      },
      {
        name: "Mazak QTN 450",
        specs: '20" Dia. × 80"',
        image: "/Equipment/2-Axis/Mazak_QTN_450_20_Dia._x_80.jpeg",
        description: "2-axis CNC lathe with large capacity",
      },
      {
        name: "Mazak QTN 350M",
        specs: '16" Dia. × 48"',
        image: "/Equipment/3-Axis (live tooling)/Mazak_QTN_350M_16_Dia._x_48.jpeg",
        description: "3-axis turning center with live tooling",
      },
      {
        name: "BridgePort EZ Path II",
        specs: '10" Dia. × 36"',
        image: "/Equipment/2-Axis/BridgePort_EZ_Path_II_10_Dia._x_36.png",
        description: "2-axis CNC lathe",
      },
    ],
    edm: [
      {
        name: "Mitsubishi FA20S",
        specs: '13" × 19" × 11.5"',
        image: "/Equipment/4 Axis/Mitsubishi_FA20S_13_x_19_x_11.5.jpeg",
        description: "4-axis Wire EDM with sub-micron precision",
      },
      {
        name: "Mitsubishi DWC90HA",
        specs: '10" × 12" × 6.5"',
        image: "/Equipment/4 Axis/Mitsubishi_DWC90HA_10_x_12_x_6.5.jpeg",
        description: "4-axis Die-Sink EDM for complex cavities",
      },
    ],
  };

  return (
    <div className="container mx-auto px-0 pb-12">
      <Hero
        className="mb-8"
        title="Equipment"
        subtitle="State-of-the-art CNC machining equipment delivering precision, reliability, and repeatability for aerospace and industrial applications."
        titleClassName="font-sans font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl"
        overlayClassName="hidden"
        topBadge="Equipment"
        contentPosition="bottom"
        image={{
          src: "/Equipment/Mazak_730-5X_33_x_29_x_22.png",
          alt: "CNC machining equipment",
        }}
      />
      <div className="px-4">
        <Breadcrumbs
          className="mb-6"
          segments={[
            { href: "/", label: "Home" },
            { href: "/equipment", label: "Equipment" },
          ]}
        />

        {/* 5-Axis Machining Centers */}
        <section className="mt-8">
          <h2 className="headline-2 mb-4">5-Axis Machining Centers</h2>
          <p className="mb-6 text-muted-foreground">
            Our 5-axis simultaneous machining centers deliver unmatched precision for complex
            geometries, sculptured surfaces, and multi-sided components — all in a single setup.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.fiveAxis.map((machine) => (
              <div key={machine.name} className="overflow-hidden rounded-xl border bg-card">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{machine.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{machine.specs}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{machine.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3-Axis Milling */}
        <section className="mt-12">
          <h2 className="headline-2 mb-4">3-Axis & 4-Axis Milling Centers</h2>
          <p className="mb-6 text-muted-foreground">
            A diverse fleet of vertical machining centers providing flexibility for parts ranging
            from small precision components to large aerospace structures.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.milling.map((machine) => (
              <div key={machine.name} className="overflow-hidden rounded-xl border bg-card">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{machine.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{machine.specs}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{machine.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Turning Centers */}
        <section className="mt-12">
          <h2 className="headline-2 mb-4">CNC Turning Centers</h2>
          <p className="mb-6 text-muted-foreground">
            Precision lathes with 2-axis and 3-axis live tooling capabilities for cylindrical
            components, shafts, housings, and complex turned parts.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.turning.map((machine) => (
              <div key={machine.name} className="overflow-hidden rounded-xl border bg-card">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{machine.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{machine.specs}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{machine.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDM */}
        <section className="mt-12">
          <h2 className="headline-2 mb-4">EDM (Electrical Discharge Machining)</h2>
          <p className="mb-6 text-muted-foreground">
            Mitsubishi 4-axis Wire and Die-Sink EDM systems for ultra-precision cutting, intricate
            geometries, and fine surface finishes in conductive materials.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.edm.map((machine) => (
              <div key={machine.name} className="overflow-hidden rounded-xl border bg-card">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{machine.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{machine.specs}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{machine.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities Summary */}
        <section className="mt-12 rounded-xl border bg-primary/5 p-6">
          <h3 className="headline-3">Equipment Capabilities</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">CNC Machines</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5-Axis</div>
              <div className="text-sm text-muted-foreground">Simultaneous Machining</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">±0.0005&quot;</div>
              <div className="text-sm text-muted-foreground">Typical Tolerance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">156&quot;</div>
              <div className="text-sm text-muted-foreground">Max Travel (Gantry)</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 rounded-lg border bg-card p-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="headline-3">Ready to discuss your project?</h3>
              <p className="text-sm text-muted-foreground">
                Our equipment and expertise are ready to support your most demanding applications.
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
      </div>
      <StickyQuoteButton />
    </div>
  );
}
