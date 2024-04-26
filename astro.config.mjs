import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://katelijacobsen.github.io',
  base: 'GirlTalk-Longread',
  integrations: [react()],
});
