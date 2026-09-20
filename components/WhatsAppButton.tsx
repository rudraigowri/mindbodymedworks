import type { ReactNode } from "react";
import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  message?: string;
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline";
  showIcon?: boolean;
};

export function WhatsAppButton({
  message,
  children,
  className,
  variant = "solid",
  showIcon = true,
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        variant === "outline" ? "btn-pill-outline" : "btn-pill",
        className,
      )}
    >
      {showIcon ? (
        <Image
          src="/icons/whatsapp.svg"
          alt=""
          width={18}
          height={18}
          className={variant === "solid" ? "brightness-0 invert" : ""}
        />
      ) : null}
      {children}
    </a>
  );
}
