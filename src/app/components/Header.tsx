"use client";

import Image from "next/image";
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black text-white">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpeg"
            width={0}
            height={0}
            sizes="(min-width: 1280px) 256px, (min-width: 640px) 224px, 192px"
            alt="FusionByte logo"
            className="h-auto w-48 sm:w-56 xl:w-64"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-lg font-medium text-white/90 lg:flex">
          <Link href="/">Home</Link>
          <MegaMenu
            label="Services"
            triggerHref="/what-we-do"
            groups={whatWeDoMegaMenu}
            layout="stack"
            featured={{
              title: "Enterprise Technology Services",
              description:
                "AI/ML, cloud, cybersecurity, modernization, marketing tech, and political technology delivered with enterprise discipline.",
              href: "/what-we-do",
            }}
          />
          <MegaMenu
            label="Solutions"
            triggerHref="/solutions"
            groups={solutionsMegaMenu}
            layout="stack"
            featured={{
              title: "Outcome-Driven Solutions",
              description:
                "Strategy, engineering, security, and emerging tech delivered as scalable programs with measurable milestones.",
              href: "/solutions",
            }}
          />
          <MegaMenu
            label="Who We Are"
            triggerHref="/who-we-are"
            groups={whoWeAreMegaMenu}
            layout="stack"
            featured={{
              title: "Technology Partner for Digital Transformation in Canada",
              description:
                "Learn how we operate: our methodology, values, and the enterprise approach behind every engagement.",
              href: "/who-we-are",
            }}
          />
          <SimpleMenu
            label="Careers"
            triggerHref="/careers"
            items={careersMenu}
          />
          <Link
            href="/contact-us"
            className="rounded-md px-2 py-1 transition-colors hover:text-white"
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

          <Link
            href="/"
            className="hidden h-12 w-16 shrink-0 items-center justify-center md:flex"
          >
            <Image
              src="/mono.jpeg"
              width={64}
              height={48}
              sizes="64px"
              alt="FusionByte monogram"
              className="h-12 w-16 object-contain"
            />
          </Link>

          <button
            type="button"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 lg:hidden"
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
        <div id="mobile-nav" className="border-t border-white/10 lg:hidden">
          <div className="w-full px-0 py-4">
            <div className="flex flex-col gap-2">
              <details className="rounded-xl border border-white/10 bg-black">
                <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-white">
                  Services
                </summary>
                <div className="space-y-4 px-4 pb-4">
                  <Link
                    href="/what-we-do"
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  {whatWeDoMegaMenu.map((group) => (
                    <div key={group.title}>
                      <p className="text-xs font-semibold tracking-widest text-white/70">
                        {group.title.toUpperCase()}
                      </p>
                      <div className="mt-2 space-y-1">
                        {group.items.map((item) => (
                          <Link
                            key={`${group.title}-${item.title}`}
                            href={item.href}
                            className="block rounded-xl px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
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

              <details className="rounded-xl border border-white/10 bg-black">
                <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-white">
                  Solutions
                </summary>
                <div className="px-4 pb-4">
                  <Link
                    href="/solutions"
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  {solutionsMegaMenu.map((group) => (
                    <div key={group.title} className="mt-4">
                      <p className="text-xs font-semibold tracking-widest text-white/70">
                        {group.title.toUpperCase()}
                      </p>
                      <div className="mt-2 space-y-1">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-xl px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
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

              <details className="rounded-xl border border-white/10 bg-black">
                <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-white">
                  Who We Are
                </summary>
                <div className="px-4 pb-4">
                  <Link
                    href="/who-we-are"
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  {whoWeAreMegaMenu.map((group) => (
                    <div key={group.title} className="mt-4">
                      <p className="text-xs font-semibold tracking-widest text-white/70">
                        {group.title.toUpperCase()}
                      </p>
                      <div className="mt-2 space-y-1">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-xl px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
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

              <details className="rounded-xl border border-white/10 bg-black">
                <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-white">
                  Careers
                </summary>
                <div className="px-4 pb-4">
                  {careersMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-white hover:bg-white/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </details>

              <Link
                href="/contact-us"
                className="rounded-xl px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
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
