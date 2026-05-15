"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Props = {
  images: string[];
  intervalMs?: number;
  className?: string;
};

export function HeroBackgroundSlider({
  images,
  intervalMs = 5500,
  className,
}: Props) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (safeImages.length <= 1) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % safeImages.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [intervalMs, safeImages.length]);

  if (safeImages.length === 0) return null;

  return (
    <div className={["absolute inset-0", className].filter(Boolean).join(" ")}>
      {safeImages.map((src, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={src}
            className={[
              "absolute inset-0 transition-opacity duration-1000 will-change-opacity",
              isActive ? "opacity-100" : "opacity-0",
            ].join(" ")}
            aria-hidden={!isActive}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}

