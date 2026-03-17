# Facilitator Use Cases — VECTOR.md in Practice

**Kestrel:** K-004
**Date:** 2026-03-17
**Scope:** Realistic scenarios where a facilitator uses VECTOR.md and what they'd need the tool to do
**Status:** Draft — structure established, specificity pass needed

---

## Where This Left Off

The three use cases below have their shape: trigger, what the facilitator is doing, key questions, and what the tool needs to support. The content is solid but the scenarios are general patterns, not concrete enough to be design briefs.

The next pass should ground each scenario in a specific example — a specific facilitator, a specific product, a specific workshop they just ran, the artifact they're holding, the decision they need to make. Not a full narrative, but enough that someone reading it can picture the situation.

The tool requirements should fall out of the scenario, not be stated separately as abstract features. Right now "a way to distinguish between assumption-backed sections and research-backed sections" could mean anything. But if the scenario describes a facilitator who's just run a JTBD workshop and has outputs that feed Target User and Design Doctrine, but filled Competitive Position from instinct because the competitive analysis hasn't happened yet — then the tool requirement becomes obvious and specific: a section with a manifest link is verified, a section without one is assumptive. The gap map is just the manifest itself.

That's where the specificity earns its place — it turns these from illustrative scenarios into something Erika can actually design against.

---

## Use Case 1 — Greenfield: New Product, Starting from Scratch

**Trigger:** A team has an idea, some anecdotal conversations, a sense of a gap in the market. They want to use agents from the start and need a VECTOR.md to orient them.

**What the facilitator is doing:** Generating. Running discovery workshops, pulling knowledge out of people's heads, structuring it toward the vector document as a destination.

**Key questions the facilitator faces:**
- What's the minimum viable VECTOR.md that's useful to an agent? Not every section will have research behind it on day one.
- Which sections can be filled from what we know right now, and which ones need dedicated workshops to populate?
- How do I mark sections as assumptive until they're backed by research? The manifest should function as a gap map — empty entries tell you where to aim your next workshop.

**What the tool needs to support:**
- [A way to distinguish between assumption-backed sections and research-backed sections]
- [The manifest as a planning tool, not just a record — showing what's been done and what hasn't]
- [Guidance on minimum viable content per section — what's "enough to be useful" vs "needs more work"]

---

## Use Case 2 — Existing Product: Introducing Agents to an Established Team

**Trigger:** A product has been running. Knowledge exists — in people's heads, in old decks, in Confluence pages, in workshop outputs that were never structured. The team is introducing agents and needs a VECTOR.md to give them the context humans already carry.

**What the facilitator is doing:** Auditing. Mapping existing knowledge against the vector document structure. Finding what's already validated, what's institutional assumption, and what's missing entirely.

**Key questions the facilitator faces:**
- Which existing artifacts map to which sections of the VECTOR.md?
- What have we assumed we know but never actually validated with research?
- What's genuinely missing — gaps nobody noticed because humans were filling them implicitly?

**What the tool needs to support:**
- [A way to ingest and reference existing artifacts — decks, docs, interview notes — without requiring them to be restructured first]
- [The provenance link working in reverse: given this artifact, which section does it feed?]
- [A way to flag sections as "populated from institutional knowledge" vs "populated from structured research" — the same assumption/verified distinction as greenfield, but for different reasons]

---

## Use Case 3 — Maintaining Over Time: New Research Arrives

**Trigger:** The system has been running for a while. The VECTOR.md is working, the manifest has built up. A new round of user interviews or competitive analysis produces findings that refine, contradict, or supersede existing research in the manifest.

**What the facilitator is doing:** Updating. Deciding how new research relates to what's already there — does it replace, refine, or sit alongside existing artifacts?

**Key questions the facilitator faces:**
- Does this new research supersede an existing artifact, or add nuance alongside it?
- Does the agent need both old and new to understand the evolution, or is the old one now noise?
- How do I signal that a manifest entry is archived vs active — and does the answer depend on the type of research?

**What the tool needs to support:**
- [A mechanism for versioning or supersession in the manifest — status, dates, "supersedes" references]
- [Guidance on when to keep history (user research that evolved) vs clean replace (competitive analysis overtaken by market shift)]
- [A way to update the sections that were informed by the now-superseded research — the provenance links working as change propagation, not just traceability]
