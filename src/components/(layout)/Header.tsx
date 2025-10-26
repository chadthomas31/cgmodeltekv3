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
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-lg tracking-tight">
            cgmodeltek
          </Link>
          <div className="hidden md:block">
            <NavigationMenu>
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium hover:bg-accent",
                    pathname === item.href && "text-primary"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <MegaMenu />
            </NavigationMenu>
          </div>
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
