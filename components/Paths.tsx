"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  RotateCcw,
} from "lucide-react";

import { paths } from "@/data/paths";
import { Reveal } from "@/components/Reveal";
import { Mark, type MarkName } from "@/components/Icons";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const tones = [
  "bg-[#dfeee7]",
  "bg-[#efe3d2]",
  "bg-[#dfeef0]",
] as const;

const serviceDetails: Record<
  string,
  {
    eyebrow: string;
    intro: string;
    content: string;
    areas: string[];
  }
> = {
  kinesiology: {
    eyebrow: "Movement • Strength • Performance",

    intro:
      "A personalised approach to movement and physical wellbeing, built around your body, your goals and your current level of fitness.",

    content:
      "We look at how you move, how your body feels and what you want to achieve. Sessions can support mobility, strength, fitness, posture, balance and everyday physical confidence. Whether you are starting again, looking to improve your fitness or wanting to move more comfortably, the approach is adapted to you. The focus is not on pushing through discomfort, but on creating meaningful and sustainable progress.",

    areas: [
      "Movement and mobility",
      "Strength and functional fitness",
      "Posture and body awareness",
      "Balance and coordination",
      "Fitness and performance",
    ],
  },

  nutrition: {
    eyebrow: "Nutrition • Energy • Lifestyle",

    intro:
      "Practical nutrition and lifestyle guidance designed to help you feel nourished, energised and more confident about your everyday choices.",

    content:
      "Nutrition is not about following a perfect diet. It is about understanding what your body needs and finding an approach that works within your real life. We explore eating patterns, daily routines, energy, recovery and sustainable habits. The goal is to make healthy choices feel simpler and more achievable, without unnecessary restriction. Small changes can become powerful when they are realistic enough to maintain.",

    areas: [
      "Personalised nutrition guidance",
      "Healthy eating habits",
      "Energy and nourishment",
      "Lifestyle and routine",
      "Sustainable behaviour change",
    ],
  },

  "mental-health": {
    eyebrow: "Mind • Emotions • Wellbeing",

    intro:
      "A supportive space to understand your thoughts, emotions and experiences while developing healthier patterns for everyday life.",

    content:
      "Mental wellbeing can influence how we think, feel, connect and respond to the world around us. Sessions provide space to slow down, understand what is happening and explore practical ways forward. We can work with stress, emotional overwhelm, confidence, self-awareness, thought patterns and personal growth. You do not need to have everything figured out before reaching out. The process starts with understanding where you are.",

    areas: [
      "Emotional wellbeing",
      "Stress and overwhelm",
      "Self-awareness and confidence",
      "Thought patterns and cognition",
      "Healthy coping strategies",
    ],
  },
};

