# Adam Freemer Website

## Project Overview
This is a personal portfolio website for Adam Freemer, a software engineer and technologist. The site showcases selected projects across software engineering, hardware design, and audio engineering domains.

## Repository
**GitHub**: https://github.com/AdamFreemer/adam-freemer-website

## Technology Stack
- **Framework**: Next.js 15.2.4 (React 19)
- **Language**: TypeScript
- **Styling**: TailwindCSS with shadcn/ui components
- **Theme**: Dark mode support via next-themes
- **Build Tool**: Next.js built-in bundler
- **Package Manager**: npm/pnpm (both lock files present)

## Project Structure
```
/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components (50+ components)
│   ├── contact-section.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── navigation.tsx
│   ├── projects-section.tsx
│   └── theme-provider.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/              # Static assets
└── styles/             # Additional stylesheets
```

## Key Features
1. **Single Page Application** with smooth scroll navigation
2. **Hero Section** with gradient background and call-to-action buttons
3. **Projects Section** showcasing 5 major projects:
   - KidVid (AI video search engine)
   - Court Ninja (Sports training app)
   - Vaxxmax (High-scale vaccine appointment system)
   - RMC-1 MIDI Controller (Hardware project)
   - Adam Freemer Music (Music production portfolio)
4. **Contact Section** for user inquiries
5. **Responsive Design** with mobile-first approach

## Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Configuration Notes
- **ESLint**: Configured to ignore errors during builds
- **TypeScript**: Configured to ignore build errors
- **Images**: Unoptimized mode enabled
- **Path Aliases**: `@/*` maps to root directory

## Component Architecture
- Uses shadcn/ui component library with Radix UI primitives
- Components follow composition pattern
- Extensive use of TailwindCSS for styling
- Custom CSS variables for theming

## Important Files
- `app/page.tsx`: Main entry point and page structure
- `components/projects-section.tsx`: Core content showcase
- `tailwind.config.ts`: Theme customization and animation definitions
- `next.config.mjs`: Next.js configuration with error suppression

## Development Tips
1. Components are highly modular - check `/components/ui/` for available primitives
2. Theme colors are defined via CSS variables in globals.css
3. The site uses a signature font for the hero title (CSS class: `signature-font`)
4. All external links open in new tabs with security attributes
5. Project tech stacks are displayed as pill badges

## Build Considerations
- Both ESLint and TypeScript errors are ignored during builds
- This allows for rapid prototyping but should be addressed for production
- Consider enabling strict mode for production deployment