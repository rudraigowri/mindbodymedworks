const PLACEHOLDER = "YOUR_NUMBER_HERE";

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export const WHATSAPP_NUMBER = (() => {
  const raw =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || PLACEHOLDER;

  if (!raw || raw.includes(PLACEHOLDER)) return "";

  return digitsOnly(raw);
})();

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi, I’d love to learn more about Mindbodymedworks and the wellness support available. I’d like to understand which service might be right for me.";

export function getWhatsAppUrl(
  message: string = DEFAULT_WHATSAPP_MESSAGE
) {
  const encoded = encodeURIComponent(message);

  if (!WHATSAPP_NUMBER) {
    return `https://wa.me/?text=${encoded}`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}