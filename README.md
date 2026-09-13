# Andriy Chernenko — Portfolio

A modern static personal portfolio website built with **Next.js (App Router)**, **TypeScript**, **Framer Motion**, and **SSG (Static Site Generation)**. Features a milk / chocolate / forest-green visual system with responsive layouts and fluid interactions.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router, SSG / Static Export)
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Next/Font (DM Sans & Manrope self-hosted Google Fonts)
- **Styling**: Vanilla CSS variables & custom responsive architecture

## 📁 Project Structure

```
├── public/                 # Static assets (profile.jpg, CV PDF)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── globals.css     # Global styles & theme design system
│   │   ├── layout.tsx      # Root layout with metadata & fonts
│   │   └── page.tsx        # SSG main page
│   ├── components/         # Typed React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── CursorGlow.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── SkillModal.tsx
│   │   ├── Skills.tsx
│   │   └── SocialStrip.tsx
│   ├── config/             # JSON Configuration files
│   │   ├── about.json
│   │   ├── connect.json
│   │   ├── contact.json
│   │   ├── hero.json
│   │   ├── projects.json
│   │   ├── site.json
│   │   └── skills.json
│   └── types/              # TypeScript definitions for configs
│       └── config.ts
├── next.config.mjs         # Next.js config (SSG output: 'export')
├── tsconfig.json           # TypeScript configuration
└── vercel.json             # Vercel deployment headers
```

## 🛠️ Development & Build

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build static website (SSG export to ./out)
npm run build
```

## ✏️ Content Management

All website text, links, projects, and skills are managed through JSON files in `src/config/`:
- `site.json` — brand name, mark, and copyright
- `hero.json` — hero title, headline, status, buttons, and badges
- `about.json` — biography, work experience timeline, and metrics
- `skills.json` — skill categories, descriptions, and tool breakdowns
- `projects.json` — portfolio projects, tags, and status
- `connect.json` — social links (LinkedIn, GitHub, Telegram, Email)
- `contact.json` — contact call-to-action details
