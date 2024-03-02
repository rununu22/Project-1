// Javascript to facilitate responsive behaviors. 
// Example: Toggle navigation for small screens
const navToggle = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});