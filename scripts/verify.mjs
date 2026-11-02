import { readFile } from "node:fs/promises";
const html = await readFile("public/index.html", "utf8");
const app = await readFile("public/app.js", "utf8");
const server = await readFile("src/server.mjs", "utf8");
for (const text of [html, app, server]) if (!text.length) throw new Error("empty source file");
for (const system of ["a2ui", "agui", "mcp", "json-render", "openui", "harness"]) {
  if (!app.includes(`\"${system}\"`)) throw new Error(`missing ${system}`);
}
for (const mode of ["static", "declarative", "open-ended", "mixed"]) {
  if (!app.includes(`\"${mode}\"`)) throw new Error(`missing ${mode}`);
}
console.log("PASS: source smoke test found all six systems and four modes");
