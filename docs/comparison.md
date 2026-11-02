# Comparison for the lecture

| System | Primary abstraction | Renderer owns | Agent supplies | Best teaching point |
|---|---|---|---|---|
| A2UI | Streaming JSON protocol | Component catalog and native widgets | Surfaces, components, data updates | Safe UI across trust boundaries |
| AG-UI | Event protocol | Frontend state and event handlers | State deltas, UI intents, tool events | The interaction boundary is not the visual tree |
| MCP Apps | MCP tool + `ui://` resource | Host sandbox and bridge | Tool metadata, HTML resource, results | Progressive enhancement for tool UIs |
| json-render | Validated JSON spec/patch stream | Catalog, schema, registry | Spec patches and bindings | JSON can be streamed and stateful |
| OpenUI | OpenUI Lang stream | Component library and renderer | Component composition language | Compact language for live composition |
| Harness / GenUI | Host-specific response surface | Host, fence parser, actions | UI fence plus action payloads | Rich UI can live beside normal assistant prose |

## Four modes

### Static

The developer writes the component tree. There is no generative UI decision. This is the control group: reliable, testable, and least flexible.

### Declarative

The agent emits data that names components and props. The renderer validates it and maps it to trusted implementations. A2UI and json-render make this especially explicit.

### Open-ended

The agent chooses a composition from an allow-listed library. “Open-ended” describes the number of allowed combinations, not unrestricted code execution. Every production implementation should validate types, props, depth, actions, and data access.

### Mixed

The response contains several channels: explanation text, tool progress, state changes, and a UI surface. Mixed mode is usually the most realistic product mode and the most important to record.
