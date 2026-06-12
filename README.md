# PopX App

A pixel-perfect React implementation of the PopX mobile UI — 4 screens with seamless navigation, centered in a phone shell on desktop.

## Screens
- **Welcome** — landing with Create Account / Login CTAs
- **Login** — email + password, login button activates when both fields filled
- **Register** — full sign-up form with radio for agency status
- **Account Settings** — profile view with avatar, name, email, bio

## Tech Stack
- React 18 + Vite
- React Router v6
- Plain CSS (no UI library)

## Run Locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) — it will auto-detect Vite and deploy.

## Deploy to Netlify

```bash
npm run build
# drag & drop the `dist/` folder at netlify.com/drop
```

Or connect via Netlify dashboard with build command `npm run build` and publish directory `dist`.
