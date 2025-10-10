// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   appType: "spa",
//   server: {
//     port: 3000,
//   }
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function spaFallback() {
  return {
    name: 'spa-fallback-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const accept = req.headers.accept || '';
        if (
          req.method === 'GET' &&
          !req.url.includes('.') &&
          accept.includes('text/html')
        ) {
          req.url = '/index.html';
        }
        next();
      });
    }
  }
}

export default defineConfig({
  plugins: [react(), spaFallback()],
  appType: 'spa',
});
