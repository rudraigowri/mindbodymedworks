"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

interface Testimonial {
  image: string;
  name: string;
  username: string;
  text: string;
  social: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
  title?: string;
  description?: string;
  maxDisplayed?: number;
}

export function Testimonials({
  testimonials,
  className,
  title = "Read what people are saying",
  description = "Dummy feedback from virtual customers using our component library.",
  maxDisplayed = 6,
}: TestimonialsProps) {
  const [showAll, setShowAll] = useState(false);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center pt-5">
        <div className="mb-8 flex flex-col gap-5">
          <h2 className="text-center text-4xl font-medium">{title}</h2>
          <p className="text-center text-muted-foreground">
            {description.split("<br />").map((line, i) => (
              <span key={i}>
                {line}
                {i !== description.split("<br />").length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          className={cn(
            "grid gap-5 md:grid-cols-2",
            !showAll &&
              testimonials.length > maxDisplayed &&
              "max-h-[760px] overflow-hidden",
          )}
        >
          {testimonials
            .slice(0, showAll ? undefined : maxDisplayed)
            .map((testimonial, index) => (
              <Card
                key={index}
                className="relative h-full min-h-[260px] overflow-hidden rounded-[1.5rem] border border-sage-dark/10 bg-[#f8f5f0] p-6 shadow-[0_18px_40px_-30px_rgba(23,63,58,0.35)] md:p-7"
              >
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden rounded-full border border-sage-dark/10 bg-white p-0.5">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-semibold text-deep-teal">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {testimonial.username}
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-[0.98rem] leading-[1.8] text-text md:text-[1.02rem]">
                    “{testimonial.text}”
                  </p>
                </div>

                <button
                  onClick={() => openInNewTab(testimonial.social)}
                  className="absolute right-5 top-5 rounded-full border border-sage-dark/10 bg-white/70 p-2 text-sage-dark transition-opacity hover:opacity-80"
                  type="button"
                  aria-label={`Open ${testimonial.name}'s profile`}
                >
                  <Icons.twitter className="h-4 w-4" aria-hidden="true" />
                </button>
              </Card>
            ))}
        </div>

        {testimonials.length > maxDisplayed && !showAll && (
          <>
            <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent" />
            <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
              <Button variant="secondary" onClick={() => setShowAll(true)}>
                Load More
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
