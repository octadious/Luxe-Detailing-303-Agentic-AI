"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cta, primaryNav } from "@/config/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
    }
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className="flex h-11 w-11 items-center justify-center rounded-sm text-foreground transition-colors duration-150 ease-standard hover:text-accent"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {open ? (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 flex flex-col gap-8 overflow-y-auto bg-background px-6 py-10"
        >
          <nav aria-label="Primary">
            <ul className="flex flex-col gap-2">
              {primaryNav.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    ref={index === 0 ? firstLinkRef : undefined}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center text-h3 font-semibold text-foreground transition-colors duration-150 ease-standard hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button href={cta.primary.href} variant="primary" onClick={() => setOpen(false)}>
            {cta.primary.label}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
