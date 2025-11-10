"use client";

import { usePathname } from "next/navigation";

export function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isRFQ = !!pathname && pathname.startsWith("/rfq");
  return <main className={isRFQ ? "min-h-[70dvh] pt-0" : "min-h-[70dvh] pt-36"}>{children}</main>;
}
