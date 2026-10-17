import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { EXPERIENCES } from "../data";

const BARS = ["pink", "lilac", "yellow", "mint"];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead index="02" label="Experience" title="Where I've" em="worked" color="pink" />

        <ol className="xp">
          {EXPERIENCES.map((exp, i) => (
            <Reveal as="li" key={exp.company} delay={i * 0.08} className="xp__item">
              {/* A little retro OS window per job */}
              <article className="window card">
                <header className={`window__bar bg-${BARS[i % BARS.length]}`}>
                  <span className="window__dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="mono">{exp.company.toLowerCase()}.exe</span>
                  <span className="mono window__date">
                    {exp.start} → {exp.end}
                  </span>
                </header>
                <div className="window__body">
                  <span className="window__index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{exp.role}</h3>
                  <p className="window__where">
                    @ {exp.company} <span>·</span> {exp.location}
                  </p>
                  <p className="window__desc">{exp.description}</p>
                  <ul className="tags">
                    {exp.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                {exp.end === "Present" && <span className="now-sticker">Now!</span>}
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
