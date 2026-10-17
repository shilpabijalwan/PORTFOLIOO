import { MARQUEE } from "../data";

function Tape({ className, reverse }) {
  const row = (hidden) => (
    <ul className="tape__row" aria-hidden={hidden || undefined}>
      {MARQUEE.map((item) => (
        <li key={item}>
          {item}
          <span className="tape__star">✶</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`tape ${className}`}>
      <div className={`tape__track${reverse ? " tape__track--reverse" : ""}`}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

// Two strips of "tape" crossing each other, scrolling in opposite directions.
export default function Marquee() {
  return (
    <div className="tapes" aria-label="Technologies I work with">
      <Tape className="tape--back bg-lime" reverse />
      <Tape className="tape--front bg-pink" />
    </div>
  );
}
