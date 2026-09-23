import { ArrowUpRight } from "lucide-react";

import { site } from "@/data/site";
import { Portrait } from "@/components/Portrait";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Mark, type MarkName } from "@/components/Icons";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="hero-shell relative overflow-hidden bg-ivory"
    >
      {/* Soft background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-sage/10 blur-3xl sm:-left-24 sm:h-96 sm:w-96" />

        <div className="absolute -right-32 top-[35%] h-80 w-80 rounded-full bg-sage/8 blur-3xl sm:-right-24 sm:h-96 sm:w-96" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12">

          {/* =========================================================
              LEFT CONTENT
          ========================================================== */}
          <div className="min-w-0">

            {/* Eyebrow */}
            <p
              className="
                eyebrow
                max-w-md
                text-[0.62rem]
                tracking-[0.18em]
                text-[#5a6d66]
                sm:text-[0.7rem]
                lg:text-[0.75rem]
              "
            >
              Where body, mind & hormones come together
            </p>

            {/* Heading */}
            <h1
              id="hero-heading"
              className="
                mt-5
                max-w-[12ch]
                font-serif
                text-[clamp(3.15rem,13vw,5rem)]
                font-normal
                leading-[0.9]
                tracking-[-0.055em]
                text-deep-teal
                sm:mt-6
                sm:text-[clamp(3.5rem,9vw,5.5rem)]
                lg:mt-6
                lg:max-w-xl
                lg:text-[clamp(4.5rem,6vw,6.5rem)]
                lg:leading-[0.86]
              "
            >
              Stronger body,
              <br />
              Clearer mind,
              <br />
              Healthier life.
            </h1>

            {/* Main description */}
            <p
              className="
                mt-6
                max-w-[36rem]
                text-[1rem]
                leading-[1.65]
                text-muted
                sm:mt-7
                sm:text-[1.05rem]
                lg:mt-8
                lg:text-[1.08rem]
              "
            >
              Specialized support for hormonal imbalances, perimenopause and
              menopause, unexplained weight gain and obesity, difficult fat
              loss, muscle loss, brain fog, stress, and mental well-being.
            </p>

            {/* Approach */}
            <p
              className="
                mt-4
                max-w-[34rem]
                text-[0.9rem]
                leading-[1.7]
                text-deep-teal/65
                sm:text-[0.95rem]
              "
            >
              Through movement, kinesiology, personalized nutrition, and
              mental-health therapies, we work toward a stronger body, clearer
              mind, and healthier life.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
              <WhatsAppButton
                showIcon={true}
                className="
                  min-h-12
                  rounded-full
                  px-6
                  text-[0.85rem]
                  sm:px-7
                  sm:text-sm
                "
              >
                Connect with me on WhatsApp
              </WhatsAppButton>

              <a
                href="#services"
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-deep-teal/15
                  px-5
                  text-sm
                  font-medium
                  text-deep-teal
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-deep-teal/30
                  hover:bg-white/60
                "
              >
                Explore services

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
            </div>

            {/* Trust indicators */}
            <ul
              className="
                mt-8
                flex
                max-w-full
                items-center
                gap-5
                border-t
                border-deep-teal/10
                pt-5
                sm:mt-10
                sm:gap-7
                lg:mt-12
                lg:grid
                lg:grid-cols-3
                lg:gap-4
              "
            >
              {site.trust.map((item) => (
                <li
                  key={item.title}
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-2
                    text-[0.62rem]
                    font-medium
                    leading-tight
                    text-deep-teal
                    sm:text-[0.68rem]
                    lg:text-[0.78rem]
                  "
                >
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-sage
                      text-sage-dark
                    "
                  >
                    <Mark
                      name={item.icon as MarkName}
                      className="[&_svg]:h-3.5 [&_svg]:w-3.5"
                    />
                  </span>

                  <span className="hidden sm:block lg:block">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================================
              RIGHT / PORTRAIT
          ========================================================== */}
          <div className="relative min-w-0">
            <div className="relative mx-auto w-full max-w-xl">

              {/* Portrait shadow */}
              <div
                className="
                  absolute
                  inset-0
                  translate-x-2
                  translate-y-2
                  rounded-3xl
                  bg-sage/18
                  lg:translate-x-3
                  lg:translate-y-3
                  lg:rounded-4xl
                "
              />

              {/* Portrait frame */}
              <div
                className="
                  relative
                  rounded-3xl
                  border
                  border-white/80
                  bg-[#f3efe5]
                  p-2
                  shadow-[0_20px_55px_rgba(23,63,58,0.10)]
                  lg:rounded-4xl
                  lg:p-2
                "
              >
                <div
                  className="
                    relative
                    aspect-[0.82]
                    overflow-hidden
                    rounded-2xl
                    sm:aspect-[0.78]
                    lg:aspect-[0.75]
                    lg:rounded-3xl
                  "
                >
                  <Portrait
                    priority
                    className="h-full w-full"
                    objectPosition="50% 22%"
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 65vw, 40vw"
                  />
                </div>
              </div>

              {/* Desktop quote */}
              <div
                className="
                  absolute
                  -right-5
                  top-[42%]
                  z-40
                  hidden
                  w-32
                  rounded-lg
                  border
                  border-white/80
                  bg-[#f8f5ec]/96
                  p-3
                  shadow-[0_15px_35px_rgba(23,63,58,0.12)]
                  backdrop-blur-sm
                  sm:block
                  sm:-right-6
                  sm:w-36
                  sm:p-4
                  md:-right-8
                  md:w-40
                  lg:-right-10
                  lg:w-44
                  lg:p-5
                "
              >
                <div
                  aria-hidden="true"
                  className="mb-2 h-px w-6 bg-sage-dark/40 sm:mb-3 sm:w-8"
                />

                <blockquote
                  className="
                    text-[0.62rem]
                    leading-[1.5]
                    text-deep-teal
                    sm:text-[0.72rem]
                    md:text-[0.8rem]
                    lg:text-[0.86rem]
                    lg:leading-[1.6]
                  "
                >
                  “{site.quote}”
                </blockquote>

                <p
                  className="
                    mt-3
                    font-hand
                    text-[0.8rem]
                    leading-[1.35]
                    text-deep-teal/65
                    sm:mt-4
                    sm:text-[0.95rem]
                    md:text-[1rem]
                    lg:text-[1.1rem]
                    lg:leading-[1.4]
                  "
                >
                  {site.quoteSub}
                </p>
              </div>

              {/* Wellness label */}
              <div
                className="
                  absolute
                  -bottom-4
                  left-1/2
                  z-30
                  -translate-x-1/2
                  rounded-full
                  border
                  border-white/80
                  bg-white/95
                  px-4
                  py-2.5
                  shadow-[0_10px_25px_rgba(23,63,58,0.10)]
                  backdrop-blur-sm
                  sm:-bottom-5
                  sm:px-5
                  sm:py-3
                "
              >
                <span
                  className="
                    whitespace-nowrap
                    text-[0.5rem]
                    font-medium
                    tracking-[0.07em]
                    text-deep-teal
                    sm:text-[0.58rem]
                    lg:text-[0.68rem]
                  "
                >
                  Dr.Kavita
                </span>
              </div>

              {/* Soft glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-12
                  -left-10
                  -z-10
                  h-40
                  w-40
                  rounded-full
                  bg-sage/10
                  blur-3xl
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}