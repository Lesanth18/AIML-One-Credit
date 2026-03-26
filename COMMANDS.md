# ⚡ Quick Command Reference

## 🚀 Essential Commands

```bash
# Install dependencies (run once)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check code quality
npm run lint

# Fix linting errors automatically
npm run lint -- --fix
```

---

## 🔧 Development

```bash
# Start dev server with custom port (if 3000 is busy)
npm run dev -- --port 3001

# Start with no auto-open
npm run dev -- --no-open

# Clear Vite cache and rebuild
rm -rf .vite && npm run dev
```

---

## 📦 Dependency Management

```bash
# Check outdated packages
npm outdated

# Update all packages to latest
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix

# List installed packages
npm list

# List only top-level packages
npm list --depth=0
```

---

## 🏗️ Build & Deployment

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview

# Build with source maps (for debugging)
# Edit vite.config.js: sourcemap: true

# Clean build (remove dist folder)
rm -rf dist && npm run build
```

---

## 🌐 Deployment Commands

### Vercel
```bash
npm install -g vercel
vercel login
vercel
```

### Netlify
```bash
npm run build
# Upload 'dist' folder via drag-and-drop on netlify.com
```

### Self-Hosted
```bash
npm run build
# Upload contents of 'dist' folder to your server via FTP/SSH
```

---

## 🧹 Cleanup & Maintenance

```bash
# Remove node_modules (free up space)
rm -rf node_modules

# Clear npm cache
npm cache clean --force

# Reinstall from scratch
rm -rf node_modules package-lock.json && npm install

# Check disk space
du -sh node_modules

# List what npm audit found
npm audit --json
```

---

## 📂 File Structure Navigation

```bash
# List project structure
tree (or use file explorer)

# Quick look at main config files
cat package.json
cat vite.config.js
cat tailwind.config.js

# View environment variables
cat .env.example
cp .env.example .env.local  # Create local .env
```

---

## 🐛 Debugging

```bash
# Check which Node version you're using
node --version
npm --version

# Use specific Node version (with nvm)
nvm use 18.17.0

# Run with verbose output
npm install --verbose

# Debug ESLint issues
npm run lint -- --debug

# Clear everything and start fresh
npm run clean:all  # (if configured)
rm -rf node_modules dist .vite .env && npm install
```

---

## 📝 Environment Setup

```bash
# Copy example env file
cp .env.example .env.local

# Edit for your settings
nano .env.local  # or use VS Code

# Verify env vars are loaded
echo $VITE_API_URL  # (Linux/Mac)
echo %VITE_API_URL%  # (Windows)
```

---

## 🔗 git Commands (if using version control)

```bash
# Initialize git repo
git init

# Check git status
git status

# Stage files
git add .

# Commit changes
git commit -m "Description of changes"

# View commit history
git log --oneline

# Push to GitHub
git push origin main
```

---

## 🧪 Testing & Validation

```bash
# Check for broken imports
npm run lint

# Build to catch errors
npm run build

# Test on different ports
npm run dev -- --port 5173

# Check bundle size
# After npm run build, check dist/ folder
du -sh dist/

# View build analysis (if configured)
npm run build -- --mode analyze
```

---

## 💾 Local Development Tips

```bash
# Make sure you're in the right directory
pwd  # (print working directory)
cd /path/to/your/project

# Keep dev server running in background (terminal 1)
npm run dev

# Open another terminal (terminal 2) for other commands
npm run lint
npm audit

# Control+C to stop dev server
# Create .env.local for local settings
# Edit files - changes auto-refresh in browser
```

---

## 🚨 Common Issues & Quick Fixes

**Port 3000 already in use:**
```bash
npm run dev -- --port 3001
```

**Modules not found:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Tailwind styles not applying:**
```bash
# Restart dev server
# Check tailwind.config.js template glob paths
npm run dev
```

**Build errors:**
```bash
npm run build 2>&1  # See full error output
npm run lint        # Check for lint errors
```

**Cache issues:**
```bash
rm -rf .vite
npm run dev
```

---

## 📊 Performance Monitoring

```bash
# Check bundle size
npm run build
ls -lh dist/

# View chunk breakdown
npm run build -- --stats
# Analyze dist/stats.json

# Check for unused packages
npx depcheck
```

---

## 🔐 Security

```bash
# Check for vulnerabilities
npm audit

# Update vulnerable packages
npm audit fix

# Check specific package version
npm ls react
npm ls vite

# List licenses of all packages
npm list --all | grep -i license
```

---

## 📱 Mobile Testing

```bash
# Get your local IP address
ipconfig getifaddr en0  # (Mac)
hostname -I            # (Linux)

# Start dev server on 0.0.0.0 to accept external connections
npm run dev -- --host

# Test on mobile device
# Visit http://<your-ip>:3000 on phone browser
```

---

## 🚀 Production Checklist

```bash
# 1. Check all linting
npm run lint

# 2. Verify build succeeds
npm run build

# 3. Check build size
ls -lh dist/

# 4. Verify no console errors
npm run preview

# 5. Check mobile responsiveness
npm run dev  # Test on mobile

# 6. Validate env vars are correct
cat .env.local

# 7. Ready to deploy!
# Follow deployment guide in README.md
```

---

**Bookmark this file for quick reference!** 📌

For more details, see:
- **README.md** - Full documentation
- **SETUP_GUIDE.md** - Step-by-step setup
- **PROJECT_CHECKLIST.md** - Build verification
