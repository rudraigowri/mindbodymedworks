import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function WhoItsFor() {
  return (
    <section aria-labelledby="who-heading" className="bg-sage/60">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow">Who it’s for</p>
          <h2
            id="who-heading"
            className="font-serif section-title mt-4 max-w-xl text-deep-teal"
          >
            Built for people who want progress they can keep
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {site.whoItsFor.map((item, index) => (
            <Reveal as="li" key={item} delayMs={index * 50}>
              <div className="flex min-h-11 items-start gap-3 rounded-2xl bg-white/70 p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/check.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="mt-0.5"
                />
                <span>{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
