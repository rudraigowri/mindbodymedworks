import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  compact?: boolean;
};

export function Logo({
  className,
  inverted = false,
  compact = false,
}: LogoProps) {
  return (
    <span
      className={cn(
        "block font-montserrat font-semibold tracking-[-0.035em]",
        compact
          ? "text-[1.05rem] leading-none"
          : "text-[1.2rem] leading-none",
        inverted ? "text-cream" : "text-deep-teal",
        className
      )}
    >
      Mindbodymedworks
    </span>
  );
}