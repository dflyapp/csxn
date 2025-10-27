# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ChiSoXetNghiem.com is a Vietnamese medical reference website for blood test parameters and medical indicators. This is a non-profit project built with Astro and Starlight to help users understand common blood test results.

**Key Technologies:**
- Astro 4.16.14 + Starlight (documentation framework)
- TypeScript (strict mode)
- Sentry integration for error monitoring
- pnpm package manager

## Development Commands

**Note:** This project uses pnpm, not npm. Always use pnpm commands.

```bash
# Install dependencies
pnpm install

# Start development server (localhost:4321)
pnpm dev

# Type check and build for production
pnpm build

# Preview production build locally
pnpm preview

# Run Astro CLI commands
pnpm astro [command]

# Type checking only
pnpm astro check
```

## Architecture

### Content Structure

Medical documentation lives in `src/content/docs/` as Markdown/MDX files. The file structure automatically generates routes:

```
src/content/docs/
├── co-ban/          # Basic blood test parameters (e.g., rbc.md, hbg.md, mch.md)
├── gioi-thieu/      # Introduction and references
├── about.md         # About page
└── index.mdx        # Homepage
```

**Content Schema:** Defined in `src/content/config.ts` using Starlight's `docsSchema()`.

### Configuration

**astro.config.mjs** contains:
- Site URL: https://chisoxetnghiem.com
- Starlight configuration with Vietnamese as default locale
- Sidebar auto-generation from directory structure
- Custom Footer component override
- Sentry DSN and sourcemap upload configuration

**Key Config Details:**
- Primary language: Vietnamese (`lang: "vi"`)
- Sidebar sections are auto-generated from `co-ban/` and `gioi-thieu/` directories
- Footer component is overridden at `src/components/overrides/Footer.astro`

### Component Overrides

Starlight components can be overridden in `src/components/overrides/`. Currently:
- `Footer.astro` - Custom footer with About link and copyright

### Environment Variables

Required for builds with sourcemap upload:
- `SENTRY_AUTH_TOKEN` - Sentry authentication token (see `.env.example`)

## Medical Content Guidelines

When adding or editing blood test parameter documentation:
- Use Vietnamese language
- Include: parameter name, description, normal ranges (by gender if applicable), causes of changes, and improvement suggestions
- Follow the structure in existing files like `src/content/docs/co-ban/rbc.md`
- Reference values should be clearly marked with units (e.g., T/L, g/L)