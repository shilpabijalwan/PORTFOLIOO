import Reveal from "./Reveal";

export default function SectionHead({ index, label, title, em, after, color = "lime" }) {
  return (
    <Reveal className="section-head">
      <p className={`section-head__label bg-${color}`}>
        <span>{index}</span> {label}
      </p>
      <h2>
        {title} <em>{em}</em> {after}
      </h2>
    </Reveal>
  );
}
