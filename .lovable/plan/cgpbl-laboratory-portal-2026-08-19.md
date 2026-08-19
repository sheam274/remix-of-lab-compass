# CGPBL Laboratory Portal

An academic research-lab portal for the Cell Genetics & Plant Biotechnology Laboratory (Jahangirnagar University), modeled on the CGPBL site: multi-level navigation, hero carousel, lab stats, research areas, facility highlights, news, and full member/research/publication pages backed by typed mock data.

## Design direction
- Deep forest green primary (#0F5257 / #137547 range) with slate-gray text and soft off-white section backgrounds, all as semantic tokens in `src/styles.css`.
- Serious academic feel: restrained motion, card hover lift, clear section headers, generous whitespace.
- Fully responsive: mobile drawer nav, desktop hover dropdown navigation.

## Pages (routes)
- `/` — Home: hero slider, stats, core research grid, facility highlights, recent news, collaborator logos
- `/about` — lab history, mission, PI message
- `/members` — filterable member list (PI, Co-PIs, faculty, researchers, PhD/MPhil/MS/undergrad, alumni, staff)
- `/research` — research areas, facilities & bioreactor, ongoing projects, funding agencies
- `/training` — Python/R programming, internships, seminars, Foldscope outreach
- `/publications` — publications list + blog posts
- `/contact` — address, map placeholder, contact form (UI only)

Header/footer live in the root layout so every page shares them.

## Structure
```text
src/
├── types/        member.ts, research.ts, publication.ts, news.ts, common.ts
├── data/         members.ts, research.ts, facilities.ts, publications.ts, news.ts, slides.ts, stats.ts, collaborators.ts
├── hooks/        useMembers.ts (filtering), useHeroSlider.ts (autoplay)
├── components/
│   ├── layout/   TopBar, Navigation (multi-level + mobile drawer), Header, Footer
│   ├── home/     HeroSlider, StatsSection, CoreResearchGrid, FacilityHighlights, RecentNewsSection, CollaboratorLogos
│   ├── members/  MemberCard, MemberFilter, MemberList
│   ├── research/ ResearchCard, FacilityGrid, ProjectDetail
│   ├── common/   SectionHeader, LoadingSpinner, CustomButton, Breadcrumb
│   └── ui/       existing shadcn primitives (reused, not rewritten)
└── routes/       thin route files that only compose components
```

## Technical notes
- Routing uses this project's TanStack Router file-based routes under `src/routes/` (equivalent of `pages/`); each route file only sets `head()` metadata and renders composed components — no UI logic inline.
- All data lives in `src/data/*.ts` typed against `src/types/*`, exported as arrays shaped like future DB rows (id, slug, timestamps) so a Cloud/Supabase swap is a one-file change per entity.
- Every component gets an exported, fully typed props interface; icons from `lucide-react`.
- Colors/gradients/shadows added as tokens in `src/styles.css` (`@theme inline` + `:root`/`.dark`); no hardcoded color utilities in components.
- Per-route SEO: unique title, description, og/twitter metadata.
- Generated imagery for hero slides and research cards (tissue culture, bioreactor, foldscope/frugal science, homology modeling) saved under `src/assets/`.

## Not included
Real backend, auth, or CMS. All content is mock data; the contact/newsletter forms validate and show a success toast without sending.
