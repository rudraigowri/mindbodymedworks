import { cn } from "@/lib/utils";

type DoodleProps = {
  className?: string;
  delay?: string;
};

const ink = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  pathLength: 1,
};

export function DoodleOlive({ className, delay }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 160 220"
      className={cn("doodle doodle-draw doodle-float", className)}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        opacity="0.18"
        d="M78 28c18 10 28 32 16 52-18 8-34-8-40-28 8-14 16-26 24-24Z"
      />
      <path
        fill="currentColor"
        opacity="0.14"
        d="M42 86c16 6 26 24 12 40-16 4-28-10-32-26 6-10 12-16 20-14Z"
      />
      <path
        fill="currentColor"
        opacity="0.16"
        d="M108 96c14 12 16 34 0 48-16 0-26-16-24-34 6-8 14-16 24-14Z"
      />
      <path
        {...ink}
        strokeWidth="1.35"
        d="M86 214c-2-46 4-92-8-138C66 48 58 28 78 18"
      />
      <path
        {...ink}
        strokeWidth="1.2"
        d="M78 76c18-6 34 6 38 22-16 8-30 4-40-8M70 108c-18 2-30 16-28 32 14 6 26-2 32-16M96 128c16 8 22 26 10 40-14 2-24-10-26-24"
      />
      <path
        {...ink}
        strokeWidth="0.85"
        d="M86 86c8 6 12 14 10 22M58 118c6 8 8 16 6 24M104 148c4 8 4 16 0 24"
      />
    </svg>
  );
}

export function DoodleFern({ className, delay }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 140 240"
      className={cn("doodle doodle-draw doodle-float", className)}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <path
        {...ink}
        strokeWidth="1.3"
        d="M70 232c2-58-6-112-18-168C44 40 40 22 62 16"
      />
      <path
        {...ink}
        strokeWidth="1.05"
        d="M62 48c-22 2-36 14-42 28M66 72c20-2 36 8 44 22M58 96c-24 6-36 20-38 36M70 118c22 4 34 18 38 34M54 148c-20 8-30 22-30 36M74 168c18 8 26 22 26 34"
      />
      <path
        fill="currentColor"
        opacity="0.12"
        d="M58 54c-16 8-24 20-20 30 14-4 24-14 20-30Z"
      />
    </svg>
  );
}

export function DoodleLeaf({ className, delay }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 130 180"
      className={cn("doodle doodle-draw doodle-float", className)}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        opacity="0.2"
        d="M64 20c28 18 46 58 28 96-32 18-58-10-62-48C36 44 48 24 64 20Z"
      />
      <path
        {...ink}
        strokeWidth="1.35"
        d="M66 168c2-40-6-78-22-112C36 36 42 18 68 22c24 8 36 42 22 78-10 18-24 28-40 32"
      />
      <path
        {...ink}
        strokeWidth="1"
        d="M58 70c12 10 18 24 16 40M50 92c10 8 14 18 12 30M46 114c8 6 10 14 8 22"
      />
    </svg>
  );
}

export function DoodleSpark({ className, delay }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 72 72"
      className={cn("doodle doodle-draw doodle-twinkle", className)}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <path
        {...ink}
        strokeWidth="1.2"
        d="M36 8c1 8 2 14 0 22M36 42c-1 8-1 14 0 22M8 36c8-1 14-2 22 0M42 36c8 1 14 1 22 0"
      />
      <circle cx="36" cy="36" r="3.2" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

export function DoodleSwirl({ className, delay }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 150 90"
      className={cn("doodle doodle-draw", className)}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <path
        {...ink}
        strokeWidth="1.35"
        d="M10 62c16-32 48-48 74-28 18 14 8 40-16 36-18-3-20-30 6-34 24-4 52 16 70 42"
      />
    </svg>
  );
}

export function DoodleUnderline({ className, delay }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 220 24"
      className={cn("doodle doodle-draw", className)}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <path
        {...ink}
        strokeWidth="1.4"
        d="M8 14c36-8 70 6 104 0 28-5 52-8 100 4"
      />
    </svg>
  );
}

export function DoodleFlower({ className, delay }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 100 130"
      className={cn("doodle doodle-draw doodle-float", className)}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <circle cx="50" cy="42" r="8" fill="currentColor" opacity="0.22" />
      <path
        fill="currentColor"
        opacity="0.16"
        d="M50 18c8 8 10 18 4 24-10-2-16-10-12-22 4-2 6-2 8-2Z"
      />
      <path
        {...ink}
        strokeWidth="1.2"
        d="M50 50c0-14 10-28 10-28s6 16 0 28c10-8 28-6 28-6s-10 18-24 20c10 10 12 28 12 28s-20-8-26-20c-6 14-24 24-24 24s4-20 14-28c-16 0-30-12-30-12s14-8 24 0c-4-14 4-32 4-32s14 14 8 26Z"
      />
      <path {...ink} strokeWidth="1.25" d="M50 70c2 18 2 34 0 52" />
      <path {...ink} strokeWidth="1" d="M50 96c-12 6-18 14-20 22M50 104c12 4 20 12 24 20" />
    </svg>
  );
}

export function DoodleArrow({ className, delay }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 96 48"
      className={cn("doodle doodle-draw", className)}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <path {...ink} strokeWidth="1.35" d="M6 30c26-18 52-24 78-10" />
      <path {...ink} strokeWidth="1.35" d="M68 10c10 8 16 14 20 22-12 0-20 2-28 8" />
    </svg>
  );
}

export function DoodleHeart({ className, delay }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 72 62"
      className={cn("doodle doodle-draw doodle-twinkle", className)}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        opacity="0.14"
        d="M36 54C10 36 8 18 20 12c8-4 13 2 16 8 3-6 8-12 16-8 12 6 10 24-16 42Z"
      />
      <path
        {...ink}
        strokeWidth="1.3"
        d="M36 54C10 36 8 18 20 12c8-4 13 2 16 8 3-6 8-12 16-8 12 6 10 24-16 42Z"
      />
    </svg>
  );
}

export function DoodleStars({ className, delay }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 110 42"
      className={cn("doodle doodle-draw doodle-twinkle", className)}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <path
        {...ink}
        strokeWidth="1.15"
        d="M18 21l2.4 6.4 6.6 1.2-5 4.6 1.4 6.6L18 36.6 12.6 40l1.4-6.6-5-4.6 6.6-1.2Z"
      />
      <path
        {...ink}
        strokeWidth="1.05"
        d="M58 14l1.6 4.2 4.4.8-3.4 3.1.9 4.4L58 24.4 54.5 26.5l.9-4.4-3.4-3.1 4.4-.8Z"
      />
      <path
        {...ink}
        strokeWidth="1.1"
        d="M90 26l1.8 4.8 5 .9-3.8 3.5 1 5L90 37.8 86 40.2l1-5-3.8-3.5 5-.9Z"
      />
    </svg>
  );
}
