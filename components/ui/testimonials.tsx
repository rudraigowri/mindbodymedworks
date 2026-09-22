"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export type EditorialTestimonial = {
  id: number;
  quote: string;
  author: string;
  location: string;
};

type TestimonialsEditorialProps = {
  testimonials: EditorialTestimonial[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
};

function getInitials(name: string) {
  const words = name
    .replace(/^Dr\.\s*/i, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

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
  }, [autoPlay, interval, isPaused, nextSlide, testimonials.length]);

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

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-5xl",
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}
      <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-deep-teal/55">
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

        <p className="max-w-sm text-sm leading-7 text-muted sm:text-right">
          Real experiences from people who have worked towards a
          healthier, stronger and more balanced life.
        </p>
      </div>

      {/* =====================================================
          MAIN TESTIMONIAL
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

        {/* Testimonial content */}
        <div className="min-w-0">
          <div
            className={cn(
              "min-h-[280px] transition-all duration-300 sm:min-h-[250px]",
              isTransitioning
                ? "translate-x-4 opacity-0"
                : "translate-x-0 opacity-100"
            )}
          >
            {/* Quote mark */}
            <div
              aria-hidden="true"
              className="
                mb-5
                font-serif
                text-5xl
                leading-none
                text-sage-dark/35
              "
            >
              “
            </div>

            {/* Quote */}
            <blockquote
              className="
                max-w-4xl
                font-serif
                text-[clamp(1.35rem,2.6vw,2.35rem)]
                font-normal
                leading-[1.45]
                tracking-[-0.025em]
                text-deep-teal
              "
            >
              {current.quote}
            </blockquote>

            {/* Author */}
            <div className="mt-10 flex items-center gap-4">
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

              <div>
                <p className="font-medium text-deep-teal">
                  {current.author}
                </p>

                <p className="mt-1 text-sm text-muted">
                  {current.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE NUMBER
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
          CONTROLS
      ====================================================== */}
      <div className="mt-10 flex items-center justify-between border-t border-deep-teal/10 pt-6 sm:mt-14">
        {/* Progress */}
        <div className="flex min-w-0 items-center gap-3 overflow-x-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => changeSlide(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={index === active ? "true" : undefined}
              className="group shrink-0 py-3"
            >
              <span
                className={cn(
                  "block h-px transition-all duration-500",
                  index === active
                    ? "w-12 bg-deep-teal"
                    : "w-5 bg-deep-teal/20 group-hover:w-8 group-hover:bg-deep-teal/40"
                )}
              />
            </button>
          ))}
        </div>

        {/* Navigation */}
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
            aria-label={isPaused ? "Play testimonials" : "Pause testimonials"}
            className="
              ml-2
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