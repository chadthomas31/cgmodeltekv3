"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet } from "@/components/ui/sheet";
import { Accordion } from "@/components/ui/accordion";
import { ChevronRight, Menu as MenuIcon, X } from "lucide-react";

type NavItem = { href: string; label: string };

const MEGA: Record<string, { label: string; items: { href: string; label: string }[] }> = {
  about: {
    label: "About Us",
    items: [
      { href: "/about/company", label: "Company" },
      { href: "/about/robotic-tending", label: "Robotic Tending" },
      { href: "/about/reviews", label: "Customer Reviews" },
      { href: "/about/faq", label: "FAQ" },
    ],
  },
  services: {
    label: "Services",
    items: [
      { href: "/services", label: "All Services" },
      { href: "/services/precision-cnc-machining", label: "Precision CNC Machining" },
      { href: "/services/prototype-machining", label: "Prototype Machining" },
      { href: "/services/wire-edm", label: "Wire EDM" },
    ],
  },
  industries: {
    label: "Industries",
    items: [
      { href: "/industries/aerospace", label: "Aerospace & Defense" },
      { href: "/industries/automotive", label: "Automotive" },
      { href: "/industries/medical", label: "Medical" },
      { href: "/industries/energy", label: "Energy" },
      { href: "/industries", label: "All Industries" },
    ],
  },
};

export default function MobileMenu({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        className="inline-flex h-11 min-h-[44px] items-center justify-center gap-2 rounded-md border px-3 text-sm focus-ring"
        onClick={() => setOpen(true)}
        aria-label="Open Menu"
      >
        <MenuIcon className="h-5 w-5" aria-hidden /> Menu
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <span className="text-sm font-semibold">Menu</span>
            <button
              className="inline-flex h-11 min-h-[44px] items-center justify-center rounded-md border px-3 text-sm focus-ring"
              onClick={close}
              aria-label="Close Menu"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-2">
            {/* Top-level simple links */}
            <div className="space-y-1">
              {nav
                .filter((n) => ["/", "/blog", "/contact"].includes(n.href))
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className="flex h-11 min-h-[44px] items-center justify-between rounded-md px-3 text-sm hover:bg-muted/60"
                  >
                    <span>{item.label === "Contact" ? "Contact Us" : item.label}</span>
                    <ChevronRight className="h-4 w-4 opacity-60" />
                  </Link>
                ))}
            </div>

            {/* Accordion for mega sections */}
            <div className="mt-2">
              <Accordion
                items={[
                  {
                    id: "about",
                    title: (
                      <div className="flex h-11 min-h-[44px] items-center justify-between pr-1">
                        <span>About Us</span>
                        <ChevronRight className="h-4 w-4 opacity-60" />
                      </div>
                    ),
                    content: (
                      <ul className="py-1">
                        {MEGA.about.items.map((i) => (
                          <li key={i.href}>
                            <Link
                              href={i.href}
                              onClick={close}
                              className="flex h-11 min-h-[44px] items-center rounded-md px-3 text-sm hover:bg-muted/60"
                            >
                              {i.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ),
                  },
                  {
                    id: "services",
                    title: (
                      <div className="flex h-11 min-h-[44px] items-center justify-between pr-1">
                        <span>Services</span>
                        <ChevronRight className="h-4 w-4 opacity-60" />
                      </div>
                    ),
                    content: (
                      <ul className="py-1">
                        {MEGA.services.items.map((i) => (
                          <li key={i.href}>
                            <Link
                              href={i.href}
                              onClick={close}
                              className="flex h-11 min-h-[44px] items-center rounded-md px-3 text-sm hover:bg-muted/60"
                            >
                              {i.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ),
                  },
                  {
                    id: "industries",
                    title: (
                      <div className="flex h-11 min-h-[44px] items-center justify-between pr-1">
                        <span>Industries</span>
                        <ChevronRight className="h-4 w-4 opacity-60" />
                      </div>
                    ),
                    content: (
                      <ul className="py-1">
                        {MEGA.industries.items.map((i) => (
                          <li key={i.href}>
                            <Link
                              href={i.href}
                              onClick={close}
                              className="flex h-11 min-h-[44px] items-center rounded-md px-3 text-sm hover:bg-muted/60"
                            >
                              {i.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ),
                  },
                ]}
              />
            </div>
          </nav>
        </div>
      </Sheet>
    </div>
  );
}
