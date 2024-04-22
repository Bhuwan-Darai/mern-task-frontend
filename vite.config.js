import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://mern-task-api-p68z.onrender.com",
        changeOrigin: true,
      },
    },
  },
  base: "./", // Specify the base URL here
  build: {
    outDir: "dist", // Specify the output directory here
  },
});
