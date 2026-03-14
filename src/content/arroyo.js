// Arroyo Labs — Content Layer
// Commercial services landing page for Zero Vector paid engagements.

const arroyo = {
  nav: {
    brand: 'Arroyo',
    tagline: 'BY ZERO VECTOR',
    links: ['How It Works', 'Compare', 'Pricing'],
    cta: 'Book a Call',
  },

  hero: {
    titleLines: [
      'We build your MVP.',
      'Your agents understand it.',
      'You keep building \u2014 with or without us.',
    ],
    subtitle: 'Arroyo Labs is a product studio that builds AI-native MVPs using the Zero Vector methodology. Real code, real architecture, real product \u2014 not a prototype.',
    credibility: 'Founded by Erika Flowers \u2014 31 years of design leadership, ex-NASA, Silicon Valley veteran.',
    aside: 'You could do this yourself. That\u2019s the point \u2014 you pay us so you don\u2019t have to.',
    primaryCta: 'Book a Call',
  },

  problem: {
    label: 'THE REAL QUESTION',
    headline: 'You have better things to do\nthan learn how to build software.',
    body: [
      'You have a vision. A business. Expertise that took years to earn. The last thing you need is another tool promising to make development \u201ceasy.\u201d No tool will ever be easier than just paying someone who already knows how.',
      'Arroyo Labs exists for people who want a working product, not a new hobby. We take your vision, apply a battle-tested methodology refined at NASA and across Silicon Valley, and hand you a real product \u2014 with the documentation and agent configuration to keep building after we\u2019re gone.',
      'You don\u2019t need to understand our process. You need to trust it. Then go back to doing what you\u2019re actually good at.',
    ],
  },

  compare: {
    label: 'THREE PATHS',
    headline: 'Pick one.',
    subtitle: 'There are only three ways to get a product built. Two of them require you to do the hard part.',
    approaches: [
      {
        name: 'The Old Way',
        variant: 'muted',
        desc: 'Hire a dev shop or agency. Wait 6+ months. Spend $100k+ on something that may not even match your vision. When they leave, you\u2019re stuck with code nobody understands.',
        items: [
          '6\u201312 months to first version',
          '$100k+ typical agency engagement',
          'Vendor lock-in and dependency',
          'No doctrine, no agent layer',
          'You need them forever',
        ],
      },
      {
        name: 'The DIY Way',
        variant: 'mid',
        desc: 'Learn Zero Vector yourself. Use AI agents to build it. It works \u2014 that\u2019s literally what Zero Vector was designed for. But it requires learning a new discipline, and your time has value.',
        items: [
          'Weeks to months depending on experience',
          'Cost of your time + AI subscriptions',
          'Full ownership and understanding',
          'Steep learning curve up front',
          'You have to want the construction process',
        ],
      },
      {
        name: 'Arroyo Labs',
        variant: 'highlight',
        desc: 'We do it for you. Decades of product design expertise, the Zero Vector methodology, and a real working MVP \u2014 delivered. You write a check and get a product.',
        items: [
          'Weeks, not months',
          'Bespoke engagement pricing',
          'Full ownership \u2014 code, docs, doctrine',
          'World-class product design built in',
          'Keep building with us or without us',
        ],
      },
    ],
  },

  pipeline: {
    label: 'WHAT\u2019S DIFFERENT',
    headline: 'Not faster docs. A different pipeline.',
    subtitle: 'Every product starts with research, design, and architecture. We bake all three into the build \u2014 so your MVP ships with the DNA of a mature product.',
    rows: [
      {
        title: 'Research is built in',
        before: 'Most MVPs skip research entirely. You ship a guess, then spend months discovering you guessed wrong.',
        after: 'Every Arroyo engagement starts with structured research: user context, competitive landscape, jobs-to-be-done. It lives in the codebase, not a slide deck.',
      },
      {
        title: 'Design is the product',
        before: 'Agencies separate design from development. You get mockups, then code that looks nothing like them.',
        after: 'Product design and development happen together. Erika Flowers brings 31 years of service design, UX research, and hands-on engineering to every engagement.',
      },
      {
        title: 'Agents understand the codebase',
        before: 'Traditional dev shops hand you code. When you try to use AI to extend it, the agent starts cold every session.',
        after: 'Every Arroyo project ships with VECTOR.md doctrine and CLAUDE.md agent configuration. Your AI agents understand the codebase from their first session.',
      },
      {
        title: 'You keep the keys',
        before: 'Vendor lock-in. Monthly retainer. You need them to keep building.',
        after: 'The stack is yours the day we ship it. Keep building with agents, with us, or with another team. No dependency on Arroyo.',
      },
    ],
  },

  howItWorks: {
    label: 'HOW IT WORKS',
    headline: 'Five stages. One product.',
    subtitle: 'From first conversation to working MVP. All you have to do is start.',
    stages: [
      { num: '01', label: 'DISCOVER', variant: 'primary', body: 'We talk. You tell us your vision, your customer, and the business outcome you\u2019re after. We listen for what matters and what\u2019s noise.' },
      { num: '02', label: 'PLAN', variant: 'primary', body: 'Custom product plan, technical architecture, and agent configuration. We scope what\u2019s real and cut what\u2019s not.' },
      { num: '03', label: 'RESEARCH', variant: 'primary', body: 'We conduct and structure the research: personas, JTBD, competitive analysis, assumptions. It lives in the codebase as structured data, not a PDF.' },
      { num: '04', label: 'BUILD', variant: 'secondary', body: 'End-to-end product development. Not just code \u2014 world-class product design from a 31-year veteran. Real architecture. Real UI. Real product.' },
      { num: '05', label: 'DELIVER', variant: 'secondary', body: 'Built, documented, ready to deploy. Agent config tuned. Doctrine seeded. All you had to do was start a conversation.' },
    ],
  },

  whatYouGet: {
    label: 'WHAT YOU GET',
    headline: 'Not a prototype. A real product.',
    subtitle: 'Every Arroyo engagement delivers a production-ready MVP with research, documentation, and agent configuration built in. Ready to test with users or take money on day one.',
    deliverables: [
      {
        num: '01', variant: 'primary',
        title: 'A working product',
        body: 'Real code, real database, real auth. Not a prototype, not a Figma file, not a landing page. A functional MVP you can put in front of users or start charging for immediately.',
      },
      {
        num: '02', variant: 'primary',
        title: 'Research baked into the codebase',
        body: 'Personas, jobs-to-be-done, competitive analysis, assumptions log \u2014 structured as data in your repo. Your product decisions have receipts.',
      },
      {
        num: '03', variant: 'primary',
        title: 'Agent-ready documentation',
        body: 'VECTOR.md project doctrine and CLAUDE.md agent configuration. Your AI agents understand the codebase from session one. No re-explaining. No context loss.',
      },
      {
        num: '04', variant: 'secondary',
        title: 'Full ownership',
        body: 'The repo, the documentation, the doctrine, the agent config \u2014 all yours. No seat license. No retainer. No platform dependency. Keep building with us, with agents, or with another team entirely.',
      },
    ],
  },

  cta: {
    label: '\u25cf EVERY ENGAGEMENT IS BESPOKE',
    headline: 'You bring the vision.\nWe build the product.',
    body: 'A working MVP. Documentation your agents already understand. The skills to keep building after we\u2019re gone. You own everything.',
    tagline: 'The most important step is always the next one.',
    bookingUrl: 'https://calendly.com/eflowers-6au/sync-up-call',
  },

  footer: {
    brand: 'Arroyo',
    tagline: 'Built on Zero Vector \u00b7 zerovector.design',
    links: [
      { label: 'Zero Vector', href: '/' },
      { label: 'Investiture', href: '/investiture' },
      { label: 'Open Vector', href: '/open' },
    ],
  },
};

export default arroyo;
