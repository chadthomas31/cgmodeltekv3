"use client";
import * as React from "react";

type Item = { id: string; title: React.ReactNode; content: React.ReactNode };

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = React.useState<string | null>(null);
  return (
    <div className="divide-y rounded-md border">
      {items.map((it) => (
        <div key={it.id}>
          <button
            className="w-full px-4 py-3 text-left font-medium hover:bg-accent"
            onClick={() => setOpen((o) => (o === it.id ? null : it.id))}
          >
            {it.title}
          </button>
          {open === it.id && (
            <div className="px-4 pb-4 text-sm text-muted-foreground">{it.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
