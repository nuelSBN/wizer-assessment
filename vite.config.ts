// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    // setupFiles: "./setupTests.ts",
    setupFiles: "./src/setupTests.ts",
  },
});
