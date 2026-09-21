import { site } from "@/data/site";

export function QuoteBanner() {
  return (
    <section
      aria-label="Room to rise"
      className="room-to-rise relative overflow-hidden"
    >
      {/* Background scene */}
      <div className="room-to-rise__scene absolute inset-0" aria-hidden="true">
        <div className="room-to-rise__sky-glow" />

        {/* Sun / soft glow */}
        <div className="room-to-rise__sun opacity-80" />

        {/* Decorative birds */}
        <svg
          className="room-to-rise__birds opacity-45"
          viewBox="0 0 900 220"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M92 106c17-19 27-30 53-32-12 12-24 19-40 25 16 0 35 5 49 18-22 0-35-2-62-11Z" />
          <path d="M270 92c18-20 32-29 58-30-16 14-26 21-37 31 17 0 38 5 58 18-26 0-43-2-79-19Z" />
          <path d="M565 108c20-21 35-31 67-31-14 12-27 21-44 29 19 0 40 7 59 21-26-1-52-4-82-19Z" />
        </svg>

        {/* Mountains */}
        <div className="room-to-rise__mountain room-to-rise__mountain--back opacity-90" />
        <div className="room-to-rise__mountain room-to-rise__mountain--mid opacity-90" />
        <div className="room-to-rise__mountain room-to-rise__mountain--front opacity-95" />

        {/* Soft mist over mountains */}
        <div className="room-to-rise__mist opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[52rem] flex-col items-center justify-center px-6 pb-32 pt-32 text-center sm:min-h-[760px] lg:pb-36 lg:pt-28">
        {/* Eyebrow */}
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-[#173f3a]/60">
          A space for growth
        </p>

        {/* Main heading */}
        <h2 className="font-rise text-[clamp(3.8rem,7vw,7rem)] font-normal leading-[0.84] tracking-[-0.055em] text-[#173f3a] [text-wrap:balance]">
          Room
          <br />
          <span>to rise.</span>
        </h2>

        {/* Main quote */}
        <blockquote className="mt-9 max-w-[32ch] text-[clamp(1.15rem,1.8vw,1.55rem)] leading-[1.55] text-[#173f3a]/90 [text-wrap:balance]">
          {site.quote}
        </blockquote>

        {/* Supporting text */}
        <p className="font-hand mt-5 text-[clamp(1.45rem,2.5vw,1.8rem)] text-[#173f3a]/75">
          {site.quoteSub}
        </p>

        {/* CTA */}
        <a
          href="/contact"
          className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#173f3a] px-7 py-3.5 text-sm font-medium tracking-wide text-white shadow-[0_10px_30px_rgba(23,63,58,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#24534d] hover:shadow-[0_14px_35px_rgba(23,63,58,0.24)] focus:outline-none focus:ring-2 focus:ring-[#173f3a] focus:ring-offset-4"
        >
          <span>Start your journey</span>

          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>

      {/* WhatsApp button can remain fixed globally */}
    </section>
  );
}