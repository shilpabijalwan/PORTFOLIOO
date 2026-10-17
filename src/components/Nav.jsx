import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { PROFILE } from "../data";
import { EASE } from "./Reveal";
import { ArrowDown } from "./Icons";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Toolkit" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];
const MENU_COLORS = ["pink", "lilac", "yellow", "mint", "orange"];

export default function Nav() {
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useMotionValueEvent(scrollY, "change", (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(v > prev && v > 500);
  });

  // Highlight whichever section is crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["top", ...LINKS.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} aria-hidden="true" />

      <motion.header
        className="nav"
        animate={{ y: hidden && !open ? "-160%" : "0%" }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <motion.a
          href="#top"
          className="nav__logo"
          aria-label="Shilpa Bijalwan — back to top"
          whileHover={{ rotate: 360 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
        >
          Sb
        </motion.a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link${active === l.id ? " is-active" : ""}`}
              aria-current={active === l.id ? "true" : undefined}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="nav__pill"
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                />
              )}
              {l.label}
            </a>
          ))}
        </nav>

        {PROFILE.available && (
          <span className="nav__live">
            <i /> Available
          </span>
        )}

        <a className="btn btn--ink btn--sm nav__cta" href={PROFILE.resume} download="Shilpa_Bijalwan_Resume.pdf">
          Résumé <ArrowDown />
        </a>

        <button
          className="btn btn--sm nav__menu"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "Close ✕" : "Menu ☰"}
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="menu bg-lime"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <nav aria-label="Mobile">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`menu__link bg-${MENU_COLORS[i]}`}
                  initial={{ opacity: 0, x: -60, rotate: -6 }}
                  animate={{ opacity: 1, x: 0, rotate: i % 2 ? 1.5 : -1.5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 + i * 0.06 }}
                >
                  <span className="mono">0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="menu__foot">
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              <div>
                {PROFILE.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                ))}
                <a href={PROFILE.resume} download="Shilpa_Bijalwan_Resume.pdf">
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
