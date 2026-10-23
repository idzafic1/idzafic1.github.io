# Ismail Džafić — Personal Portfolio

A clean, fast, and accessible portfolio website for Ismail Džafić, BSc in Computer Science graduate and first-year master's student at the University of Sarajevo focusing on QA, automated API testing, and software security.

Built with **Astro (Static Output)**, typed **Content Collections**, and pure **CSS** with responsive light/dark mode.

---

## 🚀 Quick Start (Local Development)

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open `http://localhost:4321` in your browser.

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build locally
```bash
npm run preview
```

---

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages deployment workflow
├── public/
│   ├── cv/
│   │   ├── .gitkeep              # Place Ismail_Dzafic_CV.pdf here
│   ├── favicon.svg               # SVG favicon with initials "ID"
│   └── robots.txt                # Search engine crawlers config
├── src/
│   ├── components/
│   │   ├── Header.astro          # Navigation bar with theme toggle & mobile menu
│   │   ├── Footer.astro          # Site footer with links
│   │   ├── ProjectCard.astro     # Project card component
│   │   └── WriteupCard.astro     # Security writeup card component
│   ├── content/
│   │   ├── projects/             # Markdown project files (.md)
│   │   │   └── placeholder-project.md
│   │   └── writeups/             # Markdown security writeups (.md)
│   │       └── placeholder-writeup.md
│   ├── layouts/
│   │   └── BaseLayout.astro      # Master layout (SEO meta, dark mode script)
│   ├── pages/
│   │   ├── index.astro           # Home page (Hero, Featured, Skills, Education)
│   │   ├── about.astro           # About & Contact page (Bio, Languages, Links)
│   │   ├── 404.astro             # Custom 404 page
│   │   ├── projects/
│   │   │   ├── index.astro       # Projects catalog
│   │   │   └── [...slug].astro   # Individual project detail page
│   │   └── writeups/
│   │       ├── index.astro       # Writeups grouped by platform
│   │       └── [...slug].astro   # Individual writeup detail page
│   ├── styles/
│   │   └── global.css            # Pure CSS styles (Tokens, typography, components)
│   └── content.config.ts         # Zod schemas for projects and writeups collections
├── astro.config.mjs              # Astro configuration (site: 'https://idzafic1.github.io')
└── package.json
```

---

## 📝 How to Add a Project

To add a new project, create a new Markdown file inside `src/content/projects/` (e.g. `src/content/projects/my-api-test-suite.md`).

### Project Frontmatter Template

```markdown
---
title: "REST API Automated Test Suite"
summary: "Automated regression and performance test suite for a microservices backend, validating contract schemas, authentication flows, and load thresholds."
role: "QA Engineer / Lead Tester"
tech: ["Postman", "Newman", "Node.js", "JMeter", "Git"]
repo: "https://github.com/idzafic1/project-repo"
demo: "https://idzafic1.github.io"
report: "https://idzafic1.github.io/reports/test-run.html"
order: 1
featured: true
---

Your project writeup in Markdown goes here. You can use standard Markdown headings, lists, code blocks, and blockquotes.

## Overview
Describe the project context and objectives.

## Testing Strategy
Explain your methodology, test cases, and execution setup.

## Results & Benchmarks
Summarize defect discovery, test coverage, and performance benchmarks.
```

### Field Definitions:
- `title` (*string, required*): The display name of the project.
- `summary` (*string, required*): 1-2 sentence overview of the project.
- `role` (*string, required*): Your role in the project (e.g., "QA Engineer", "Security Researcher").
- `tech` (*string array, required*): Technologies, tools, or frameworks used.
- `repo` (*URL, optional*): Link to the GitHub repository.
- `demo` (*URL, optional*): Link to live demo or interactive instance.
- `report` (*URL, optional*): Link to an automated test report or audit report.
- `order` (*number, required*): Numeric sort order (lowest number appears first).
- `featured` (*boolean, required*): Set `true` to display on the home page (max 4).

---

## 🔒 How to Add a Security Writeup

To add a new CTF or security challenge writeup, create a new Markdown file inside `src/content/writeups/` (e.g. `src/content/writeups/bandit-level-0.md`).

> **Security & Ethics Guideline:** Writeups should document techniques, tooling, and lessons learned. Actual passwords, credentials, and challenge flags must remain omitted.

### Writeup Frontmatter Template

```markdown
---
title: "Bandit Levels 0 to 5: SSH & Linux Fundamentals"
platform: "OverTheWire Bandit"
level: "Levels 0-5"
date: 2024-10-01
tags: ["Linux", "SSH", "Bash", "File Permissions", "Security"]
summary: "Introduction to command-line security basics, navigating hidden directories, inspecting file permissions, and decoding obfuscated data."
---

## Objective
Outline the objective of the challenge.

## Reconnaissance & Tools
Detail the commands and methodology used.

## Key Learnings
Highlight concepts mastered and defensive considerations.
```

### Field Definitions:
- `title` (*string, required*): Title of the writeup.
- `platform` (*string, required*): Target platform (e.g., "OverTheWire Bandit", "Hack The Box", "TryHackMe").
- `level` (*string, required*): Difficulty level or room name (e.g., "Levels 0-5", "Easy", "Network Recon").
- `date` (*date, required*): Date published (format: `YYYY-MM-DD`).
- `tags` (*string array, required*): Topics covered.
- `summary` (*string, required*): Short summary of skills and techniques demonstrated.

---

## 📄 How to Replace the CV PDF

1. Export your latest CV / Resume as a PDF.
2. Name the file exactly:
   ```
   Ismail_Dzafic_CV.pdf
   ```
3. Place it inside the `public/cv/` directory:
   ```
   public/cv/Ismail_Dzafic_CV.pdf
   ```
4. All "Download CV" buttons across the site are pre-configured to link directly to `/cv/Ismail_Dzafic_CV.pdf`. If the file is not yet present, the site builds with no errors.

---

## 🌐 How to Deploy to GitHub Pages

The repository includes a ready-to-run GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

### Step 1: Configure GitHub Repository Settings
1. Go to your repository on GitHub: `https://github.com/idzafic1/idzafic1.github.io`
2. Click **Settings** in the top navigation tab.
3. In the left sidebar under *Code and automation*, click **Pages**.
4. Under **Build and deployment** -> **Source**, select:
   ```
   GitHub Actions
   ```

### Step 2: Initialize Git and Push to GitHub
Run these commands in this directory:

```bash
git init
git add .
git commit -m "feat: initial release of Ismail Dzafic portfolio"
git branch -M main
git remote add origin https://github.com/idzafic1/idzafic1.github.io.git
git push -u origin main
```

Once pushed, GitHub Actions will automatically trigger the build and deploy your site to:
**https://idzafic1.github.io**

---

## 📋 Content Configuration

Content settings and links can be configured in `src/config/site.ts`:

1. **CV PDF**: Place your CV at `public/cv/Ismail_Dzafic_CV.pdf`.
2. **Projects**: Real projects are defined in `src/content/projects/`.
3. **Writeups**: Learning notes and writeups are defined in `src/content/writeups/`.
4. **Site metadata**: Social links, headline, and bio in `src/config/site.ts`.
