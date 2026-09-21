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
        <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-sage/8 blur-3xl sm:-left-32 sm:h-128 sm:w-lg" />

        <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-sage/8 blur-3xl sm:-right-32 sm:h-136 sm:w-136" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-3 pb-12 pt-6 sm:px-5 sm:pb-16 sm:pt-8 lg:px-8 lg:pb-20 lg:pt-12">
        <div className="grid grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] items-center gap-3 sm:gap-6 md:gap-8 lg:gap-12">

          {/* LEFT CONTENT */}
          <div className="min-w-0">
            <p className="eyebrow text-[0.48rem] tracking-[0.14em] text-[#5a6d66] sm:text-[0.62rem] sm:tracking-[0.16em] lg:text-[0.75rem]">
              {site.heroKicker}
            </p>

            <h1
              id="hero-heading"
              className="mt-3 max-w-xl font-serif text-[clamp(1.9rem,6vw,6.5rem)] leading-[0.88] tracking-[-0.055em] text-deep-teal sm:mt-4 md:text-[clamp(2.6rem,5.5vw,5.5rem)] lg:mt-6 lg:leading-[0.86]"
            >
              Strength,
              <br />
              Balance
              <br />
              &amp; Wellness
            </h1>

            <p className="mt-4 max-w-124 text-[0.68rem] leading-[1.55] text-muted sm:mt-6 sm:text-[0.86rem] sm:leading-[1.65] md:text-[0.98rem] lg:mt-8 lg:text-[1.08rem]">
              {site.heroIntro}
            </p>

            <div className="mt-5 sm:mt-7 lg:mt-8">
              <WhatsAppButton
                showIcon={true}
                className="text-[0.68rem] sm:text-[0.78rem] md:text-sm"
              >
                Connect with me on WhatsApp
              </WhatsAppButton>
            </div>

            {/* TRUST INDICATORS */}
            <ul className="mt-6 grid max-w-xl grid-cols-3 gap-2 border-t border-deep-teal/10 pt-4 sm:mt-8 sm:gap-4 sm:pt-5 lg:mt-12 lg:pt-6">
              {site.trust.map((item) => (
                <li
                  key={item.title}
                  className="flex min-w-0 items-center gap-1.5 text-[0.52rem] font-medium leading-tight tracking-[0.01em] text-deep-teal sm:gap-2.5 sm:text-[0.68rem] lg:text-[0.78rem]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage text-sage-dark shadow-[inset_0_0_0_1px_rgba(23,63,58,0.06)] sm:h-8 sm:w-8 lg:h-9 lg:w-9">
                    <Mark
                      name={item.icon as MarkName}
                      className="[&_svg]:h-3 [&_svg]:w-3 sm:[&_svg]:h-3.5 sm:[&_svg]:w-3.5 lg:[&_svg]:h-4 lg:[&_svg]:w-4"
                    />
                  </span>

                  <span className="min-w-0">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative min-w-0">
            <div className="relative mx-auto w-full max-w-xl">

              {/* Portrait shadow */}
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-sage/18 sm:translate-x-2 sm:translate-y-2 sm:rounded-3xl lg:translate-x-3 lg:translate-y-3 lg:rounded-4xl" />

              {/* MAIN PORTRAIT */}
              <div className="relative rounded-2xl border border-white/80 bg-[#f3efe5] p-1.5 shadow-[0_20px_55px_rgba(23,63,58,0.10)] sm:rounded-3xl sm:p-2 lg:rounded-4xl">
                <div className="relative aspect-[0.72] overflow-hidden rounded-xl sm:rounded-2xl lg:aspect-[0.75] lg:rounded-3xl">
                  <Portrait
                    priority
                    className="h-full w-full"
                    objectPosition="50% 22%"
                    sizes="(max-width: 640px) 48vw, (max-width: 1024px) 45vw, 40vw"
                  />
                </div>
              </div>

              {/* QUOTE CARD */}
              <div className="absolute -right-5 top-[42%] z-40 hidden w-32 rounded-lg border border-white/80 bg-[#f8f5ec]/96 p-3 shadow-[0_15px_35px_rgba(23,63,58,0.12)] backdrop-blur-sm sm:block sm:-right-6 sm:w-36 sm:p-4 md:-right-8 md:w-40 lg:-right-10 lg:w-44 lg:p-5">
                <div
                  aria-hidden="true"
                  className="mb-2 h-px w-6 bg-sage-dark/40 sm:mb-3 sm:w-8"
                />

                <blockquote className="text-[0.62rem] leading-[1.5] text-deep-teal sm:text-[0.72rem] md:text-[0.8rem] lg:text-[0.86rem] lg:leading-[1.6]">
                  “{site.quote}”
                </blockquote>

                <p className="font-hand mt-3 text-[0.8rem] leading-[1.35] text-deep-teal/65 sm:mt-4 sm:text-[0.95rem] md:text-[1rem] lg:text-[1.1rem] lg:leading-[1.4]">
                  {site.quoteSub}
                </p>
              </div>

              {/* WELLNESS LABEL */}
              <div className="absolute -bottom-4 left-2 z-30 max-w-[90%] rounded-full border border-white/80 bg-white/92 px-2.5 py-2 shadow-[0_10px_25px_rgba(23,63,58,0.10)] backdrop-blur-sm sm:left-3 sm:px-3.5 sm:py-2.5 lg:-bottom-5 lg:left-5 lg:px-4">
                <span className="whitespace-nowrap text-[0.42rem] font-medium tracking-[0.06em] text-deep-teal sm:text-[0.55rem] lg:text-[0.68rem] lg:tracking-[0.08em]">
                  WELLNESS • GUIDANCE • BALANCE
                </span>
              </div>

              {/* Soft decorative glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 -left-8 -z-10 h-32 w-32 rounded-full bg-sage/10 blur-3xl sm:h-40 sm:w-40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}