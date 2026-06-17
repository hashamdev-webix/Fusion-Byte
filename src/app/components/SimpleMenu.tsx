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
        <span aria-hidden="true">&#9660;</span>
      </Link>

      {open ? (
        <div
          id={id}
          role="menu"
          className="absolute left-1/2 top-full mt-0 w-[min(760px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-[18px] border border-white/15 bg-black p-6 text-white shadow-2xl"
        >
          <div className="font-mono text-sm leading-8">
            <div className="border-y border-dashed border-white/65 px-3 py-2 uppercase">
              | {label}
              <span className="float-right">|</span>
            </div>

            <div className="border-b border-dashed border-white/65 px-3 py-5">
              <p>|</p>
              <p>| WANT TO MAKE A CHANGE</p>
              <p>
                | - Explore opportunities to work on AI, Cloud, Cyber Security,
              </p>
              <p>| &nbsp;Digital Transformation, and Enterprise Technology projects.</p>
              <Link
                href={items[0]?.href ?? triggerHref ?? "#"}
                className="mt-4 block text-white/90 hover:text-primary"
                onClick={() => setOpen(false)}
              >
                | [ View Opportunities ]
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