export function Paths() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const openService = (id: string) => {
    setActiveService(id);
  };

  const closeService = () => {
    setActiveService(null);
  };

  const activeIndex = paths.findIndex(
    (path) => path.id === activeService
  );

  const activePath =
    activeIndex >= 0 ? paths[activeIndex] : null;

  const activeDetails = activePath
    ? serviceDetails[activePath.id]
    : null;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="services-reference relative overflow-hidden bg-[#f5f3ef]"
    >
      <div className="services-curve" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 py-[4.5rem] lg:px-8 lg:py-[6.25rem]">
        {/* ------------------------------------------------ */}
        {/* SECTION HEADING */}
        {/* ------------------------------------------------ */}

        <Reveal className="max-w-[42rem]">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#2d6a60]">
            Mindbodymedworks
          </p>

          <h2
            id="services-heading"
            className="mt-4 font-serif text-[clamp(3.6rem,6vw,7rem)] leading-[0.83] tracking-[-0.05em] text-deep-teal"
          >
            Services
          </h2>

          <p className="mt-6 max-w-[32rem] text-[1.05rem] leading-relaxed text-muted">
            A holistic approach to help you feel stronger, calmer and more
            vibrant — inside and out.
          </p>

          <p
            className={cn(
              "mt-4 text-sm font-medium text-deep-teal/50 transition-opacity duration-300",
              activeService && "opacity-0"
            )}
          >
            Select a service to explore
          </p>
        </Reveal>

        {/* ================================================= */}
        {/* NORMAL 3 CARD VIEW */}
        {/* ================================================= */}

        {!activeService && (
          <ul
            className="
              relative z-10 mt-12
              grid gap-6
              md:grid-cols-3
              animate-[fadeIn_0.45s_ease-out]
            "
          >
            {paths.map((path, index) => (
              <li
                key={path.id}
                className="h-[30rem] [perspective:1200px]"
              >
                <button
                  type="button"
                  onClick={() => openService(path.id)}
                  className="group relative h-full w-full text-left outline-none"
                  aria-label={`Learn more about ${path.title}`}
                >
                  <div
                    className={cn(
                      "relative h-full w-full rounded-[1.9rem] px-6 py-6",
                      "shadow-[0_18px_45px_-32px_rgba(23,63,58,0.4)]",
                      "transition-all duration-500 ease-out",
                      "group-hover:-translate-y-2 group-hover:shadow-[0_28px_55px_-30px_rgba(23,63,58,0.42)]",
                      tones[index]
                    )}
                  >
                    {/* Icon */}
                    <div className="flex items-start justify-between">
                      <span
                        className="
                          flex h-14 w-14 items-center justify-center
                          rounded-full bg-white/65
                          text-deep-teal/80
                          transition-transform duration-500
                          group-hover:scale-105
                        "
                      >
                        <Mark
                          name={path.icon as MarkName}
                          className="[&_svg]:h-6 [&_svg]:w-6"
                        />
                      </span>

                      <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-deep-teal/40">
                        {path.code}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-8">
                      <p className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-deep-teal/50">
                        {path.code}
                      </p>

                      <h3 className="mt-3 max-w-[16rem] font-serif text-[2.1rem] leading-[0.96] tracking-[-0.045em] text-deep-teal">
                        {path.title}
                      </h3>

                      <p className="mt-6 max-w-[18rem] text-[0.9rem] leading-[1.7] text-deep-teal/65">
                        {path.summary}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="absolute inset-x-6 bottom-6">
                      <div className="mb-5 h-px bg-deep-teal/10" />

                      <div className="flex items-center justify-between">
                        <span className="text-[0.75rem] font-semibold text-deep-teal">
                          Discover this service
                        </span>

                        <span
                          className="
                            flex h-10 w-10 items-center justify-center
                            rounded-full border border-deep-teal/15
                            text-deep-teal
                            transition-all duration-300
                            group-hover:bg-deep-teal
                            group-hover:text-white
                          "
                        >
                          <ArrowUpRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* ================================================= */}
        {/* SELECTED SERVICE VIEW */}
        {/* ================================================= */}

        {activePath && activeDetails && (
          <div
            key={activePath.id}
            className="
              relative z-10 mt-12
              animate-[serviceOpen_0.6s_cubic-bezier(0.22,1,0.36,1)]
            "
          >
            <article
              className={cn(
                "relative min-h-[34rem] overflow-hidden rounded-[2.2rem]",
                "bg-deep-teal text-cream",
                "shadow-[0_35px_80px_-35px_rgba(23,63,58,0.55)]"
              )}
            >
              {/* Decorative background */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  -right-32 -top-32
                  h-80 w-80
                  rounded-full
                  border border-white/5
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  -bottom-40 -left-20
                  h-80 w-80
                  rounded-full
                  bg-white/[0.025]
                "
              />

              <div className="relative z-10 p-7 sm:p-10 lg:p-14">
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <span
                    className="
                      flex h-14 w-14 items-center justify-center
                      rounded-full bg-white/10
                      text-cream
                    "
                  >
                    <Mark
                      name={activePath.icon as MarkName}
                      className="[&_svg]:h-6 [&_svg]:w-6"
                    />
                  </span>

                  <button
                    type="button"
                    onClick={closeService}
                    className="
                      inline-flex items-center gap-2
                      rounded-full border border-white/15
                      px-4 py-2.5
                      text-xs font-medium
                      text-cream/75
                      transition-colors
                      hover:bg-white/10 hover:text-white
                    "
                  >
                    <RotateCcw size={14} />
                    Back to services
                  </button>
                </div>

                {/* Main content */}
                <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                  {/* Left */}
                  <div>
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-cream/45">
                      {activePath.code}
                    </p>

                    <p className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-cream/55">
                      {activeDetails.eyebrow}
                    </p>

                    <h3
                      className="
                        mt-5 max-w-[30rem]
                        font-serif
                        text-[clamp(2.8rem,5vw,5rem)]
                        leading-[0.9]
                        tracking-[-0.055em]
                      "
                    >
                      {activePath.title}
                    </h3>

                    <p className="mt-7 max-w-[31rem] text-base leading-[1.75] text-cream/75">
                      {activeDetails.intro}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="lg:pt-10">
                    <p className="max-w-[38rem] text-[1rem] leading-[1.8] text-cream/80">
                      {activeDetails.content}
                    </p>

                    {/* Areas */}
                    <div className="mt-8">
                      <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-cream/45">
                        Areas we can explore
                      </p>

                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {activeDetails.areas.map((area) => (
                          <li
                            key={area}
                            className="
                              flex items-start gap-3
                              rounded-xl
                              border border-white/10
                              bg-white/[0.035]
                              px-4 py-3
                              text-sm text-cream/80
                            "
                          >
                            <Check
                              size={15}
                              className="mt-0.5 shrink-0 text-cream/60"
                            />

                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <a
                        href={getWhatsAppUrl(activePath.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group inline-flex items-center gap-3
                          rounded-full
                          bg-cream
                          px-6 py-3.5
                          text-sm font-semibold
                          text-deep-teal
                          transition-all duration-300
                          hover:-translate-y-0.5
                          hover:shadow-lg
                        "
                      >
                        Talk about this service

                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>

                      <button
                        type="button"
                        onClick={closeService}
                        className="
                          inline-flex items-center gap-2
                          rounded-full
                          border border-white/15
                          px-5 py-3.5
                          text-sm font-medium
                          text-cream/70
                          transition-colors
                          hover:bg-white/10 hover:text-white
                        "
                      >
                        <ArrowLeft size={15} />
                        All services
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  );
}