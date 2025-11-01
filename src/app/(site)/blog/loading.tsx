export default function BlogLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6 h-8 w-48 animate-pulse rounded bg-muted" />
      <div className="mb-8 h-12 w-64 animate-pulse rounded bg-muted" />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="aspect-video w-full animate-pulse rounded-lg bg-muted" />
            <div className="h-6 w-3/4 animate-pulse rounded bg-muted" />
            <div className="h-4 w-full animate-pulse rounded bg-muted" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
          </div>
        ))}
      </div>
    </div>
  );
}
