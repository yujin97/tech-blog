import { defineConfig, passthroughImageService } from "astro/config";
import solidJs from "@astrojs/solid-js";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  integrations: [solidJs(), tailwind()],
});
