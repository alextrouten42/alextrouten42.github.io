# GitHub Pages Deployment Guide

This portfolio is configured for static export and GitHub Pages deployment.

## Project Structure

```
├── app/
│   ├── globals.css        # Theme and global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main portfolio page
├── components/
│   └── portfolio/         # All portfolio sections
│       ├── navigation.tsx
│       ├── hero-section.tsx
│       ├── about-section.tsx
│       ├── certifications-section.tsx
│       ├── experience-section.tsx
│       ├── goals-section.tsx
│       ├── projects-section.tsx
│       ├── references-section.tsx
│       ├── mission-section.tsx
│       └── footer.tsx
├── public/
│   └── resume.pdf         # Add your resume here
└── next.config.mjs        # Configured for static export
```

## Customization Checklist

Before deploying, update the following placeholders:

### Personal Information
- [ ] Update "Your Name" in hero-section.tsx and footer.tsx
- [ ] Update email: `your.email@example.com`
- [ ] Update LinkedIn URL: `linkedin.com/in/yourusername`
- [ ] Update GitHub URL: `github.com/yourusername`
- [ ] Update location in about-section.tsx

### Content
- [ ] Edit the bio in about-section.tsx
- [ ] Update certifications with your actual credentials and Credly URLs
- [ ] Update experience section with your actual work history
- [ ] Update projects with your real GitHub repositories
- [ ] Edit goals to match your current focus
- [ ] Update references (or leave as "available upon request")
- [ ] Customize the mission/values text

### Files
- [ ] Add your resume as `public/resume.pdf`
- [ ] Update metadata in app/layout.tsx (title, description)

## Deployment to GitHub Pages

### Option 1: GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. In your GitHub repository:
   - Go to Settings > Pages
   - Set Source to "GitHub Actions"

3. Push your code to the `main` branch

### Option 2: Manual Deployment

1. Build the static site:
   ```bash
   npm run build
   ```

2. The static files will be in the `out/` directory

3. Push the contents of `out/` to a `gh-pages` branch:
   ```bash
   npx gh-pages -d out
   ```

4. In your GitHub repository:
   - Go to Settings > Pages
   - Set Source to "Deploy from a branch"
   - Select `gh-pages` branch

## Custom Domain (Optional)

1. Add your custom domain in GitHub Pages settings
2. Create a `public/CNAME` file with your domain:
   ```
   yourdomain.com
   ```

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve out
```

## Notes

- All images are configured as unoptimized for static export compatibility
- The site uses smooth scrolling between sections
- Navigation is responsive with a mobile menu
- Dark theme with cyan/teal accent colors
