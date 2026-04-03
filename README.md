# Alexander Trouten – Cybersecurity Portfolio

## Overview
This project is a personal cybersecurity portfolio website built to showcase technical skills, hands-on projects, certifications, and professional experience. The site is designed with a focus on performance, usability, and real-world deployment practices.

The application is built using modern web technologies and deployed as a static site via GitHub Pages.

---

## Tech Stack
- Next.js (Static Export)
- React.js
- TypeScript
- Tailwind CSS
- Git & GitHub

---

## Features
- Hero section with professional introduction  
- About section with contact information and resume access  
- Certifications section with Credly badge links  
- Experience section highlighting technical roles  
- Projects section linking directly to GitHub repositories  
- Goals section outlining current technical focus  
- Mission & values section  
- Responsive design across devices  

---

## Project Structure
├── app/
│ ├── globals.css
│ ├── layout.tsx
│ └── page.tsx
├── components/
│ └── portfolio/
├── public/
│ └── resume.pdf
├── next.config.mjs
├── package.json
└── tsconfig.json


---

## Deployment

### Build the project
npm install
npm run build


### Deploy to GitHub Pages
npx gh-pages -d out --dotfiles


---

## Key Implementation Details
- Configured Next.js for static export using `output: 'export'`
- Resolved asset loading issues for GitHub Pages deployment
- Disabled Jekyll processing using `.nojekyll` to support `_next` assets
- Managed differences between local development and production environments

---

## Skills Demonstrated
- Frontend development with React and Next.js  
- Static site generation and deployment workflows  
- Git version control and branch management  
- Debugging production issues in hosted environments  
- Understanding of web asset loading and caching behavior  

---

## Security Considerations
- Implemented safe external linking using `rel="noopener noreferrer"`  
- Avoided exposure of sensitive information in public repositories  
- Structured static assets appropriately for public hosting  
- Considered client-side security and data exposure risks  

---

## Future Improvements
- Add analytics for user engagement tracking  
- Implement contact form functionality  
- Enhance UI with animations and transitions  
- Add cybersecurity blog or technical write-ups  

---

## Live Site
https://alextrouten42.github.io

---

## Contact
- Email: your.email@example.com  
- LinkedIn: https://linkedin.com/in/yourusername  
- GitHub: https://github.com/alextrouten42
