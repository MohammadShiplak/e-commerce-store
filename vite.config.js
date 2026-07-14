import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Make sure this import is here!
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // <--- Added the comma here
  server: {
    port: 5173,
    strictPort: true,
  },
});
