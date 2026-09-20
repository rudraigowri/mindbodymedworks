"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  panelId: string;
};

export function MobileMenu({ open, onClose, panelId }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const firstLink = panelRef.current?.querySelector("a");
    firstLink?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node;
      if (panelRef.current && !panelRef.current.contains(target)) {
        onClose();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-40 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-deep-teal/20 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        ref={panelRef}
        id={panelId}
        className={cn(
          "absolute inset-y-0 right-0 flex h-full w-full max-w-sm flex-col overflow-x-hidden bg-ivory transition-transform duration-300 ease-out motion-reduce:transition-none",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-[4.75rem] items-center justify-between border-b border-border px-5">
          <a href="#home" onClick={onClose} className="min-h-11 min-w-0 py-1">
            <Logo compact />
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-deep-teal"
            aria-label="Close menu"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex flex-1 flex-col px-6 py-8">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex min-h-14 items-center border-b border-border font-serif text-[1.65rem] tracking-[-0.02em] text-deep-teal"
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-auto pt-8 pb-6">
            <WhatsAppButton className="w-full" showIcon={false}>
              Get started
            </WhatsAppButton>
          </div>
        </nav>
      </div>
    </div>
  );
}
