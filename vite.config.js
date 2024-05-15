import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/React-hello-world-app/", // Replace 'your-repo-name' with the name of your GitHub repository
});
