import { site } from "@/data/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Mark, type MarkName } from "@/components/Icons";

export function FinalCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-background"
    >
      <div className="cta-shell mx-auto grid max-w-6xl items-center gap-16 rounded-[2rem] px-6 py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-36">
        <div>
          <h2
            id="contact-heading"
            className="font-serif section-title text-deep-teal"
          >
            Ready to feel your best?
          </h2>

          <p className="mt-6 max-w-[42ch] leading-[1.75] text-muted">
            Take the first step toward a healthier, more balanced you.
          </p>

          <div className="mt-12">
            <WhatsAppButton showIcon={true}>
              Connect with me on WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        <ul className="grid grid-cols-3 gap-4 text-center">
          {site.ctaSupports.map((item) => (
            <li
              key={item.title}
              className="support-card flex flex-col items-center gap-3 rounded-[1.4rem] px-3 py-5"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-sage-dark/10 bg-cream text-sage-dark shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                <Mark name={item.icon as MarkName} />
              </span>

              <p className="text-sm font-medium leading-snug text-deep-teal">
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}