/* ============================================
   PORTFOLIO INTERACTIVE SCRIPT
   ============================================ */

// ============================================
// CUSTOM CURSOR
// ============================================

const cursor = document.querySelector('.cursor');
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
});

// Cursor glow on interactive elements
document.addEventListener('mouseover', (e) => {
    if (e.target.matches('a, button, .chip, .tag, .cert-card')) {
        cursor.classList.add('active');
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.matches('a, button, .chip, .tag, .cert-card')) {
        cursor.classList.remove('active');
    }
});

// ============================================
// TYPEWRITER EFFECT
// ============================================

const roles = [
    'AI/ML Engineer',
    'NLP Developer',
    'Problem Solver',
    'Code Crafter',
    'Explorer'
];

const typewriterEl = document.getElementById('typewriter');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function typeWriter() {
    const currentRole = roles[roleIndex];
    
    if (!isDeleting && charIndex < currentRole.length) {
        typewriterEl.textContent += currentRole.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeWriter, deletingSpeed);
    } else if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeWriter, pauseTime);
    } else if (isDeleting && charIndex === 0) {
        roleIndex = (roleIndex + 1) % roles.length;
        isDeleting = false;
        setTimeout(typeWriter, 500);
    }
}

typeWriter();

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

let lastScrollY = 0;

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    updateActiveNav();
});

// ============================================
// HAMBURGER MENU
// ============================================

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// SMOOTH SCROLL & ACTIVE NAV LINK
// ============================================

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('data-section');
        if (href === current) {
            link.classList.add('active');
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeSlideIn 0.8s ease-out forwards';
            scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-section').forEach(section => {
    scrollObserver.observe(section);
});

// ============================================
// CERTIFICATIONS CAROUSEL
// ============================================

const carouselTrack = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let scrollPosition = 0;

function scrollCarousel(direction) {
    const cardWidth = 280 + 24; // card width + gap
    const scrollAmount = cardWidth;
    
    if (direction === 'next') {
        scrollPosition += scrollAmount;
    } else {
        scrollPosition = Math.max(0, scrollPosition - scrollAmount);
    }
    
    carouselTrack.scrollLeft = scrollPosition;
}

prevBtn.addEventListener('click', () => scrollCarousel('prev'));
nextBtn.addEventListener('click', () => scrollCarousel('next'));

// Enable dragging carousel
let isDown = false;
let startX;
let startScrollLeft;

carouselTrack.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carouselTrack.offsetLeft;
    startScrollLeft = carouselTrack.scrollLeft;
});

document.addEventListener('mouseleave', () => {
    isDown = false;
});

document.addEventListener('mouseup', () => {
    isDown = false;
});

carouselTrack.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselTrack.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselTrack.scrollLeft = startScrollLeft - walk;
});

// Touch support for mobile
carouselTrack.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - carouselTrack.offsetLeft;
    startScrollLeft = carouselTrack.scrollLeft;
});

carouselTrack.addEventListener('touchend', () => {
    isDown = false;
});

carouselTrack.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - carouselTrack.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselTrack.scrollLeft = startScrollLeft - walk;
});

// ============================================
// CONTACT FORM
// ============================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const inputs = contactForm.querySelectorAll('input, textarea');
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const message = inputs[2].value.trim();
    
    if (!name || !email || !message) {
        showToast('Please fill in all fields');
        return;
    }
    
    // Create mailto link
    const subject = `Message from ${name}`;
    const body = `From: ${name} (${email})\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:lesanthnagarajan34@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
        contactForm.reset();
        showToast('Redirecting to email client...');
    }, 300);
});

// ============================================
// TOAST NOTIFICATION
// ============================================

function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// ============================================
// EASTER EGG - Press 'L' KEY
// ============================================

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'l') {
        showToast('hey, that\'s me 👋', 2000);
    }
});

// ============================================
// PROJECT CARD HOVER EFFECT
// ============================================

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transformOrigin = 'center';
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================================
// SECTION INTERSECTION OBSERVER
// ============================================

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    sectionObserver.observe(section);
});

// ============================================
// CHIP HOVER EFFECT
// ============================================

document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('mouseenter', function() {
        const hue = this.style.getPropertyValue('--hue');
        this.style.boxShadow = `0 0 30px hsla(${hue}, 100%, 50%, 0.5)`;
    });
    
    chip.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// ============================================
// NAVIGATION SCROLL INTO VIEW
// ============================================

function handleNavClick(e) {
    if (e.target.matches('.nav-link')) {
        const targetId = e.target.dataset.section;
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
}

document.querySelector('.nav-menu').addEventListener('click', handleNavClick);

// ============================================
// INITIAL ACTIVE NAV
// ============================================

updateActiveNav();

// ============================================
// PERFORMANCE: DEBOUNCE SCROLL
// ============================================

let ticking = false;

function updateOnScroll() {
    updateActiveNav();
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
}, { passive: true });

// ============================================
// ACCESSIBILITY: FOCUS VISIBLE
// ============================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('using-keyboard');
});

// ============================================
// CONSOLE EASTER EGG
// ============================================

console.log('%cWelcome to Lesanth N\'s Portfolio', 'font-size: 16px; color: #00f5ff; font-weight: bold;');
console.log('%cNow go build something amazing 🚀', 'font-size: 14px; color: #9d00ff;');

// ============================================
// PAGE READY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // All interactive elements loaded and ready
    console.log('%c✓ Portfolio loaded and ready', 'color: #00f5ff;');
});

// ============================================
// SCROLL PERFORMANCE OPTIMIZATION
// ============================================

// Use passive event listeners for better scroll performance
window.addEventListener('scroll', () => {
    // Scroll event logic
}, { passive: true });

// ============================================
// MOBILE VIEWPORT HEIGHT FIX
// ============================================

function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
}

setVH();
window.addEventListener('resize', setVH);

// ============================================
// LOG KEYBOARD SHORTCUTS (hidden feature)
// ============================================

let keystrokeSequence = '';
const secretCode = 'help';

document.addEventListener('keydown', (e) => {
    keystrokeSequence += e.key.toLowerCase();
    keystrokeSequence = keystrokeSequence.slice(-secretCode.length);
    
    if (keystrokeSequence === secretCode) {
        showToast('🎯 Use arrow keys to navigate manually, or just scroll!', 3000);
    }
});
