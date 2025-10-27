import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://chisoxetnghiem.com",
  image: {
    service: { entrypoint: 'astro/assets/services/noop' }
  },
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
      components: {
        Footer: "./src/components/overrides/Footer.astro",
      },
    }),
    sentry({
      dsn: "https://96e1d62bcf7a84d0ea456ca9b7f75e28@o4508776494792704.ingest.us.sentry.io/4508823805362176",
      sourceMapsUploadOptions: {
        project: "csxn",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
});
