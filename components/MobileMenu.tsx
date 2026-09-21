"use client";

import { useEffect, useRef } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  panelId: string;
};

export function MobileMenu({
  open,
  onClose,
  panelId,
}: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  /*
   * Focus the first navigation link when menu opens.
   */
  useEffect(() => {
    if (!open) return;

    const firstLink =
      panelRef.current?.querySelector<HTMLAnchorElement>(
        "nav a"
      );

    firstLink?.focus();
  }, [open]);

  /*
   * Close menu with Escape.
   */
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  /*
   * Prevent the page behind the drawer from scrolling.
   */
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  /*
   * Close when clicking the backdrop.
   */
  const handleBackdropClick = () => {
    onClose();
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] lg:hidden",
        open
          ? "pointer-events-auto"
          : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={open ? 0 : -1}
        onClick={handleBackdropClick}
        className={cn(
          "absolute inset-0 bg-deep-teal/30 backdrop-blur-[2px]",
          "transition-opacity duration-300",
          "motion-reduce:transition-none",
          open
            ? "opacity-100"
            : "opacity-0"
        )}
      />

      {/* Drawer */}
      <div
        ref={panelRef}
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "absolute right-0 top-0 flex h-[100dvh] w-[min(88vw,24rem)] flex-col",
          "overflow-hidden",
          "bg-ivory",
          "border-l border-white/70",
          "rounded-l-[2rem]",
          "shadow-[-20px_0_60px_rgba(23,63,58,0.14)]",
          "transition-transform duration-300 ease-out",
          "motion-reduce:transition-none",
          open
            ? "translate-x-0"
            : "translate-x-full"
        )}
      >
        {/* Drawer header */}
        <div
          className={cn(
            "flex shrink-0 items-center justify-between",
            "border-b border-deep-teal/10",
            "px-5 py-4",
            "pt-[max(1rem,env(safe-area-inset-top))]"
          )}
        >
          <a
            href="#home"
            onClick={onClose}
            className="flex min-h-11 items-center rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-teal/30"
            aria-label="Go to home"
          >
            <Logo compact />
          </a>

          <button
            type="button"
            onClick={onClose}
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center",
              "rounded-full",
              "border border-deep-teal/10",
              "bg-white/50",
              "text-deep-teal",
              "transition-all duration-200",
              "hover:bg-sage/40",
              "active:scale-95",
              "focus:outline-none focus:ring-2 focus:ring-deep-teal/30"
            )}
            aria-label="Close menu"
          >
            <X
              size={21}
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Mobile navigation"
          className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 py-6"
        >
          {/* Small label */}
          <p className="mb-3 px-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#5a6d66]/70">
            Explore
          </p>

          {/* Links */}
          <div className="flex flex-col">
            {site.nav.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "group flex min-h-[4rem] items-center justify-between",
                  "border-b border-deep-teal/10",
                  "px-2",
                  "font-serif text-[1.55rem]",
                  "tracking-[-0.025em]",
                  "text-deep-teal",
                  "transition-colors duration-200",
                  "hover:text-sage-dark",
                  "focus:outline-none focus:ring-2 focus:ring-deep-teal/20"
                )}
              >
                <span>{item.label}</span>

                <ArrowUpRight
                  size={19}
                  strokeWidth={1.7}
                  className={cn(
                    "text-deep-teal/35",
                    "transition-transform duration-200",
                    "group-hover:translate-x-0.5",
                    "group-hover:-translate-y-0.5",
                    index === site.nav.length - 1 &&
                      "text-deep-teal/50"
                  )}
                />
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-auto pt-8">
            <div className="rounded-[1.5rem] bg-sage/25 p-4">
              <p className="mb-3 px-1 text-sm leading-relaxed text-deep-teal/70">
                Ready to take the next step toward a healthier,
                more balanced you?
              </p>

              <WhatsAppButton
                className="w-full justify-center"
                showIcon={false}
              >
                Get started
              </WhatsAppButton>
            </div>
          </div>
        </nav>

        {/* Bottom safe-area spacing */}
        <div className="h-[max(0.75rem,env(safe-area-inset-bottom))] shrink-0" />
      </div>
    </div>
  );
}