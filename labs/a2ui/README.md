# A2UI codelab

**What to show:** `createSurface`, component updates, and data updates arriving as messages. Explain that A2UI separates UI structure from application data and renders through a trusted catalog.

**Static:** `OrderSummary` is directly authored by the app.

**Declarative:** the payload uses `createSurface` and `updateComponents`; the renderer maps `Card` and `Button` to local implementations.

**Open-ended:** the agent may choose `Metric` and `Table`, but only from the advertised catalog.

**Mixed:** prose and a tracking result surround a UI surface. In production, use the official A2UI versioned protocol and renderer.
