import * as React from "react";

export function Sheet({ open, onOpenChange, children }: { open: boolean; onOpenChange: (o: boolean) => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/40" onClick={() => onOpenChange(false)}>
      <div className="absolute right-0 top-0 h-full w-64 bg-background p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
