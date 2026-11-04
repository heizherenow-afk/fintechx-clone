import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

const FRAMER_PAGES = new Set([
  "index.html",
  "home-2.html",
  "features.html",
  "pricing.html",
  "faqs.html",
  "changelog.html",
  "contact.html",
  "request-demo.html",
  "waitlist.html",
  "about.html",
  "blog.html",
]);

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".woff2": "font/woff2",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

function fintechxStaticPlugin() {
  const rootDir = process.cwd();

  const attachMiddleware = (middlewares: any) => {
    middlewares.use((req: any, res: any, next: any) => {
      if (!req.url) return next();
      const urlPath = req.url.split("?")[0].split("#")[0];

      // Serve /assets/* directly to avoid Vite import-analysis transforming pre-bundled Framer .mjs files
      if (urlPath.startsWith("/assets/")) {
        const filePath = path.join(rootDir, urlPath);
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = path.extname(filePath).toLowerCase();
          res.setHeader("Content-Type", MIME_TYPES[ext] || "application/octet-stream");
          res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
          fs.createReadStream(filePath).pipe(res);
          return;
        }
      }

      // Resolve root and Framer HTML pages (both /page and /page.html)
      let candidate = urlPath === "/" ? "index.html" : urlPath.replace(/^\/+/, "");
      if (!candidate.endsWith(".html") && FRAMER_PAGES.has(`${candidate}.html`)) {
        candidate = `${candidate}.html`;
      }

      if (FRAMER_PAGES.has(candidate)) {
        const htmlPath = path.join(rootDir, candidate);
        if (fs.existsSync(htmlPath) && fs.statSync(htmlPath).isFile()) {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
          res.setHeader(
            "Framer-Site-Id",
            "92820179d0d9024f377835ce636a8257b5020d5a1063b515c31199ef050fc84d"
          );
          if (req.method === "HEAD") {
            res.end();
            return;
          }
          fs.createReadStream(htmlPath).pipe(res);
          return;
        }
      }

      next();
    });
  };

  return {
    name: "fintechx-static-plugin",
    configureServer(server: any) {
      attachMiddleware(server.middlewares);
    },
    configurePreviewServer(server: any) {
      attachMiddleware(server.middlewares);
    },
    closeBundle() {
      const distDir = path.join(rootDir, "dist");
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }
      for (const page of FRAMER_PAGES) {
        const src = path.join(rootDir, page);
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, path.join(distDir, page));
        }
      }
      const assetsSrc = path.join(rootDir, "assets");
      const assetsDest = path.join(distDir, "assets");
      if (fs.existsSync(assetsSrc)) {
        fs.cpSync(assetsSrc, assetsDest, { recursive: true });
      }
    },
  };
}

export default defineConfig({
  plugins: [fintechxStaticPlugin(), react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        react: path.resolve(process.cwd(), "index-react.html"),
      },
    },
  },
});

