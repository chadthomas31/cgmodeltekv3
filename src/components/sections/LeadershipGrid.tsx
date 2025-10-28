"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { LeadershipImage } from "@/components/LeadershipImage";
import { cn } from "@/lib/utils";

export type Leader = {
  name: string;
  role: string;
  img?: string;
  bio: string;
};

export function LeadershipGrid({
  people,
  className,
  maxPreviewChars = 160,
  textOnly = false,
  gridClassName,
  cardClassName,
  modalEnabled = true,
  idFromName = false,
  linkToBase,
}: {
  people: Leader[];
  className?: string;
  maxPreviewChars?: number;
  textOnly?: boolean;
  gridClassName?: string; // e.g. "grid gap-4 sm:grid-cols-3 lg:grid-cols-6"
  cardClassName?: string; // extra classes for the card wrapper
  modalEnabled?: boolean;
  idFromName?: boolean; // if true, set wrapper id from name slug
  linkToBase?: string; // if provided, cards link to `${linkToBase}#<slug>`
}) {
  const [active, setActive] = useState<Leader | null>(null);

  const items = useMemo(() => people.filter(Boolean), [people]);

  const preview = (s: string) => {
    if (!s) return "";
    if (s.length <= maxPreviewChars) return s;
    const cut = s.slice(0, maxPreviewChars);
    const lastSpace = cut.lastIndexOf(" ");
    return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd() + "…";
  };

  return (
    <div className={cn(gridClassName ?? "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {items.map((p, i) => {
        const slug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
        const key = `${slug}-${i}`;
        const id = idFromName ? slug : undefined;
        const href = linkToBase ? `${linkToBase}#${slug}` : undefined;
        const content = (
          <>
            {textOnly ? (
              <div className="flex aspect-square w-full flex-col items-center justify-center rounded-lg bg-muted/40 p-3 text-center">
                <h3 className="text-base font-semibold leading-tight">{p.name}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{p.role}</p>
              </div>
            ) : (
              <>
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <div className="aspect-square w-full bg-muted/50" />
                  <LeadershipImage name={p.name} img={p.img} className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-tight">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.role}</p>
                  {p.bio && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{preview(p.bio)}</p>
                  )}
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
                    Read more <span aria-hidden>→</span>
                  </span>
                </div>
              </>
            )}
          </>
        );

        const classNames = cn(
          "group rounded-xl border bg-card p-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg",
          cardClassName
        );

        return href ? (
          <Link key={key} id={id} href={href} className={classNames} aria-label={`View profile for ${p.name}`}>
            {content}
          </Link>
        ) : (
          <button
            key={key}
            id={id}
            type="button"
            onClick={() => modalEnabled && setActive(p)}
            className={classNames}
            aria-label={`View bio for ${p.name}`}
          >
            {content}
          </button>
        );
      })}

      {modalEnabled && active && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="relative z-10 mx-2 mb-2 w-full max-w-3xl rounded-xl border bg-background p-4 sm:mx-4 sm:mb-0 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-start gap-4">
                {!textOnly && (
                  <div className="relative h-20 w-20 overflow-hidden rounded-md sm:h-28 sm:w-28">
                    <LeadershipImage name={active.name} img={active.img} className="object-cover" />
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold leading-tight">{active.name}</h3>
                  <p className="text-sm text-muted-foreground">{active.role}</p>
                </div>
              </div>
              <button
                onClick={() => setActive(null)}
                className="rounded-md border px-3 py-1 text-sm hover:bg-muted"
                aria-label="Close"
              >
                Close
              </button>
            </div>
            {active.bio && (
              <div className="mt-4 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                {active.bio}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
