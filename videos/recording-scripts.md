# Recording scripts

Record six videos, one per system. Target 6–10 minutes each. Keep the browser and terminal visible, and narrate the same four beats:

1. **Concept:** define the system and name the trust boundary.
2. **Static:** select the static filter, execute it, and explain that the app authored the component tree.
3. **Declarative:** select declarative, execute it, read the payload aloud, and point out that the renderer—not the payload—owns implementation.
4. **Open-ended:** execute the approved composition, identify the catalog allow-list, and explain why open-ended does not mean arbitrary code execution.
5. **Mixed:** execute mixed and identify prose, tool/event state, UI, and the return action.
6. **Code walkthrough:** show `public/app.js`, the `payload()` function, and `src/server.mjs`; run `npm test`.

## Per-video opening lines

- **A2UI:** “A2UI is a streaming JSON protocol: the agent speaks in surfaces and components, and the client renders trusted native widgets.”
- **AG-UI:** “AG-UI is primarily an event boundary between an agent runtime and a frontend; it is not just a component-tree format.”
- **MCP Apps:** “MCP Apps extends MCP so a tool can link to a UI resource that the host renders safely and progressively.”
- **json-render:** “json-render turns a catalog and validated JSON spec into an interactive component tree, including streamed patches.”
- **OpenUI:** “OpenUI Lang is a compact stream that lets the model compose from the component library we define.”
- **Harness / GenUI:** “Harness GenUI shows how a host can render an interactive surface beside ordinary assistant text and route actions back.”

## Recording checklist

- Run `npm test` and leave the passing output on screen.
- Execute all four modes for the selected system.
- Say which parts are local teaching adapters and which parts map to official production SDKs.
- Do not show API keys, cookies, or private student data.
