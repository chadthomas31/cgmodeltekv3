export function BulletPoints({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc pl-6 text-muted-foreground">
      {items.map((it) => (
        <li key={it} className="mb-1">{it}</li>
      ))}
    </ul>
  );
}
