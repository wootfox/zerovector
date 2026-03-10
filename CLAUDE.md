# Zero-Vector Design — Contributor Onboarding

This file is for anyone — human or AI — who is about to work in this codebase. Read it after VECTOR.md, before ARCHITECTURE.md.

---

## Reading Order

1. **VECTOR.md** — Project doctrine. Why this project exists, who it serves, what the constraints are.
2. **CLAUDE.md** — This file. What you need to know before touching code.
3. **ARCHITECTURE.md** — Technical specification. Layers, stack, conventions, structure, import rules.

Read ARCHITECTURE.md and follow it. It is the single technical authority. When in doubt about where a file goes or how to name it, ARCHITECTURE.md decides.

---

## Stack Summary

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + Vite 7 |
| Routing | React Router DOM 7 |
| Styling | Custom CSS — single file, CSS custom properties, domain-scoped prefixes |
| State | React Context (UserContext, ProgressContext, ThemeContext) |
| Backend | Netlify Functions (serverless) |
| AI | Anthropic Claude SDK (chat, learn-chat, quiz) |
| Auth | Supabase (Google OAuth) |
| Search | Fuse.js (client-side fuzzy) |
| Deployment | Netlify (auto-deploy on push) |

---

## Key Context

Things that aren't obvious from the code but will cause wrong assumptions if you don't know them:

- **All site content lives in `src/content/` as exported JS objects.** Do not put copy in JSX. Pages import content and render it. This is the most important architectural decision in the project.

- **The CSS file is 15,000+ lines and that is intentional.** It is one file scoped by domain prefix: `zv-` (manifesto), `ovl-` (Open Vector Learn), `inv-` (Investiture), `arr-` (Arroyo). Add new styles to the appropriate section, using the appropriate prefix.

- **Three routing patterns coexist.** Manifesto pages use `SiteLayout`. Learn pages use `LearnLayout` under `/open/learn/*`. Standalone pages (`/open`, `/investiture`, `/arroyo`) have no layout wrapper — they manage their own body styles, nav, and cleanup on unmount. Know which pattern your page follows before building it.

- **Serverless functions are the only backend.** `netlify/functions/` contains AI chat, quiz assessment, learn-chat companion, and email signup. They use the Anthropic SDK and run on Netlify's edge. No persistent server. No database beyond Supabase auth.

- **AI features have hardened system prompts.** Each serverless function (`chat.js`, `learn-chat.js`, `quiz.js`) contains a `SYSTEM_PROMPT` with voice rules, boundaries, and safety guardrails. These are public-facing features. Do not loosen the boundaries.

- **Dev server:** `npm run dev` for Vite only (port 5174). `netlify dev` for the full stack with serverless functions (port 3006). Use `netlify dev` when working on AI features.

---

## What Not to Do

1. **Do not put text in JSX.** Content goes in `src/content/`. Components render, they don't contain copy.
2. **Do not hardcode colors or spacing.** Use CSS custom properties from `:root` in `site.css`.
3. **Do not add CSS frameworks.** No Tailwind, no CSS-in-JS. Plain CSS with variables. This is a deliberate constraint.
4. **Do not put API keys in client-side code.** Secrets live in Netlify environment variables, accessed only by serverless functions.
5. **Do not create new CSS files.** Add styles to `src/styles/site.css` in the appropriate domain-prefix section.

---

## Commit Format

```
Co-Authored-By: [Agent or Model Name] <noreply@anthropic.com>
```

---

## Standup Format

When asked for status:

```
Where we left off: [last task completed]
What is working: [current stable state]
Concerns: [anything requiring attention]
Blockers: [anything stopping progress]
```

---

## Agent Identity (Optional)

[OPERATOR: If your agent has a defined persona (name, pronouns, voice,
working style), add it here. If your agents are managed externally,
or you want this file to serve any contributor regardless of whether
they are human or AI, the sections above are sufficient.]

[OPERATOR: Your project contains embedded agent instructions in serverless functions:
- netlify/functions/chat.js — defines the ZV manifesto voice (Ask page)
- netlify/functions/learn-chat.js — defines the OV learning companion + Socratic mode
- netlify/functions/quiz.js — defines the ZV assessment engine
These are function-specific public-facing AI personas. They should remain
inline unless you want to extract a project-wide voice definition here.]
