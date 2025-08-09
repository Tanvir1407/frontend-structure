# Frontend Structure & Standards

This repo defines a standardized React + Vite + shadcn/ui setup. Use Yarn for all commands.

## Quick start (Yarn)

1) Clone & enter the project
```bash
git clone <your-repo-url>
cd frontend-structure
```

2) Install deps
```bash
yarn install
```

3) Run dev
```bash
yarn dev
```

4) Optional: build & preview
```bash
yarn build
yarn preview
```

## Standard project structure

Recommended folders for all projects:

```
src/
├─ assets/           # Static assets (images, fonts, etc.)
├─ components/       # Reusable UI components
│  ├─ common/        # Shared components
│  ├─ layout/        # Layout components (Header, Footer)
│  └─ forms/         # Form components
├─ config/           # App configuration
├─ hooks/            # Custom React hooks
├─ pages/            # Page-level components
├─ services/         # API services and integrations
├─ store/            # Redux store setup
│  ├─ slices/        # Redux slices
│  └─ index.js       # Store configuration
├─ styles/           # Global styles and themes
├─ utils/            # Utility functions
├─ App.js            # Root component
└─ main.js           # Entry point
```

Note: This repo currently uses `src/App.jsx`. Adapt as needed but follow the intent above.

## Package management standards

- Package manager: Yarn
- Approved packages (examples):
	- HTTP: `axios`
	- Forms: `react-hook-form`
	- State: `@reduxjs/toolkit`, `react-redux`
	- Routing: `react-router-dom`
	- Dates: `dayjs` 
	- PDF: `jspdf` + `jspdf-autotable`
    - Icons: `lucide`
- Version pinning: use exact versions (e.g., `yarn add axios@1.7.4`), avoid ranges like ^ or ~ for production apps.
- Dependency review: propose new packages via PR and standards committee approval before adoption.
- New project template: start from this repo or a centralized template to keep versions aligned.

Current config (from `components.json`):
- Theme: `new-york`
- Base color: `neutral`
- Icon library: `lucide`

Add components (Yarn):
```bash
npx shadcn@latest add button
```
Replace `button` with any component name (e.g., `alert-dialog`, `input`, `card`).

Initialize shadcn in a fresh repo (if needed):
```bash
npx shadcn@latest init
```

Components live under `src/components/ui` (see alias `ui` in `components.json`).

## PDF generation standard

Standardize on `jspdf` with `jspdf-autotable`.

Install:
```bash
yarn add jspdf jspdf-autotable
```

Wrapper service example (`src/services/pdfService.js`):


## Commands cheat‑sheet (Yarn)

```bash
# install deps
yarn install

# dev server
yarn dev

# build & preview
yarn build
yarn preview

# add deps with exact versions
yarn add axios@1.7.4

# add shadcn component
yarn dlx shadcn@latest add button
```
