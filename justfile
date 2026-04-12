# Justfile for website

# Usage: just <recipe>
# Run `just` alone to list all recipes

# ----------------------------------------------------------------------
# Local Development
# ----------------------------------------------------------------------

# Install dependencies
setup:
    npm ci

# Start development server with hot reload
dev:
    npm run dev

# Run the linter
lint:
    npm run lint

# Preview the production build locally
preview:
    npm run preview

# ----------------------------------------------------------------------
# Build & Deployment
# ----------------------------------------------------------------------

# Build for production (outputs to docs/)
build:
    ./scripts/build.sh

# Build and deploy to origin/main
deploy:
    ./scripts/build.sh && git add -A && git commit -m "Release: $(git rev-parse --short HEAD)" && git push