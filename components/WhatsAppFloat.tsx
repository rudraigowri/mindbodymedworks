import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa-pulse fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 min-h-11 min-w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
    >
      <Image
        src="/icons/whatsapp.svg"
        alt=""
        width={26}
        height={26}
        className="brightness-0 invert"
      />
    </a>
  );
}
