import Link from "next/link";

export function StickyQuoteButton() {
  return (
    <Link
      href="/rfq"
      aria-label="Request a Quote"
      className="hidden md:inline-flex fixed bottom-6 right-6 z-[60] items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-2xl shadow-black/20 hover:opacity-95 focus-ring"
    >
      Request a Quote
    </Link>
  );
}
