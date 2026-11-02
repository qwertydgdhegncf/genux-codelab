# json-render codelab

**What to show:** a catalog defines schemas; a spec names components; a registry maps names to real components; a stream can apply patches progressively.

**Static:** render `OrderSummary` directly.

**Declarative:** render the local `Card`/`Button` spec after validation.

**Open-ended:** compose from `Card`, `Metric`, `Table`, and `Button`, with `policy: catalog-only`.

**Mixed:** interleave prose and a spec in one assistant message. In production, use the package's schema, state bindings, and action validation.
