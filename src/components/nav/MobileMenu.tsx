"use client";

import { useState } from "react";
import Link from "next/link";

type NavItem = { href: string; label: string };

export default function MobileMenu({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm"
        onClick={() => setOpen(true)}
        aria-label="Open Menu"
      >
        Menu
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-64 bg-background p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="mb-4 inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm"
              onClick={() => setOpen(false)}
              aria-label="Close Menu"
            >
              Close
            </button>
            <nav className="flex flex-col gap-3">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
