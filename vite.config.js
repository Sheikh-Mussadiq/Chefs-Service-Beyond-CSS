import { defineConfig } from "vite";
import htmlPurge from "vite-plugin-purgecss";

export default defineConfig({
  base: "/Chefs-Service-Beyond-CSS/", // Replace with your GitHub repository name
  plugins: [
    htmlPurge(), // Keep your existing PurgeCSS plugin
  ],
});
