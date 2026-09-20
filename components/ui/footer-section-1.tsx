"use client";

import { motion, type Variants } from "motion/react";
import { Logo } from "@/components/Logo";
import { site } from "@/data/site";
import { SocialCloud } from "@/components/ui/footer-section-1-utils/social-cloud";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#services", label: "Services" },
];

const supportLinks = [
  { href: site.social.instagram, label: "Instagram", external: true },
  { href: site.social.medium, label: "Therapy blog", external: true },
  { href: site.social.linkedin, label: "LinkedIn", external: true },
];

export default function Footer1() {
  const footerTags = site.footerMark.split(/\s+/).filter(Boolean);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    },
  } satisfies Record<string, unknown>;

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 22,
      },
    },
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#f7f4ed] py-12 text-foreground">
      <div className="absolute inset-x-0 top-0 h-px bg-sage-dark/10" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -90px 0px" }}
        variants={containerVariants}
        className="container mx-auto max-w-6xl px-5 lg:px-8"
      >
        <div className="grid gap-10 rounded-[2rem] border border-sage-dark/10 bg-white/40 p-6 shadow-[0_24px_60px_-42px_rgba(23,63,58,0.7)] backdrop-blur-sm sm:p-8 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <motion.div variants={itemVariants} className="max-w-md">
            <Logo compact className="text-[1.18rem]" />

            <p className="mt-5 text-sm leading-7 text-muted">
              Practical tools, expert guidance, and a supportive path to everyday strength,
              balance, and lasting wellness.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {footerTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-sage-dark/10 bg-sage/35 px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-sage-dark"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-xl text-deep-teal">Explore</h3>
            <nav aria-label="Footer navigation" className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-deep-teal/80 transition-colors hover:text-deep-teal"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-xl text-deep-teal">Support</h3>

            <div className="mt-5 space-y-3">
              {supportLinks.map((link) => {
                const isExternal = Boolean(link.external);

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="block text-sm text-deep-teal/80 transition-colors hover:text-deep-teal"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-6">
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sage-dark/70">
                Connect
              </p>
              <SocialCloud className="justify-start" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="mt-10 h-12 border-y border-sage-dark/10 bg-[repeating-linear-gradient(315deg,rgba(23,63,58,0.12)_0,rgba(23,63,58,0.12)_1px,transparent_0,transparent_12px)]"
        initial={{ backgroundPositionX: "0%" }}
        whileInView={{ backgroundPositionX: "100%" }}
        viewport={{ once: true }}
        transition={{ ease: "linear", duration: 20 }}
      />

      <motion.div
        className="container mx-auto mt-8 max-w-6xl px-5 text-sm text-muted lg:px-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="text-sage-dark/80">{site.tagline}</p>
        </div>
      </motion.div>
    </footer>
  );
}
