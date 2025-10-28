import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const INDUSTRIES: Record<string, {
  title: string;
  image: string;
  overview: string;
  capabilities: string[];
  materials: string[];
  qa: string[];
}> = {
  aerospace: {
    title: "Aerospace",
    image: "/images/industries/aerospace.png",
    overview:
      "Precision components and model hardware for aerodynamic testing, propulsion, and airframe development.",
    capabilities: [
      "5-axis CNC machining for complex airfoils and housings",
      "Prototype-to-production workflows",
      "Tight-tolerance assemblies and fixturing",
    ],
    materials: ["Aluminum", "Stainless Steel", "Titanium", "High-temp alloys"],
    qa: ["FAI on request", "Lot traceability", "CMM inspection"],
  },
  automotive: {
    title: "Automotive",
    image: "/images/industries/automotive.png",
    overview:
      "Rapid iterations for powertrain, chassis, and aerodynamic validation, from concept to short-run production.",
    capabilities: [
      "Rapid prototype machining",
      "Toleranced driveline and bracket components",
      "Surface finishing and coatings",
    ],
    materials: ["Aluminum", "Steel", "Composites"],
    qa: ["Dimensional reports", "Assembly checks"],
  },
  medical: {
    title: "Medical",
    image: "/images/industries/medical.png",
    overview:
      "Precision fixturing and instrument components with consistent finishes and documentation.",
    capabilities: [
      "Small-feature machining",
      "Fine deburr and surface prep",
      "Traceable documentation",
    ],
    materials: ["Stainless Steel", "Aluminum", "Engineering plastics"],
    qa: ["COC/COA", "Inspection reports"],
  },
  energy: {
    title: "Energy",
    image: "/images/industries/energy.png",
    overview:
      "Durable components for harsh environments and test rigs for power systems.",
    capabilities: [
      "Robust housings and adapters",
      "Threaded and sealed interfaces",
      "Multi-operation assemblies",
    ],
    materials: ["Stainless Steel", "Alloys", "Aluminum"],
    qa: ["Pressure/leak checks (on request)", "Material certs"],
  },
  consumer: {
    title: "Consumer",
    image: "/images/industries/consumer.png",
    overview:
      "Functional prototypes and pre-production parts with production-like fit and finish.",
    capabilities: [
      "Appearance models and fixtures",
      "Small-batch parts",
      "Post-processing and coatings",
    ],
    materials: ["Aluminum", "Plastics", "Stainless Steel"],
    qa: ["Cosmetic criteria", "Fit checks"],
  },
  defense: {
    title: "Defense",
    image: "/images/industries/defense.png",
    overview:
      "Secure, repeatable machining for mission-critical components and test hardware.",
    capabilities: [
      "Complex geometries with tight tolerances",
      "Secure handling and documentation",
      "Assembly and kitting",
    ],
    materials: ["Aluminum", "Steels", "High-strength alloys"],
    qa: ["Traceability", "Inspection documentation"],
  },
};

export async function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const info = INDUSTRIES[params.slug];
  const title = info ? `${info.title} | Industries` : "Industry";
  return { title, description: info?.overview };
}

export default function Page({ params }: { params: { slug: string } }) {
  const info = INDUSTRIES[params.slug];
  if (!info) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs segments={[{ href: "/", label: "Home" }, { href: "/industries", label: "Industries" }]} className="mb-6" />
        <h1 className="headline-1">Industry</h1>
        <p className="mt-2 text-muted-foreground">Not found.</p>
        <div className="mt-4"><Link href="/industries" className="underline">Back to industries</Link></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs segments={[{ href: "/", label: "Home" }, { href: "/industries", label: "Industries" }, { href: `/industries/${params.slug}`, label: info.title }]} className="mb-6" />
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="headline-1">{info.title}</h1>
          <p className="mt-4 text-muted-foreground">{info.overview}</p>

          <div className="mt-8 grid gap-6">
            <div>
              <h2 className="text-xl font-semibold">Capabilities</h2>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                {info.capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Materials</h2>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                {info.materials.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Quality</h2>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                {info.qa.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border bg-muted/40">
            <Image src={info.image} alt={info.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-10 text-right">
        <Link href="/contact" className="rounded-md bg-primary px-4 py-2 text-primary-foreground">Request a Quote</Link>
      </div>
    </div>
  );
}
