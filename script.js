// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Navbar
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#000';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
});

// GSAP Animations
gsap.from(".hero-content", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".stat", { opacity: 0, y: 50, duration: 1, stagger: 0.2, scrollTrigger: ".stats-grid" });
gsap.from(".startup-card", { opacity: 0, y: 50, duration: 1, stagger: 0.2, scrollTrigger: ".startup-grid" });