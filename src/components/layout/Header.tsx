"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/equipment", label: "Equipment" },
  { href: "/aerospace", label: "Aerospace" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

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
              className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="ml-auto hidden sm:flex items-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:underline underline-offset-4">
                {link.label}
              </Link>
            ))}
            <Link
              href="/rfq"
              className="rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="ml-auto sm:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 hover:bg-white/10 rounded-md transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/rfq"
                    onClick={() => setOpen(false)}
                    className="mt-4 rounded-full bg-primary text-primary-foreground px-6 py-3 text-center font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Request a Quote
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
