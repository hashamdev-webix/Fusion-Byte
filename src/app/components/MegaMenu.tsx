"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { NavGroup } from "./nav";

type Props = {
  label: string;
  groups: NavGroup[];
  featured?: {
    title: string;
    description: string;
    href: string;
  };
  layout?: "grid" | "stack";
};

export function MegaMenu({ label, groups, featured, layout = "grid" }: Props) {
  const id = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [activeGroupIndex, setActiveGroupIndex] = useState<number | null>(null);

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
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={id}
        className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-inherit transition-colors hover:text-inherit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        onClick={() => {
          if (!open) setActiveGroupIndex(null);
          setOpen((v) => !v);
        }}
      >
        <span>{label}</span>
        <span className="text-xs text-muted-foreground">▼</span>
      </button>

      {open ? (
        <div
          id={id}
          role="menu"
          className={[
            "absolute left-1/2 top-full mt-3 -translate-x-1/2 overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl",
            layout === "stack"
              ? "w-[min(980px,calc(100vw-1.5rem))]"
              : "w-[min(1120px,calc(100vw-1.5rem))]",
          ].join(" ")}
        >
          <div className="max-h-[70vh] overflow-auto">
          <div className="border-b border-border bg-surface-2/30 px-6 py-4 sm:px-8">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground">
              {label.toUpperCase()}
            </p>
          </div>

          <div className="grid gap-0 lg:grid-cols-12">
            {featured ? (
              <div className="hidden border-r border-border bg-surface-2/20 p-8 lg:col-span-4 lg:block">
                <p className="text-sm font-semibold text-foreground">
                  {featured.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {featured.description}
                </p>
                <Link
                  href={featured.href}
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                >
                  Overview
                </Link>
              </div>
            ) : null}

            <div
              className={(featured ? "lg:col-span-8" : "lg:col-span-12") + " p-2 sm:p-3"}
            >
              {layout === "stack" ? (
                <div className="grid gap-0 lg:grid-cols-12">
                  <div className="border-b border-border lg:col-span-4 lg:border-b-0 lg:border-r">
                    <ul className="p-2">
                      {groups.map((group, index) => {
                        const isActive = index === activeGroupIndex;
                        return (
                          <li key={group.title}>
                            <button
                              type="button"
                              className={[
                                "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-colors",
                                isActive
                                  ? "bg-surface-2 text-foreground"
                                  : "text-muted-foreground hover:bg-surface-2 hover:text-foreground",
                              ].join(" ")}
                              onMouseEnter={() => setActiveGroupIndex(index)}
                              onFocus={() => setActiveGroupIndex(index)}
                              onClick={() => setActiveGroupIndex(index)}
                            >
                              <span className="tracking-wide">
                                {group.title}
                              </span>
                              <span className="text-lg leading-none">›</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="lg:col-span-8">
                    <div className="p-4 sm:p-5">
                      {activeGroupIndex === null ? null : (
                        <>
                          <p className="text-xs font-semibold tracking-widest text-muted-foreground">
                            {groups[activeGroupIndex]?.title.toUpperCase()}
                          </p>
                          <ul className="mt-4 space-y-1">
                            {(groups[activeGroupIndex]?.items ?? []).map(
                              (item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
                                    onClick={() => setOpen(false)}
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              ),
                            )}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
                  {groups.map((group) => (
                    <div
                      key={group.title}
                      className="group border-b border-border p-5 sm:border-r [&:nth-child(2n)]:sm:border-r-0 lg:border-b lg:border-r [&:nth-child(3n)]:lg:border-r-0"
                    >
                      <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-muted-foreground">
                        <span>{group.title.toUpperCase()}</span>
                        <span className="text-[10px] opacity-70">▼</span>
                      </p>
                      <ul className="mt-3 max-h-0 space-y-1 overflow-hidden opacity-0 transition-all duration-200 group-hover:max-h-40 group-hover:opacity-100 group-focus-within:max-h-40 group-focus-within:opacity-100">
                        {group.items.map((item) => (
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
                  ))}
                </div>
              )}
            </div>
          </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
