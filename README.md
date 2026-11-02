# GenUX Codelab: Six Generative UI Systems × Four UX Modes

This repository is a lecture-ready, runnable comparison of A2UI, AG-UI, MCP Apps, json-render, OpenUI, and DeepSeek Harness / GenUI integration.

Each system is shown in four modes: **static**, **declarative**, **open-ended UX**, and **mixed mode**. The demo uses only Node's standard library, so every example is deterministic and recordable without an API key.

## Run it

```bash
npm start
# open http://localhost:4173
npm test
```

## Repository map

```text
public/                 One visual teaching app with 24 examples
labs/<system>/           Four mode walkthroughs and sample payloads
docs/                    Lecture notes, comparison, production mapping
scripts/verify.mjs       Deterministic execution checks
videos/                  Recording scripts and YouTube submission checklist
```

## Suggested lecture order

1. Start with `static` to establish ordinary UI ownership.
2. Show `declarative` and explain catalog validation and trust boundaries.
3. Show `open-ended` and explain that “open” means composition within an allow-list, not arbitrary code execution.
4. Show `mixed` and explain why real products combine text, tools, state, and UI.
5. Compare the six systems using `docs/comparison.md`.

## Sources

- [A2UI project and specification](https://github.com/a2ui-project/a2ui)
- [AG-UI protocol](https://github.com/ag-ui-protocol/ag-ui)
- [MCP Apps overview](https://apps.extensions.modelcontextprotocol.io/api/documents/overview.html)
- [json-render](https://github.com/vercel-labs/json-render)
- [OpenUI](https://github.com/thesysdev/openui)
- [Reference GenUI harness repository](https://github.com/dlmastery/simple-coding-harness/tree/main/genui)

## Submission checklist

- [ ] Push this repository to GitHub.
- [ ] Record one video per system using `videos/recording-scripts.md`.
- [ ] Add the six YouTube links to `videos/youtube-links.md`.
- [ ] Test every link in an incognito window.
