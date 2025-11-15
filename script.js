const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const header = document.querySelector('.site-header');
const yearSpan = document.getElementById('current-year');

if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen.toString());
    });

    document.querySelectorAll('.site-nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

const setHeaderShadow = () => {
    if (!header) return;
    if (window.scrollY > 4) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

window.addEventListener('scroll', setHeaderShadow);
setHeaderShadow();

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
}
