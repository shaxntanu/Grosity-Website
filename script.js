// Particles JS configuration
particlesJS("particles-js", {
    particles: {
        number: { value: 280, density: { enable: true, value_area: 800 } },
        color: { value: "#000000" },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: true, anim: { enable: true, speed: 0.4, opacity_min: 0.1, sync: false } },
        size: { value: 2.8, random: true, anim: { enable: true, speed: 25, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 180, color: "#000000", opacity: 0.2, width: 0.9 },
        move: { enable: true, speed: 0.6, direction: "top-right", straight: false, out_mode: "out", bounce: false, attract: { enable: false } }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false, mode: "repulse" },
            onclick: { enable: false, mode: "repulse" },
            resize: true
        },
        modes: { repulse: { distance: 140, duration: 0.8, speed: 3.2, easing: "ease-out-quad" } }
    },
    retina_detect: true
});

// Custom repel on button only
const button = document.querySelector('.button');
if (button) {
    button.addEventListener('mouseenter', () => {
        if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.interactivity.mouse.pos_x = button.getBoundingClientRect().left + button.getBoundingClientRect().width / 2;
            window.pJSDom[0].pJS.interactivity.mouse.pos_y = button.getBoundingClientRect().top + button.getBoundingClientRect().height / 2;
            window.pJSDom[0].pJS.fn.vendors.interactivity.obj.setStyleMouseCursor();
            window.pJSDom[0].pJS.interactivity.status = 'mousemove';
        }
    });

    button.addEventListener('mouseleave', () => {
        if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.interactivity.status = '';
        }
    });
}

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

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    html.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', () => {
    html.classList.toggle('dark-mode');
    const theme = html.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
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
