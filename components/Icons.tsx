import Image from "next/image";
import { cn } from "@/lib/utils";

const paths = {
  movement: (
    <svg
      viewBox="0 0 48 48"
      className="h-11 w-11"
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="12"
        r="3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M16 22l6-2 3 7 5-1 5 9-4 1.5-3.5-6.5-4 6.5-6.5-3.5 3.5-6.5-4.5-4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  nutrition: (
    <svg
      viewBox="0 0 48 48"
      className="h-11 w-11"
      aria-hidden="true"
    >
      <path
        d="M24 8v6M16 24c0-6 3.8-10.5 8-10.5S32 18 32 24v1.5H16V24Zm1.5 5h13c.7 4.5-3 9-6.5 9s-7.2-4.5-6.5-9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  mind: (
    <svg
      viewBox="0 0 48 48"
      className="h-11 w-11"
      aria-hidden="true"
    >
      <path
        d="M24 10c6 0 10.5 4.4 10.5 10.2 0 2.6-.9 4.4-2.6 6.1V32h-5.2v3.4h-5.4V32h-5.2v-5.7c-1.7-1.7-2.6-3.5-2.6-6.1C13.5 14.4 18 10 24 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),

  /*
   * Expert Guidance
   * Person + small sparkle
   */
  guidance: (
    <svg
      viewBox="0 0 48 48"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <circle
        cx="21"
        cy="16"
        r="4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M12.5 32c1.6-5.2 4.6-7.8 8.5-7.8s6.9 2.6 8.5 7.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Sparkle */}
      <path
        d="M34 10v7M30.5 13.5h7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M34 20v4M32 22h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),

  /*
   * Holistic Approach
   * Leaf + heart
   */
  tools: (
    <svg
      viewBox="0 0 48 48"
      className="h-8 w-8"
      aria-hidden="true"
    >
      {/* Leaf */}
      <path
        d="M24.5 10C32 10.8 37 15.8 37 22.5c0 7.8-6.1 14.8-12.5 18-6.4-3.2-12.5-10.2-12.5-18C12 15.8 17 10.8 24.5 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      {/* Leaf vein */}
      <path
        d="M24.5 16v16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Small heart */}
      <path
        d="M24.5 27.5c-2.7-2.3-5.2-3.8-5.2-6.1 0-1.5 1-2.5 2.3-2.5 1.2 0 2.1.7 2.9 1.7.8-1 1.7-1.7 2.9-1.7 1.3 0 2.3 1 2.3 2.5 0 2.3-2.5 3.8-5.2 6.1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),

  /*
   * Supportive Community
   * Three connected people
   */
  community: (
    <svg
      viewBox="0 0 48 48"
      className="h-8 w-8"
      aria-hidden="true"
    >
      {/* Center person */}
      <circle
        cx="24"
        cy="14"
        r="4.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M16.5 31.5c1.2-5 3.8-7.5 7.5-7.5s6.3 2.5 7.5 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Left person */}
      <circle
        cx="13.5"
        cy="20"
        r="3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M7.5 33c.8-3.8 2.8-5.8 6-5.8 1.6 0 3 .5 4.1 1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Right person */}
      <circle
        cx="34.5"
        cy="20"
        r="3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M30.4 28.8c1.1-1.1 2.5-1.6 4.1-1.6 3.2 0 5.2 2 6 5.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Connection dots */}
      <circle
        cx="24"
        cy="35"
        r="1.3"
        fill="currentColor"
      />
    </svg>
  ),
} as const;

export type MarkName = keyof typeof paths;

export function Mark({
  name,
  className,
}: {
  name: MarkName;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 text-sage-dark",
        className
      )}
    >
      {paths[name]}
    </span>
  );
}

export function Icon({
  src,
  size = 64,
  className,
}: {
  src: string;
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className={className}
    />
  );
}