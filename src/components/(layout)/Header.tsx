"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/ThemeToggle";
import MegaMenu from "@/components/nav/MegaMenu";
import MobileMenu from "@/components/nav/MobileMenu";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/aerospace", label: "Aerospace" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-lg tracking-tight">
            cgmodeltek
          </Link>
        </div>
        <div className="ml-auto mr-2 hidden md:block">
          <NavigationMenu>
            <Link
              href="/"
              className={cn(
                "px-3 py-2 rounded-md text-base font-medium hover:bg-muted/60"
              )}
            >
              Home
            </Link>
            {/* Mega tabs: About Us, Services */}
            <MegaMenu />
            <Link
              href="/aerospace"
              className={cn(
                "px-3 py-2 rounded-md text-base font-medium hover:bg-muted/60"
              )}
            >
              Aerospace
            </Link>
            <Link
              href="/blog"
              className={cn(
                "px-3 py-2 rounded-md text-base font-medium hover:bg-muted/60"
              )}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={cn(
                "px-3 py-2 rounded-md text-base font-medium hover:bg-muted/60"
              )}
            >
              Contact Us
            </Link>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="md:hidden">
            <MobileMenu nav={nav} />
          </div>
        </div>
      </div>
    </header>
  );
}
