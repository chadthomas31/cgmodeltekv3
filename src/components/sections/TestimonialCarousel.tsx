"use client";
import { useState } from "react";

type Testimonial = { quote: string; author: string; role?: string };

export function TestimonialCarousel({ items = [] as Testimonial[] }) {
  const data =
    items.length > 0
      ? items
      : [
          {
            quote: "Parts were to print and on time.",
            author: "Alex R.",
            role: "Mechanical Engineer",
          },
          {
            quote: "Helpful DFM and great communication.",
            author: "Priya S.",
            role: "Hardware Lead",
          },
          {
            quote: "Repeatable quality on production lots.",
            author: "Marcus L.",
            role: "Ops Manager",
          },
        ];
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % data.length);
  const prev = () => setIndex((i) => (i - 1 + data.length) % data.length);

  return (
    <section aria-label="Testimonials" className="py-10">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg border bg-muted/20 p-6">
          <blockquote className="text-lg leading-relaxed">“{data[index].quote}”</blockquote>
          <div className="mt-3 text-sm text-muted-foreground">
            — {data[index].author}
            {data[index].role ? `, ${data[index].role}` : ""}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <button
              className="rounded-md border px-3 py-1 text-sm hover:bg-muted/60 focus-ring"
              onClick={prev}
              aria-label="Previous"
            >
              Prev
            </button>
            <button
              className="rounded-md border px-3 py-1 text-sm hover:bg-muted/60 focus-ring"
              onClick={next}
              aria-label="Next"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
