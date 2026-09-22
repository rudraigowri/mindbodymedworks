import { site } from "@/data/site";

export function QuoteBanner() {
  return (
    <section
      aria-label="Room to rise"
      className="relative isolate min-h-dvh w-full overflow-hidden bg-[#e8f1eb]"
    >
      {/* =========================================================
          FULL SCREEN BACKGROUND
      ========================================================== */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Sky */}
        <div className="absolute inset-0 bg-[#e8f1eb]" />

        {/* Soft sky glow */}
        <div
          className="
            absolute
            left-1/2
            top-[12%]
            h-[38vw]
            w-[38vw]
            min-h-[280px]
            min-w-[280px]
            -translate-x-1/2
            rounded-full
            bg-white/50
            blur-[90px]
          "
        />

        {/* Sun */}
        <div
          className="
            absolute
            left-1/2
            top-[18%]
            h-24
            w-24
            -translate-x-1/2
            rounded-full
            bg-[#f5f1d9]/70
            blur-2xl
            sm:h-32
            sm:w-32
          "
        />

        {/* =====================================================
            BIRDS
        ====================================================== */}
        <svg
          className="
            absolute
            left-1/2
            top-[20%]
            h-auto
            w-[75%]
            max-w-[900px]
            -translate-x-1/2
            opacity-35
          "
          viewBox="0 0 900 220"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M92 106c17-19 27-30 53-32-12 12-24 19-40 25 16 0 35 5 49 18-22 0-35-2-62-11Z"
            fill="#173f3a"
          />

          <path
            d="M270 92c18-20 32-29 58-30-16 14-26 21-37 31 17 0 38 5 58 18-26 0-43-2-79-19Z"
            fill="#173f3a"
          />

          <path
            d="M565 108c20-21 35-31 67-31-14 12-27 21-44 29 19 0 40 7 59 21-26-1-52-4-82-19Z"
            fill="#173f3a"
          />
        </svg>

        {/* =====================================================
            MOUNTAINS
        ====================================================== */}

        {/* Back mountains */}
        <div
          className="
            absolute
            bottom-0
            left-[-10%]
            h-[35%]
            w-[120%]
            bg-[#a7c1ae]
            [clip-path:polygon(0_100%,15%_45%,28%_62%,40%_20%,52%_58%,66%_28%,78%_62%,90%_40%,100%_100%)]
          "
        />

        {/* Middle mountains */}
        <div
          className="
            absolute
            bottom-0
            left-[-10%]
            h-[28%]
            w-[120%]
            bg-[#6f927d]
            [clip-path:polygon(0_100%,12%_58%,25%_42%,38%_72%,52%_25%,65%_68%,78%_38%,91%_60%,100%_100%)]
          "
        />

        {/* Front mountains */}
        <div
          className="
            absolute
            bottom-0
            left-[-10%]
            h-[19%]
            w-[120%]
            bg-[#36584d]
            [clip-path:polygon(0_100%,12%_45%,27%_20%,40%_75%,52%_38%,65%_78%,78%_30%,91%_65%,100%_100%)]
          "
        />

        {/* Mist */}
        <div
          className="
            absolute
            bottom-[14%]
            left-0
            h-24
            w-full
            bg-white/15
            blur-2xl
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            bottom-0
            left-0
            h-16
            w-full
            bg-gradient-to-t
            from-[#dfeae2]
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}
      <div
        className="
          relative
          z-10
          flex
          min-h-dvh
          w-full
          items-center
          justify-center
          px-5
          py-24
          text-center
          sm:px-8
          lg:py-28
        "
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center">

          {/* Eyebrow */}
          <p
            className="
              mb-6
              text-[0.62rem]
              font-medium
              uppercase
              tracking-[0.22em]
              text-[#173f3a]/60
              sm:mb-7
              sm:text-sm
            "
          >
            A space for growth
          </p>

          {/* Heading */}
          <h2
            className="
              font-rise
              text-[clamp(4rem,10vw,8rem)]
              font-normal
              leading-[0.8]
              tracking-[-0.06em]
              text-[#173f3a]
            "
          >
            Room
            <br />
            <span>to rise.</span>
          </h2>

          {/* Quote */}
          <blockquote
            className="
              mt-8
              max-w-[31ch]
              text-[clamp(1.05rem,2vw,1.55rem)]
              leading-[1.55]
              text-[#173f3a]/90
              sm:mt-10
            "
          >
            {site.quote}
          </blockquote>

          {/* Supporting text */}
          <p
            className="
              font-hand
              mt-5
              text-[clamp(1.35rem,2.5vw,1.8rem)]
              text-[#173f3a]/70
            "
          >
            {site.quoteSub}
          </p>

          {/* CTA */}
          <a
            href="/contact"
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#173f3a]
              px-7
              py-3.5
              text-sm
              font-medium
              tracking-wide
              text-white
              shadow-[0_10px_30px_rgba(23,63,58,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#24534d]
              hover:shadow-[0_14px_35px_rgba(23,63,58,0.24)]
              focus:outline-none
              focus:ring-2
              focus:ring-[#173f3a]
              focus:ring-offset-4
            "
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
      </div>
    </section>
  );
}