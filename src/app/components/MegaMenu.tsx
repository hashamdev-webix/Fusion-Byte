"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { NavGroup } from "./nav";

type Props = {
  label: string;
  groups: NavGroup[];
  triggerHref?: string;
  featured?: {
    title: string;
    description: string;
    href: string;
    ctaLabel?: string;
  };
  layout?: "grid" | "stack";
};

export function MegaMenu({
  label,
  groups,
  triggerHref,
  featured,
}: Props) {
  const id = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  function openMenu() {
    setOpen(true);
  }

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
      onMouseEnter={openMenu}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={triggerHref ?? "#"}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={id}
        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-inherit transition-colors hover:text-inherit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        onFocus={openMenu}
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
          className={[
            "absolute left-1/2 top-full mt-0 -translate-x-1/2 overflow-hidden rounded-[18px] border border-white/15 bg-black p-6 text-white shadow-2xl",
            groups.length > 6
              ? "w-[min(1040px,calc(100vw-2rem))]"
              : "w-[min(940px,calc(100vw-2rem))]",
          ].join(" ")}
        >
          <div className="max-h-[72vh] overflow-auto font-mono text-sm leading-7">
            <div className="border-y border-dashed border-white/65 px-3 py-2 uppercase">
              | {label}
              <span className="float-right">|</span>
            </div>

            <div
              className={[
                "grid border-b border-dashed border-white/65 py-4",
                groups.length > 3 ? "grid-cols-3" : "grid-cols-2",
              ].join(" ")}
            >
              {groups.map((group, index) => (
                <div
                  key={group.title}
                  className={[
                    "min-w-0 border-r border-dashed border-white/65 px-3 py-2 last:border-r",
                    index >= (groups.length > 3 ? 3 : 2)
                      ? "border-t"
                      : "",
                  ].join(" ")}
                >
                  <p className="truncate uppercase">| {group.title}</p>
                  <ul className="mt-1">
                    {group.items.map((item) => (
                      <li key={`${item.href}-${item.title}`}>
                        <Link
                          href={item.href}
                          className="block truncate text-white/90 hover:text-primary"
                          onClick={() => setOpen(false)}
                        >
                          | - {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {featured ? (
              <div className="border-b border-dashed border-white/65 px-3 py-3">
                {featured.title === featured.ctaLabel ? null : (
                  <>
                    <p>| FEATURED RIGHT PANEL:</p>
                    <Link
                      href={featured.href}
                      className="block text-white/90 hover:text-primary"
                      onClick={() => setOpen(false)}
                    >
                      | &quot;{featured.title}&quot;
                    </Link>
                  </>
                )}
                <Link
                  href={featured.href}
                  className={[
                    "block text-white/90 hover:text-primary",
                    featured.title === featured.ctaLabel
                      ? "text-center"
                      : "mt-1",
                  ].join(" ")}
                  onClick={() => setOpen(false)}
                >
                  | [ {featured.ctaLabel ?? "Explore All Services"} ]
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
