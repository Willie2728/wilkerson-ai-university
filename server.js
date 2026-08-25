import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(globalThis.process?.env?.PORT || globalThis.process?.env?.WILKERSON_UNIVERSITY_PORT || 3000);
const mime = {
  '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8',
  '.js':'text/javascript; charset=utf-8', '.json':'application/json; charset=utf-8',
  '.md':'text/markdown; charset=utf-8', '.svg':'image/svg+xml',
  '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp',
  '.mp4':'video/mp4', '.wav':'audio/wav'
};

const server = http.createServer(async (request, response) => {
  if (request.method !== 'GET') {
    response.writeHead(405, {'Content-Type':'text/plain; charset=utf-8'});
    return response.end('Method not allowed.');
  }
  const pathname = decodeURIComponent(new URL(request.url, 'http://local').pathname);
  const relative = pathname === '/' ? 'index.html' : pathname.slice(1);
  const file = path.resolve(root, relative);
  if (!file.startsWith(root)) {
    response.writeHead(403, {'Content-Type':'text/plain; charset=utf-8'});
    return response.end('Blocked path.');
  }
  try {
    const data = await fs.readFile(file);
    response.writeHead(200, {'Content-Type':mime[path.extname(file).toLowerCase()] || 'application/octet-stream', 'X-Content-Type-Options':'nosniff'});
    response.end(data);
  } catch {
    response.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'});
    response.end('Not found.');
  }
});

server.listen(port, '0.0.0.0', () => console.log(`Wilkerson Collective University listening on port ${port}`));
