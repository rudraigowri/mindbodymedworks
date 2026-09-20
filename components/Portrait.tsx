import Image from "next/image";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type PortraitProps = {
  className?: string;
  sizes?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  objectPosition?: string;
  alt?: string;
};

export function Portrait({
  className,
  sizes = "(max-width: 40px) 100vw, (max-width: 24px) 80vw, 52vw",
  priority = false,
  loading = "eager",
  objectPosition = "50% 20%",
  alt,
}: PortraitProps) {
  return (
    <Image
      src={site.portraitSrc}
      alt={alt ?? site.portraitAlt}
      fill
      priority={priority}
      loading={loading}
      sizes={sizes}
      className={cn("object-cover object-center", className)}
      style={{ objectPosition }}
    />
  );
}
