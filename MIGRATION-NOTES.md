# Migration Notes (De-Wixified → Next.js)

- Pages from `src/components/pages/*` were converted into `app/*/page.tsx`.
- Any `@wix/*` imports and obvious Wix runtime usages were removed.
- Styles from `src/styles/*` were copied into `/styles` and imported in `app/layout.tsx`.
- Shared components from `src/components/**` (except `/pages`) were copied into `/components` and cleaned.

## Manual follow-ups
- Replace any former Wix data calls with your own APIs or Vercel Functions.
- Verify each route renders as expected; adjust TSX if the auto-wrap changed layout.
- Move any remaining external assets into `/public` and fix URLs.
