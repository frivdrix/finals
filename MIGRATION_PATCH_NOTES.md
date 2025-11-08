# Wix → Vercel Structure Alignment (Patch)

This patch makes the Vercel (Next.js App Router) project render the Wix-copied page components so that the structure (section order, layout blocks, and content) matches the Wix version.

## What changed

1. **Copied Wix pages** into `wix/pages/` inside the Vercel project:
   - `HomePage.tsx`
   - `ContactPage.tsx`
   - `FAQPage.tsx`
   - `CaseStudiesPage.tsx`

   Minor compatibility transforms were applied:
   - Replaced `react-router-dom`’s `Link` with `next/link`.
   - Rewrote `to=` props to `href=` in JSX.

2. **Next.js routes now wrap the Wix pages:**
   - `app/page.tsx` → renders `wix/pages/HomePage`
   - `app/contact-page/page.tsx` → renders `wix/pages/ContactPage`
   - `app/f-a-q-page/page.tsx` → renders `wix/pages/FAQPage`
   - `app/case-studies-page/page.tsx` → renders `wix/pages/CaseStudiesPage`

3. **No data model changes.** Your existing `@/integrations` and `@/entities` continue to be used, since the Wix pages already import from those paths.

## Verify locally

\`\`\`bash
pnpm i   # or npm i / yarn
pnpm dev # or npm run dev
\`\`\`

Open http://localhost:3000 and navigate between pages.

## Notes / Things to watch

- If any remaining imports rely on `react-router` features (beyond `Link`), you may see errors at build/runtime. In that case, replace them with Next.js equivalents.
- The Tailwind classes and shadcn/ui components referenced by the Wix pages are already present in `@/components/ui`. If you see missing components, copy them across similarly.
- If you previously customized the original Next.js pages, those were replaced by wrappers. You can restore them from git history if needed.
