#!/bin/bash
# Safe Git Push Script - Prevents losing changes

echo "🔒 Safe Git Push Script"
echo "======================="
echo ""

# Check if we're in a git repo
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository!"
    exit 1
fi

# Show current status
echo "📊 Current Status:"
git status --short
echo ""

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo "�� You have uncommitted changes."
    read -p "Do you want to commit them? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        # Add all changes
        echo "➕ Adding all changes..."
        git add -A
        
        # Ask for commit message
        echo "💬 Enter commit message:"
        read commit_message
        
        if [ -z "$commit_message" ]; then
            commit_message="Update: $(date '+%Y-%m-%d %H:%M:%S')"
        fi
        
        # Commit
        echo "✅ Committing: $commit_message"
        git commit -m "$commit_message"
    else
        echo "⚠️  Stashing changes instead..."
        git stash save "Auto-stash before push $(date '+%Y-%m-%d %H:%M:%S')"
    fi
fi

# Pull latest changes
echo ""
echo "⬇️  Pulling latest changes..."
git pull --rebase origin main

if [ $? -ne 0 ]; then
    echo ""
    echo "⚠️  CONFLICT DETECTED!"
    echo "Run: git rebase --abort (to cancel)"
    echo "Or fix conflicts and: git rebase --continue"
    exit 1
fi

# Push changes
echo ""
echo "⬆️  Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! Changes are on GitHub."
else
    echo ""
    echo "❌ Push failed!"
    exit 1
fi
