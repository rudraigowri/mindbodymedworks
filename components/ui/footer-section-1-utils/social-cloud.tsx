import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

const socials = [
  {
    label: "Instagram",
    href: site.social.instagram,
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-none stroke-current stroke-[1.8]"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.3"
          cy="6.7"
          r="1.1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
  {
    label: "X",
    href: site.social.x,
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-current"
      >
        <path d="M18.9 2.8h3.1l-6.8 7.8 8 11.4h-6.2l-4.9-7.2-5.5 7.2H1.4l6.9-7.9-8.2-11.3h6.3l4.4 6.7 5.1-6.7Zm-1.1 17.2h1.7L7.3 4.8H5.5l12.3 15.2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: site.social.linkedin,
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-current"
      >
        <path d="M6.9 8.4a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM5.6 9.8h2.6v9.7H5.6V9.8Zm4.7 0h2.5v1.3h.1c.4-.7 1.3-1.5 2.9-1.5 3 0 3.6 2 3.6 4.7v5.2h-2.6v-4.8c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v4.9h-2.6V9.8Z" />
      </svg>
    ),
  },
];

export function SocialCloud({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-3",
        className
      )}
    >
      {socials.map(({ label, href, icon }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          whileHover={{ y: -2, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sage-dark/15 bg-white/50 text-sage-dark shadow-[0_10px_18px_-14px_rgba(23,63,58,0.8)] transition-colors hover:border-sage-dark/30 hover:bg-sage"
        >
          {icon}
        </motion.a>
      ))}
    </div>
  );
}