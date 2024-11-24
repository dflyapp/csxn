import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://chisoxetnghiem.com",
  // i18n: {
  //   defaultLocale: "vi",
  //   locales: ["vi", "en"],
  // },
  integrations: [
    starlight({
      title: "CSXN",
      // Set Vietnamese as the default language for this site.
      locales: {
        root: {
          label: "CSXN",
          lang: "vi",
        },
      },
      description:
        "Trang web chuyên dùng tra cứu các chỉ số máu sau khi xét nghiệm.",
      logo: {
        replacesTitle: true,
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
      },
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
