import { expertise } from "@/data/expertise";
import { Reveal } from "@/components/Reveal";

export function Expertise() {
  return (
    <section aria-labelledby="expertise-heading" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow">Expertise</p>
          <h2
            id="expertise-heading"
            className="font-serif section-title mt-4 max-w-xl text-deep-teal"
          >
            Skills that support everyday well-being
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, index) => (
            <Reveal as="li" key={item.title} delayMs={index * 40}>
              <div className="h-full rounded-3xl border border-sage-dark/10 bg-cream p-5">
                <h3 className="font-serif text-xl text-deep-teal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
