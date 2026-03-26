// ================================== 
// DOM ELEMENTS
// ==================================

const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const typewriter = document.getElementById('typewriter');
const contactForm = document.getElementById('contactForm');

// ================================== 
// INITIAL SETUP
// ==================================

// Set default theme
if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark');
}
applyTheme(localStorage.getItem('theme'));

// ================================== 
// THEME TOGGLE
// ==================================

function applyTheme(theme) {
    const body = document.body;
    
    if (theme === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggle.setAttribute('title', 'Switch to Light Mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.setAttribute('title', 'Switch to Dark Mode');
    }
    
    localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});

// ================================== 
// HAMBURGER MENU
// ==================================

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ================================== 
// NAVBAR SCROLL EFFECT
// ==================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ================================== 
// TYPEWRITER EFFECT
// ==================================

const roles = [
    'AI/ML Engineer',
    'NLP Enthusiast',
    'Web Developer',
    'Data Analyst',
    'Problem Solver'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriterEffect() {
    const currentRole = roles[roleIndex];
    
    if (!isDeleting) {
        // Typing
        if (charIndex < currentRole.length) {
            typewriter.textContent += currentRole.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriterEffect, 50);
        } else {
            // Pause before deleting
            isDeleting = true;
            setTimeout(typeWriterEffect, 2000);
        }
    } else {
        // Deleting
        if (charIndex > 0) {
            typewriter.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeWriterEffect, 30);
        } else {
            // Move to next role
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeWriterEffect, 500);
        }
    }
}

typeWriterEffect();

// ================================== 
// INTERSECTION OBSERVER FOR SCROLL REVEAL
// ==================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeIn 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// ================================== 
// ACTIVE NAV LINK HIGHLIGHTING
// ==================================

const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Adjusted offset for sticky navbar
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Initial call
updateActiveNav();

// ================================== 
// SMOOTH SCROLL NAVIGATION
// ==================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ================================== 
// CONTACT FORM HANDLING
// ==================================

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Create mailto link
    const subject = `New Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:lesanthnagarajan34@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open mail client
    window.location.href = mailtoLink;
    
    // Reset form
    setTimeout(() => {
        contactForm.reset();
    }, 500);
});

// ================================== 
// SCROLL TO TOP BUTTON (OPTIONAL)
// ==================================

// Create scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.setAttribute('title', 'Scroll to top');
document.body.appendChild(scrollToTopBtn);

// Add styles for scroll to top button
const style = document.createElement('style');
style.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
        color: var(--primary-color);
        border: none;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 8px 20px rgba(0, 217, 255, 0.3);
    }
    
    .scroll-to-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 30px rgba(0, 217, 255, 0.4);
    }
    
    .scroll-to-top.show {
        display: flex;
    }
    
    @media (max-width: 768px) {
        .scroll-to-top {
            width: 45px;
            height: 45px;
            bottom: 20px;
            right: 20px;
            font-size: 1rem;
        }
    }
`;
document.head.appendChild(style);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ================================== 
// PRELOAD ANIMATIONS
// ==================================

// Add staggered animation delays to fade-in elements
document.querySelectorAll('.fade-in').forEach((element, index) => {
    element.style.setProperty('--delay', `${index * 0.1}s`);
});

// ================================== 
// KEYBOARD NAVIGATION
// ==================================

document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ================================== 
// PAGE LOAD ANIMATIONS
// ==================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ================================== 
// PERFORMANCE OPTIMIZATION
// ==================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handler
const debouncedScroll = debounce(updateActiveNav, 100);
window.addEventListener('scroll', debouncedScroll);

// ================================== 
// ACCESSIBILITY IMPROVEMENTS
// ==================================

// Add keyboard navigation to buttons
document.querySelectorAll('.btn, .nav-link, .social-link').forEach(element => {
    element.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            element.click();
        }
    });
});

// ================================== 
// DYNAMIC YEAR IN FOOTER (if needed)
// ==================================

// Uncomment if you want to update copyright year dynamically
/*
const yearElements = document.querySelectorAll('.year');
yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
});
*/

// ================================== 
// SKILL TAG INTERACTIONS
// ==================================

document.querySelectorAll('.skill-tag, .tool-item').forEach(element => {
    element.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1) rotate(1deg)';
    });
    
    element.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ================================== 
// PROJECT CARD INTERACTIONS
// ==================================

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Add subtle animation
        this.style.transform = 'translateY(-10px) rotateY(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateY(0deg)';
    });
});

// ================================== 
// INTERSECTION OBSERVER FOR LAZY LOAD
// ==================================

if ('IntersectionObserver' in window) {
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Could add lazy loading for images here
                lazyObserver.unobserve(entry.target);
            }
        });
    });
    
    document.querySelectorAll('[data-lazy]').forEach(el => {
        lazyObserver.observe(el);
    });
}

// ================================== 
// CONSOLE WELCOME MESSAGE
// ==================================

console.log('%cWelcome to Lesanth N\'s Portfolio! 🚀', 'font-size: 20px; color: #00D9FF; font-weight: bold;');
console.log('%cFeel free to explore the code and reach out for collaborations!', 'font-size: 14px; color: #00D9FF;');

// ================================== 
// CACHE BUSTING FOR ASSETS
// ==================================

// Optional: Add timestamp to prevent caching issues
// Useful during development
if (localStorage.getItem('devMode')) {
    console.log('%cDevelopment Mode', 'background: #00D9FF; color: #0F3A7D; padding: 5px; border-radius: 3px;');
}
