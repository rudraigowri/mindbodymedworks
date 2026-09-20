import { site } from "@/data/site";

export function QuoteBanner() {
  return (
    <section aria-label="Room to rise" className="room-to-rise">
      <div className="room-to-rise__scene" aria-hidden="true">
        <div className="room-to-rise__sky-glow" />
        <div className="room-to-rise__sun" />
        <svg className="room-to-rise__birds" viewBox="0 0 900 220" preserveAspectRatio="xMidYMid meet">
          <path d="M92 106c17-19 27-30 53-32-12 12-24 19-40 25 16 0 35 5 49 18-22 0-35-2-62-11Z" />
          <path d="M270 92c18-20 32-29 58-30-16 14-26 21-37 31 17 0 38 5 58 18-26 0-43-2-79-19Z" />
          <path d="M565 108c20-21 35-31 67-31-14 12-27 21-44 29 19 0 40 7 59 21-26-1-52-4-82-19Z" />
        </svg>
        <div className="room-to-rise__mountain room-to-rise__mountain--back" />
        <div className="room-to-rise__mountain room-to-rise__mountain--mid" />
        <div className="room-to-rise__mountain room-to-rise__mountain--front" />
        <div className="room-to-rise__mist" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[inherit] max-w-[46rem] flex-col items-center px-6 pb-28 pt-[16vh] text-center lg:pb-36">
        <h2 className="font-rise text-[clamp(4rem,8vw,8rem)] font-normal leading-[0.8] tracking-[-0.06em] text-[#173f3a] [text-wrap:balance]">
          Room
          <br />
          to rise.
        </h2>
        <blockquote className="mt-10 max-w-[30ch] text-[clamp(1.2rem,2vw,1.7rem)] leading-[1.6] text-[#173f3a]">
          {site.quote}
        </blockquote>
        <p className="font-hand mt-6 text-[1.8rem] text-[#173f3a]/80">{site.quoteSub}</p>
      </div>
    </section>
  );
}
