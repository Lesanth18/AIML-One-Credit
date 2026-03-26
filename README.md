# Lesanth N - Portfolio Website

A stunning, custom-built portfolio website using **React 19**, **Vite 8**, and **Tailwind CSS V4**.

## 🚀 Tech Stack

- **React 19** - Latest React version for modern component development
- **Vite 8** - Lightning-fast build tool and dev server
- **Tailwind CSS V4** - Utility-first CSS framework with modern features
- **JavaScript (ES2020+)** - Modern JavaScript features
- **Responsive Design** - Mobile-first approach

## 📦 Installation

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Setup

1. **Clone or navigate to project directory:**
   ```bash
   cd your-project-directory
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/        # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── CustomCursor.jsx  # Animated custom cursor
│   └── Toast.jsx
├── App.jsx           # Main App component
├── main.jsx          # Entry point
└── index.css         # Global styles & Tailwind imports

public/              # Static assets
package.json         # Dependencies & scripts
vite.config.js       # Vite configuration
tailwind.config.js   # Tailwind CSS configuration
postcss.config.js    # PostCSS configuration
```

## ✨ Features

- ✅ **Modern React Hooks** - Functional components with useState, useEffect
- ✅ **Tailwind CSS V4** - Advanced utility classes with custom animations
- ✅ **Custom Cursor** - Glowing animated cursor that follows mouse
- ✅ **Typewriter Effect** - Animated role cycling
- ✅ **Smooth Scrolling** - Scroll-based section navigation
- ✅ **Responsive Design** - Fully mobile-responsive
- ✅ **Dark Theme** - Beautiful dark brutalist aesthetic
- ✅ **Glassmorphism** - Modern glass effect components
- ✅ **Gradient Animations** - Smooth color transitions
- ✅ **Form Submission** - Contact form with email integration
- ✅ **Toast Notifications** - User feedback system
- ✅ **Easter Eggs** - Interactive surprises (press 'L')

## 🎨 Design System

### Colors
- **Primary**: Dark #0a0a0f
- **Accent Cyan**: #00f5ff
- **Accent Purple**: #9d00ff
- **Text**: #e8e8e8

### Typography
- **Headings**: Space Grotesk (700 weight)
- **Body**: Space Grotesk (400 weight)
- **Monospace**: DM Mono (400/500 weight)

## 🔧 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages
Configure `vite.config.js`:
```javascript
export default {
  base: '/your-repo-name/',
  // ... other config
}
```

## 📝 Environment Variables

Create `.env.local` if needed:
```
VITE_API_URL=your_api_url
```

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- --port 3001
```

### Build failures?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styles not applying?
Clear Tailwind cache:
```bash
rm -rf node_modules/.cache
npm run dev
```

## 📄 License

MIT License - feel free to use this as a template!

## 👨‍💻 Author

**Lesanth N**
- Email: lesanthnagarajan34@gmail.com
- LinkedIn: [linkedin.com/in/lesanth-n-601907321/](https://linkedin.com/in/lesanth-n-601907321/)
- GitHub: [github.com/Lesanth18](https://github.com/Lesanth18)

## 🤝 Support

For issues or questions, feel free to reach out via email!

---

Built with ❤️ using React 19 + Vite 8 + Tailwind CSS V4
