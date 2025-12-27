# Git Workflow Guide - Understanding Commit vs Push

## The Git Workflow

### 1. **Make Changes** (Edit files)
- You edit files in your code editor
- Changes exist only on your computer

### 2. **Stage Changes** (`git add`)
```bash
git add .              # Stage all changes
git add filename.tsx   # Stage specific file
```
- Tells git which files you want to save

### 3. **Commit Changes** (`git commit`)
```bash
git commit -m "Description of what you changed"
```
- **Saves changes LOCALLY** (on your computer only)
- Creates a snapshot/checkpoint
- Changes are NOT on GitHub yet

### 4. **Push to GitHub** (`git push`)
```bash
git push origin main
```
- **Uploads your commits to GitHub**
- Makes your local changes available in the cloud
- Now others can see your changes

## Analogy
- **Commit** = Saving a document on your computer
- **Push** = Uploading that document to Google Drive

---

## Your Current Situation

You have:
- ✅ **Committed** your changes locally (they're saved on your computer)
- ❌ **Not pushed** yet (they're NOT on GitHub)

The error happened because:
- GitHub has some changes you don't have locally
- You need to pull those changes first, then push

---

## Commands to View/Copy Your SSH Key

### View Your SSH Public Keys:

```bash
# View default key (most likely the one connected to GitHub)
cat ~/.ssh/id_ed25519.pub

# View mfisher-stack key
cat ~/.ssh/id_ed25519_mfisher_stack.pub

# View RSA key (older)
cat ~/.ssh/id_rsa.pub
```

### Copy SSH Key to Clipboard:

```bash
# Copy default key
pbcopy < ~/.ssh/id_ed25519.pub

# Copy mfisher-stack key
pbcopy < ~/.ssh/id_ed25519_mfisher_stack.pub

# Copy RSA key
pbcopy < ~/.ssh/id_rsa.pub
```

### View Key Fingerprint (to match with GitHub):

```bash
# Get fingerprint for each key
ssh-keygen -lf ~/.ssh/id_ed25519.pub
ssh-keygen -lf ~/.ssh/id_ed25519_mfisher_stack.pub
ssh-keygen -lf ~/.ssh/id_rsa.pub
```

### Check Which Key GitHub Uses:

```bash
# This shows which key is being used
ssh -vT git@github.com 2>&1 | grep -i "identity\|offering"
```

---

## Fixing the Push Error

You got this error:
```
! [rejected] main -> main (fetch first)
```

This means GitHub has changes you don't have. Here's how to fix it:

### Option 1: Pull and Merge (Recommended)
```bash
cd /Users/maxfisher/mbrace-insight
git pull origin main
# This will merge remote changes with your local changes
# If there are conflicts, git will tell you
git push origin main
```

### Option 2: Pull with Rebase (Cleaner history)
```bash
cd /Users/maxfisher/mbrace-insight
git pull --rebase origin main
# This puts your commits on top of remote commits
git push origin main
```

### Option 3: Force Push (⚠️ Only if you're sure)
```bash
# WARNING: This overwrites GitHub with your local version
# Only use if you're 100% sure you want to discard remote changes
git push --force origin main
```

---

## Complete Workflow for Future Changes

### When you make changes and want to save to GitHub:

```bash
# 1. Navigate to your project
cd /Users/maxfisher/mbrace-insight

# 2. Check what changed
git status

# 3. Stage all changes
git add .

# 4. Commit with a message
git commit -m "Description of what you changed"

# 5. Push to GitHub
git push origin main
```

### Quick one-liner (if you're sure about all changes):
```bash
git add . && git commit -m "Your message" && git push origin main
```

---

## Viewing Your SSH Keys on GitHub

1. Go to: https://github.com/settings/keys
2. You'll see all your SSH keys listed
3. Compare the fingerprints with your local keys:
   ```bash
   ssh-keygen -lf ~/.ssh/id_ed25519.pub
   ```

---

## Saving SSH Key for Future Use

Once you identify which key GitHub uses, you can:

1. **View it anytime:**
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

2. **Copy it to clipboard:**
   ```bash
   pbcopy < ~/.ssh/id_ed25519.pub
   ```

3. **Save the public key to a file:**
   ```bash
   cp ~/.ssh/id_ed25519.pub ~/my_github_ssh_key.txt
   ```

The key is already saved on your computer at `~/.ssh/id_ed25519.pub` - you can view it anytime!

---

## Summary

- **Commit** = Save locally (on your computer)
- **Push** = Upload to GitHub (cloud)
- **Pull** = Download from GitHub (cloud to computer)

Your changes are committed locally. You just need to pull remote changes, then push!

