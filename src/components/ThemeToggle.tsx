"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const current = theme === "system" ? systemTheme : theme;
  return (
    <button
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm"
      aria-label="Toggle Theme"
      title="Toggle Theme"
    >
      {current === "dark" ? "Dark" : "Light"}
    </button>
  );
}
