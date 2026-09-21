import { site } from "@/data/site";
import { Portrait } from "@/components/Portrait";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Mark, type MarkName } from "@/components/Icons";
import { DoodleFern, DoodleOlive } from "@/components/Doodles";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="hero-shell overflow-x-hidden bg-ivory"
    >
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-5 sm:px-6 lg:px-8 lg:pb-16 lg:pt-8">
        <div className="grid items-center gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 xl:gap-10">

          {/* Left: Hero content */}
          <div className="hero-copy order-1 lg:pr-6">
            <p className="eyebrow tracking-[0.16em] text-[#5a6d66]">
              {site.heroKicker}
            </p>

            <h1
              id="hero-heading"
              className="mt-5 max-w-none font-serif leading-[0.86] tracking-[-0.06em] text-deep-teal text-[clamp(3rem,6vw,6.8rem)] lg:mt-6 lg:max-w-[11ch]"
            >
              Strength, Balance &amp; Wellness
            </h1>

            <p className="mt-6 max-w-[40ch] text-[0.98rem] leading-[1.7] text-muted sm:text-[1.05rem] lg:text-[1.12rem]">
              {site.heroIntro}
            </p>

            <div className="mt-8">
              <WhatsAppButton>Contact me WhatsApp</WhatsAppButton>
            </div>

            <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3 lg:mt-12">
              {site.trust.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-2.5 text-[0.78rem] font-medium tracking-[0.02em] text-deep-teal"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage text-sage-dark shadow-[inset_0_0_0_1px_rgba(23,63,58,0.06)]">
                    <Mark
                      name={item.icon as MarkName}
                      className="[&_svg]:h-4 [&_svg]:w-4"
                    />
                  </span>

                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Portrait */}
          <div className="relative order-2 w-full lg:order-2">
            <div className="relative mx-auto w-full max-w-[24rem] sm:max-w-[28rem] lg:max-w-[34rem] xl:max-w-[36rem]">

              {/* Decorative olive */}
              <DoodleOlive
                className="pointer-events-none absolute -left-5 bottom-8 hidden h-28 w-[4.5rem] text-sage-dark/25 lg:block"
                delay="0.35s"
              />

              {/* Decorative fern */}
              <DoodleFern
                className="pointer-events-none absolute -right-2 top-8 hidden h-32 w-20 text-sage-dark/22 lg:block"
                delay="0.55s"
              />

              {/* Portrait frame */}
              <div className="hero-arch relative overflow-hidden rounded-[1.85rem] border border-white/60 bg-sage/10 shadow-[0_20px_60px_rgba(23,63,58,0.08)] sm:rounded-[2.2rem] lg:rounded-[2.6rem]">

                <div className="relative aspect-[3/4.1] sm:aspect-[4/4.8] lg:h-[38rem] lg:aspect-auto xl:h-[40rem]">

                  <Portrait
                    priority
                    className="h-full w-full"
                    objectPosition="50% 25%"
                    sizes="(max-width: 640px) 84vw, (max-width: 1024px) 70vw, 34vw"
                  />

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}