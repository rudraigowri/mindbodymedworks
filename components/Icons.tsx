import Image from "next/image";
import { cn } from "@/lib/utils";

const paths = {
  movement: (
    <svg viewBox="0 0 48 48" className="h-11 w-11" aria-hidden="true">
      <circle cx="24" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
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
    <svg viewBox="0 0 48 48" className="h-11 w-11" aria-hidden="true">
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
    <svg viewBox="0 0 48 48" className="h-11 w-11" aria-hidden="true">
      <path
        d="M24 10c6 0 10.5 4.4 10.5 10.2 0 2.6-.9 4.4-2.6 6.1V32h-5.2v3.4h-5.4V32h-5.2v-5.7c-1.7-1.7-2.6-3.5-2.6-6.1C13.5 14.4 18 10 24 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  guidance: (
    <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true">
      <circle cx="17" cy="18" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="31" cy="18" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 32c1.6-4.8 5.1-7.2 9.3-7.2s7.7 2.4 9.3 7.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M23 14.5c1.2 0 2.4.3 3.4.8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true">
      <path d="M24.5 10c6.5 1.2 11.5 6.4 11.5 13.2 0 8.1-6.5 15.8-11.5 18.8-5-3-11.5-10.7-11.5-18.8C13 16.4 18 11.2 24.5 10Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M24.5 17v11M18 23.5h13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  community: (
    <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true">
      <circle cx="16" cy="19" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="24" cy="14.5" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="32" cy="19" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9.5 32.5c1.5-4.6 4.9-7 9.2-7s7.7 2.4 9.2 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M22 33.5c1.3-2.1 3.1-3.2 5.6-3.2 2.7 0 4.8 1.5 6.2 3.7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
} as const;

export type MarkName = keyof typeof paths;

export function Mark({ name, className }: { name: MarkName; className?: string }) {
  return <span className={cn("inline-flex text-sage-dark", className)}>{paths[name]}</span>;
}

export function Icon({ src, size = 64, className }: { src: string; size?: number; className?: string }) {
  return <Image src={src} alt="" width={size} height={size} className={className} />;
}
