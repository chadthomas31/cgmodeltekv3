export default function EquipmentLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6 h-8 w-48 animate-pulse rounded bg-muted" />
      <div className="mb-8 h-12 w-80 animate-pulse rounded bg-muted" />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="aspect-[4/3] w-full animate-pulse rounded-lg bg-muted" />
            <div className="h-6 w-3/4 animate-pulse rounded bg-muted" />
            <div className="h-4 w-full animate-pulse rounded bg-muted" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
          </div>
        ))}
      </div>
    </div>
  );
}
