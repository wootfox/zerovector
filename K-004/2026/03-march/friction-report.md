# Friction Report — Investiture: Non-Developer Practitioner Stress Test

**Kestrel:** K-004
**Date:** 2026-03-16
**Version:** Investiture v1.3.0
**Scope:** Top friction points where a non-developer practitioner gets stuck with Investiture

---

## Friction Point 1 — Terminal is never introduced

**Area:** Investiture README — Prerequisites / Setup

**Type:** better explanation

**What happened:**
The README assumes the reader knows what a terminal is, where to find it, and how to navigate it. The prerequisites list VS Code, a GitHub account, and platform-specific notes — but Terminal itself is never introduced as a concept. The first code block is `npx investiture init` with no indication of where to type it. A non-developer practitioner hits a wall at the first command with no way to execute it.

**What would have helped:**
A single prerequisite bullet point for Terminal, matching the format already used for VS Code and GitHub. One line: what it is, where to find it on your OS, and why you need it. Additionally, a bridging sentence before the first code block — "open your terminal, navigate to where you want the project folder, then run:" — would close the gap between "I have a terminal" and "I know what to do with it."

---

## Friction Point 2 — Opening line assumes a developer audience

**Area:** Investiture README — Opening line

**Type:** better explanation

**What happened:**
The opening line — "A project scaffold with clean architecture, structured doctrine, and a skill chain that enforces it" — assumes the reader knows what a scaffold is. For a facilitator, designer, or non-technical practitioner, "scaffold" and "skill chain" are unfamiliar terms that signal this tool may not be for them.

The README is a potential entry point. Someone discovering Investiture through GitHub — not through the Zero Vector site — encounters this line before any of the practitioner-friendly framing that exists elsewhere. The risk isn't just confusion; it's self-selection out. A non-developer reads "project scaffold" and "skill chain that enforces it" and decides this isn't their thing before scrolling further.

**What would have helped:**
Rewrite the opening line to lead with what Investiture gives you, not how it works. The technical language can appear further down for readers who care about it. The first sentence should answer "what is this and why would I use it" in language that doesn't require a technical background.

---

## Friction Point 3 — "Four layers" visible but unexplained

**Area:** Investiture README — Architecture section

**Type:** better explanation

**What happened:**
The README shows the four architecture layers (`src/`, `design-system/`, `core/`, `services/`) with their directory structure, so a reader can see what the layers are. But the section opens with "Four layers. Claude knows to use them:" without explaining why they're separated or what the separation gives you. A developer intuits separation of concerns from convention. A non-developer sees four folders and has no reason to care about the distinction.

**What would have helped:**
One sentence on why the layers are separated — not a deep dive, just enough to answer "why does this matter to me." Something like: "Each layer has a single job, so changes in one place don't break things in another." That's the entire concept, and it takes one line.

---

## Friction Point 4 — No linked example of VECTOR.md

**Area:** Investiture README + zerovector.design/investiture

**Type:** example

**What happened:**
The README describes VECTOR.md in the Doctrine section and includes a reading order that names all three doctrine files. But it doesn't link to the actual VECTOR.md file in the repo, and neither the README nor the site shows what a filled-out VECTOR.md looks like. For someone who's never seen a markdown file, knowing that it exists and knowing what it looks like are two different things.

**What would have helped:**
The Investiture repo already contains a VECTOR.md file — link to it directly from the README so readers can click through and see what the file looks like in practice. A live link to the actual file is more maintainable than a screenshot and stays current as the template evolves. On the site (zerovector.design/investiture), an annotated walkthrough of the file's sections — what goes where and what a filled-out version looks like versus a blank template — would make the concept concrete immediately.

---

## Hands-On Friction — Installation Experience

The friction points above were identified through a systematic documentation review of the Investiture README and site. The points below come from firsthand experience attempting the Investiture setup as a non-developer practitioner.

**Note on scope:** By the time this friction report was written, the local environment already had the Investiture prerequisites installed. A full cold-start reproduction wasn't possible without uninstalling dependencies, so this section captures what was observed during the original installation from memory. It is not exhaustive. A complete picture of installation friction would require a genuinely cold-start walkthrough by someone who has never configured a development environment.

---

## Friction Point 5 — Homebrew installs undisclosed dependencies

**Area:** Investiture installation — Homebrew setup (macOS)

**Type:** better explanation

**What happened:**
The README notes that Mac setup uses "Homebrew and Node.js via brew" but doesn't mention that Homebrew itself pulls in additional dependencies — packages required by the thing you're actually trying to install. During the installation process, the terminal prompts for approval to install these additional packages. A non-developer sees a list of unfamiliar software they didn't ask for, has no context for why it's needed, and has to decide whether to approve something they don't understand in order to continue.

For someone with no technical background, this is a trust moment. The README told them to install one thing. The terminal is now asking them to install several things. That gap — between what was promised and what's happening — creates anxiety and erodes confidence in the process.

**What would have helped:**
A single line before the install commands: something like "This will install [package] and its dependencies — additional software it needs in order to work. Your terminal will ask you to approve these. Say yes to all of them so the installation can complete." That's all it takes. Set the expectation, name what's happening, and tell the reader what to do. The surprise is the problem, not the dependencies themselves.

---

## Cosmetic — Install Script Output

The observations below are not friction points — they don't block or confuse anyone. They're experience quality notes. The install script works well and the information it provides is correct and well-sequenced. These are suggestions for whoever picks this up; take or leave as appropriate.

---

## Observation 1 — Install script output lacks visual hierarchy

**Area:** `install.sh` — terminal output

**Type:** cosmetic

**What was observed:**
The install script output is clear, well-structured, and gives the reader everything they need: platform detection, dependency checks, architecture overview, and next steps. But it's all rendered as plain monochrome text at the same visual weight. Section headers ("Setup complete!", "Next steps:", "Version control") look the same as the detail lines beneath them. Nothing guides the eye to what's important.

For a developer, this is fine — they're used to reading terminal output and know to scan for the actionable parts. For a non-developer running a terminal script for potentially the first time, everything looks equally important, which means nothing stands out. The next steps — the two commands they actually need to run — sit at the same visual level as the architecture folder descriptions above them.

**What would help:**
ANSI color and simple formatting to create visual layers in the output. Section headers in bold or color, green checkmarks for completed steps, and the next-steps commands highlighted so they're unmissable. This is the difference between "the information is there" and "the information is obvious." For a non-developer watching terminal output scroll by, obvious matters.
