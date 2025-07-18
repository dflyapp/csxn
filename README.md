# ChiSoXetNghiem.com

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

A Vietnamese medical reference website for blood test parameters and medical indicators. This non-profit project helps users quickly look up and understand common blood test results.

## ✨ Features

- **Medical Reference Documentation**: Comprehensive blood test parameter explanations in Vietnamese
- **Fast & SEO-Friendly**: Built with Astro + Starlight for optimal performance
- **Error Monitoring**: Integrated Sentry for reliability
- **Mobile-Friendly**: Responsive design for all devices
- **Non-Profit**: Free medical information for Vietnamese users

## 📁 Content Structure

```
src/content/docs/
├── co-ban/          # Basic blood test parameters
│   ├── rbc.md       # Red Blood Cells
│   ├── hbg.md       # Hemoglobin
│   └── mch.md       # Mean Corpuscular Hemoglobin
├── gioi-thieu/      # Introduction & references
│   └── nguon-tham-khao.md
└── index.mdx        # Homepage
```

Medical documentation is stored in `src/content/docs/` as Markdown files, automatically generating routes based on file structure.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📚 Learn More

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build)
- [Project Website](https://chisoxetnghiem.com)

---

Made with ❤️ from HCM
