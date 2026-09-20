import { services } from "@/data/services";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="services-shell relative overflow-hidden bg-cream"
    >
      <div className="service-background" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow">Programs</p>
          <h2
            id="services-heading"
            className="font-serif section-title mt-4 max-w-2xl text-deep-teal"
          >
            Choose a pathway that meets you where you are
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            These programs offer education, habit support, and movement
            guidance. They are not medical treatment, diagnosis, or therapy.
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((program, index) => (
            <Reveal as="li" key={program.id} delayMs={index * 70}>
              <article className="flex h-full flex-col rounded-[1.75rem] bg-white p-7 shadow-[0_16px_50px_-32px_rgba(23,60,64,0.4)]">
                <p className="eyebrow">{program.code}</p>
                <h3 className="font-serif mt-3 text-3xl text-deep-teal">
                  {program.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {program.summary}
                </p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-text">
                  {program.includes.map((line) => (
                    <li key={line} className="flex gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/icons/check.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="mt-0.5 shrink-0"
                      />
                      {line}
                    </li>
                  ))}
                </ul>
                <WhatsAppButton
                  className="mt-7 self-start"
                  message={program.whatsappMessage}
                >
                  Learn more
                </WhatsAppButton>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
