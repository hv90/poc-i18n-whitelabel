import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/poc-i18n-whitelabel/",
  // base: "/dist/",
  plugins: [react()],
});
