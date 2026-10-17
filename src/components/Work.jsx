import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";
import { PROJECTS } from "../data";

const COLORS = ["lime", "pink", "lilac", "yellow", "mint"];

const host = (href) => (href ? new URL(href).hostname.replace(/^www\./, "") : "internal.app");

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHead index="04" label="Work" title="Stuff I've" em="built" color="yellow" />

        <ul className="projects">
          {PROJECTS.map((p, i) => {
            const Card = p.href ? "a" : "div";
            const linkProps = p.href
              ? { href: p.href, target: "_blank", rel: "noreferrer", "data-cursor": "Visit!" }
              : { "data-cursor": "Internal" };
            return (
              <Reveal as="li" key={p.title} delay={(i % 2) * 0.08} className="projects__item">
                <Card className={`project card bg-${COLORS[i % COLORS.length]}`} {...linkProps}>
                  {i === 0 && <span className="featured">Featured</span>}
                  <div className="browser">
                    <div className="browser__bar">
                      <span className="window__dots" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                      </span>
                      <span className="browser__url mono">{host(p.href)}</span>
                    </div>
                    <div className="browser__shot">
                      <img src={p.img} alt={`Screenshot of ${p.title}`} loading="lazy" />
                    </div>
                  </div>

                  <div className="project__body">
                    <span className="project__num">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{p.title}</h3>
                    <p>{p.blurb}</p>
                    <ul className="tags">
                      {p.stack.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <span className={`btn btn--sm${p.href ? " btn--ink" : " btn--ghost"}`}>
                      {p.href ? (
                        <>
                          Visit live site <ArrowUpRight />
                        </>
                      ) : (
                        "Internal tool · private"
                      )}
                    </span>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
