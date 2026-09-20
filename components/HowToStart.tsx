import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function HowToStart() {
  return (
    <section aria-labelledby="start-heading" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow">Getting started</p>
          <h2
            id="start-heading"
            className="font-serif section-title mt-4 text-deep-teal"
          >
            Three simple steps
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {site.gettingStarted.map((item, index) => (
            <Reveal as="li" key={item.step} delayMs={index * 80}>
              <article className="h-full rounded-3xl border border-sage-dark/10 bg-cream p-6">
                <p className="font-serif text-3xl text-sage-dark">{item.step}</p>
                <h3 className="mt-3 font-serif text-2xl text-deep-teal">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-10">
          <WhatsAppButton>Start the conversation</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
