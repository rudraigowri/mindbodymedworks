import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  compact?: boolean;
};

export function Logo({ className, inverted = false, compact = false }: LogoProps) {
  const fill = inverted ? "#F7F4ED" : "#173F3A";
  const leaf = inverted ? "#E4EEE7" : "#356B5C";

  return (
    <span className={cn("flex min-w-0 items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 36"
        className={cn("shrink-0", compact ? "h-7 w-8" : "h-8 w-9")}
        aria-hidden="true"
      >
        <path d="M18.8 33C10 30.4 2.4 21.6 0.2 10.4 8.4 9.2 16.8 6 22.4 11.4 23.6 20.2 21 28.8 18.8 33Z" fill={leaf} />
        <path d="M21.2 33c8.8-2.6 16.4-11.4 18.6-22.6C31.6 9.2 23.2 6 17.6 11.4 16.4 20.2 19 28.8 21.2 33Z" fill={fill} />
      </svg>
      <span
        className={cn(
          "min-w-0 truncate font-serif tracking-[-0.03em]",
          compact ? "text-[1.05rem] leading-none" : "text-[1.2rem] leading-none",
          inverted ? "text-cream" : "text-deep-teal",
        )}
      >
        Mindbodymedworks
      </span>
    </span>
  );
}
