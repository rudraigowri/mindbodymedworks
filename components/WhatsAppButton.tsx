"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  children: React.ReactNode;
  message?: string;
  className?: string;
  showIcon?: boolean;
};

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
      {showIcon && <MessageCircle size={17} />}
      {children}
    </a>
  );
}