## Eato – Project TODOs

A prioritized checklist to reach a functional MVP and beyond. Check tasks as you complete them.

### P0 – Core MVP (Auth, DB, AI suggestions)

- [ F ] Complete auth flows (BetterAuth)
  - [ F ] Implement email/password sign-in in `components/auth/SignInForm.tsx`
  - [ F ] Build `SignUpForm` and wire it to BetterAuth
  - [ F ] Add Google OAuth sign-in on sign-in/sign-up pages
  - [ F ] Protect authenticated routes (e.g., `app/saved/page.tsx`) and redirect unauthenticated users to `/signin`
  - [ F ] Add `BETTER_AUTH_URL` to environment variables and load it in `lib/auth-client.ts`
- [ F ] Fix header auth UX
  - [ F ] Replace placeholder `Logo` text in `components/header/Logo.tsx` with brand mark/text
  - [ F ] Replace placeholder `UserProfile` UI with avatar/name menu
  - [ F ] Verify `SignOutButton` flow; redirect after sign-out reliably
- [ F ] Database: add domain models and migrations
  - [ F ] Add `dish` table (id, title, description, ingredients, cuisine, spiciness, diet, createdAt)
  - [ F ] Add `saved_dish` table (id, userId → `user.id`, dishId → `dish.id`, createdAt)
  - [ F ] Generate and push migrations with Drizzle Kit
- [ F ] AI suggestions API
  - [ F ] Create API route `app/api/suggestions/route.ts` that calls OpenAI (SDK v5) with user prompt + filters
  - [ ] Include basic rate-limiting and input validation (Zod)
  - [ ] Return normalized dish objects compatible with DB schema

### P1 – App UX and flows

- [ ] Home page prompt + filters
  - [ ] Build prompt input and filters (cuisine, spiciness, diet, meal type) in `app/page.tsx`
  - [ ] Call suggestions API and render results
  - [ ] Add "Regenerate" action
  - [ ] Add "Save" action per dish (persists to DB)
- [ ] Saved dishes page (`app/saved/page.tsx`)
  - [ ] Fetch for current user and display list/grid
  - [ ] Add remove/unsave functionality
- [ ] Dish detail page (`app/dish/[dishID]/page.tsx`)
  - [ ] Load a specific saved dish by id
  - [ ] Display rich details and metadata
- [ ] Error and loading states
  - [ ] Use `sonner` toasts for API and auth feedback
  - [ ] Add skeleton/loaders for list and detail views

### P1 – Theming, layout, navigation

- [ ] Integrate `next-themes` provider in `app/layout.tsx`
- [ ] Add dark/light toggle in header
- [ ] Improve header layout and navigation links (Home, Saved)

### P1 – Documentation and configuration

- [ ] Update `README.md`
  - [ ] Ensure project name is consistently "Eato"
  - [ ] Add `BETTER_AUTH_URL` to env docs
  - [ ] Document Drizzle Kit commands and scripts
- [ ] Add NPM scripts for Drizzle
  - [ ] `drizzle:generate`, `drizzle:push`, `drizzle:studio`
- [ ] Provide `.env.example` with all required envs

### P1 – Middleware and security

- [ ] Add middleware for auth-protected routes (Saved, optionally Dish)
- [ ] Add basic rate limiting on `POST /api/suggestions`
- [ ] Validate and sanitize user inputs (Zod schemas shared between client/server)

### P2 – Testing and quality

- [ ] Unit tests for utils and schemas (Zod)
- [ ] Integration tests for auth flows and API route (Playwright or Cypress)
- [ ] Type safety pass: avoid `any`, ensure API response types
- [ ] Lint and format checks in CI

### P2 – Performance and DX

- [ ] Cache/cooldown for repeat prompts with identical filters
- [ ] Streaming responses from OpenAI for faster perceived latency
- [ ] Dev tooling: Husky pre-commit with lint + typecheck
- [ ] Bundle analysis and image optimization where applicable

### P3 – Accessibility & i18n

- [ ] Audit components for a11y (labels, focus states, keyboard interactions)
- [ ] Color contrast in both themes
- [ ] i18n scaffold (English/Thai) for visible strings

### Backlog / Nice to have

- [ ] Shareable dish links and social preview images
- [ ] User preferences page (default cuisine/diet, spice tolerance)
- [ ] Metrics/analytics (page views, suggestion success)
- [ ] SEO: structured data for recipes/dishes

### Notes

- Core files to revisit: `components/auth/SignInForm.tsx`, `schema/*.ts`, `lib/auth.ts`, `lib/auth-client.ts`, `components/header/*`, `app/page.tsx`, `app/api/suggestions/route.ts` (new), `db/schema.ts` (extend).
- Keep tasks small and incremental; PRs should be focused and linked to a single checklist item where possible.
