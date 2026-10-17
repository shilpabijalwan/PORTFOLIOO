import { motion } from "framer-motion";
import { ArrowUp } from "./Icons";
import { PROFILE } from "../data";
import useClock from "../lib/useClock";

const COLORS = ["pink", "lime", "lilac", "yellow", "mint", "orange"];
const spring = { type: "spring", stiffness: 380, damping: 12 };

export default function Footer() {
  const time = useClock();
  const name = `${PROFILE.first} ${PROFILE.last}`;

  return (
    <footer className="footer">
      {/* Observe the wrapper — the letters start pushed down, so they can't trigger it themselves. */}
      <motion.div
        className="footer__mark"
        aria-hidden="true"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.04 }}
      >
        {name.split("").map((ch, i) =>
          ch === " " ? (
            <span key={i} className="footer__gap" />
          ) : (
            <motion.span
              key={i}
              className={`char--${COLORS[i % COLORS.length]}`}
              variants={{ hidden: { y: "80%", rotate: 15, opacity: 0 }, shown: { y: "0%", rotate: 0, opacity: 1 } }}
              whileHover={{ y: -24, rotate: i % 2 ? 10 : -10, transition: spring }}
              transition={spring}
            >
              {ch}
            </motion.span>
          )
        )}
      </motion.div>

      <div className="container footer__row">
        <span>
          © {new Date().getFullYear()} {name} · made with ♥ &amp; way too much CSS
        </span>
        <span>India · {time}</span>
        <nav aria-label="Social">
          {PROFILE.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
          <a href="#top">
            Top <ArrowUp />
          </a>
        </nav>
      </div>
    </footer>
  );
}
