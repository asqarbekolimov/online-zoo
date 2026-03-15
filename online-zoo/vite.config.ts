import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        contact: resolve(__dirname, "pages/contact.html"),
        map: resolve(__dirname, "pages/map.html"),
        eagle: resolve(__dirname, "pages/zoo/eagle.html"),
        gorilla: resolve(__dirname, "pages/zoo/gorilla.html"),
        lemur: resolve(__dirname, "pages/zoo/lemur.html"),
        panda: resolve(__dirname, "pages/zoo/panda.html"),
      },
    },
  },
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
})
