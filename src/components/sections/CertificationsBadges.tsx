export function CertificationsBadges({
  items = [
    { label: "ISO 9001", alt: "ISO 9001 Certified" },
    { label: "AS9100 (partners)", alt: "AS9100 via partners" },
    { label: "ITAR", alt: "ITAR Aware" },
  ],
}: {
  items?: { label: string; alt: string }[];
}) {
  return (
    <section aria-label="Certifications and badges" className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 sm:grid-cols-3">
          {items.map((i) => (
            <div
              key={i.label}
              className="flex items-center justify-center rounded-lg border bg-muted/20 p-6 text-sm font-semibold"
            >
              <span aria-label={i.alt}>{i.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
