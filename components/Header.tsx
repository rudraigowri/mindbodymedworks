"use client";

import { useEffect, useId, useState } from "react";
import { Menu } from "lucide-react";
import { site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileMenu } from "@/components/MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const panelId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sync = () => setActive(window.location.hash || "#home");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "site-header sticky top-0 z-50 border-b border-transparent bg-ivory/80 backdrop-blur-xl transition-[border-color,box-shadow] duration-300",
        scrolled ? "border-border shadow-[0_10px_30px_-20px_rgba(23,63,58,0.35)]" : "",
      )}
    >
      <div className="relative z-50 mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-5 lg:px-8">
        <a href="#home" className="min-h-11 min-w-0 py-1" onClick={() => setActive("#home")}>
          <Logo compact />
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-active={active === item.href}
              onClick={() => setActive(item.href)}
              className="nav-item inline-flex h-[4.75rem] items-center px-3.5 text-[0.8125rem] font-medium text-deep-teal/80 transition-colors hover:text-deep-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton className="shadow-[0_14px_24px_-18px_rgba(23,63,58,0.85)]" showIcon={false}>Connect on WhatsApp</WhatsAppButton>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-deep-teal lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => setOpen((value) => !value)}
        >
          <Menu size={20} />
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} panelId={panelId} />
    </header>
  );
}
