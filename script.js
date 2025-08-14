const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
btn && btn.addEventListener('click', () => menu.classList.toggle('open'));
menu && menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// Active nav link based on page
const active = document.body.dataset.active;
document.querySelectorAll(`[data-nav="${active}"]`).forEach(el => el.classList.add('active'));

// Footer year
const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
