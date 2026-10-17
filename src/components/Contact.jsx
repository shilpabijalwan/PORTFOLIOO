import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { ArrowRight, ArrowUpRight, Check, Copy } from "./Icons";
import { PROFILE } from "../data";
import useClock from "../lib/useClock";

const STATUS_TEXT = {
  sending: "Sending…",
  sent: "Woohoo! Message sent — I'll get back to you soon.",
  error: "Oops, that didn't go through. Please email me directly.",
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle");
  const time = useClock();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(PROFILE.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="contact card bg-pink">
          <span className="stamp">
            Let’s
            <br />
            build
          </span>
          <SectionHead
            index="05"
            label="Contact"
            title="Let's make something"
            em="fun"
            after="together!"
            color="yellow"
          />

          <div className="contact__grid">
            <div className="contact__info">
              <p className="mono">Drop a line ↓</p>
              <div className="email">
                <a href={`mailto:${PROFILE.email}`} className="email__link">
                  {PROFILE.email}
                </a>
                <button
                  type="button"
                  className="email__copy"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  data-cursor={copied ? "Copied!" : "Copy"}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? "y" : "n"}
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 90 }}
                      transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    >
                      {copied ? <Check /> : <Copy />}
                    </motion.span>
                  </AnimatePresence>
                </button>
                <span className="sr-only" aria-live="polite">
                  {copied ? "Email copied to clipboard" : ""}
                </span>
              </div>

              <ul className="contact__facts">
                <li className="bg-paper">📍 {PROFILE.location}</li>
                <li className="bg-lime">🕒 {time} IST</li>
                {PROFILE.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" className="btn btn--sm">
                      {s.label} <ArrowUpRight />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <form className="form card bg-paper" onSubmit={submit}>
              <label className="field">
                <span className="mono">What's your name?</span>
                <input name="name" type="text" autoComplete="name" placeholder="Jane Doe" required />
              </label>
              <label className="field">
                <span className="mono">Your email</span>
                <input name="email" type="email" autoComplete="email" placeholder="jane@company.com" required />
              </label>
              <label className="field">
                <span className="mono">Tell me about it</span>
                <textarea name="message" rows={4} placeholder="Hi Shilpa, we're building…" required />
              </label>
              <div className="form__foot">
                <button type="submit" className="btn btn--ink" disabled={status === "sending"}>
                  Send message <ArrowRight />
                </button>
                <p className={`form__status is-${status}`} role="status">
                  {STATUS_TEXT[status] || ""}
                </p>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
