# Bytebandit Portfolio

A modern personal portfolio built with React and Vite.

This project showcases services, projects, skills, impact metrics, timeline highlights, and a contact flow in a responsive single-page experience.

## Highlights

- Responsive layout for desktop, tablet, and mobile
- Light and dark mode toggle
- Accent color switching (blue, green, orange, pink)
- Persistent theme preferences with local storage
- Projects section with search, tag filters, and sorting
- Animated stats counters on scroll
- Timeline section for professional journey milestones
- Contact form validation with email app handoff
- Scroll-to-top interaction

## Tech Stack

- React 19
- Vite 6
- Plain CSS with CSS variables for theming

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at the local URL printed in the terminal.

## Available Scripts

- npm run dev: Start Vite development server
- npm run build: Build for production
- npm run preview: Preview the production build locally
- npm run lint: Run ESLint checks

## Project Structure

```text
.
├── public/
│   ├── projectfile.json
│   └── projectimg/
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   └── component/
│       ├── about.jsx
│       ├── contact.jsx
│       ├── intro.jsx
│       ├── last.jsx
│       ├── nav.jsx
│       ├── project.jsx
│       ├── scrolltop.jsx
│       ├── services.jsx
│       ├── skill.jsx
│       ├── stats.jsx
│       ├── themeswitcher.jsx
│       ├── timeline.jsx
│       └── styles/
│           ├── about.css
│           ├── contact.css
│           ├── intro.css
│           ├── last.css
│           ├── nav.css
│           ├── project.css
│           ├── scrolltop.css
│           ├── services.css
│           ├── skill.css
│           ├── stats.css
│           └── timeline.css
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## Theme Customization

Theme tokens are defined in src/App.css using CSS variables.

- Mode is controlled through data-theme on the root element
- Accent is controlled through data-accent on the root element

You can add new accent palettes by defining another data-accent selector and mapping it in the theme switcher component.

## Projects Data

Project cards are sourced from public/projectfile.json.

You can extend each project object with optional fields:

- tags: string[]
- live: URL for live demo
- code: URL for source code

If tags are missing, fallback tags are inferred from project name and description.

## Deployment

Build the app:

```bash
npm run build
```

Deploy the generated dist folder to your preferred static host (for example Netlify, Vercel, or GitHub Pages).

## Author

Elvin Owusu