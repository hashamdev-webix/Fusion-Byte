"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "./nav";

type Props = {
  label: string;
  items: NavItem[];
  triggerHref?: string;
};

export function SimpleMenu({ label, items, triggerHref }: Props) {
  const id = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      const el = rootRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={triggerHref ?? "#"}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={id}
        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-inherit transition-colors hover:text-inherit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        onFocus={() => setOpen(true)}
        onClick={(event) => {
          if (triggerHref) return;
          event.preventDefault();
          setOpen((current) => !current);
        }}
      >
        <span>{label}</span>
        <span className="text-xs text-muted-foreground">v</span>
      </Link>

      {open ? (
        <div
          id={id}
          role="menu"
          className="absolute left-0 top-full mt-0 w-72 overflow-hidden rounded-2xl border border-border bg-surface shadow-xl"
        >
          <ul className="p-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm text-foreground transition-colors hover:bg-surface-2"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
