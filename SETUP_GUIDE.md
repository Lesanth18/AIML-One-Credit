# 🚀 Setup Guide - Lesanth N Portfolio (React 19 + Vite 8 + Tailwind CSS V4)

## ✅ Prerequisites

Before starting, ensure you have:
- **Node.js 18.17.0+** (LTS recommended)
- **npm 9.0+** or **yarn 3.0+**
- **Git** (for version control)
- Terminal/Command Prompt access

## 📥 Installation Steps

### Step 1: Clone/Navigate to Project
```bash
# If cloning from GitHub
git clone <repository-url>
cd lesanth-portfolio

# Or if you have the folder locally
cd /path/to/your/project
```

### Step 2: Verify Node Version (Optional but Recommended)
```bash
# Check if you have the right Node version
node --version   # Should be v18.17.0 or higher
npm --version    # Should be v9.0.0 or higher

# If using nvm, sync to project version
nvm use
```

### Step 3: Install Dependencies
```bash
# Using npm (recommended)
npm install

# Or using yarn
yarn install
```

This installs:
- React 19.0.0
- React DOM 19.0.0
- Vite 8.0.0
- Tailwind CSS 4.0.0
- PostCSS 8.4.32
- Autoprefixer 10.4.16
- ESLint with React plugins

### Step 4: Start Development Server
```bash
npm run dev
```

The application will:
- Start on `http://localhost:3000`
- Open automatically in your default browser
- Enable hot module replacement (instant refresh on changes)
- Show any errors live in the browser

### Step 5: Verify Setup
- Open http://localhost:3000 in browser
- You should see the portfolio homepage
- Move your mouse to see the custom cursor effect
- Click on navigation links to test smooth scrolling

## 📝 Configuration Files Overview

### `package.json`
Contains all project dependencies and scripts:
```json
{
  "scripts": {
    "dev": "vite",              // Start dev server
    "build": "vite build",      // Production build
    "preview": "vite preview"   // Preview production
  }
}
```

### `vite.config.js`
Vite configuration:
- React plugin for JSX support
- Dev server on port 3000
- Optimized build settings

### `tailwind.config.js`
Tailwind CSS configuration:
- Custom color palette (dark theme)
- Extended animations
- Custom theme colors for the portfolio

### `postcss.config.js`
PostCSS pipeline for Tailwind CSS processing

### `.nvmrc`
Specifies Node version (18.17.0) for the project

## 🎨 Project Structure

```
project-root/
├── src/
│   ├── components/          # React components (8 main components)
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Hero section with typewriter
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills with floating chips
│   │   ├── Experience.jsx  # Experience timeline
│   │   ├── Projects.jsx    # Bento grid projects
│   │   ├── Certifications.jsx  # Carousel certifications
│   │   ├── Contact.jsx     # Contact form
│   │   ├── Footer.jsx      # Footer
│   │   ├── CustomCursor.jsx    # Custom cursor
│   │   └── Toast.jsx       # Toast notifications
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # React DOM render
│   └── index.css           # Global styles + Tailwind imports
│
├── public/                 # Static assets (if any)
├── index.html             # HTML entry point
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS config
├── postcss.config.js      # PostCSS config
├── eslint.config.js       # ESLint rules
├── package.json           # Dependencies
├── README.md              # Full documentation
└── .gitignore            # Git ignore patterns
```

## 🔨 Common Commands

```bash
# Development
npm run dev              # Start dev server with HMR

# Building
npm run build            # Create optimized production build
npm run preview          # Preview production build locally

# Code Quality
npm run lint             # Check code with ESLint
npm run lint -- --fix    # Auto-fix linting issues

# Useful utilities
npm list                 # Show all installed packages
npm outdated             # Check for outdated packages
npm audit                # Check for security vulnerabilities
```

## 🌐 Deployment Quick Start

### Vercel (Recommended - Easiest)
```bash
npm install -g vercel
vercel
# Follow the prompts
```

### Netlify
```bash
npm run build
# Upload the 'dist' folder to Netlify via drag-and-drop
```

### GitHub Pages
1. Update `vite.config.js` base path
2. Push to GitHub
3. Enable GitHub Pages in settings pointing to `gh-pages` branch

### Self-Hosted
```bash
npm run build
# Upload contents of 'dist' folder to your server
```

## 🐛 Troubleshooting

### Issue: Port 3000 already in use
```bash
# Use a different port
npm run dev -- --port 3001
```

### Issue: Module not found errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tailwind styles not applying
```bash
# Restart the dev server
# Press Ctrl+C and run npm run dev again

# Or clear Vite cache
rm -rf .vite
npm run dev
```

### Issue: Build error with Tailwind
```bash
# Ensure PostCSS is properly configured
npm install -D postcss autoprefixer
npm run build
```

### Issue: ESLint warnings about React imports
This is normal in React 19 - the plugin is updated but React is auto-imported.

## 📚 Documentation Links

- **React 19**: https://react.dev
- **Vite**: https://vitejs.dev
- **Tailwind CSS V4**: https://tailwindcss.com/docs
- **PostCSS**: https://postcss.org
- **ESLint**: https://eslint.org

## 🔐 Environment Variables

Create `.env.local` for sensitive data:
```bash
# Example
VITE_API_URL=https://api.example.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## ✨ Features to Explore

1. **Custom Cursor** - Hover over interactive elements
2. **Typewriter Effect** - See the hero title animation
3. **Smooth Scrolling** - Click navbar links
4. **Responsive Design** - Resize browser to see mobile version
5. **Form Submission** - Fill contact form (opens email client)
6. **Toast Notifications** - See feedback messages
7. **Easter Eggs** - Press 'L' key for surprise!

## 🤝 Support & Help

- Check README.md for detailed documentation
- Review component files for code examples
- Check tailwind.config.js for theme customization
- Email: lesanthnagarajan34@gmail.com

## ✅ Verification Checklist

After setup, verify:
- [ ] Dev server running without errors
- [ ] Page loads at http://localhost:3000
- [ ] Custom cursor appears and moves
- [ ] Navigation links work and scroll to sections
- [ ] Responsive design works on small screens
- [ ] No console errors in browser DevTools
- [ ] Contact form can be filled out

## 🎉 You're Ready!

Your React 19 + Vite 8 + Tailwind CSS V4 portfolio is now set up and running locally. 

Happy coding! 🚀

---

**Last Updated:** March 2025
**Tech Stack:** React 19 | Vite 8 | Tailwind CSS V4
