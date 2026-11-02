# MCP Apps codelab

**What to show:** an MCP tool can point at a `ui://` resource. The host fetches the resource, renders it in a sandbox, and bridges messages back to the server.

**Static:** the host renders a local order card with no MCP call.

**Declarative:** tool metadata links to a UI resource and the result supplies data.

**Open-ended:** the resource can expose approved controls, but the host still controls the iframe and bridge.

**Mixed:** tool text/result and the UI resource appear together. Mention progressive enhancement: a host without MCP Apps still receives a useful text result.
