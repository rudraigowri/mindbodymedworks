"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
} from "lucide-react";

import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type AboutImage = {
  src: string;
  alt: string;
  label: string;
};

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
  const [showAbout, setShowAbout] = useState(false);

  const total = aboutImages.length;

  const next = () => {
    setDirection(1);
    setActive((current) => (current + 1) % total);
  };

  const previous = () => {
    setDirection(-1);
    setActive((current) => (current - 1 + total) % total);
  };

  // Automatically change images every 6 seconds.
  useEffect(() => {
    if (total <= 1 || showAbout) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setActive((current) => (current + 1) % total);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [total, showAbout]);

  // Lock page scrolling while the About Me modal is open.
  useEffect(() => {
    if (!showAbout) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowAbout(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showAbout]);

  const currentImage = aboutImages[active];

  return (
    <>
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
            {/* IMAGE CAROUSEL */}
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

                  <span>{String(total).padStart(2, "0")}</span>
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
                    <ArrowLeft size={17} strokeWidth={1.7} />
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next image"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-deep-teal/10 bg-white/60 text-deep-teal transition-all hover:translate-x-0.5 hover:bg-sage"
                  >
                    <ArrowRight size={17} strokeWidth={1.7} />
                  </button>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="lg:pl-4">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-sage-dark">
                A whole-person approach
              </p>

              <h2
                id="about-heading"
                className="max-w-[12ch] font-serif text-[clamp(3rem,5vw,5rem)] leading-[0.92] tracking-[-0.055em] text-deep-teal"
              >
                About me
              </h2>

              <p className="mt-8 max-w-[52ch] text-[1rem] leading-[1.85] text-muted sm:text-[1.05rem]">
                My professional journey began in the field of psychiatry and
                mental health, where I worked closely with people experiencing
                a wide range of psychological, emotional, and behavioural
                challenges. This early experience gave me a deep understanding
                of the human mind and the complex relationship between mental
                and physical wellbeing.
              </p>

              {/* Continue reading */}
              <button
                type="button"
                onClick={() => setShowAbout(true)}
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
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT ME MODAL
      ===================================================== */}
      <AnimatePresence>
        {showAbout && (
          <motion.div
            key="about-modal"
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-modal-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <button
              type="button"
              aria-label="Close About Me"
              onClick={() => setShowAbout(false)}
              className="absolute inset-0 cursor-default bg-deep-teal/45 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 flex max-h-[94svh] w-full max-w-4xl flex-col overflow-hidden rounded-[1.5rem] bg-[#f8f7f2] shadow-[0_30px_100px_-25px_rgba(23,63,58,0.45)] sm:max-h-[90svh] sm:rounded-[2rem]"
            >
              {/* Modal header */}
              <div className="flex shrink-0 items-start justify-between border-b border-deep-teal/10 bg-[#f8f7f2]/95 px-5 py-5 backdrop-blur-md sm:px-10 sm:py-6">
                <div className="pr-4">
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-sage-dark sm:text-[0.68rem]">
                    About Me
                  </p>

                  <h2
                    id="about-modal-heading"
                    className="mt-2 font-serif text-2xl tracking-[-0.035em] text-deep-teal sm:text-4xl"
                  >
                    My journey & philosophy
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setShowAbout(false)}
                  aria-label="Close About Me"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-deep-teal/10 bg-white/70 text-deep-teal transition-colors hover:bg-sage"
                >
                  <X size={19} strokeWidth={1.7} />
                </button>
              </div>

              {/* Modal content */}
              <div className="min-h-0 overflow-y-auto px-5 py-7 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
                <div className="mx-auto max-w-3xl">
                  <div className="space-y-6 text-[0.98rem] leading-[1.9] text-muted sm:text-[1.05rem]">
                    <p>
                      My professional journey began in the field of psychiatry
                      and mental health, where I worked closely with people
                      experiencing a wide range of psychological, emotional, and
                      behavioural challenges. This early experience gave me a
                      deep understanding of the human mind and the complex
                      relationship between mental and physical wellbeing.
                    </p>

                    <p>
                      While working in psychiatry, I became increasingly
                      interested in the connection between the mind and the
                      body. I observed that emotional stress, psychological
                      experiences, lifestyle, and physical health are often
                      closely interconnected. This understanding eventually led
                      me to expand my work beyond traditional mental health care
                      and explore the science of movement, nutrition, fitness,
                      and the mind-body connection.
                    </p>

                    <p>
                      My journey then evolved into fitness, nutrition, and
                      kinesiology, driven by my passion for helping people
                      achieve better physical and mental health. As a
                      kinesiologist, I developed a deeper understanding of
                      muscle–mind connection, movement patterns, stress
                      responses, and psychosomatic disorders, and how emotional
                      and psychological factors can manifest through the body.
                    </p>

                    <p>
                      Over the years, my work has increasingly focused on
                      women’s health. I work with women through different stages
                      and challenges of life, helping them improve their
                      physical strength, body composition, nutrition, emotional
                      wellbeing, and mental health.
                    </p>

                    <p>
                      My approach may include support with fat loss, muscle
                      gain, strength and fitness, nutrition, lifestyle
                      modification, stress management, emotional eating, body
                      image, confidence, and other mental health challenges that
                      can affect a woman’s overall wellbeing.
                    </p>

                    <p>
                      As a menopause coach, I also work with women navigating
                      perimenopause and menopause, supporting them through the
                      physical, hormonal, emotional, and psychological changes
                      that can occur during this important stage of life.
                    </p>

                    <p>
                      I believe that the mind and body cannot be treated as two
                      separate entities. Mental health can influence physical
                      health, and physical health can profoundly influence
                      mental wellbeing. Movement, nutrition, sleep, hormones,
                      stress, emotions, and behaviour all interact to shape our
                      health.
                    </p>

                    <p>
                      My work therefore takes a whole-person approach, bringing
                      together my experience in mental health and psychiatry
                      with my expertise in fitness, nutrition, kinesiology, and
                      women’s health.
                    </p>

                    <p>
                      My goal is not simply to help women lose weight or become
                      fitter. It is to help them understand their bodies, build
                      strength, develop healthier patterns of thinking and
                      behaviour, improve their relationship with food and
                      movement, and create sustainable changes that support both
                      mental and physical wellbeing.
                    </p>
                  </div>

                  {/* My philosophy */}
                  <div className="mt-12 rounded-[1.5rem] border border-sage-dark/10 bg-cream px-6 py-8 sm:rounded-[1.75rem] sm:px-9 sm:py-10">
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-sage-dark sm:text-[0.68rem]">
                      My philosophy
                    </p>

                    <blockquote className="mt-5 font-serif text-[1.45rem] leading-[1.4] tracking-[-0.02em] text-deep-teal sm:text-[2rem] sm:leading-[1.35]">
                      A healthier body can support a healthier mind, and a
                      healthier mind can transform the way we care for our body.
                    </blockquote>

                    <div className="mt-7 h-px w-10 bg-sage-dark/30" />

                    <p className="mt-7 text-[0.98rem] leading-[1.85] text-muted sm:text-[1.05rem]">
                      True wellbeing is not just about how we look. It is about
                      how we think, feel, move, nourish ourselves, and live.
                    </p>
                  </div>

                  <div className="h-4 sm:h-6" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}