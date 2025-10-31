"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type TabKey = "about" | "services";
type MenuState = "closed" | "peek" | "open";

const TABS: { key: TabKey; label: string; href: string }[] = [
  { key: "about", label: "About Us", href: "/about" },
  { key: "services", label: "Services", href: "/services" },
];

export default function MegaMenu() {
  const [active, setActive] = useState<TabKey | null>(null);
  const [menuState, setMenuState] = useState<MenuState>("closed");
  const intentTimer = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [aboutFaq, setAboutFaq] = useState<{ question: string; answer: string }[] | null>(null);

  // Focus trap inside panel when open
  useEffect(() => {
    if (menuState !== "open") return;
    const panel = panelRef.current;
    if (!panel) return;
    const focusables = panel.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMenuState("closed");
        setActive(null);
        triggerRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && focusables.length) {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuState]);

  // Close with intent delay when leaving nav area
  const scheduleClose = () => {
    if (intentTimer.current) clearTimeout(intentTimer.current);
    intentTimer.current = setTimeout(() => {
      setMenuState("closed");
      setActive(null);
    }, 200);
  };
  const cancelClose = () => {
    if (intentTimer.current) clearTimeout(intentTimer.current);
  };

  // Roving focus for middle column items
  const middleItems = useMemo(
    () => [
      { href: "/about/company", label: "Company" },
      { href: "/about/robotic-tending", label: "Robotic Tending" },
      { href: "/about/reviews", label: "Customer Reviews" },
      { href: "/about/faq", label: "FAQ" },
    ],
    []
  );
  const [rovingIndex, setRovingIndex] = useState(0);

  // Load About FAQs from MDX when opening About tab
  useEffect(() => {
    if (active === "about" && menuState !== "closed" && aboutFaq == null) {
      fetch("/api/content/about")
        .then((r) => r.json())
        .then((data) => setAboutFaq(Array.isArray(data.faq) ? data.faq : []))
        .catch(() => setAboutFaq([]));
    }
  }, [active, menuState, aboutFaq]);

  const onTriggerKey = (e: React.KeyboardEvent<HTMLButtonElement>, key: TabKey) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      setActive(key);
      setMenuState("open");
    }
  };

  const heightForState = menuState === "peek" ? 64 : menuState === "open" ? "auto" : 0;
  const opacityForState = menuState === "closed" ? 0 : 0.96;

  return (
    <div
      className="relative"
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
      onFocusCapture={cancelClose}
    >
      <nav aria-label="Primary" className="contents">
      <div className="flex items-center gap-2" role="tablist" aria-orientation="horizontal">
        {TABS.map((t) => (
          <button
            key={t.key}
            ref={active === t.key ? triggerRef : undefined}
            type="button"
            className={cn(
              "relative isolate z-10 whitespace-nowrap px-3 py-2 text-base font-medium rounded-md hover:bg-muted/60 focus-ring"
            )}
            role="tab"
            aria-selected={active === t.key && menuState !== "closed"}
            aria-haspopup="dialog"
            aria-expanded={menuState !== "closed" && active === t.key}
            aria-controls={`mega-${t.key}`}
            onMouseEnter={() => {
              setActive(t.key);
              if (menuState !== "open") setMenuState("peek");
            }}
            onFocus={() => {
              setActive(t.key);
              if (menuState !== "open") setMenuState("peek");
            }}
            onClick={() => {
              setActive(t.key);
              setMenuState((s) => (s === "open" && active === t.key ? "closed" : "open"));
            }}
            onKeyDown={(e) => onTriggerKey(e, t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      </nav>

      {/* Overlay panel positioned over content; does not push layout */}
      <AnimatePresence>
        {active && menuState !== "closed" && (
          <motion.div
            id={`mega-${active}`}
            ref={panelRef}
            key={active}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: heightForState as any, opacity: opacityForState }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: "easeInOut" }}
            className={cn(
              "absolute left-1/2 top-full z-40 mt-2 w-[min(100vw-2rem,1100px)] -translate-x-1/2 overflow-hidden rounded-lg border bg-popover/80 backdrop-blur shadow-2xl",
              menuState === "peek" ? "hero-overlay" : ""
            )}
            role="tabpanel"
            aria-modal={menuState === "open"}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            {/* Peek content: short teaser bar (non-interactive except visible content) */}
            {menuState === "peek" && (
              <div className="h-16 px-6 flex items-center gap-6">
                <div className="headline-3">{labelFor(active)}</div>
                <div className="text-sm text-muted-foreground hidden md:block">
                  Precision, repeatability, and throughput.
                </div>
              </div>
            )}

            {/* Open content: full mega layout */}
            {menuState === "open" && (
              <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
                {/* Left column */}
                <div className="space-y-3">
                  {active === "about" ? (
                    <>
                      <div className="relative overflow-hidden rounded-md border bg-background">
                        <Image
                          src="/images/hero.svg"
                          alt="Team and shop overview"
                          width={480}
                          height={270}
                          className="h-auto w-full object-cover"
                        />
                        {/* Established badge */}
                        <div className="absolute left-3 top-3 rounded-md bg-accent px-2 py-1 text-[11px] font-semibold text-accent-foreground shadow">
                          Established 2002 · 20+ years
                        </div>
                      </div>
                      <h3 className="headline-3">About cgmodeltek</h3>
                      <p className="text-sm text-muted-foreground">
                        Situated in North America with a focus on reliability and quality, we integrate
                        robotics and disciplined QA to deliver repeatable results.
                      </p>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-muted-foreground">Follow us:</span>
                        <Link href="#" className="underline-offset-2 hover:underline">LinkedIn</Link>
                        <Link href="#" className="underline-offset-2 hover:underline">YouTube</Link>
                      </div>
                      <Link
                        href="/about"
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:opacity-90 focus-ring"
                      >
                        Read more <ChevronRight size={16} />
                      </Link>
                    </>
                  ) : (
                    <>
                      <h3 className="headline-3">{labelFor(active)}</h3>
                      <p className="text-sm text-muted-foreground">
                        We build reliable, industrial-grade solutions for demanding CNC and robotics
                        workflows.
                      </p>
                      <Link
                        href={`/${active}`}
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:opacity-90 focus-ring"
                      >
                        Read more <ChevronRight size={16} />
                      </Link>
                    </>
                  )}
                </div>

                {/* Middle column: roving list */}
                <div>
                  {active === "about" && (
                    <h4 className="mb-2 text-sm font-semibold">Learn More About Us.</h4>
                  )}
                  <ul
                  className="space-y-1"
                  role="menu"
                  aria-label="Popular links"
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setRovingIndex((i) => (i + 1) % middleItems.length);
                    } else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      setRovingIndex((i) => (i - 1 + middleItems.length) % middleItems.length);
                    }
                  }}
                >
                  {middleItems.map((item, i) => (
                    <li key={item.href} className="group">
                      <Link
                        href={item.href}
                        role="menuitem"
                        tabIndex={i === rovingIndex ? 0 : -1}
                        className="flex items-center justify-between rounded-md border px-3 py-3 text-sm hover:bg-muted/60 focus-ring"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                  </ul>
                </div>

                {/* Right column: FAQs with small thumbnails */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Frequently Asked Questions</h4>
                  <ul className="space-y-2">
                    {active === "about" && aboutFaq ? aboutFaq.slice(0, 3).map((f, idx) => (
                      <li key={`${f.question}-${idx}`} className="flex items-center gap-3 rounded-md p-2 hover:bg-muted/60">
                        <div className="h-10 w-14 shrink-0 rounded-md bg-muted/80" aria-hidden />
                        <div>
                          <p className="text-sm font-medium leading-tight">{f.question}</p>
                          <p className="text-xs text-muted-foreground line-clamp-2">{f.answer}</p>
                        </div>
                      </li>
                    )) : faqs.map((f) => (
                      <li key={f.q} className="flex items-center gap-3 rounded-md p-2 hover:bg-muted/60">
                        <div className="h-10 w-14 shrink-0 rounded-md bg-muted/80" aria-hidden />
                        <div>
                          <p className="text-sm font-medium leading-tight">{f.q}</p>
                          <p className="text-xs text-muted-foreground">{f.a}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function labelFor(key: TabKey) {
  return TABS.find((t) => t.key === key)?.label ?? "";
}

const faqs = [
  { q: "What tolerances can you hold?", a: "±0.0005 in typical, tighter on request." },
  { q: "Lead times?", a: "Rapid prototypes in days; production in weeks." },
  { q: "Materials supported?", a: "Aluminum, steels, titanium, plastics, more." },
];
