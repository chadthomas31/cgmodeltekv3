type Step = { title: string; description: string };

export function ProcessSteps({ steps = [] as Step[] }) {
  const items = steps.length
    ? steps
    : [
        { title: "Quote", description: "Review models, materials, and timelines." },
        { title: "Plan", description: "Program, fixture, and inspection plan." },
        { title: "Run", description: "In-process checks and adjustments." },
        { title: "Verify", description: "CMM or gauge-based verification." },
      ];
  return (
    <section aria-label="Process" className="py-10">
      <div className="container mx-auto px-4">
        <ol className="grid gap-6 md:grid-cols-4">
          {items.map((s, i) => (
            <li key={s.title} className="rounded-lg border p-5">
              <div className="mb-2 text-xs font-semibold text-accent">Step {i + 1}</div>
              <div className="font-semibold">{s.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
