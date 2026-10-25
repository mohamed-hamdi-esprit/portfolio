================================================================================
MOHAMED HAMDI — PROFESSIONAL PORTFOLIO
Software Engineering Student at ESPRIT & Freelance Graphic Designer
================================================================================

TABLE OF CONTENTS
1. Overview & Technology Stack
2. Why Astro? (Framework Decision & Rationale)
3. How the Framework is Used (Architecture & Workflow)
4. Project Structure (Complete Breakdown)
5. Design System & Theming Engine
6. How to Add a New Project (Step-by-Step)
7. Commands & Local Development
8. Production Build & Deployment Options
9. Author & Contact Information

================================================================================
1. OVERVIEW & TECHNOLOGY STACK
================================================================================

This portfolio is an enterprise-grade, component-driven website built for 
Mohamed Hamdi to showcase dual expertise in Software Engineering (Spring Boot, 
Angular, Symfony, Python, observability & systems) and Visual Design (brand 
identity, posters, badges, and motion graphics).

CORE TECHNOLOGIES:
- Framework:            Astro (v7 Static Site Generator)
- Component Templating: Astro Components (.astro)
- Styling:              Vanilla CSS3 with Design Tokens (tokens.css, global.css)
- Logic / Controllers:  Modern Modular JavaScript (ES6 Modules)
- Package Manager:      npm (Node.js >= 22)
- Build Output:         Pure Static HTML/CSS/JS (dist/)

================================================================================
2. WHY ASTRO? (FRAMEWORK DECISION & RATIONALE)
================================================================================

Why not a single HTML file?
---------------------------
A single HTML file is acceptable for a quick local preview, but it creates 
severe technical debt in real repositories:
- Code Duplication: Repeating card markup, modal markup, and tag lists.
- High Maintenance Burden: Adding a new project requires manually editing 
  complex nested HTML, increasing the risk of broken tags.
- Poor Recruiter Impression: Recruiters, engineering managers, and technical 
  leads look at your GitHub repository. A single monolithic file signals lack of 
  experience with industry-standard build tools and component systems.

Why Astro instead of Next.js, Create-React-App, or a heavy SPA?
---------------------------------------------------------------
1. Zero JavaScript by Default:
   Next.js and React SPAs hydrate the entire page with massive JavaScript 
   bundles just to display text and cards. Astro compiles components into pure 
   HTML during build time, resulting in near-zero client runtime, sub-second 
   load times, and perfect Lighthouse performance scores (100/100).

2. Component-Based Cleanliness:
   Astro allows building clean, reusable components (Header.astro, Hero.astro, 
   ProjectCard.astro, Timeline.astro) that look just like HTML, but with 
   isolated scoped styles and reactive props.

