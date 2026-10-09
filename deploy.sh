#!/usr/bin/env bash
# ==============================================================================
# 🚀 1-CLICK GITHUB UPLOAD & DEPLOYMENT SCRIPT
# For Rahul's Girlfriend Birthday Website
# ==============================================================================

set -e

cd "$(dirname "$0")"

echo "=========================================================="
echo "💖 Birthday Website - GitHub Upload & Deployment"
echo "=========================================================="
echo ""

# 1. Check Git installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install git first."
    exit 1
fi

# 2. Check git user configured
GIT_USER=$(git config user.name || true)
if [ -z "$GIT_USER" ]; then
    read -p "Enter your name for Git commits [Rahul]: " INPUT_USER
    INPUT_USER=${INPUT_USER:-Rahul}
    git config --global user.name "$INPUT_USER"
fi

GIT_EMAIL=$(git config user.email || true)
if [ -z "$GIT_EMAIL" ]; then
    read -p "Enter your email for Git: " INPUT_EMAIL
    git config --global user.email "$INPUT_EMAIL"
fi

# 3. Custom domain configuration
if [ -f "CNAME" ] && [ -s "CNAME" ]; then
    CURRENT_DOMAIN=$(cat CNAME)
    echo "Current custom domain in CNAME: $CURRENT_DOMAIN"
    read -p "Do you want to change it? (y/N): " CHANGE_DOMAIN
    if [[ "$CHANGE_DOMAIN" =~ ^[Yy]$ ]]; then
        read -p "Enter your custom domain (e.g. birthday.mylove.com): " NEW_DOMAIN
        if [ -n "$NEW_DOMAIN" ]; then
            echo "$NEW_DOMAIN" > CNAME
            echo "✅ CNAME updated to $NEW_DOMAIN"
        fi
    fi
else
    read -p "Enter your custom domain (or leave blank to use default username.github.io/repo): " CUSTOM_DOMAIN
    if [ -n "$CUSTOM_DOMAIN" ]; then
        echo "$CUSTOM_DOMAIN" > CNAME
        echo "✅ CNAME saved: $CUSTOM_DOMAIN"
    fi
fi

# 4. Git Initialization & Commit
if [ ! -d ".git" ]; then
    echo "Initializing Git repository..."
    git init -b main
else
    # Ensure on main branch
    git branch -M main 2>/dev/null || true
fi

git add -A
git commit -m "💖 Happy 17th Birthday My Love - Full Website Release" 2>/dev/null || echo "Nothing new to commit."

# 5. Remote Repository Check
REMOTE_URL=$(git remote get-url origin 2>/dev/null || true)

if [ -z "$REMOTE_URL" ]; then
    echo ""
    echo "🔗 Please enter your GitHub Repository URL."
    echo "   Example: https://github.com/your-username/birthday.git"
    echo "   Or SSH:  git@github.com:your-username/birthday.git"
    echo ""
    read -p "GitHub Repo URL: " REPO_INPUT

    if [ -z "$REPO_INPUT" ]; then
        echo "❌ No repository URL provided. You can run this script again anytime!"
        exit 1
    fi

    git remote add origin "$REPO_INPUT"
else
    echo "Using existing remote origin: $REMOTE_URL"
fi

# 6. Push to GitHub
echo ""
echo "🚀 Pushing code and all photos/videos to GitHub (main branch)..."
git push -u origin main

echo ""
echo "=========================================================="
echo "🎉 SUCCESS! Uploaded to your GitHub repository!"
echo ""
echo "👉 To enable GitHub Pages:"
echo "   1. Open your repository on GitHub.com"
echo "   2. Click 'Settings' -> 'Pages'"
echo "   3. Under 'Build and deployment', set Source to 'Deploy from a branch'"
echo "   4. Branch: 'main', Folder: '/ (root)' -> Click Save"
echo "   5. Your website will be live in 1-2 minutes!"
echo "=========================================================="
