import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { EASE } from "./Reveal";
import { ArrowDown, ArrowRight } from "./Icons";
import { EXPERIENCES, PROFILE, ROTATING_WORDS, yearsOfExperience } from "../data";

const COLORS = ["pink", "lime", "lilac", "yellow", "mint", "orange"];
const pop = { type: "spring", stiffness: 380, damping: 14 };

// Chunky letters that spring in, and jump when you poke them.
function BouncyWord({ text, delay, colorful }) {
  return text.split("").map((ch, i) => (
    <motion.span
      key={i}
      className={`char${colorful ? ` char--${COLORS[i % COLORS.length]}` : ""}`}
      initial={{ y: 90, opacity: 0, rotate: i % 2 ? 12 : -12 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      whileHover={{ y: -22, rotate: i % 2 ? 9 : -9, transition: pop }}
      transition={{ ...pop, delay: delay + i * 0.05 }}
    >
      {ch}
    </motion.span>
  ));
}

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const n = ROTATING_WORDS.length;
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % n), 2200);
    return () => clearInterval(id);
  }, [n]);

  return (
    <span className="rotator">
      <span className="sr-only">{ROTATING_WORDS[0]}</span>
      {ROTATING_WORDS.map((w, k) => {
        const state = k === index ? "in" : k === (index - 1 + n) % n ? "out" : "wait";
        return (
          <motion.span
            key={w}
            aria-hidden="true"
            className={`rotator__word bg-${COLORS[k % COLORS.length]}`}
            initial={false}
            animate={{ y: { in: "0%", out: "-110%", wait: "110%" }[state] }}
            transition={state === "wait" ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 20 }}
          >
            {w}
          </motion.span>
        );
      })}
    </span>
  );
}

// 16-point starburst polygon for the résumé badge.
const STAR = Array.from({ length: 32 }, (_, i) => {
  const r = i % 2 ? 50 : 60;
  const a = (i / 32) * Math.PI * 2;
  return `${(64 + Math.cos(a) * r).toFixed(1)},${(64 + Math.sin(a) * r).toFixed(1)}`;
}).join(" ");

export default function Hero() {
  const ref = useRef(null);
  const current = EXPERIENCES[0];

  const stickers = [
    { text: PROFILE.role, color: "lime", rot: -8, place: "role" },
    { text: `Currently @ ${current.company}`, color: "yellow", rot: 6, place: "now" },
    { text: `${yearsOfExperience()}+ yrs shipping`, color: "pink", rot: -5, place: "years" },
  ];

  return (
    <section id="top" className="hero" ref={ref}>
      <div className="container hero__inner">
        <div className="hero__copy">
          <motion.p
            className="hero__hey"
            initial={{ opacity: 0, rotate: -20, scale: 0.6 }}
            animate={{ opacity: 1, rotate: -4, scale: 1 }}
            transition={{ ...pop, delay: 0.1 }}
          >
            Hey there, I'm
          </motion.p>

          <h1 className="hero__name" aria-label={`${PROFILE.first} ${PROFILE.last}`}>
            <span className="line" aria-hidden="true">
              <BouncyWord text={PROFILE.first} delay={0.2} />
            </span>
            <span className="line line--mark" aria-hidden="true">
              <BouncyWord text={PROFILE.last} delay={0.45} />
            </span>
          </h1>

          <motion.div
            className="hero__tail"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
          >
            <p className="hero__intro">
              I build web interfaces that feel <RotatingWord />
            </p>
            <div className="hero__ctas">
              <a href="#work" className="btn btn--ink">
                See my work <ArrowRight />
              </a>
              <a href="#contact" className="btn">
                Say hello 👋
              </a>
            </div>
            {PROFILE.available && (
              <p className="status">
                <i /> Open to new opportunities
              </p>
            )}
            <p className="stickers__hint">psst — drag the stickers</p>
          </motion.div>
        </div>

        <div className="hero__stage">
          <motion.figure
            className="hero__photo"
            initial={{ scale: 0.5, opacity: 0, rotate: 12 }}
            animate={{ scale: 1, opacity: 1, rotate: -2 }}
            transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.5 }}
          >
            <span className="washi" aria-hidden="true" />
            <div className="blob">
              <img src={PROFILE.photo} alt={`Portrait of ${PROFILE.first} ${PROFILE.last}`} />
            </div>
            <motion.a
              className="starburst"
              href={PROFILE.resume}
              download="Shilpa_Bijalwan_Resume.pdf"
              data-cursor="Get CV"
              aria-label="Download résumé (PDF)"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
            >
              <svg viewBox="0 0 128 128" aria-hidden="true">
                <polygon points={STAR} />
                <defs>
                  <path id="star-path" d="M64 64m-36 0a36 36 0 1 1 72 0a36 36 0 1 1-72 0" />
                </defs>
                <text>
                  <textPath href="#star-path" textLength="224" lengthAdjust="spacing">
                    DOWNLOAD CV ✶ DOWNLOAD CV ✶
                  </textPath>
                </text>
              </svg>
              <span className="starburst__core">
                <ArrowDown />
              </span>
            </motion.a>
          </motion.figure>

          <div className="stickers">
            {stickers.map((s, i) => (
              <motion.div
                key={s.text}
                className={`sticker sticker--${s.place} bg-${s.color}`}
                drag
                dragConstraints={ref}
                dragElastic={0.2}
                initial={{ scale: 0, rotate: s.rot * 3 }}
                animate={{ scale: 1, rotate: s.rot }}
                whileHover={{ scale: 1.08, rotate: -s.rot }}
                whileDrag={{ scale: 1.15, rotate: 0, zIndex: 30 }}
                transition={{ ...pop, delay: 1.1 + i * 0.12 }}
                data-cursor="Drag me"
              >
                {s.text}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