3. True Separation of Data, View, and Logic (MVC on the Frontend):
   - Model:       src/data/*.js (Pure structured data)
   - View:        src/components/*.astro (UI templates)
   - Controller:  src/scripts/*.js (Client interactions)
   You never touch HTML markup to add or modify a project; you only touch 
   the data array.

4. Framework Flexibility (Islands Architecture):
   If you ever want to embed a React widget, an Angular component, or a Vue 
   diagram in the future, Astro supports them seamlessly as isolated "islands" 
   without rewriting your codebase.

================================================================================
3. HOW THE FRAMEWORK IS USED (ARCHITECTURE & WORKFLOW)
================================================================================

Astro acts as a static compiler:

1. Static Site Compilation:
   During build time (`npm run build`), Astro reads:
   - Your data sources from `src/data/` (projects, skills, experience, profile).
   - Your Astro components from `src/components/`.
   - Your route from `src/pages/index.astro`.
   It loops through your arrays, renders accessible semantic HTML markup, 
   optimizes styles, and outputs production assets into the `dist/` directory.

2. Client-Side Hydration & Interactivity:
   Only tiny, targeted JavaScript scripts (`src/scripts/`) are shipped to the 
   client for interactive features:
   - `theme.js`:   Toggles light/dark mode and persists in localStorage.
   - `filters.js`: Handles the Developer vs. Designer perspective switch, 
                   updates the typewriter role animation, and filters cards.
   - `modal.js`:   Opens the native accessible HTML5 `<dialog>` modal with 
                   full case-study details when clicking any project card.

================================================================================
4. PROJECT STRUCTURE (COMPLETE BREAKDOWN)
================================================================================

portfolio/
│
├── dist/                          # Production build output (generated by npm run build)
│   ├── index.html                 # Optimized, minified static HTML
│   ├── _astro/                    # Bundled, fingerprinted CSS & JS assets
│   └── images/                    # Copied project images
│
├── public/                        # Static assets served as-is at root URL
│   ├── images/                    # Project pictures & mockups
│   │   ├── monitoring-system.jpg  # Python, Grafana, Graylog, Rsyslog dashboard
│   │   ├── desktop-app.jpg        # CodeAnalytics Java & C++ suite
│   │   ├── webapp.jpg             # Zenith Symfony & Angular hub
│   │   ├── branding.jpg           # Aurora brand identity & posters
│   │   └── motion-video.jpg       # Lumina video & motion graphics
│   ├── favicon.ico
│   └── favicon.svg
│
├── src/                           # Application source code
│   │
│   ├── components/                # Modular UI Components (The "View")
│   │   ├── Header.astro           # Sticky glassmorphic navbar & theme toggle
│   │   ├── Hero.astro             # Headline, persona switch, typewriter role
│   │   ├── About.astro            # Dual-craft philosophy & spoken languages
│   │   ├── SkillGrid.astro        # Filterable skills cards (Dev, Des, Biz)
│   │   ├── ProjectCard.astro      # Tactile project preview card with tags
│   │   ├── Timeline.astro         # Academic & professional milestone timeline
│   │   ├── ContactForm.astro      # Direct contact cards & message form
│   │   ├── ProjectModal.astro     # Accessible <dialog> project detail modal
│   │   └── Footer.astro           # Copyright, back-to-top button
│   │
│   ├── data/                      # Structured Data Models (The "Model")
│   │   ├── profile.js             # Personal bio, languages, and mode config
│   │   ├── projects.js            # All projects (titles, tags, images, modal copy)
│   │   ├── skills.js              # Technical & creative skills with levels
│   │   └── experience.js          # Journey timeline (internships, education)
│   │
│   ├── pages/                     # Routing
│   │   └── index.astro            # Home page assembling all components
│   │
│   ├── scripts/                   # Client-Side Interactive Logic (The "Controller")
│   │   ├── theme.js               # Dark / Light mode switching & persistence
│   │   ├── filters.js             # Persona switch, typewriter, category filters
│   │   └── modal.js               # Project modal dialog opening/closing logic
│   │
│   └── styles/                    # Design System & Stylesheets
│       ├── tokens.css             # CSS custom properties (colors, fonts, radius)
│       └── global.css             # Base resets, typography, buttons, grids
│
├── astro.config.mjs               # Astro framework configuration
├── package.json                   # Dependencies, scripts, and project metadata
├── package-lock.json              # Deterministic npm dependency tree
├── tsconfig.json                  # TypeScript / Astro editor support
├── README.md                      # Markdown documentation for GitHub
└── README.txt                     # This plain text guide

================================================================================
5. DESIGN SYSTEM & THEMING ENGINE
================================================================================

The styling relies on pure Vanilla CSS Design Tokens located in:
`src/styles/tokens.css`

Features:
1. Dual-Theme Support:
   - Light Mode: Clean, bright surfaces with soft contrast lines.
   - Dark Mode:  Deep slate (`#090d16`) with elevated surfaces (`#111726`).
   - Automatically synchronizes with system preference (`prefers-color-scheme`).

2. Dual-Perspective Accent System:
   - Developer Mode (`data-mode="code"`):
     Electric Indigo/Blue accent (`--accent: #3b82f6` or `#60a5fa`).
   - Designer Mode (`data-mode="design"`):
     Vivid Raspberry/Coral accent (`--accent: #f43f5e` or `#fb7185`).
   Switching perspective smoothly shifts all button hovers, glow effects, 
   and borders across the entire interface without reloading the page.

================================================================================
6. HOW TO ADD A NEW PROJECT (STEP-BY-STEP)
================================================================================

Adding a project takes 30 seconds and requires ZERO editing of HTML markup:

Step 1: Save your project preview image:
  Place your picture in:
  `public/images/my-new-project.jpg`

Step 2: Open `src/data/projects.js` and append an entry:
  {
    id: "my-new-project",
    title: "Project Name",
    category: "dev", // Use "dev" for Software or "des" for Design/Motion
    categoryLabel: "Full-Stack Web App",
    summary: "One short sentence shown on the card thumbnail.",
    description: "Detailed overview shown inside the pop-up modal.",
    tags: ["Spring Boot", "Angular", "MySQL"],
    image: "/images/my-new-project.jpg",
    link: "https://github.com/mohamedhamdi/your-repo",
    features: [
      "Key highlight point #1",
      "Key highlight point #2",
      "Key highlight point #3"
    ]
  }

Step 3: Save the file!
  The project will immediately show up on your website, appear in the filter 
  tabs, and have a fully functional interactive case-study modal dialog.

================================================================================
7. COMMANDS & LOCAL DEVELOPMENT
================================================================================

Make sure you have Node.js (>= 22) installed.

To install dependencies:
  npm install

To start the local development server (with instant hot reload):
  npm run dev
  -> Opens at http://localhost:4321

To build the static site for production:
  npm run build
  -> Generates fully optimized static HTML/CSS/JS in ./dist/

To test and preview the production build locally:
  npm run preview

================================================================================
8. PRODUCTION BUILD & DEPLOYMENT OPTIONS
================================================================================

Because Astro builds standard, pure static assets into the `dist/` directory, 
this project can be hosted anywhere for free with extreme speed and reliability:

1. Vercel:
   - Push your repo to GitHub.
   - Go to vercel.com -> "Add New Project" -> Select your repository.
   - Framework preset: Astro (detected automatically).
   - Click "Deploy".

2. Netlify:
   - Connect your GitHub repository on netlify.com.
   - Build Command:    `npm run build`
   - Publish Directory: `dist`
   - Click "Deploy Site".

3. GitHub Pages:
   - Set up an automated GitHub Actions workflow to run `npm run build` 
     and deploy the `dist/` folder to GitHub Pages.

================================================================================
9. AUTHOR & CONTACT INFORMATION
================================================================================

Mohamed Hamdi
- Title:       Software Engineering Student & Freelance Graphic Designer
- University:  ESPRIT School of Engineering (Ariana, Tunisia)
- Email:       mh8180038@gmail.com
- Phone:       +216 50 495 916
- LinkedIn:    https://www.linkedin.com/in/mohamed-hamdi-204956294/
- Behance:     https://www.behance.net/
- GitHub:      https://github.com/mohamedhamdi

================================================================================
Generated for Mohamed Hamdi's Portfolio Repository.
================================================================================
