import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    extensions: [".js", ".jsx"],
  },
});

// https://vitejs.dev/config/
