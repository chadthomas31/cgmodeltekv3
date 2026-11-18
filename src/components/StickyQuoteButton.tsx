"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function StickyQuoteButton() {
  const pathname = usePathname();

  // Hide on RFQ and contact pages
  if (pathname?.startsWith("/rfq") || pathname?.startsWith("/contact")) {
    return null;
  }

  return (
    <Link
      href="/rfq"
      aria-label="Request a Quote"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60] inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 md:px-5 md:py-3 text-xs md:text-sm font-semibold text-primary-foreground shadow-2xl shadow-black/20 hover:opacity-95 focus-ring"
    >
      <span className="hidden sm:inline">Request a Quote</span>
      <span className="sm:hidden">Quote</span>
    </Link>
  );
}
