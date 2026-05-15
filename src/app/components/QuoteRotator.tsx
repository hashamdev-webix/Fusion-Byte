"use client";

import { useEffect, useMemo, useState } from "react";

export function QuoteRotator() {
  const quotes = useMemo(
    () => [
      "Transforming Businesses Through Intelligent Technology Solutions.",
      "Driving Digital Transformation Across Canada.",
      "Innovation. Security. Scalability.",
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % quotes.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [quotes.length]);

  return (
    <div className="relative min-h-[4.8rem] overflow-hidden sm:min-h-[5.6rem] lg:min-h-[6.2rem]">
      {quotes.map((quote, index) => {
        const isActive = index === activeIndex;
        return (
          <p
            key={quote}
            className={[
              "absolute inset-0 flex items-start justify-center px-2 text-balance text-center text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:items-center sm:text-4xl",
              "transition-all duration-700 will-change-transform py-3",
              isActive
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6",
            ].join(" ")}
            aria-hidden={!isActive}
          >
            {quote}
          </p>
        );
      })}
    </div>
  );
}
