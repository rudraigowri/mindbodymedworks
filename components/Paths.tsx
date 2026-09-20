import { paths } from "@/data/paths";
import { Reveal } from "@/components/Reveal";
import { Mark, type MarkName } from "@/components/Icons";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const tones = ["bg-[#dfeee7]", "bg-[#efe3d2]", "bg-[#dfeef0]"] as const;

export function Paths() {
  return (
    <section id="services" aria-labelledby="services-heading" className="services-reference relative overflow-hidden bg-[#f5f3ef]">
      <div className="services-curve" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 py-[4.5rem] lg:px-8 lg:py-[6.25rem]">
        <Reveal className="max-w-[42rem]">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#2d6a60]">Mindbodymedworks</p>
          <h2
            id="services-heading"
            className="mt-4 font-serif text-[clamp(3.6rem,6vw,7rem)] leading-[0.83] tracking-[-0.05em] text-deep-teal"
          >
            Services
          </h2>
          <p className="mt-6 max-w-[32rem] text-[1.05rem] leading-relaxed text-muted">
            A holistic approach to help you feel stronger, calmer and more vibrant — inside and out.
          </p>
        </Reveal>

        <ul className="relative z-10 mt-12 grid gap-5 md:grid-cols-3">
          {paths.map((path, index) => (
            <li key={path.id} className="h-full">
              <article
                className={cn(
                  "service-card card-lift flex h-full flex-col rounded-[1.9rem] px-6 py-6 md:px-7 md:py-7",
                  tones[index],
                )}
              >
                <div className="service-card__head">
                  <span className="service-card__icon">
                    <Mark name={path.icon as MarkName} className="[&_svg]:h-6 [&_svg]:w-6" />
                  </span>
                </div>

                <p className="service-card__code">{path.code}</p>
                <h3 className="service-card__title">{path.title}</h3>
                <p className="service-card__summary">{path.summary}</p>

                <a
                  href={getWhatsAppUrl(path.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-card__link"
                >
                  Explore <span aria-hidden="true">→</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
