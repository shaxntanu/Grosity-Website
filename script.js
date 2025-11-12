
// Scroll to home on page load - FIXED
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', function () {
    window.scrollTo(0, 0);
    requestAnimationFrame(() => document.body.classList.add('page-loaded'));
});

// Particles JS configuration - WITH FULL CURSOR INTERACTION
const getParticleConfig = () => {
    const isMobile = window.innerWidth <= 768;
    return {
        particles: {
            number: { value: isMobile ? 150 : 280, density: { enable: true, value_area: 800 } },
            color: { value: "#000000" },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true, anim: { enable: true, speed: 0.4, opacity_min: 0.1, sync: false } },
            size: { value: isMobile ? 2 : 2.8, random: true, anim: { enable: true, speed: 25, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: isMobile ? 120 : 180, color: "#000000", opacity: 0.2, width: 0.9 },
            move: { enable: true, speed: 0.6, direction: "top-right", straight: false, out_mode: "out", bounce: false, attract: { enable: false } }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "repulse" },
                resize: true
            },
            modes: { repulse: { distance: isMobile ? 80 : 140, duration: 0.8, speed: 3.2, easing: "ease-out-quad" } }
        },
        retina_detect: true
    };
};

const initParticles = () => {
    const config = getParticleConfig();
    particlesJS("particles-js", config);
    particlesJS("particles-js-social", config);
};

setTimeout(() => {
    initParticles();
}, 500);

// Reinitialize particles on window resize for better responsiveness
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        initParticles();
    }, 250);
});

// Year update
document.getElementById('year').textContent = new Date().getFullYear();

// Parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
    const heroHeight = hero.offsetHeight;

    if (scrolled < heroHeight) {
        const offset = scrolled * 0.3;
        document.querySelector('.hero-content').style.transform = `translateY(${offset}px)`;
    }
}, { passive: true });

// FIXED Dark mode toggle - Mobile optimized
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;
const currentTheme = localStorage.getItem('theme') || 'light';

// Set initial theme
if (currentTheme === 'dark') {
    html.classList.add('dark-mode');
    darkModeToggle.checked = true;
} else {
    html.classList.remove('dark-mode');
    darkModeToggle.checked = false;
}

// Change event for checkbox
darkModeToggle.addEventListener('change', function () {
    const isChecked = this.checked;

    if (isChecked) {
        html.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        html.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }

    // Force repaint
    html.style.backgroundColor = html.style.backgroundColor;
});

// Click event for mobile touch support
darkModeToggle.addEventListener('click', function (e) {
    e.stopPropagation();
});

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Form submit handler
function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}