// All editable portfolio content lives here.

export const PROFILE = {
  first: "Shilpa",
  last: "Bijalwan",
  role: "Frontend Engineer",
  email: "shilpabijalwan@gmail.com",
  location: "Gurgaon, Haryana",
  resume: "/Resume.pdf",
  photo: "/pic.jpg",
  // Flip to false to hide the "open to opportunities" signal everywhere.
  available: true,
  formspree: "https://formspree.io/f/xzbqqnnn",
  socials: [
    { label: "GitHub", href: "https://github.com/shilpabijalwan" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shilpabijalwan01/" },
  ],
};

// First day as a professional developer — drives the "years" stat.
const CAREER_START = new Date(2023, 5, 1);
export const yearsOfExperience = () =>
  Math.max(1, Math.floor((Date.now() - CAREER_START) / (365.25 * 864e5)));

export const ROTATING_WORDS = ["fun.", "fast.", "friendly.", "effortless."];

// Wrap a phrase in *asterisks* to set it in italic serif.
export const ABOUT =
  "I'm a frontend developer who loves turning *complex problems* into *simple, beautiful* interfaces. I build responsive, user-focused products with React, Next.js, Vue and Tailwind — obsessing over clean components, smooth performance and the *small details* that make software feel effortless.";

// Newest first — the first entry drives the "Currently @" sticker and the "Now!" badge.
export const EXPERIENCES = [
  {
    company: "Masters Union",
    role: "Frontend Developer",
    start: "Aug 2025",
    end: "Present",
    location: "Gurgaon, Haryana",
    description:
      "Building an internal SaaS CRM that takes student leads from capture to enrollment — role-based dashboards, dynamic lead forms and data-heavy tables with filtering, sorting and search for high-volume admissions teams. Designing reusable React components and tuning performance for large datasets.",
    tags: ["React", "REST APIs", "CRM", "Figma"],
  },
  {
    company: "Omniful",
    role: "Software Engineer",
    start: "Oct 2024",
    end: "Aug 2025",
    location: "Gurgaon, Haryana",
    description:
      "Shipped modular features for a B2B logistics SaaS spanning WMS, TMS, OMS and POS — real-time operational dashboards, faster load times through code-splitting, lazy loading and memoization, and Cypress end-to-end tests to catch regressions.",
    tags: ["React", "Redux", "Cypress", "Performance"],
  },
  {
    company: "Evomorf",
    role: "Frontend Developer",
    start: "Jun 2023",
    end: "Oct 2024",
    location: "Mohali, Punjab",
    description:
      "Developed responsive frontend apps with a reusable component architecture, integrated them with backend APIs, and partnered with designers and backend developers across multiple client projects.",
    tags: ["React", "REST APIs", "Reusable UI"],
  },
];

// Mirrors the Skills section of Resume.pdf. Items without an href render as plain pills.
export const SKILL_GROUPS = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", href: "https://www.typescriptlang.org/" },
      { name: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", href: "https://react.dev" },
      { name: "Next.js", href: "https://nextjs.org/" },
      { name: "Vue.js", href: "https://vuejs.org/" },
      { name: "Tailwind CSS", href: "https://tailwindcss.com/" },
      { name: "Bootstrap", href: "https://getbootstrap.com/" },
    ],
  },
  {
    title: "State Management",
    items: [
      { name: "Redux", href: "https://redux.js.org/" },
      { name: "Pinia", href: "https://pinia.vuejs.org/" },
      { name: "Vuex", href: "https://vuex.vuejs.org/" },
    ],
  },
  {
    title: "Backend Fundamentals",
    items: [
      { name: "Node.js", href: "https://nodejs.org/en" },
      { name: "REST APIs" },
      { name: "Authentication Flows" },
      { name: "CRUD Operations" },
    ],
  },
  {
    title: "Other",
    items: [
      { name: "Git", href: "https://git-scm.com/" },
      { name: "Stripe Integration", href: "https://docs.stripe.com/" },
      { name: "SEO Optimization", href: "https://developers.google.com/search/docs" },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      { name: "Team Collaboration" },
      { name: "Problem Solving" },
      { name: "Adaptability" },
      { name: "Time Management" },
    ],
  },
];

export const PROJECTS = [
  {
    title: "AI Text Summarizer",
    blurb:
      "Paste a wall of text, get back crisp bullet-point summaries — powered by Google's Gemini API.",
    stack: ["React", "Tailwind", "Gemini API"],
    img: "/work/ai-summarizer.png",
    href: "https://ai-content-summarizer-three.vercel.app/",
  },
  {
    title: "Warehouse Management System",
    blurb:
      "Software that runs and optimises warehouse and fulfilment operations, from inbound to dispatch.",
    stack: ["React", "Tailwind", "Redux Toolkit"],
    img: "/work/omniful-wms.png",
  },
  {
    title: "Transport Management System",
    blurb:
      "Plans, tracks and optimises day-to-day transport logistics — shipments, trips, fleets and hubs.",
    stack: ["React", "Tailwind", "Redux Toolkit"],
    img: "/work/omniful-tms.png",
  },
  {
    title: "Eat From Your Seat",
    blurb:
      "A suite of connected stadium apps that lifts the fan experience and food & beverage revenue.",
    stack: ["Vue", "Nuxt", "Vuex"],
    img: "/work/eat-from-your-seat.png",
    href: "https://www.eatfromyourseat.com/",
  },
  {
    title: "Prodigy Football",
    blurb:
      "An elite development program raising coaching standards at grassroots and community level, with Stripe payments.",
    stack: ["React", "Tailwind", "Redux Toolkit", "Stripe"],
    img: "/work/prodigy-football.png",
    href: "https://program.prodigyfootball.com.au/",
  },
];

// Scrolling tape strips — highlights from the résumé's skills and summary.
export const MARQUEE = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Vue.js",
  "Redux",
  "Pinia",
  "Tailwind CSS",
  "Node.js",
  "REST APIs",
  "Git",
  "Stripe",
  "SEO",
  "Performance",
];
