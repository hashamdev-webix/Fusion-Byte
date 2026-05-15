"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export type SliderCard = {
  title: string;
  href: string;
  imageSrc: string;
};

type Props = {
  cards: SliderCard[];
  className?: string;
};

export function CardSlider({ cards, className }: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);

  const [isPaused, setIsPaused] = useState(false);

  // duplicate cards for infinite smooth loop
  const safeCards = useMemo(() => {
    const filtered = cards.filter((c) => c?.title);
    return [...filtered, ...filtered];
  }, [cards]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let speed = 0.5; // lower = smoother/slower

    const animate = () => {
      if (!isPaused) {
        el.scrollLeft += speed;

        // reset seamlessly
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  if (safeCards.length === 0) return null;

  return (
    <div
      className={["relative w-full overflow-hidden", className]
        .filter(Boolean)
        .join(" ")}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={scrollerRef}
        className="flex gap-5 overflow-x-scroll scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {safeCards.map((c, i) => (
          <Link
            key={`${c.title}-${i}`}
            href={c.href}
            className="group relative w-[82vw] max-w-[420px] flex-none overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition hover:scale-[1.02] hover:shadow-md sm:w-[420px]"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={c.imageSrc}
                alt={c.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.05]"
                sizes="(min-width: 1024px) 420px, 82vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-lg font-semibold text-white sm:text-xl">
                  {c.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}