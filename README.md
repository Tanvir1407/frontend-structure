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
└─ index.js          # Entry point
```

Note: This repo currently uses `src/App.jsx` and `src/main.jsx`. Adapt as needed but follow the intent above.

## Package management standards

- Package manager: Yarn
- Approved packages (examples):
	- HTTP: `axios`
	- Forms: `react-hook-form`
	- State: `@reduxjs/toolkit`, `react-redux`
	- Routing: `react-router-dom`
	- Dates: `date-fns` or `dayjs` (choose one per org)
	- PDF: `jspdf` + `jspdf-autotable`
- Version pinning: use exact versions (e.g., `yarn add axios@1.7.4`), avoid ranges like ^ or ~ for production apps.
- Dependency review: propose new packages via PR and standards committee approval before adoption.
- New project template: start from this repo or a centralized template to keep versions aligned.

## Documentation requirements

Every project must include:
- README covering overview, setup, structure, and key dependencies
- Component docs:
	- JSDoc comments or TS types
	- Usage examples
	- Prop validation (PropTypes) if using JS

## Implementation strategy

New projects:
- Scaffold from the template
- Use generators (e.g., Plop.js) for consistent component files
- Add pre-commit hooks (Husky + lint-staged) to enforce lint/format/test

Existing projects:
- Create a refactor plan to align with standards
- Document any deviations and rationale
- Prioritize refactors when touching related modules

## Governance process

Frontend Standards Committee:
- Members: senior devs + team leads
- Cadence: monthly review
- Scope: approve package changes and standards updates

Change management:
- Propose via RFC/PR
- Pilot in a small project
- Document and announce; provide training if needed

## Tools to enforce standards

- Shared lint/format: ESLint + Prettier configs (this repo includes `eslint.config.js`)
- Tests: unit (Vitest) + React Testing Library encouraged
- CI: run lint, typecheck (if TS), tests on PRs
- Component library: shadcn/ui as the base; keep shared patterns in `components/common`

## shadcn/ui usage

Current config (from `components.json`):
- Theme: `new-york`
- Base color: `neutral`
- Icon library: `lucide`

Add components (Yarn):
```bash
yarn dlx shadcn@latest add button
```
Replace `button` with any component name (e.g., `alert-dialog`, `input`, `card`).

Initialize shadcn in a fresh repo (if needed):
```bash
yarn dlx shadcn@latest init
```

Components live under `src/components/ui` (see alias `ui` in `components.json`).

## PDF generation standard

Standardize on `jspdf` with `jspdf-autotable`.

Install:
```bash
yarn add jspdf jspdf-autotable
```

Wrapper service example (`src/services/pdfService.js`):
```javascript
// src/services/pdfService.js
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const defaultOptions = {
	orientation: 'p', // 'p' or 'l'
	unit: 'mm',
	format: 'a4',
	title: 'Document',
};

export const generatePDF = (data, options = {}) => {
	const finalOptions = { ...defaultOptions, ...options };
	const doc = new jsPDF(finalOptions);

	if (data?.title || finalOptions.title) {
		doc.setFontSize(16);
		doc.text(data?.title ?? finalOptions.title, 14, 16);
	}

	if (data?.table) {
		doc.autoTable({
			startY: 22,
			...data.table,
		});
	}

	return doc; // caller decides to save/print
};

// Usage example
// const doc = generatePDF({
//   title: 'Users',
//   table: { head: [['Name', 'Email']], body: [['Alice', 'a@x.com']] },
// });
// doc.save('users.pdf');
```

Document this service as the only approved method. Refactor older code to use it when feasible.

## Training & onboarding

- Keep standards and examples in this README (and/or an internal handbook)
- Onboard with a short guide + hands-on pairing
- Run periodic workshops to refresh best practices

## Benefits

- Consistency: same patterns across repos
- Efficiency: faster context switching
- Quality: fewer conflicts and regressions
- Scalability: easier onboarding and maintenance

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
