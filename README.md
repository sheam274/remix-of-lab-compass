# Lab Compass

Act as a Senior Full-Stack Engineer and UI Architect. Build an Academic & Research Laboratory Portal modeled after CGPBL (Cell Genetics & Plant Biotechnology Laboratory, Jahangirnagar University).

### 🛠️ Tech Stack & Rules:
- **Framework:** Vite + React + TypeScript + Tailwind CSS + Lucide React Icons.
- **Architecture:** STRICT Modular & Feature-based Component Structure.
- **Files Location:** EVERYTHING must be organized inside `src/components/` with clean subdirectories.
- **Clean Root:** `pages/Index.tsx` or `App.tsx` must strictly be a clean page router/container layout that imports components. No raw UI logic in index/App!
- **Full-Stack Preparedness:** Store all mock datasets (lab members, publications, research areas, news, gallery) in `src/data/` or custom hooks (`src/hooks/`) with clearly typed TypeScript interfaces (`src/types/`). This will allow easy backend integration (Supabase/API) later.

---

### 📂 Recommended Directory Structure to Enforce:
src/
├── types/                  # TypeScript interfaces (Member, Research, Publication, News)
├── data/                   # Mock JSON/JS data matching full-stack DB entities
├── components/
│   ├── layout/             # Header, Navigation (Multi-level dropdowns), Footer, TopBar
│   ├── home/               # HeroSlider, StatsSection, FeaturesGrid, CoreResearchSection, RecentNews, CollaboratorLogos
│   ├── members/            # MemberCard, MemberFilter, MemberList
│   ├── research/           # ResearchCard, FacilityGrid, ProjectDetail
│   ├── common/             # SectionHeader, LoadingSpinner, CustomButton, Breadcrumb
│   └── ui/                 # Reusable Radix/Tailwind components (Dialog, Dropdown, Tabs, Card)
└── pages/                  # Clean route pages importing components

---

### 🏗️ Page Layout & Section Breakdown (CGPBL Structure):

1. **Top Bar & Navigation Header (`src/components/layout/`)**
   - Top Header: Emergency contact info, email (`info@cgpbl.ac.bd`), search bar, Quick Links ("Email Login", "Join Us").
   - Navigation Bar (Multi-level Dropdown Menu):
     - Home
     - About Us
     - Lab Members (PI, Co-PIs, Faculties, Researchers, PhD/MPhil/MS/Undergrad Students, Alumni, Staff)
     - Research (Facilities, Bioreactor, Ongoing Projects, Funding Agencies)
     - Training & Outreach (Python/R Programming, Internships, Seminars, Foldscope)
     - Publications & Blog
     - Contact Us

2. **Hero Carousel Section (`src/components/home/HeroSlider.tsx`)**
   - Interactive auto-playing banner slider featuring laboratory milestones, "Frugal Science", "Plant Tissue Culture", and "Homology Modeling".
   - CTA buttons ("Explore Research", "Join Our Team").

3. **Stats & Overview Banner (`src/components/home/StatsSection.tsx`)**
   - Display key lab metrics: Number of Researchers, Bioreactors, Publications, Ongoing Projects.

4. **Core Research Areas (`src/components/home/CoreResearchGrid.tsx`)**
   - Cards with hover effects for key biological disciplines:
     1. Plant Cell, Tissue, and Organ Culture
     2. Genetic Engineering & Genome Editing
     3. Cytology & Cytogenetics
     4. Systems Biology & Bioinformatics
     5. Artificial Intelligence in Biotechnology

5. **Ongoing Research & Lab Facilities Grid (`src/components/home/FacilityHighlights.tsx`)**
   - Highlighted cards for Napier Transformation Program, Agrobacterium-mediated Transformation, and Fodder Improvement.

6. **Recent News & Seminars (`src/components/home/RecentNewsSection.tsx`)**
   - Dynamic cards showing recent news, calls for PhD applications, and workshop announcements with date badges.

7. **Footer & Contact Info (`src/components/layout/Footer.tsx`)**
   - Laboratory address (Department of BGE, Jahangirnagar University, Savar, Dhaka).
   - Newsletter signup input field.
   - Quick navigation links & copyright info.

---

### 🎨 UI & Clean Code Standard:
- Clean academic/scientific theme: Primary colors deep forest green (`#0F5257` or `#137547`), crisp slate gray, light subtle background accents.
- Responsive design (Mobile drawer menu for small screens, sleek hover animations for desktop navigation).
- Make component props fully typed using TypeScript interfaces.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ba57e9dd-674a-4feb-9f02-d41ec7435c1c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
