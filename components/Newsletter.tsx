"use client";

import { FormEvent, useState } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "loading" | "success" | "error";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    if (!EMAIL_PATTERN.test(value)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    setMessage("");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
    setMessage("You’re on the list. Welcome to the Mindbodymedworks community.");
    setEmail("");
  }

  return (
    <section
      id="resources"
      aria-labelledby="newsletter-heading"
      className="bg-cream"
    >
      <div className="mx-auto max-w-[42rem] px-6 py-28 text-center lg:px-10 lg:py-36">
        <h2 id="newsletter-heading" className="font-serif section-title text-deep-teal">
          Join our wellness community
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted">
          Get tips, resources and updates delivered to your inbox.
        </p>
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          noValidate
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="Your email address"
            className="min-h-11 flex-1 rounded-full border border-sage-dark/15 bg-white px-5 text-text"
            aria-invalid={status === "error"}
            aria-describedby="newsletter-status"
            disabled={status === "loading"}
          />
          <button type="submit" className="btn-pill" disabled={status === "loading"}>
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </button>
        </form>
        <p
          id="newsletter-status"
          className={`mt-4 min-h-6 text-sm ${
            status === "error" ? "text-red-800" : "text-sage-dark"
          }`}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      </div>
    </section>
  );
}
