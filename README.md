# frontend-structure

## Initialize on your local machine (Yarn)

To set up this project on a new machine using Yarn:

1. Clone the repository
	```bash
	git clone <your-repo-url>
	cd frontend-structure
	```
2. Install dependencies
	```bash
	yarn install
	```
3. Start the dev server
	```bash
	yarn dev
	```
4. Optional: Build and preview
	```bash
	yarn build
	yarn preview
	```

## shadcn/ui configuration

- Theme: `new-york` (see `components.json` → `style`)
- Base color: `neutral`
- Icon library: `lucide`

You can adjust these in `components.json` at any time.

## Add shadcn components (Yarn)

Use Yarn DLX to add components. For example, to add the Button component:

```bash
npx shadcn@latest add button
```

Replace `button` with any component name you need (e.g., `alert-dialog`, `input`, `card`).

Note: If you ever need to initialize shadcn in a fresh repo, run:

```bash
npx shadcn@latest init
```

This project already includes `components.json` and a component (`src/components/ui/button.jsx`), so you can skip init here.
