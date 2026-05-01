# Puresen Blog Frontend

Static Astro blog for Puresen SEO articles.

## Purpose

- Source of truth for Puresen long-form SEO articles.
- n8n publishes Markdown files into `src/content/blog`.
- GitHub Actions deploys `dist` to Cloudflare Pages.
- WordPress/WooCommerce stays focused on store, product, cart, and checkout.

## Commands

```bash
npm install --legacy-peer-deps
npm run build
```

## Content Path

```text
src/content/blog/*.md
```

## Safety Rules

- Essential oil articles must avoid medical/drug claims.
- Use aromatic/lifestyle language only.
- Include caution language when relevant:
  - do not ingest
  - keep away from children and pets
  - ask a qualified professional if pregnant, nursing, taking medication, or managing a medical condition
  - not intended to diagnose, treat, cure, or prevent disease
