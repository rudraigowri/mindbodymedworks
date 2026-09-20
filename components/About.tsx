import { site } from "@/data/site";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const story = [
  "My background in mental health, movement, and wellness shaped a whole-person approach to care. I work with women to support both physical strength and emotional wellbeing, helping them feel more balanced, confident, and at ease in their bodies.",
  "I believe the mind and body are deeply connected. When we support movement, nutrition, stress, and mindset together, lasting change becomes possible.",
  "My work focuses on practical support for strength, energy, confidence, and sustainable habits — so progress feels empowering, not overwhelming.",
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10 lg:py-36">
        <Reveal className="grid grid-cols-2 gap-5">
          <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-[1.6rem] sm:col-span-1 sm:aspect-[3/4]">
            <Portrait objectPosition="50% 16%" sizes="(max-width: 640px) 100vw, 28vw" />
          </div>
          <div className="col-span-2 flex items-center rounded-[1.6rem] border border-sage-dark/10 bg-cream px-6 py-10 sm:col-span-1">
            <p className="font-serif text-[1.5rem] leading-snug text-deep-teal">
              “{site.aboutQuote}”
            </p>
          </div>
        </Reveal>

        <Reveal>
          <h2 id="about-heading" className="font-serif section-title mt-2 text-deep-teal">
            A more balanced,
            <br />
            brighter you
          </h2>
          <p className="mt-8 max-w-[65ch] leading-[1.75] text-muted">{story[0]}</p>
          <a href="#story" className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-sage-dark">
            Continue reading
          </a>
          <ul className="mt-12 grid grid-cols-3 gap-4 border-t border-sage-dark/10 pt-8">
            {site.stats.map((stat) => (
              <li key={stat.label}>
                <p className="font-serif text-3xl text-deep-teal sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div id="story" className="mx-auto max-w-[65ch] px-6 pb-28 lg:px-10 lg:pb-36">
        {story.slice(1).map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="mt-5 leading-[1.75] text-muted">
            {paragraph}
          </p>
        ))}
        <h3 className="mt-14 font-serif text-2xl text-deep-teal">My philosophy</h3>
        <blockquote className="relative mt-5 space-y-4 pl-6">
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-px bg-sage-dark/25"
          />
          <p className="leading-[1.75] text-text">
            A healthier body can support a healthier mind, and a healthier mind
            can transform the way we care for our body.
          </p>
          <p className="leading-[1.75] text-text">
            True wellbeing is not just about how we look. It is about how we
            think, feel, move, nourish ourselves, and live.
          </p>
        </blockquote>
        <div className="mt-10">
          <WhatsAppButton showIcon={false}>Begin your journey</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
