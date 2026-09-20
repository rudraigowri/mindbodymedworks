import { cn } from "@/lib/utils";
import { testimonials } from "@/data/testimonials";

type Testimonial = (typeof testimonials)[number];

export function TestimonialCard({
  item,
  className,
}: {
  item: Testimonial;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex h-full max-w-full flex-col rounded-[1.5rem] border border-sage-dark/10 bg-cream px-7 py-8",
        className,
      )}
    >
      <p className="font-serif text-4xl leading-none text-sage-dark/35" aria-hidden="true">
        {item.initials}
      </p>
      <blockquote className="mt-6 flex-1 text-[0.95rem] leading-[1.75] text-text">
        “{item.quote}”
      </blockquote>
      <p className="mt-8 text-sm font-medium tracking-[0.04em] text-deep-teal">
        {item.name}
      </p>
      {item.location ? (
        <p className="mt-1 text-sm text-muted">{item.location}</p>
      ) : null}
    </article>
  );
}

export function TestimonialGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "hide-scrollbar grid snap-x snap-mandatory grid-flow-col auto-cols-[minmax(280px,1fr)] gap-6 overflow-x-auto pb-2 sm:auto-cols-[minmax(320px,1fr)] lg:grid-flow-row lg:grid-cols-2 lg:overflow-visible",
        className,
      )}
    >
      {testimonials.map((item) => (
        <div key={item.id} className="snap-center min-w-0">
          <TestimonialCard item={item} />
        </div>
      ))}
    </div>
  );
}

export default TestimonialGrid;
