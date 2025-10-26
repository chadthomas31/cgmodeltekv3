import * as React from "react";

export function NavigationMenu({ children }: { children: React.ReactNode }) {
  return <nav className="flex items-center gap-1">{children}</nav>;
}
