"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Pause,
  Play,
  Quote,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type EditorialTestimonial = {
  id: number;
  author: string;
  location: string;
  quote: string;
};

type TestimonialsEditorialProps = {
  testimonials: EditorialTestimonial[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
};

function getInitials(name: string) {
  const cleanName = name.replace(/^Dr\.\s*/i, "").trim();

  const words = cleanName.split(/\s+/).filter(Boolean);

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
}

export default function TestimonialsEditorial({
  testimonials,
  autoPlay = true,
  interval = 6500,
  className,
}: TestimonialsEditorialProps) {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const changeSlide = useCallback(
    (index: number) => {
      if (
        testimonials.length <= 1 ||
        index === active ||
        isTransitioning
      ) {
        return;
      }

      setIsTransitioning(true);

      window.setTimeout(() => {
        setActive(index);

        window.setTimeout(() => {
          setIsTransitioning(false);
        }, 80);
      }, 260);
    },
    [active, isTransitioning, testimonials.length]
  );

  const nextSlide = useCallback(() => {
    if (!testimonials.length) return;

    const next =
      active === testimonials.length - 1 ? 0 : active + 1;

    changeSlide(next);
  }, [active, changeSlide, testimonials.length]);

  const previousSlide = useCallback(() => {
    if (!testimonials.length) return;

    const previous =
      active === 0 ? testimonials.length - 1 : active - 1;

    changeSlide(previous);
  }, [active, changeSlide, testimonials.length]);

  useEffect(() => {
    if (!autoPlay || isPaused || testimonials.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      nextSlide();
    }, interval);

    return () => window.clearInterval(timer);
  }, [
    autoPlay,
    interval,
    isPaused,
    nextSlide,
    testimonials.length,
  ]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        previousSlide();
      }

      if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, previousSlide]);

  if (!testimonials.length) {
    return null;
  }

  const current = testimonials[active];

  // Each blank line becomes a separate paragraph.
  const paragraphs = current.quote
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div
      className={cn("mx-auto w-full max-w-5xl", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}
      <div className="mb-12 flex flex-col gap-5 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-deep-teal/50">
            Testimonials
          </p>

          <h2
            id="testimonials-heading"
            className="
              max-w-xl
              font-serif
              text-[clamp(2.5rem,5vw,4.8rem)]
              font-normal
              leading-[0.9]
              tracking-[-0.05em]
              text-deep-teal
            "
          >
            What our community says
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-7 text-muted lg:text-right">
          Real experiences from people who have worked towards a
          healthier, stronger and more balanced life.
        </p>
      </div>

      {/* =====================================================
          TESTIMONIAL
      ====================================================== */}
      <div className="grid gap-8 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-12">
        {/* Large number */}
        <div className="hidden lg:block">
          <span
            className="
              block
              select-none
              font-serif
              text-[8rem]
              font-normal
              leading-[0.75]
              tracking-[-0.08em]
              text-deep-teal/[0.08]
            "
          >
            {String(active + 1).padStart(2, "0")}
          </span>

          <div className="mt-8 h-px w-12 bg-deep-teal/20" />

          <p className="mt-4 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-deep-teal/45">
            {String(active + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </p>
        </div>

        {/* Content */}
        <div className="min-w-0">
          <div
            className={cn(
              "transition-all duration-300",
              isTransitioning
                ? "translate-x-4 opacity-0"
                : "translate-x-0 opacity-100"
            )}
          >
            {/* Quote icon */}
            <div
              className="
                mb-6
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-sage
                text-sage-dark
              "
              aria-hidden="true"
            >
              <Quote className="h-4 w-4" />
            </div>

            {/* =================================================
                PARAGRAPHS
            ================================================== */}
            <div className="max-w-4xl space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={`${current.id}-${index}`}
                  className="
                    font-serif
                    text-[1.08rem]
                    leading-[1.8]
                    tracking-[-0.01em]
                    text-deep-teal
                    sm:text-[1.18rem]
                    sm:leading-[1.85]
                    lg:text-[1.28rem]
                    lg:leading-[1.85]
                  "
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* =================================================
                AUTHOR
            ================================================== */}
            <div className="mt-10 flex items-center gap-4 border-t border-deep-teal/10 pt-7 sm:mt-12">
              {/* Initial avatar */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-sage
                  text-sm
                  font-semibold
                  tracking-wide
                  text-deep-teal
                  ring-1
                  ring-deep-teal/10
                "
                aria-hidden="true"
              >
                {getInitials(current.author)}
              </div>

              <div className="min-w-0">
                <p className="font-medium text-deep-teal">
                  {current.author}
                </p>

                {/* Location with icon */}
                <div className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                  <MapPin
                    className="h-3.5 w-3.5 shrink-0 text-sage-dark"
                    aria-hidden="true"
                  />

                  <span>{current.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE STATUS
      ====================================================== */}
      <div className="mt-8 flex items-center justify-between border-t border-deep-teal/10 pt-5 lg:hidden">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-deep-teal/45">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(testimonials.length).padStart(2, "0")}
        </span>

        <span className="text-xs text-muted">
          {isPaused ? "Paused" : "Auto playing"}
        </span>
      </div>

      {/* =====================================================
          NAVIGATION
      ====================================================== */}
      <div className="mt-8 flex items-center justify-between border-t border-deep-teal/10 pt-5 sm:mt-12 sm:pt-6">
        {/* Progress indicators */}
        <div className="flex min-w-0 items-center gap-1.5 overflow-x-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => changeSlide(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={index === active ? "true" : undefined}
              className="group shrink-0 px-1 py-3"
            >
              <span
                className={cn(
                  "block h-px transition-all duration-500",
                  index === active
                    ? "w-10 bg-deep-teal sm:w-12"
                    : "w-4 bg-deep-teal/20 group-hover:w-7 group-hover:bg-deep-teal/40"
                )}
              />
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="ml-4 flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous testimonial"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              text-deep-teal/50
              transition
              hover:bg-deep-teal/5
              hover:text-deep-teal
            "
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              text-deep-teal/50
              transition
              hover:bg-deep-teal/5
              hover:text-deep-teal
            "
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => setIsPaused((value) => !value)}
            aria-label={
              isPaused
                ? "Play testimonials"
                : "Pause testimonials"
            }
            className="
              ml-1
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-deep-teal/10
              text-deep-teal/45
              transition
              hover:border-deep-teal/20
              hover:bg-deep-teal/5
              hover:text-deep-teal
            "
          >
            {isPaused ? (
              <Play className="h-4 w-4" />
            ) : (
              <Pause className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}