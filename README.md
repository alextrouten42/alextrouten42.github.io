# alextrouten42.github.io
Portfolio Overview

This project is a personal cybersecurity portfolio website built to showcase technical skills, hands-on projects, certifications, and professional experience. The site is designed with a focus on clean UI, performance, and real-world deployment practices.

It is built using modern web technologies and deployed as a static site using GitHub Pages.

Tech Stack
Next.js (Static Export)
React.js
TypeScript
Tailwind CSS
Git & GitHub
Features
Hero section with personal introduction
About section with contact information and resume access
Certifications section with Credly badge links
Experience section highlighting technical roles
Projects section linking directly to GitHub repositories
Goals section outlining current technical focus
Mission & values section
Fully responsive design

Project Structure
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── portfolio/
├── public/
│   └── resume.pdf
├── next.config.mjs
├── package.json
└── tsconfig.json
Deployment

This project uses static site generation and is deployed via GitHub Pages.

Build the project
npm install
npm run build

Deploy to GitHub Pages
npx gh-pages -d out --dotfiles

Key Implementation Details
Configured Next.js for static export using output: 'export'
Resolved asset loading issues for GitHub Pages using assetPrefix
Disabled Jekyll processing with .nojekyll to allow _next assets
Managed differences between local development and production deployment

Skills Demonstrated
Frontend development with React and Next.js
Static site generation and deployment workflows
Git version control and branch management
Debugging production issues in hosted environments
Understanding of web asset loading and caching behavior

Security Considerations
Ensured safe external linking using rel="noopener noreferrer"
Avoided exposing sensitive data in public repositories
Structured public assets appropriately for static hosting
Maintained awareness of client-side data exposure risks

Future Improvements
Add analytics for user engagement tracking
Implement contact form functionality
Enhance UI with animations and transitions
Add blog or write-ups for cybersecurity topics

Live Site

https://alextrouten42.github.io
