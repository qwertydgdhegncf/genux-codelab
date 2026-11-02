import http from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../public/", import.meta.url));
const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8" };
const server = http.createServer(async (req, res) => {
  if (req.url === "/api/health") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: true, service: "genux-codelab" }));
    return;
  }
  const requested = req.url === "/" ? "index.html" : req.url.slice(1);
  const file = normalize(join(root, requested));
  if (!file.startsWith(root)) { res.writeHead(403); res.end("Forbidden"); return; }
  try {
    const body = await readFile(file);
    res.writeHead(200, { "content-type": mime[extname(file)] ?? "text/plain; charset=utf-8" });
    res.end(body);
  } catch { res.writeHead(404); res.end("Not found"); }
});
server.listen(4173, "127.0.0.1", () => console.log("GenUX codelab: http://localhost:4173"));
