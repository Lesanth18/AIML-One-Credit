# 🎯 Quick Start (5 Minutes)

## One-Time Setup

```bash
# 1. Open terminal in project folder
cd /path/to/your/project

# 2. Install everything (takes ~2 minutes)
npm install

# 3. Start development server
npm run dev

# Browser opens automatically at http://localhost:3000 ✅
```

**That's it!** Your portfolio is now running locally.

---

## Every Day After (To Continue Development)

```bash
# Just run this one command:
npm run dev

# Browser opens at http://localhost:3000
# Your changes auto-refresh
# Edit files in src/ → see changes instantly
```

---

## Before Deploying to Production

```bash
# Create optimized build for hosting
npm run build

# Check the result locally
npm run preview

# Upload the 'dist' folder to your hosting service
# See README.md for Vercel/Netlify/GitHub Pages guide
```

---

## If Something Breaks

```bash
# Restart development server
# Press Ctrl+C, then run:
npm run dev

# If that doesn't work:
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## File Structure Cheat Sheet

```
📦 Project Root
 ├── 📁 src/
 │   ├── 🎨 components/     ← Edit these files to change portfolio
 │   ├── 📄 App.jsx          ← Main component
 │   ├── 💾 index.css        ← Global styles
 │   └── 🚀 main.jsx         ← App entry point
 ├── 📄 index.html           ← Don't edit
 ├── 📦 package.json         ← Dependencies list
 ├── 🎨 tailwind.config.js   ← Tailwind settings
 ├── ⚙️ vite.config.js       ← Vite settings
 ├── 📖 README.md            ← Full documentation
 └── 📋 SETUP_GUIDE.md       ← Detailed setup
```

---

## Edit What You Want

### Change Text/Content
- Edit files in `src/components/`
- Save → Changes appear instantly in browser

### Change Colors/Styling
- Edit `tailwind.config.js` for theme
- Edit `src/index.css` for global styles
- Edit `src/components/[Component].jsx` for component styles

### Add New Sections
- Create new file in `src/components/NewSection.jsx`
- Import in `src/App.jsx`
- Add to JSX in return statement

---

## Useful Keyboard Shortcuts

```
Ctrl/Cmd + S       → Save changes (auto-refresh in browser)
Ctrl/Cmd + Shift + P → VS Code command palette
Ctrl/Cmd + K Ctrl/Cmd + W → Close file
Ctrl/Cmd + /       → Comment/uncomment code
```

---

## When You're Happy, Deploy

```bash
# Build final version
npm run build

# Choose where to host:

# Option 1: Vercel (easiest, free)
npm install -g vercel
vercel

# Option 2: Netlify (drag and drop 'dist' folder)
# Go to netlify.com → drag 'dist' folder

# Option 3: GitHub Pages (if using git/GitHub)
# Push 'dist' folder to gh-pages branch

# Your portfolio is now live! 🎉
```

---

## That's All You Need to Know!

### More Help?
- **Full documentation**: See `README.md`
- **Setup questions**: See `SETUP_GUIDE.md`
- **Terminal commands**: See `COMMANDS.md`
- **Project checklist**: See `PROJECT_CHECKLIST.md`

### Contact
- Email: lesanthnagarajan34@gmail.com
- LinkedIn: https://www.linkedin.com/in/lesanth-n-601907321/
- GitHub: https://github.com/Lesanth18

---

**Happy coding! 🚀**
