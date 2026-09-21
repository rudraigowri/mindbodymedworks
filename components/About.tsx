"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type AboutImage = {
  src: string;
  alt: string;
  label: string;
};

/*
 * Add more photos here.
 *
 * Put the image files inside:
 * public/images/
 *
 * Example:
 *
 * {
 *   src: "/images/image2.jpg",
 *   alt: "Wellness coaching session",
 *   label: "Guidance",
 * },
 */

const aboutImages: AboutImage[] = [
  {
    src: site.portraitSrc,
    alt: site.portraitAlt,
    label: "Wellness",
  },
  {
    src: "/images/image1.jpeg",
    alt: "Wellness and wellbeing",
    label: "Guidance",
  },
  {
    src: "/images/image2.jpeg",
    alt: "Movement and wellness",
    label: "Movement",
  },
];

export function About() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = aboutImages.length;

  const next = () => {
    setDirection(1);
    setActive((current) => (current + 1) % total);
  };

  const previous = () => {
    setDirection(-1);
    setActive((current) => (current - 1 + total) % total);
  };

  /*
   * Automatically change images every 6 seconds.
   */
  useEffect(() => {
    if (total <= 1) return;

    const timer = window.setInterval(() => {
      setDirection(1);

      setActive((current) => (current + 1) % total);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [total]);

  const currentImage = aboutImages[active];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-background"
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sage/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cream/80 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">

        {/* Section label */}
        <div className="mb-14 flex items-center gap-4">
          <span className="h-px w-10 bg-sage-dark/30" />

          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-sage-dark">
            About my approach
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

          {/* =========================================
              IMAGE CAROUSEL
          ========================================== */}
          <div className="relative">

            {/* Decorative circle */}
            <div
              aria-hidden="true"
              className="absolute -left-8 top-10 h-24 w-24 rounded-full border border-sage-dark/10 bg-sage/20"
            />

            {/* Images + quote */}
            <div className="relative z-10 grid grid-cols-[1.25fr_0.9fr] gap-4">

              {/* Main image */}
              <div className="relative aspect-[0.78] overflow-hidden rounded-[2rem] bg-sage/10 shadow-[0_25px_70px_-30px_rgba(23,63,58,0.35)]">

                <AnimatePresence
                  mode="wait"
                  initial={false}
                  custom={direction}
                >
                  <motion.div
                    key={currentImage.src}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      x: direction > 0 ? 35 : -35,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: direction > 0 ? -35 : 35,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentImage.src}
                      alt={currentImage.alt}
                      fill
                      priority={active === 0}
                      sizes="(max-width: 1024px) 65vw, 34vw"
                      className="object-cover"
                    />

                    {/* Image gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/25 via-transparent to-transparent" />

                    {/* Image label */}
                    <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                      {currentImage.label}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Quote card */}
              <div className="relative flex min-h-[20rem] items-center justify-center overflow-hidden rounded-[2rem] border border-sage-dark/10 bg-cream px-6 py-8">

                {/* Decorative circle */}
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-sage-dark/10"
                />

                <div className="relative">
                  <span className="mb-5 block font-serif text-4xl leading-none text-sage-dark/50">
                    “
                  </span>

                  <p className="font-serif text-[1.25rem] leading-[1.45] text-deep-teal">
                    A healthier you is a brighter world.
                  </p>

                  <div className="mt-7 h-px w-8 bg-sage-dark/30" />
                </div>
              </div>
            </div>

            {/* Carousel controls */}
            <div className="relative z-20 mt-5 flex items-center justify-between">

              {/* Counter */}
              <div className="flex items-center gap-2 text-sm text-deep-teal/70">
                <span className="font-medium text-deep-teal">
                  {String(active + 1).padStart(2, "0")}
                </span>

                <span>/</span>

                <span>
                  {String(total).padStart(2, "0")}
                </span>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {aboutImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    aria-label={`Show image ${index + 1}`}
                    aria-current={active === index}
                    onClick={() => {
                      setDirection(index > active ? 1 : -1);
                      setActive(index);
                    }}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      active === index
                        ? "w-8 bg-deep-teal"
                        : "w-1.5 bg-deep-teal/20 hover:bg-deep-teal/40"
                    )}
                  />
                ))}
              </div>

              {/* Previous / Next */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous image"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-deep-teal/10 bg-white/60 text-deep-teal transition-all hover:-translate-x-0.5 hover:bg-sage"
                >
                  <ArrowLeft
                    size={17}
                    strokeWidth={1.7}
                  />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-deep-teal/10 bg-white/60 text-deep-teal transition-all hover:translate-x-0.5 hover:bg-sage"
                >
                  <ArrowRight
                    size={17}
                    strokeWidth={1.7}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* =========================================
              CONTENT
          ========================================== */}
          <div className="lg:pl-4">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-sage-dark">
              A whole-person approach
            </p>

            <h2
              id="about-heading"
              className="max-w-[12ch] font-serif text-[clamp(3rem,5vw,5rem)] leading-[0.92] tracking-[-0.055em] text-deep-teal"
            >
              A more balanced,
              <br />
              brighter you
            </h2>

            <p className="mt-8 max-w-[52ch] text-[1rem] leading-[1.85] text-muted sm:text-[1.05rem]">
              My background in mental health, movement, and wellness shaped a
              whole-person approach to care. I work with women to support both
              physical strength and emotional wellbeing, helping them feel more
              balanced, confident, and at ease in their bodies.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-deep-teal"
            >
              <span className="border-b border-deep-teal/30 pb-1 transition-colors group-hover:border-deep-teal">
                Continue reading
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.7}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Statistics */}
            <div className="mt-14 grid grid-cols-3 border-t border-deep-teal/10 pt-7">

              <div>
                <p className="font-serif text-2xl text-deep-teal">
                  1K+
                </p>

                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                  Lives Impacted
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl text-deep-teal">
                  95%
                </p>

                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                  Client Satisfaction
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl text-deep-teal">
                  3
                </p>

                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                  Integrated Pathways
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}