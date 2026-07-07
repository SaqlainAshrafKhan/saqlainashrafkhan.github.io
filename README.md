# Saqlain Ashraf Khan Portfolio

Premium static React portfolio for `saqlainashrafkhan.github.io`.

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- React Router
- GitHub Pages SPA fallback via `dist/404.html`

## Local Commands

```bash
npm.cmd install
npm.cmd run dev
npm.cmd run build
npm.cmd run lint
```

PowerShell may block the `npm` shim on this machine, so use `npm.cmd`.

## Deploy

For the `saqlainashrafkhan.github.io` repository, commit this project and run:

```bash
npm.cmd run deploy
```

Or configure GitHub Pages to publish the generated `dist` output.

## Before Publishing

- Add the real resume PDF at `public/Saqlain-Ashraf-Khan-Resume.pdf`.
- Confirm email, LinkedIn, GitHub, Maheque live URL, and any public GitHub/demo links in `src/data/portfolio.js`.
- Replace placeholder meeting behavior with a Calendly or mail link when ready.
