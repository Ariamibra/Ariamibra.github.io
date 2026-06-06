/* ============================================
ARYAM ALSAIDI — PORTFOLIO SCRIPTS
script.js
============================================ */

// ── LANGUAGE SYSTEM ──────────────────────────
let currentLang = localStorage.getItem(‘lang’) || ‘en’;

function setLang(lang) {
currentLang = lang;
localStorage.setItem(‘lang’, lang);

document.documentElement.lang = lang;
document.body.classList.toggle(‘ar’, lang === ‘ar’);
document.body.dir = lang === ‘ar’ ? ‘rtl’ : ‘ltr’;

const btnEn = document.getElementById(‘btnEn’);
const btnAr = document.getElementById(‘btnAr’);
if (btnEn) btnEn.classList.toggle(‘active’, lang === ‘en’);
if (btnAr) btnAr.classList.toggle(‘active’, lang === ‘ar’);

document.querySelectorAll(’[data-en]’).forEach(el => {
const val = el.getAttribute(‘data-’ + lang);
if (!val) return;
if (val.includes(’<’)) {
el.innerHTML = val;
} else {
el.textContent = val;
}
});
}

// Apply saved language on load
document.addEventListener(‘DOMContentLoaded’, () => {
setLang(currentLang);
});

// ── REVEAL ON SCROLL ─────────────────────────
const revealObserver = new IntersectionObserver(entries => {
entries.forEach(e => {
if (e.isIntersecting) {
e.target.classList.add(‘visible’);
Array.from(e.target.children).forEach((child, i) => {
child.style.transitionDelay = ${i * 0.08}s;
});
}
});
}, { threshold: 0.1 });

document.querySelectorAll(’.reveal’).forEach(r => revealObserver.observe(r));

// ── ACTIVE NAV LINK ──────────────────────────
const sections  = document.querySelectorAll(‘section[id]’);
const navLinks  = document.querySelectorAll(’.nav-links a’);

window.addEventListener(‘scroll’, () => {
let current = ‘’;
sections.forEach(s => {
if (window.scrollY >= s.offsetTop - 200) current = s.id;
});
navLinks.forEach(a => {
const isActive = a.getAttribute(‘href’).includes(current) && current !== ‘’;
a.style.color = isActive ? ‘var(–accent)’ : ‘’;
});
});

// ── HIGHLIGHT CURRENT PAGE IN NAV ────────────
// Works across multi-page setup
document.querySelectorAll(’.nav-links a’).forEach(a => {
if (a.href === window.location.href) {
a.style.color = ‘var(–accent)’;
}
});
