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
  sizes = "(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 40vw",
  priority = false,
  loading = "eager",
  objectPosition = "50% 50%",
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
      className={cn(
        "object-contain object-center scale-[0.90]",
        "transition-transform duration-500",
        className
      )}
      style={{
        objectPosition,
      }}
    />
  );
}