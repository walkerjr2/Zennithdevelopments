# Git Workflow Guide - Prevent Changes from Being Reverted

## The Problem
Your changes keep getting reverted when you pull/push. This happens because:
1. Multiple people/devices might be editing the same files
2. Git pull can overwrite your local changes
3. Merge conflicts aren't being resolved properly

## The Solution - ALWAYS Follow This Workflow

### Every Time Before You Start Working:

```bash
# 1. Check what branch you're on
git status

# 2. Stash any uncommitted changes (saves them temporarily)
git stash

# 3. Pull the latest changes
git pull origin main

# 4. Apply your stashed changes back
git stash pop
```

### Every Time You Make Changes:

```bash
# 1. Check what files changed
git status

# 2. Look at the actual changes
git diff

# 3. Add your changes
git add -A

# 4. Commit with a descriptive message
git commit -m "Your descriptive message here"

# 5. Push immediately (don't wait)
git push origin main
```

### If You See Conflicts:

```bash
# Git will tell you which files have conflicts
# They'll look like this in the file:
<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> branch-name

# To keep YOUR changes:
git checkout --ours path/to/file
git add path/to/file

# To keep THEIR changes:
git checkout --theirs path/to/file
git add path/to/file

# Then commit the resolution:
git commit -m "Resolve merge conflict"
git push origin main
```

### Emergency: Restore Your Lost Changes

If changes got reverted, check these:

```bash
# 1. Check if you have uncommitted changes
git status

# 2. Check recent commits
git log --oneline -10

# 3. See what changed in a specific commit
git show COMMIT_HASH

# 4. Restore from a backup file
ls components/*.backup
ls components/*.before_update

# 5. Check git reflog (shows ALL your actions)
git reflog

# 6. Restore to a previous state
git reset --hard COMMIT_HASH
```

### Best Practices to Prevent This:

1. **Commit Often**: Every feature/fix should be its own commit
2. **Push Immediately**: Don't wait hours/days to push
3. **Pull Before Working**: Always pull before starting work
4. **One Device at a Time**: Don't edit on multiple devices simultaneously
5. **Use Branches**: Create feature branches for big changes
6. **Backup Important Files**: Keep manual backups of critical files

### Quick Commands Reference:

```bash
# Save current work
git stash save "description of changes"

# See all stashes
git stash list

# Apply most recent stash
git stash pop

# Apply specific stash
git stash apply stash@{0}

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# See what would be pushed
git diff origin/main

# Force push (DANGER - only if you're sure)
git push --force origin main
```

### Setup Git to Prefer Your Changes:

```bash
# Configure Git to always prefer your local changes during merge
git config pull.rebase false
git config merge.conflictstyle diff3

# Set up a merge strategy
git config merge.ours.driver true
```

## Your Current Setup Protection

I've added `.gitattributes` which tells Git:
- For component files: prefer local changes during conflicts
- For documentation: merge both versions

This should reduce conflicts going forward.
