"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  // Hide header on RFQ pages
  if (pathname && pathname.startsWith("/rfq")) return null;

  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div className="w-full px-2 sm:px-3 lg:px-4 py-3">
        <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-white drop-shadow">
          <Link href="/" className="flex items-center gap-3 sm:ml-6 md:ml-10 lg:ml-24">
            <Image
              src="/images/logo/cgmodelteklogo.png"
              alt="CG Model Tek"
              width={520}
              height={104}
              priority
              className="mt-2 h-16 sm:h-24 md:h-32 lg:h-40 w-auto object-contain"
            />
          </Link>
          <div className="ml-auto hidden sm:flex items-center gap-4 sm:gap-6">
            <Link href="/" className="hover:underline underline-offset-4">Home</Link>
            <Link href="/about" className="hover:underline underline-offset-4">About</Link>
            <Link href="/services" className="hover:underline underline-offset-4">Services</Link>
            <Link href="/equipment" className="hover:underline underline-offset-4">Equipment</Link>
            <Link href="/industries" className="hover:underline underline-offset-4">Industries</Link>
            <Link href="/blog" className="hover:underline underline-offset-4">Blog</Link>
            <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
            <Link href="/rfq" className="rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
