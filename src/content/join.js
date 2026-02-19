const join = {
  eyebrow: 'Zero Vector Design \u2014 Open Positions',
  title: 'Join the Endurance',
  subtitle: 'We are looking for crew, not employees.',

  quote: {
    text: '\u201CMen wanted for hazardous journey. Low wages, bitter cold, long hours of complete darkness. Safe return doubtful. Honour and recognition in event of success.\u201D',
    attribution: '\u2014 Ernest Shackleton, 1914 (apocryphal)',
  },

  intro: [
    'Zero Vector is building something new. Not a product. Not a company. A **discipline** \u2014 a way of working where design intent and code execution share the same moment. Open source. Open methodology. Built in public.',
    'We are looking for crew, not employees. These are volunteer positions with a real mission, real standards, and real autonomy. You will work directly with the founder. You will shape something that does not exist yet. The pay is zero and the hours are yours to define.',
    '**What we offer:** Authorship. Influence. A seat at the table of something genuinely new. And when this becomes what we believe it will become, the people who built it will not be forgotten.',
    'If that is not enough, this is not for you. No hard feelings.',
  ],

  compensation: {
    title: 'What we offer',
    subtitle: 'The honest version.',
    paragraphs: [
      { label: 'Right now:', text: 'Nothing financial. Zero Vector Design LLC is real, newly formed, and pre-revenue. The founder works a full-time day job to keep the lights on. There is no venture funding, no angel round, no treasury. Anyone who joins right now is joining because they believe the work matters.' },
      { label: 'When the work pays off:', text: 'Founding crew are founding crew. That means:' },
      { text: 'When paid engagements come in (workshops, consulting, client work), crew members who contributed to the deliverable get paid from the engagement. Not a thank-you. A cut.' },
      { text: 'When licensing revenue materializes (certifications, enterprise adoption, curriculum licensing), the people who built the thing being licensed share in it. We will formalize this with a written revenue-sharing agreement before any money changes hands.' },
      { text: 'If an acquisition, partnership, or investment event happens, founding crew are at the table. Not as an afterthought. As named contributors with documented history and negotiated participation.' },
      { label: 'What this is not:', text: 'This is not equity. There are no shares, no vesting schedules, no cap tables. Zero Vector is an open methodology and we intend to keep it that way. What we are offering is something different: a seat in the room, documented contribution history, and a commitment that when the harvest comes, the people who tilled the soil eat first.' },
      { label: 'The honest version:', text: 'We cannot promise this will pay off. We believe it will. The methodology is gaining real traction, the partnership pipeline is active, and the founder\u2019s track record suggests this is not a hobby. But belief is not a paycheck. If you need certainty, wait. If you can tolerate ambiguity in exchange for being part of something from the very beginning, read on.' },
    ],
  },

  roles: [
    { id: 'framework', title: 'Framework Engineer', description: 'Evolve Investiture into a robust, adoptable scaffold. Quickstarts, boilerplates, documentation, refinement.' },
    { id: 'curriculum', title: 'Curriculum Steward', description: 'Own the Open Vector learning center. Edit, expand, improve. Make it a living resource, not a static wiki.' },
    { id: 'evangelist', title: 'ZV Evangelist', description: 'Get Zero Vector in front of the world. Articles, podcasts, case studies, conference submissions, partnerships.' },
    { id: 'funding', title: 'Funding Scout', description: 'Find grants, partnerships, and funding that sustain the mission without surrendering control of it.' },
  ],

  whoYouAre: {
    title: 'Who you are',
    subtitle: 'The basics.',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true, inline: 'left' },
      { name: 'pronouns', label: 'Pronouns', type: 'text', placeholder: 'e.g. she/her, they/them', inline: 'right' },
      { name: 'email', label: 'Email', type: 'email', required: true, inline: 'left' },
      { name: 'location', label: 'Location', type: 'text', hint: 'City, country. Remote is fine. Time zone matters.', inline: 'right' },
      { name: 'portfolio', label: 'Link to your work', type: 'url', required: true, hint: 'Portfolio, GitHub, LinkedIn, personal site, published writing. Whatever shows us who you are.' },
      { name: 'portfolio2', label: 'Second link (optional)', type: 'url' },
    ],
  },

  enduranceTest: {
    title: 'The Endurance test',
    subtitle: 'These questions have no right answers. They have revealing ones.',
    fields: [
      { name: 'why_this', label: 'Why this?', type: 'textarea', size: 'long', required: true, hint: 'Not \u201Cwhy Zero Vector is cool.\u201D Why you. Why now. What is driving you toward this specific mission at this specific moment in your life?' },
      { name: 'built_unpaid', label: 'What have you built that nobody asked you to build?', type: 'textarea', required: true, hint: 'A side project, an open source contribution, a community, a curriculum, a zine. Something you made because you had to, not because someone paid you to.' },
      { name: 'endurance_story', label: 'Describe a time you stuck with something long after it stopped being fun.', type: 'textarea', required: true, hint: 'Endurance is not about the exciting parts. It is about Tuesday at 11pm when nothing works and nobody is watching.' },
      { name: 'ai_relationship', label: 'What is your relationship with AI tools right now?', type: 'textarea', size: 'short', required: true, hint: 'Be honest. \u201CI barely use them\u201D is a valid answer. \u201CI use Claude 14 hours a day\u201D is also valid. We want to know where you actually are, not where you think we want you to be.' },
      { name: 'hours', label: 'Hours per week you can realistically commit', type: 'select', required: true, hint: 'Be honest. 3 hours of consistent weekly work beats 20 hours for two weeks then silence.', options: [
        { value: '1-3', label: '1\u20133 hours' },
        { value: '4-8', label: '4\u20138 hours' },
        { value: '8-15', label: '8\u201315 hours' },
        { value: '15+', label: '15+ hours' },
      ]},
      { name: 'runway', label: 'How long are you willing to work for free before deciding this is not worth it?', type: 'select', hint: 'There is no wrong answer. There is an honest one.', options: [
        { value: '1month', label: 'About a month' },
        { value: '3months', label: '3 months' },
        { value: '6months', label: '6 months' },
        { value: 'indefinite', label: 'As long as the work matters' },
        { value: 'depends', label: 'It depends (explain in the box below)' },
      ]},
    ],
  },

  roleQuestions: {
    framework: {
      title: 'Framework Engineer \u2014 specifics',
      subtitle: 'We need to know you can work in the medium.',
      fields: [
        { name: 'fw_stack', label: 'What is your primary tech stack?', type: 'textarea', size: 'short', required: true, hint: 'Languages, frameworks, tools you reach for first.' },
        { name: 'fw_oss', label: 'Have you contributed to an open source project?', type: 'textarea', required: true, hint: 'Link to a PR, issue, or repo. If not, describe the closest equivalent (internal tooling, shared libraries, etc).' },
        { name: 'fw_investiture', label: 'Investiture is a scaffold for AI-assisted development. What does that mean to you?', type: 'textarea', size: 'long', required: true, hint: 'If you have looked at the framework, tell us what you think it gets right and wrong. If you have not, tell us what you would expect it to contain.' },
        { name: 'fw_dx', label: 'Describe the best developer experience you have ever encountered and what made it good.', type: 'textarea', size: 'short' },
      ],
    },
    curriculum: {
      title: 'Curriculum Steward \u2014 specifics',
      subtitle: 'Content without craft is noise. We need a gardener, not a content farm.',
      fields: [
        { name: 'cur_sample', label: 'Link to something you have written, edited, or curated that you are proud of.', type: 'url', required: true, hint: 'An article, a course, a documentation site, a resource collection. Something that shows how you think about teaching.' },
        { name: 'cur_scenario', label: 'You inherit a learning site with 30 pages of content, inconsistent formatting, and no clear learning path. What do you do first?', type: 'textarea', size: 'long', required: true, hint: 'Walk us through your first 48 hours.' },
        { name: 'cur_philosophy', label: 'What is the difference between content that exists and content that teaches?', type: 'textarea', size: 'short' },
        { name: 'cur_technical', label: 'Are you comfortable working in markdown, Git, and static site generators?', type: 'select', options: [
          { value: 'fluent', label: 'Yes, fluent' },
          { value: 'learning', label: 'Learning, but can manage' },
          { value: 'no', label: 'No, but willing to learn' },
        ]},
      ],
    },
    evangelist: {
      title: 'ZV Evangelist \u2014 specifics',
      subtitle: 'Getting ideas into rooms where decisions get made.',
      fields: [
        { name: 'ev_win', label: 'Have you ever gotten someone else\u2019s work featured, published, or covered?', type: 'textarea', required: true, hint: 'PR, DevRel, community management, content marketing, podcast booking. Tell us about a win.' },
        { name: 'ev_pitch', label: 'You have 30 seconds to explain Zero Vector to a design director who has never heard of it. Go.', type: 'textarea', required: true, hint: 'Write it out. This is an audition.' },
        { name: 'ev_targets', label: 'Name 3 podcasts, publications, or conferences where ZV should appear and why each one specifically.', type: 'textarea', size: 'long', required: true },
        { name: 'ev_network', label: 'What is your existing audience or network?', type: 'textarea', size: 'short', required: true, hint: 'LinkedIn followers, newsletter subscribers, community memberships, conference speaking history. Be specific with numbers.' },
      ],
    },
    funding: {
      title: 'Funding Scout \u2014 specifics',
      subtitle: 'Find money that does not cost us the mission.',
      fields: [
        { name: 'fund_experience', label: 'Have you ever secured a grant, investment, or non-dilutive funding for a project?', type: 'textarea', required: true, hint: 'Describe the project, the amount, and the source. If not, describe the closest equivalent experience.' },
        { name: 'fund_sources', label: 'Name 3 specific funding sources (grants, programs, foundations) that could apply to an open-source design methodology project and explain why each fits.', type: 'textarea', size: 'long', required: true, hint: 'This tests whether you actually know the landscape or are guessing.' },
        { name: 'fund_scenario', label: 'A funder offers $100K but wants a board seat and approval rights over the open source license. What do you advise?', type: 'textarea', required: true },
        { name: 'fund_philosophy', label: 'What does \u201Ctake less to maintain control\u201D mean to you in practice?', type: 'textarea', size: 'short' },
      ],
    },
  },

  final: {
    title: 'Last thing',
    fields: [
      { name: 'anything_else', label: 'Anything else you want us to know?', type: 'textarea', size: 'short', hint: 'This box is optional. Use it or do not. Silence is also an answer.' },
      { name: 'source', label: 'How did you find us?', type: 'select', options: [
        { value: 'linkedin', label: 'LinkedIn' },
        { value: 'substack', label: 'Substack' },
        { value: 'referral', label: 'Someone told me' },
        { value: 'github', label: 'GitHub / Open Vector site' },
        { value: 'podcast', label: 'Podcast' },
        { value: 'other', label: 'Other' },
      ]},
    ],
  },

  submit: {
    note: 'Applications are reviewed by the founder personally. You will hear back within two weeks. If we do not respond, assume we were not the right fit for each other. No ghosting \u2014 we will tell you either way.',
    buttonText: 'Submit Application',
  },

  success: {
    title: 'Application received.',
    body: 'We will review your application and respond within two weeks.\n\nIn the meantime, the work continues.',
  },

  epigraph: {
    text: '\u201CIf you want to build a ship, don\u2019t drum up people to collect wood and don\u2019t assign them tasks and work, but rather teach them to long for the endless immensity of the sea.\u201D',
    attribution: 'Antoine de Saint-Exup\u00E9ry',
  },
};

export default join;
