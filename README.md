# Pharmacube Bangladesh — Website

Next.js (App Router) + TypeScript frontend for [pharmacubebd.com](https://pharmacubebd.com).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

```
src/
├── app/                    # layout (fonts, metadata), page, global CSS (tokens + base)
├── components/
│   ├── layout/             # Header, Footer, Logo
│   ├── sections/           # one component (+ CSS module) per landing-page section
│   └── ui/                 # shared primitives: Button, Eyebrow, SectionHeading, Icon, SocialIcon, RevealObserver
└── data/
    ├── site.ts             # site config, contact details, nav + footer links, SEO metadata
    ├── services.ts         # services list (also feeds the contact form's select)
    └── home.ts             # copy for hero, about, process, why-us, industries, FAQ
```

- **Content lives in `src/data`** — edit copy/contact details there, not in components.
- **Styling:** design tokens and base styles are in `src/app/globals.css`; every component has its own CSS module.
- **Contact form** (`ContactForm.tsx`) is front-end only for now; wire `handleSubmit` to an API route / email service.
- **TODO:** replace the placeholder phone number in `src/data/site.ts`.
