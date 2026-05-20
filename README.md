# React Refs & Portals Practice

Small practice project demonstrating React refs and portals using Vite.

## Description

This repository contains a minimal React app (Vite) used to explore `refs` and React `Portal`s. It includes a few components to demonstrate passing refs, controlling focus, and rendering modals with portals.

## Getting Started

Prerequisites:

- Node.js 14+ (or newer)
- npm (or yarn/pnpm)

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project Structure

- index.html
- package.json
- vite.config.js
- public/
- src/
  - main.jsx
  - App.jsx
  - index.css
  - assets/
  - components/
    - Player.jsx
    - ResultModal.jsx
    - TimeChallenge.jsx

## Key Components

- `Player.jsx` — demo component using refs for DOM access.
- `ResultModal.jsx` — modal rendered via a portal.
- `TimeChallenge.jsx` — sample timed interaction using refs/state.

## Notes

- Adjust Node/npm commands if you prefer `yarn` or `pnpm`.
- If scripts in `package.json` differ from the ones above, use the corresponding commands listed there.

## License

MIT
