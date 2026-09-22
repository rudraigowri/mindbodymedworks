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
    points: string[];
  }
> = {
  kinesiology: {
    eyebrow: "Movement • Strength • Fitness",

    intro:
      "Science-led kinesiology and movement strategies to improve body composition, strength and fat loss.",

    content:
      "Movement is an important part of metabolic health, strength and long-term wellbeing. Our approach is personalised to your age, body, goals and stage of life, with a focus on building strength, improving movement quality and supporting sustainable changes in body composition.",

    points: [
      "Fat loss and muscle gain at every age",
      "Menopause-related fat-loss support",
      "Fat gain and muscle loss associated with PCOS, Hashimoto’s, thyroid disorders and hormonal changes",
      "Strength and movement support through adolescence, adulthood, perimenopause and menopause",
      "Low bone density, osteopenia and osteoporosis — strength, bone health and functional fitness",
      "Pain relief, posture, mobility and movement strategies",
    ],
  },

  nutrition: {
    eyebrow: "Nutrition • Metabolism • Lifestyle",

    intro:
      "Personalized nutrition strategies to support body composition, metabolism, hormones, energy and long-term health.",

    content:
      "Nutrition is personalised around your body, health needs, lifestyle and stage of life. The focus is on practical strategies that support body composition, metabolic health, energy, recovery and sustainable lifestyle changes, while taking individual health conditions and goals into account.",

    points: [
      "Fat loss while preserving muscle and muscle-building nutrition at every age",
      "Nutrition support for PCOS, thyroid disorders, Hashimoto’s, perimenopause and menopause",
      "Nutrition support for diabetes, high blood pressure, metabolic and cardiovascular concerns",
      "Psychiatric nutrition support alongside mental health and psychiatric conditions",
      "Life-stage nutrition, training and recovery",
      "Bone health, energy, vitality and sustainable lifestyle optimisation",
    ],
  },

  "mental-health": {
    eyebrow: "Mental Health • Emotional Wellness • Cognition",

    intro:
      "Structured mental health assessment and evidence-based therapeutic support for emotional, cognitive and behavioural well-being.",

    content:
      "Mental wellbeing is closely connected to how we think, feel, behave and respond to everyday life. Our approach provides structured support for emotional wellbeing, cognitive health and behavioural patterns, helping you develop greater self-awareness, resilience and healthier ways of coping.",

    points: [
      "CBT-based therapy for stress, anxiety, thoughts and behavioural patterns",
      "Emotional regulation, resilience, self-awareness and healthy coping",
      "Trauma and PTSD support and psychological well-being",
      "Brain fog, forgetfulness, attention, memory and mental fatigue",
      "Menopausal cognitive changes and emotional wellness",
      "Healthy cognitive ageing and long-term mental wellbeing",
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

        {/* =========================================================
            SECTION HEADING
        ========================================================== */}

        <Reveal className="max-w-[42rem]">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#2d6a60]">
            Mindbodymedworks
          </p>

          <h2
            id="services-heading"
            className="
              mt-4
              font-serif
              text-[clamp(3.6rem,6vw,7rem)]
              leading-[0.83]
              tracking-[-0.05em]
              text-deep-teal
            "
          >
            Services
          </h2>

          <p className="mt-6 max-w-[32rem] text-[1.05rem] leading-relaxed text-muted">
            A holistic approach to help you feel stronger, calmer and more
            vibrant — inside and out.
          </p>

          {!activeService && (
            <p className="mt-4 text-sm font-medium text-deep-teal/50">
              Select a service to explore
            </p>
          )}
        </Reveal>

        {/* =========================================================
            THREE SERVICE CARDS
        ========================================================== */}

        {!activeService && (
          <ul
            className="
              relative
              z-10
              mt-12
              grid
              gap-6
              md:grid-cols-3
              animate-[fadeIn_0.45s_ease-out]
            "
          >
            {paths.map((path, index) => (
              <li
                key={path.id}
                className="h-[30rem]"
              >
                <button
                  type="button"
                  onClick={() => openService(path.id)}
                  className="
                    group
                    relative
                    h-full
                    w-full
                    text-left
                    outline-none
                    focus-visible:ring-2
                    focus-visible:ring-deep-teal/40
                    focus-visible:ring-offset-4
                  "
                  aria-label={`Learn more about ${path.title}`}
                >
                  <div
                    className={cn(
                      "relative h-full w-full rounded-[1.9rem] px-6 py-6",
                      "shadow-[0_18px_45px_-32px_rgba(23,63,58,0.4)]",
                      "transition-all duration-500 ease-out",
                      "group-hover:-translate-y-2",
                      "group-hover:shadow-[0_28px_55px_-30px_rgba(23,63,58,0.42)]",
                      tones[index]
                    )}
                  >
                    {/* Icon */}
                    <div className="flex items-start justify-between">
                      <span
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-full
                          bg-white/65
                          text-deep-teal/80
                          transition-transform
                          duration-500
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

                    {/* Card content */}
                    <div className="mt-8">
                      <p className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-deep-teal/50">
                        {path.code}
                      </p>

                      <h3
                        className="
                          mt-3
                          max-w-[17rem]
                          font-serif
                          text-[2.1rem]
                          leading-[0.96]
                          tracking-[-0.045em]
                          text-deep-teal
                        "
                      >
                        {path.title}
                      </h3>

                      <p
                        className="
                          mt-6
                          max-w-[18rem]
                          text-[0.9rem]
                          leading-[1.7]
                          text-deep-teal/65
                        "
                      >
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
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-deep-teal/15
                            text-deep-teal
                            transition-all
                            duration-300
                            group-hover:bg-deep-teal
                            group-hover:text-white
                          "
                        >
                          <ArrowUpRight
                            size={17}
                            className="
                              transition-transform
                              duration-300
                              group-hover:translate-x-0.5
                              group-hover:-translate-y-0.5
                            "
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

        {/* =========================================================
            SELECTED SERVICE
        ========================================================== */}

        {activePath && activeDetails && (
          <div
            key={activePath.id}
            className="
              relative
              z-10
              mt-12
              animate-[serviceOpen_0.6s_cubic-bezier(0.22,1,0.36,1)]
            "
          >
            <article
              className="
                relative
                min-h-[34rem]
                overflow-hidden
                rounded-[2.2rem]
                bg-deep-teal
                text-cream
                shadow-[0_35px_80px_-35px_rgba(23,63,58,0.55)]
              "
            >
              {/* Decorative circles */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-32
                  -top-32
                  h-80
                  w-80
                  rounded-full
                  border
                  border-white/5
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-40
                  -left-20
                  h-80
                  w-80
                  rounded-full
                  bg-white/[0.025]
                "
              />

              <div className="relative z-10 p-7 sm:p-10 lg:p-14">

                {/* Top controls */}
                <div className="flex items-center justify-between">
                  <span
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-white/10
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
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/15
                      px-4
                      py-2.5
                      text-xs
                      font-medium
                      text-cream/75
                      transition-colors
                      hover:bg-white/10
                      hover:text-white
                    "
                  >
                    <RotateCcw size={14} />
                    Back to services
                  </button>
                </div>

                {/* Main content */}
                <div
                  className="
                    mt-10
                    grid
                    gap-10
                    lg:grid-cols-[0.85fr_1.15fr]
                    lg:gap-16
                  "
                >
                  {/* LEFT */}
                  <div>
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-cream/45">
                      {activePath.code}
                    </p>

                    <p className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-cream/55">
                      {activeDetails.eyebrow}
                    </p>

                    <h3
                      className="
                        mt-5
                        max-w-[30rem]
                        font-serif
                        text-[clamp(2.8rem,5vw,5rem)]
                        leading-[0.9]
                        tracking-[-0.055em]
                      "
                    >
                      {activePath.title}
                    </h3>

                    <p
                      className="
                        mt-7
                        max-w-[31rem]
                        text-base
                        leading-[1.75]
                        text-cream/75
                      "
                    >
                      {activeDetails.intro}
                    </p>
                  </div>

                  {/* RIGHT */}
                  <div className="lg:pt-10">

                    {/* Detailed paragraph */}
                    <p
                      className="
                        max-w-[38rem]
                        text-[1rem]
                        leading-[1.8]
                        text-cream/80
                      "
                    >
                      {activeDetails.content}
                    </p>

                    {/* Service points */}
                    <ul className="mt-8 space-y-3">
                      {activeDetails.points.map((point) => (
                        <li
                          key={point}
                          className="
                            flex
                            items-start
                            gap-3
                            border-b
                            border-white/10
                            pb-3
                            text-sm
                            leading-[1.5]
                            text-cream/85
                          "
                        >
                          <Check
                            size={16}
                            className="
                              mt-0.5
                              shrink-0
                              text-cream/60
                            "
                          />

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <a
                        href={getWhatsAppUrl(activePath.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group
                          inline-flex
                          items-center
                          gap-3
                          rounded-full
                          bg-cream
                          px-6
                          py-3.5
                          text-sm
                          font-semibold
                          text-deep-teal
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:shadow-lg
                        "
                      >
                        Talk about this service

                        <ArrowUpRight
                          size={16}
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                          "
                        />
                      </a>

                      <button
                        type="button"
                        onClick={closeService}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-white/15
                          px-5
                          py-3.5
                          text-sm
                          font-medium
                          text-cream/70
                          transition-colors
                          hover:bg-white/10
                          hover:text-white
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