const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        nav.classList.remove('active');
    }
});