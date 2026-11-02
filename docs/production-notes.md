# Production mapping

The local demo deliberately uses a tiny renderer so it remains runnable offline. For a production codelab, replace only the adapter layer:

- **A2UI:** use the official protocol messages and a renderer/catalog from the A2UI project. Pin the protocol version because the public project is evolving.
- **AG-UI:** emit the protocol's event stream from an agent runtime and consume it in a frontend adapter. Keep UI state in the app and treat agent events as inputs to a reducer.
- **MCP Apps:** register an MCP tool with `_meta.ui.resourceUri`, serve the `ui://` HTML resource, and use the host bridge for tool calls and model-context updates. Keep CSP and iframe sandboxing explicit.
- **json-render:** define a catalog with schemas, compile or stream specs, then map types to real React/native components. Validate both generated specs and action parameters.
- **OpenUI:** create a component library, generate the library prompt, stream OpenUI Lang, and render each line with the official renderer/autofix path.
- **Harness/GenUI:** install the reference GenUI plugin in the target harness, use its fenced UI syntax, and record the action event loop from the host.

Do not describe the local adapter as the official implementation. In the lecture, explicitly say “protocol-shaped teaching adapter” before switching to the official production mapping.
