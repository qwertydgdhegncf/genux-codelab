# AG-UI codelab

**What to show:** AG-UI is an event stream and interaction boundary rather than only a UI-tree format.

**Static:** the frontend renders its own order card while the agent is absent.

**Declarative:** a UI intent asks the frontend to mount a `Card` and `Button`; the frontend validates and handles the intent.

**Open-ended:** the agent proposes a composition, while the app's catalog and reducer decide what is safe to mount.

**Mixed:** stream text, a tool event, state change, and UI intent in sequence. In production, model this as typed events and make the frontend reducer observable.
