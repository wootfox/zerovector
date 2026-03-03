// Investiture Page — Content
// Part of the Zero-Vector content layer. See en.js for the combined export.

const investiture = {
  nav: {
    brand: 'Investiture',
    back: 'Zero Vector',
    github: 'GitHub',
  },

  hero: {
    label: 'A Zero-Vector Scaffold',
    title: ['The Next', 'Step'],
    subtitle: 'Start every project with doctrine, not just dependencies. VECTOR.md tells agents and teammates why this project exists before a line of code is written.',
    badge: 'Free & Open Source',
  },

  whatItIs: {
    label: 'The Scaffold',
    headline: 'Start with intent. Build with structure.',
    body: 'Investiture is a project scaffold that does more than set up your stack. It sets up your thinking. Every Investiture project starts with VECTOR.md \u2014 a doctrine file that captures who your project serves, what problem it solves, what you know, and what you still need to learn. Your AI agents read it before they write a line of code. Your team reads it before they make a decision. The result: every project starts aligned. Not with a blank canvas and good intentions. With structured intent and a clear reading order.',
    callout: {
      title: 'What This Is Not',
      body: 'Not Tailwind. Not Bootstrap. Not a UI kit. Investiture is unopinionated about your design. It only cares about where your code lives, how your agents onboard, and what your project knows about itself. Bring your own design system, or ask Claude to build one.',
    },
  },

  whatYouGet: {
    label: 'What You Get',
    intro: 'Clone one repo. Get a working scaffold with doctrine, architecture, and research schemas built in.',
    fileTree: `investiture/
\u251C\u2500\u2500 VECTOR.md              \u2190 Project doctrine (read first)
\u251C\u2500\u2500 CLAUDE.md              \u2190 Agent persona (read second)
\u251C\u2500\u2500 ARCHITECTURE.md        \u2190 Technical guide (read third)
\u251C\u2500\u2500 /src                   \u2190 React 19 + Vite starter
\u251C\u2500\u2500 /core                  \u2190 Pure logic, state, utilities
\u251C\u2500\u2500 /services              \u2190 API layer
\u251C\u2500\u2500 /design-system         \u2190 CSS variable tokens
\u251C\u2500\u2500 /vector
\u2502   \u251C\u2500\u2500 /schemas           \u2190 6 research schemas
\u2502   \u251C\u2500\u2500 /research          \u2190 Your structured findings
\u2502   \u2514\u2500\u2500 /decisions         \u2190 Architecture Decision Records
\u251C\u2500\u2500 install.sh             \u2190 Cross-platform setup
\u2514\u2500\u2500 preflight.sh           \u2190 Environment check`,
    readingOrder: [
      { step: '01', file: 'VECTOR.md', desc: 'Why this project exists' },
      { step: '02', file: 'CLAUDE.md', desc: 'How your AI agent behaves' },
      { step: '03', file: 'ARCHITECTURE.md', desc: 'What the technical implementation looks like' },
    ],
    readingOrderCaption: 'This is onboarding for both humans and agents.',
  },

  connection: {
    label: 'The Convention',
    headline: 'Built on the Zero Vector methodology',
    body: 'VECTOR.md is not just a file. It is a convention. Like README.md tells people what your project is, VECTOR.md tells agents and teammates why your project exists and what you know about your users. The /vector directory holds structured research artifacts \u2014 interviews, jobs to be done, personas, competitive analysis, blue ocean strategy, assumptions \u2014 in machine-readable schemas that any AI tool can consume. Investiture brings this convention into every new project automatically. You do not have to remember to add it. You do not have to set up the directory structure. It is there from the first commit.',
  },

  quickstart: {
    label: 'Quick Start',
    intro: 'Three commands. Doctrine, architecture, and a working scaffold.',
    commands: [
      'git clone https://github.com/erikaflowers/investiture.git my-project',
      'cd my-project && bash install.sh',
      'open VECTOR.md',
    ],
    after: 'Fill in your project identity. Open Claude Code. Start building. The magic is not just that the scaffold works. It is that your AI collaborator already understands the project because VECTOR.md told it everything it needs to know.',
  },

  roadmap: {
    label: 'On the Horizon',
    versions: [
      {
        version: 'v1.3',
        title: 'Parameters',
        body: 'Choose your stack. React or Vue or Svelte. FastAPI or Express. Supabase or Firebase. One command, configured your way.',
      },
      {
        version: 'v2.0',
        title: 'Seeded Init',
        body: 'Tell Investiture what you are building and who it is for. It sets up the project and seeds your research with first hypotheses and assumptions to validate.',
      },
    ],
  },

  quote: {
    text: 'The most important step a person can take is always the next one.',
    cite: 'Dalinar Kholin \u2014 The Stormlight Archive',
    context: 'Named for Investiture, the fundamental magical energy of Brandon Sanderson\'s Cosmere universe. Like its namesake, this scaffold is a foundation that can manifest as many different things.',
  },

  cta: {
    primaryCta: 'Clone Investiture',
    primaryUrl: 'https://github.com/erikaflowers/investiture',
    secondaryCta: 'Read the Docs',
    secondaryUrl: 'https://github.com/erikaflowers/investiture#readme',
  },
};

export default investiture;
