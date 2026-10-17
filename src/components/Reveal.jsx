import { motion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

// Fades and lifts its children into place the first time they scroll into view.
export default function Reveal({ as = "div", delay = 0, y = 36, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
