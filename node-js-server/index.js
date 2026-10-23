import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const port = Number(process.env.PORT ?? 3000);
const pagePath = fileURLToPath(new URL("./index.html", import.meta.url));

const server = createServer(async (request, response) => {
    if (request.method !== "GET" || request.url !== "/") {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Not Found");
        return;
    }

    try {
        const page = await readFile(pagePath);
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        response.end(page);
    } catch (error) {
        console.error("Failed to load the home page:", error);
        response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Internal Server Error");
    }
});

server.listen(port, () => {
    console.log(`Node server listening on port ${port}`);
});
