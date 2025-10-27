type Feature = { title: string; description: string; icon?: React.ReactNode };

export function FeatureGrid({ features = [] as Feature[] }) {
  const items = features.length
    ? features
    : [
        { title: "Tight tolerances", description: "±0.0005 in typical with process controls." },
        { title: "Documented QA", description: "In-process checks and CMM verification." },
        { title: "Robotic tending", description: "Throughput and repeatability where it matters." },
        { title: "Fast turn", description: "Prototypes in days with practical DFM guidance." },
        { title: "Multi-axis", description: "Fewer setups, higher geometric fidelity." },
        { title: "Certified partners", description: "Finishes and treatments to spec via partners." },
      ];
  return (
    <section aria-label="Key features" className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div key={f.title} className="rounded-lg border p-5 hover:bg-muted/50 transition">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
