import { specialties } from "@/data/specialties";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

export function Specialties() {
  return (
    <section aria-labelledby="specialties-heading" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow">What I help with</p>
          <h2
            id="specialties-heading"
            className="font-serif section-title mt-4 max-w-xl text-deep-teal"
          >
            Your wellbeing,
            <br />
            from every angle.
          </h2>
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((item, index) => (
            <li key={item.id}>
              <Reveal delayMs={index * 60}>
                <article
                  className={`card-lift h-full rounded-3xl p-6 ${item.tone}`}
                >
                  <Icon src={item.icon} />
                  <h3 className="mt-5 font-serif text-2xl text-deep-teal">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
