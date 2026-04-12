# Johannes Copeland - Portfolio Website

Welcome to the repository for my personal portfolio website! This site showcases my work as an AI Engineer, my journey in artificial intelligence, and my content creation efforts on YouTube.

[//]: # (**Live Site:** [johannescopeland.com]&#40;https://johannescopeland.com&#41; )

## 🌟 About This Project

This portfolio is a single-page application built with modern web technologies to provide a clean, fast, and engaging user experience. It serves as a central hub for my professional background, projects, skills, and a way to connect with me.

## ✨ Features

* **Dynamic Sections:**
    * **Home:** A welcoming introduction.
    * **About Me:** Detailed bio, skills, and interests.
    * **Projects:** Showcase of my key software and AI projects.
    * **YouTube:** Highlights from my YouTube channel focused on AI and productivity.
    * **Contact:** A form to get in touch and links to my social profiles.
* **Dark Mode:** Toggle between light and dark themes for comfortable viewing.
* **Responsive Design:** Optimized for various devices and screen sizes.
* **Interactive UI:** Built with React for a smooth and interactive experience.

## 🛠️ Tech Stack

* **Frontend:** React, TypeScript
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **Linting:** ESLint, TypeScript-ESLint

## 🚀 Getting Started

This project was bootstrapped with a Vite template for React and TypeScript.

### Prerequisites

* Node.js (v18.x or higher recommended for Vite)
* npm (v8.x or higher recommended)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/AIByJohannes/website.git](https://github.com/AIByJohannes/website.git) # Replace with your actual repo URL
    cd website
    ```

2.  **Install dependencies:**
    ```bash
    just setup
    ```

## ⚡ Just Workflow (Recommended)

This project uses [just](https://github.com/casey/just) as the task runner. Install `just` first, then run:

```bash
# Install dependencies
just setup

# Start development server
just dev

# Run linter
just lint

# Build for production (outputs to docs/ for GitHub Pages)
just build

# Preview production build locally
just preview

# Build and deploy to origin/main
just deploy
```

## 📦 NPM Scripts (Alternative)

If you prefer not to use `just`, you can run the underlying commands directly:

* **`npm run dev`** — Development server with hot reload
* **`npm run build`** — Production build to `docs/`
* **`npm run lint`** — Lint project files
* **`npm run preview`** — Preview production build locally

## 🚀 Deployment (GitHub Pages)

This repo publishes to the `docs/` folder (see `outDir` in `vite.config.ts`).

- Local build: `just build` or `./scripts/build.sh`
- Commit and push the updated `docs/` folder
- In GitHub: Settings → Pages → Deploy from a branch → select your default branch and `/docs`
