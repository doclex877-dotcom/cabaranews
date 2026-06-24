# CabaraNews

Immigration, visa, and finance guides for Africans.

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to vercel.com → Import project → Select the repo
3. Vercel auto-detects Next.js — click Deploy
4. In Namecheap DNS: add the A record and CNAME Vercel provides

## Local development

```bash
npm install
npm run dev
# opens at http://localhost:3000
```

## Adding articles

Add `.md` files to `/content/articles/` with this frontmatter:

```yaml
---
title: "Your article title"
excerpt: "One paragraph summary shown in cards"
category: "immigration"  # immigration | visas | fintech | rights | studying-abroad
categoryLabel: "Immigration"
date: "2025-06-15"
lastUpdated: "June 2025"
readTime: 10
tags: ["UK Visa", "Zimbabwe"]
published: true
---
```
