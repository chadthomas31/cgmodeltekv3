"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export function LeadershipImage({
  name,
  img,
  className = "object-cover",
}: {
  name: string;
  img?: string;
  className?: string;
}) {
  const candidates = useMemo(() => {
    if (img && img.trim()) return [img.trim()];
    const encoded = encodeURIComponent(name);
    const underscored = name.replace(/\s+/g, "_");
    const cleanedLower = name.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
    const hyphenLower = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    const exts = ["png", "webp"] as const;
    const patterns = [
      encoded, // "Chris%20Athaide"
      underscored, // "Chris_Athaide"
      cleanedLower, // "chris_athaide"
      hyphenLower, // "chris-athaide"
    ];
    const paths: string[] = [];
    for (const base of patterns) {
      for (const ext of exts) {
        paths.push(`/Leadership/${base}.${ext}`);
      }
    }
    return paths;
  }, [name, img]);

  const [index, setIndex] = useState(0);
  const src = candidates[Math.min(index, candidates.length - 1)];

  return (
    <Image
      src={src}
      alt={name}
      fill
      sizes="(max-width: 1024px) 100vw, 25vw"
      className={className}
      priority={false}
      onError={() => {
        setIndex((i) => (i < candidates.length - 1 ? i + 1 : i));
      }}
    />
  );
}
