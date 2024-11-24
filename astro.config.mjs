import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://chisoxetnghiem.com",
  i18n: {
    defaultLocale: "vi",
    locales: ["vi"],
  },
  integrations: [
    starlight({
      title: "Chi So Xet Nghiem",
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
      },
      //   social: {
      //     github: "https://github.com/withastro/starlight",
      //   },
      sidebar: [
        {
          label: "Cơ bản",
          autogenerate: { directory: "co-ban" },
        },
        {
          label: "Giới thiệu",
          autogenerate: { directory: "gioi-thieu" },
        },
      ],
    }),
  ],
});
