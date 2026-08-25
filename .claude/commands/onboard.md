---
description: Orient a new session in the adam-freemer-website codebase
---

You're onboarding someone (or a fresh Claude session) into this repo. Read `CLAUDE.md` first — it's the source of truth for stack, structure, and conventions. Then run `git status` and `git log --oneline -10` to see what's currently in flight.

Give a short orientation covering:

1. **What this is** — personal portfolio site for Adam Freemer (Next.js 15 / React 19 / TypeScript / TailwindCSS + shadcn/ui), single-page app with sections for hero, projects, and contact.
2. **Where things live** — `app/page.tsx` (entry point), `components/projects-section.tsx` (core content — the project list), `components/ui/` (shadcn primitives), `tailwind.config.ts` (theme/animation).
3. **Dev loop** — `npm run dev`, `npm run build`, `npm run lint`. Note: ESLint and TypeScript errors are both ignored during builds (see CLAUDE.md's Build Considerations) — don't assume a clean build means clean code.
4. **Current state** — summarize the git status/log output so they know what's uncommitted or recently changed.

Keep it to one message, skimmable. Close by asking what they're here to work on.
