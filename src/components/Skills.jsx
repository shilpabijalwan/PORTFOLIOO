import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { SKILL_GROUPS } from "../data";

const CARD_COLORS = ["lime", "pink", "lilac", "yellow", "mint", "orange"];
const ROTS = [-2, 1.5, -1, 2, -1.5, 1];
const wobble = { type: "spring", stiffness: 420, damping: 12 };

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead index="03" label="Toolkit" title="My" em="toolbox" color="lilac" />

        <div className="skills">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.08}>
              <div
                className={`skills__group card bg-${CARD_COLORS[gi % CARD_COLORS.length]}`}
                style={{ "--rot": `${ROTS[gi % ROTS.length]}deg` }}
              >
                <h3>
                  {group.title}
                  <span className="mono">×{group.items.length}</span>
                </h3>
                <ul>
                  {group.items.map((s, i) => {
                    const hover = { y: -5, rotate: i % 2 ? 4 : -4, scale: 1.06 };
                    return (
                      <li key={s.name}>
                        {s.href ? (
                          <motion.a
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            className="chip"
                            data-cursor="Docs"
                            whileHover={hover}
                            whileTap={{ scale: 0.94 }}
                            transition={wobble}
                          >
                            {s.name}
                          </motion.a>
                        ) : (
                          <motion.span className="chip" whileHover={hover} transition={wobble}>
                            {s.name}
                          </motion.span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
