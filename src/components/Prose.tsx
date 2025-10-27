import { cn } from "@/lib/utils";
import React from "react";

export function Prose({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "prose max-w-none prose-invert:dark",
        // basic typographic tuning without tailwind-typography
        "[&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:tracking-tight",
        "[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8",
        "[&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6",
        "[&_p]:leading-relaxed [&_p]:my-4 text-muted-foreground",
        "[&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6",
        "[&_a]:text-accent hover:[&_a]:underline",
        className
      )}
    >
      {children}
    </div>
  );
}
