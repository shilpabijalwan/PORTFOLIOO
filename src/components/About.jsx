import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { ArrowDown } from "./Icons";
import { ABOUT, EXPERIENCES, PROFILE, PROJECTS, yearsOfExperience } from "../data";

const HIGHLIGHTS = ["lime", "pink", "lilac"];

// "Hello *big world*" -> [{ text: "Hello" }, { text: "big world", hl: "lime" }]
let hl = 0;
const tokens = ABOUT.split(/(\*[^*]+\*)/)
  .filter(Boolean)
  .flatMap((chunk) =>
    chunk.startsWith("*")
      ? [{ text: chunk.slice(1, -1), hl: HIGHLIGHTS[hl++ % HIGHLIGHTS.length] }]
      : chunk.split(/\s+/).filter(Boolean).map((text) => ({ text }))
  );

function Token({ hl, children }) {
  return <span className={hl ? `marker bg-${hl}` : undefined}>{children}</span>;
}

export default function About() {

  const stats = [
    { value: `${yearsOfExperience()}+`, label: "years shipping production frontends", color: "pink", rot: -3 },
    { value: EXPERIENCES.length, label: "product teams I've built with", color: "yellow", rot: 2 },
    { value: PROJECTS.length, label: "projects, from AI tools to logistics", color: "mint", rot: -1.5 },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead index="01" label="About" title="The" em="human" after="behind the pixels" />

        <div className="about__top">
          <p className="statement">
            {tokens.map((t, i) => (
              <span key={i}>
                <Token hl={t.hl}>{t.text}</Token>{" "}
              </span>
            ))}
          </p>

          <Reveal className="now-note-wrap">
            <aside className="now-note card bg-yellow">
              <p className="mono">Right now</p>
              <p className="now-note__role">{EXPERIENCES[0].role}</p>
              <p className="now-note__meta">
                @ {EXPERIENCES[0].company}
                <br />
                {PROFILE.location}
              </p>
              {PROFILE.available && (
                <p className="status">
                  <i /> Open to new roles
                </p>
              )}
            </aside>
          </Reveal>
        </div>

        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className={`stat card bg-${s.color}`} style={{ "--rot": `${s.rot}deg` }}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <a
              href={PROFILE.resume}
              download="Shilpa_Bijalwan_Resume.pdf"
              className="stat stat--cta card"
              style={{ "--rot": "2.5deg" }}
            >
              <strong>CV</strong>
              <span>
                Grab my resume <ArrowDown />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
