# Guardrails

This file holds two lists. **Approval-gated** items can appear in a note only after Om explicitly approves each one. **Banned** items are never proposed at all.

---

## Approval-gated

Collect every one of these into the **Needs approval** list in the topic list (phase 4) and present it at lock (phase 5). Number each item and state why it is needed, so Om can answer item by item ("approve 1, 3; reject 2").

Nothing on this list reaches the prototype until approved. A rejected item is dropped. Do not reword the note to keep a rejected claim, link, name, or quote alive.

1. **Every link.** This covers external URLs, official docs, PRs, commits, issues, repositories, dashboards, staging or preview URLs. List the exact URL and the sentence it supports.
2. **"Also read on" entries.** Each related note or link is approved individually.
3. **Naming anyone.** This covers teammates, collaborators, clients, companies, and people quoted or credited.
4. **Quotes from conversations.** This covers Slack, email, issue threads, review comments, and the agent session itself.
5. **Code from private or proprietary repositories.** Show the snippet exactly as it would appear.
6. **Screenshots and recordings** need approval when they might show private data, file paths, email addresses, account names, or internal tools. Describe what is visible.
7. **Sensitive numbers.** This covers costs, billing, revenue, user counts, traffic, and anything that reveals business scale.
8. **Opinions about other products, tools, or companies.**
9. **Anything tagged inferred.** A conclusion the agent drew without evidence must be confirmed before it is written as fact.
10. **The agent credit line.** If the note mentions the agent at all, it is one optional line in the credits, and it needs approval.

---

## Banned

Never propose these in the topic list, as a section, a topic, an aside, or a TL;DR point. If something banned is the only interesting thing in the session, tell Om the session is not worth a dev note.

### About the agent and the process

- "I asked the agent / Claude / AI to do this for me", or any framing that makes prompting the subject.
- Retelling the session in order ("first I opened the file, then I ran the tests, then...").
- Tool and environment boilerplate: installing dependencies, environment setup, editor or lint configuration. The exception is when the setup itself is the lesson.

### Bland or low-value

- Routine changes: renames, formatting, dependency bumps, typo fixes, lockfile churn, copy tweaks.
- Generic best practice the reader already knows ("write tests", "keep components small", "use TypeScript").
- Restating official documentation or a README without adding something the docs do not say.
- A changelog presented as an article ("added X, added Y, added Z").
- Feature tours that describe what something does without any decision or reasoning behind it.

### Against the voice guide

- Effort and self-praise ("after hours of work", "I'm proud of", "this was a huge win").
- AI hype or productivity claims without a measured number behind them.
- Speculative futures presented as plans or commitments.

### Integrity and safety

- Numbers without a stated method of measurement.
- Secrets, API keys, tokens, environment variable values, internal hostnames, and personal data. These are banned outright, not approval-gated, and must be removed from code snippets and screenshots before they are even proposed.
