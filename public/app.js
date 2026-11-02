const systems = [
  ["a2ui", "A2UI", "Agent sends streaming JSON messages; a trusted catalog renders native components."],
  ["agui", "AG-UI", "An event boundary for streaming agent state, UI intents, tools, and human interaction."],
  ["mcp", "MCP Apps", "An MCP tool links to a ui:// resource rendered in a sandboxed iframe."],
  ["json-render", "json-render", "A catalog plus validated JSON spec; patches can stream into a renderer."],
  ["openui", "OpenUI", "OpenUI Lang lets a model compose from a developer-defined component library."],
  ["harness", "Harness / GenUI", "A harness response can mix text with a fenced, interactive UI surface and actions."]
];
const modes = ["static", "declarative", "open-ended", "mixed"];
const examples = systems.flatMap(([id, name, idea]) => modes.map(mode => ({ id, name, mode, idea, payload: payload(id, mode) })));
function payload(id, mode) {
  if (mode === "static") return { owner: "application", component: "OrderSummary", props: { total: "$128.40", status: "Shipped" } };
  if (mode === "declarative") return id === "a2ui" ? { createSurface: { surfaceId: "orders" }, updateComponents: [{ id: "card", component: "Card", children: ["title", "button"] }] } : { type: "Card", props: { title: "Order status" }, children: [{ type: "Button", props: { label: "Refresh" } }] };
  if (mode === "open-ended") return { catalog: ["Card", "Metric", "Table", "Button"], agentChoice: ["Metric", "Table"], policy: "catalog-only" };
  return { text: "Your order is on the way.", toolEvent: { name: "get_tracking", status: "complete" }, ui: { type: "Card", props: { title: "Tracking", action: "Refresh" } } };
}
const systemFilter = document.querySelector("#system-filter");
const modeFilter = document.querySelector("#mode-filter");
systems.forEach(([id, name]) => systemFilter.insertAdjacentHTML("beforeend", `<option value="${id}">${name}</option>`));
modes.forEach(mode => modeFilter.insertAdjacentHTML("beforeend", `<option>${mode}</option>`));
function render() {
  const visible = examples.filter(x => (systemFilter.value === "all" || x.id === systemFilter.value) && (modeFilter.value === "all" || x.mode === modeFilter.value));
  document.querySelector("#cards").innerHTML = visible.map((x, i) => `<article class="card" data-system="${x.id}"><div class="meta">${x.name} · ${x.mode} mode</div><h2>${x.mode === "open-ended" ? "Approved composition" : x.mode[0].toUpperCase() + x.mode.slice(1) + " example"}</h2><p class="explain">${x.idea}</p><div class="preview" id="preview-${i}">${x.mode === "static" ? "Application-authored OrderSummary" : "Awaiting execution…"}</div><pre>${JSON.stringify(x.payload, null, 2)}</pre><button class="run" data-index="${examples.indexOf(x)}">Execute example</button><div class="status" id="status-${i}"></div></article>`).join("");
  document.querySelectorAll(".run").forEach(b => b.onclick = () => execute(Number(b.dataset.index), b.closest(".card")));
}
function execute(index, card) {
  const x = examples[index];
  card.querySelector(".status").textContent = "✓ Renderer accepted payload; interaction returned to the app.";
  card.querySelector(".preview").textContent = x.mode === "open-ended" ? "Metric + Table selected from the approved catalog" : x.mode === "mixed" ? "Prose + tool event + interactive Tracking card" : `${x.name} renderer mounted ${x.mode} surface`;
}
systemFilter.onchange = modeFilter.onchange = render;
document.querySelector("#run-all").onclick = () => document.querySelectorAll(".run").forEach(b => b.click());
render();
