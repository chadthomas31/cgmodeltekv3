"use client";

import { useState } from "react";
import Link from "next/link";

export default function MegaMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        About Menu
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-[560px] rounded-md border bg-popover p-6 shadow-xl">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="mb-2 font-semibold">Company</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="hover:underline">
                    Industries
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Resources</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
