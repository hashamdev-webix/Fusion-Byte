"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MegaMenu } from "./MegaMenu";
import { SimpleMenu } from "./SimpleMenu";
import {
  careersMenu,
  solutionsMegaMenu,
  whatWeDoMegaMenu,
  whoWeAreMegaMenu,
} from "./nav";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/85 backdrop-blur supports-[backdrop-filter]:bg-surface/70">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <span className="text-sm font-bold tracking-tight">FB</span>
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-foreground">FusionByte</p>
            <p className="text-xs text-muted-foreground">
              IT Consultation & Solutions
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/90 lg:flex">
          <MegaMenu
            label="What We Do"
            groups={whatWeDoMegaMenu}
            layout="stack"
            featured={{
              title: "Enterprise Technology Services",
              description:
                "AI/ML, cloud, cybersecurity, modernization, marketing tech, and political technology—delivered with enterprise discipline.",
              href: "/what-we-do",
            }}
          />
          <MegaMenu
            label="Solutions"
            groups={solutionsMegaMenu}
            layout="stack"
            featured={{
              title: "Outcome-Driven Solutions",
              description:
                "Strategy, engineering, security, and emerging tech—delivered as scalable programs with measurable milestones.",
              href: "/solutions",
            }}
          />
          <MegaMenu
            label="Who We Are"
            groups={whoWeAreMegaMenu}
            layout="stack"
            featured={{
              title: "Technology Partner for Digital Transformation in Canada",
              description:
                "Learn how we operate—our methodology, values, and the enterprise approach behind every engagement.",
              href: "/who-we-are",
            }}
          />
          <SimpleMenu label="Careers" items={careersMenu} />
          <Link
            href="/contact-us"
            className="rounded-md px-2 py-1 transition-colors hover:text-foreground"
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/get-a-quote"
            className="hidden h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 lg:flex"
          >
            Get a Quote
          </Link>

          <button
            type="button"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border bg-surface px-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-surface-2 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <span className="text-xs tracking-wide">
              {isMenuOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div id="mobile-nav" className="border-t border-border lg:hidden">
          <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2">
              <details className="rounded-xl border border-border bg-surface">
                <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-foreground">
                  What We Do
                </summary>
                <div className="space-y-4 px-4 pb-4">
                  <Link
                    href="/what-we-do"
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-surface-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  {whatWeDoMegaMenu.map((group) => (
                    <div key={group.title}>
                      <p className="text-xs font-semibold tracking-widest text-muted-foreground">
                        {group.title.toUpperCase()}
                      </p>
                      <div className="mt-2 space-y-1">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-surface-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </details>

              <details className="rounded-xl border border-border bg-surface">
                <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-foreground">
                  Solutions
                </summary>
                <div className="px-4 pb-4">
                  <Link
                    href="/solutions"
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-surface-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  {solutionsMegaMenu.map((group) => (
                    <div key={group.title} className="mt-4">
                      <p className="text-xs font-semibold tracking-widest text-muted-foreground">
                        {group.title.toUpperCase()}
                      </p>
                      <div className="mt-2 space-y-1">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-surface-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </details>

              <details className="rounded-xl border border-border bg-surface">
                <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-foreground">
                  Who We Are
                </summary>
                <div className="px-4 pb-4">
                  <Link
                    href="/who-we-are"
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-surface-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  {whoWeAreMegaMenu.map((group) => (
                    <div key={group.title} className="mt-4">
                      <p className="text-xs font-semibold tracking-widest text-muted-foreground">
                        {group.title.toUpperCase()}
                      </p>
                      <div className="mt-2 space-y-1">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-surface-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </details>

              <details className="rounded-xl border border-border bg-surface">
                <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-foreground">
                  Careers
                </summary>
                <div className="px-4 pb-4">
                  {careersMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-surface-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </details>

              <Link
                href="/contact-us"
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>

              <Link
                href="/get-a-quote"
                className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
