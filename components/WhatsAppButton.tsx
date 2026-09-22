"use client";

import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  children: React.ReactNode;
  message?: string;
  className?: string;
  showIcon?: boolean;
};

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.94c0 2.1.55 4.15 1.6 5.96L.04 24l6.25-1.64a11.9 11.9 0 0 0 5.79 1.48h.01c6.58 0 11.93-5.36 11.93-11.94 0-3.19-1.24-6.18-3.5-8.42ZM12.09 21.86h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.61-.23-.37a9.9 9.9 0 0 1-1.52-5.32c0-5.49 4.47-9.96 9.97-9.96a9.9 9.9 0 0 1 7.05 2.92 9.93 9.93 0 0 1 2.92 7.06c0 5.49-4.47 9.96-9.96 9.96Zm5.46-7.46c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.22-.66.07-.3-.15-1.24-.46-2.36-1.47-.87-.77-1.46-1.73-1.63-2.02-.17-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.51.1-.2.05-.38-.02-.53-.07-.15-.69-1.66-.95-2.27-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.53.07-.81.38-.28.3-1.06 1.04-1.06 2.54s1.09 2.95 1.24 3.15c.15.2 2.15 3.28 5.2 4.6.73.32 1.3.51 1.75.65.74.24 1.42.21 1.95.13.59-.09 1.78-.73 2.03-1.43.25-.71.25-1.31.18-1.43-.08-.13-.28-.2-.58-.35Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsAppButton({
  children,
  message,
  className,
  showIcon = false,
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-deep-teal px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#24534d]",
        className
      )}
    >
      {showIcon && <WhatsAppIcon size={19} />}

      <span>{children}</span>
    </a>
  );
}