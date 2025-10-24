const navLinks = document.querySelectorAll('.nav-links li a');
const indicator = document.querySelector('.nav-indicator');
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

/* Indicator movement */
navLinks.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        const width = e.target.offsetWidth;
        const left = e.target.offsetLeft;
        indicator.style.width = width + "px";
        indicator.style.left = left + "px";
    });
    link.addEventListener('mouseleave', () => {
        indicator.style.width = 0;
    });
});

/* Hamburger toggle */
hamburger.addEventListener('click', () => {
    navUl.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

/* Scroll effect */
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
