import Link from "next/link";

export function Breadcrumbs({
  segments,
  className = "",
}: {
  segments: { href: string; label: string }[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {segments.map((seg, i) => (
          <li key={seg.href} className="inline-flex items-center gap-2">
            {i > 0 && <span className="opacity-60">/</span>}
            {i < segments.length - 1 ? (
              <Link href={seg.href} className="hover:underline">
                {seg.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground">
                {seg.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
