# Dev Portfolio

A fully responsive personal portfolio built with a modern full-stack approach, showcasing projects, skills, and a working contact form.

## Tech Stack

| Technology                  | Purpose                                           |
| --------------------------- | ------------------------------------------------- |
| **Next.js 14** (App Router) | Core framework, routing, and SSG                  |
| **TypeScript**              | Type safety across all components and hooks       |
| **Tailwind CSS**            | Utility-first styling with a custom design system |
| **Framer Motion**           | Declarative component animations                  |
| **Supabase**                | Cloud image storage and contact form database     |
| **Vercel**                  | CI/CD deployment pipeline                         |

## Optimisations

- **WebP images** — Profile and project images converted to WebP for reduced bandwidth
- **Lazy-loaded images** — Project images fetched on-demand via custom React hooks, not on page load
- **Responsive component splitting** — Separate components per breakpoint (mobile/tablet/desktop) to avoid shipping unnecessary DOM to each device
- **Framer Motion animations** — Hardware-accelerated width/opacity transitions rather than layout-thrashing CSS properties
- **Staggered CSS animations** — Letter-by-letter nav animations use CSS delay offsets to avoid JS overhead
- **Supabase CDN delivery** — Images served via Supabase public storage URLs for distributed caching
- **Custom loading states** — Spinner feedback during async image fetches to prevent layout shift
