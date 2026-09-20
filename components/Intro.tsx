import { site } from "@/data/site";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/Reveal";

export function Intro() {
  return (
    <section aria-labelledby="intro-heading" className="bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow">Meet your wellness guide</p>
          <h2
            id="intro-heading"
            className="font-serif section-title mt-4 text-deep-teal"
          >
            Wellness that fits
            <br />
            your real life.
          </h2>
          <blockquote className="relative mt-8 max-w-xl pl-6 text-xl leading-relaxed text-text">
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-1 rounded-full bg-sage-dark/40"
            />
            “I believe wellness isn't about perfection. It's about building
            simple, sustainable habits that help you feel stronger, calmer and
            more confident in everyday life.”
          </blockquote>
          <a href="#about" className="btn-pill mt-8">
            Learn More About Me →
          </a>
        </Reveal>
        <Reveal delayMs={90} className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sage">
            <Portrait
              objectPosition="50% 6%"
              sizes="(max-width: 1024px) 80vw, 30vw"
              alt={`${site.portraitAlt} Cropped portrait for the guide introduction.`}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
