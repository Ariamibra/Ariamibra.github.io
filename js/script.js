/* ============================================
   ARYAM ALSAIDI — PORTFOLIO SCRIPTS
   js/script.js
   ============================================ */

let currentLang = localStorage.getItem('lang') || 'en';

/* ── HELPERS ── */
const t = (obj) => obj[currentLang] || obj.en;
const el = (id) => document.getElementById(id);

/* ── RENDER ── */
function render() {
  const C = CONTENT;
  const lang = currentLang;

  /* NAV labels */
  const navKeys = ['About','Skills','Education','Projects','Contact'];
  const navAr   = ['نبذة','المهارات','التعليم','المشاريع','تواصل'];
  document.querySelectorAll('.nav-links a').forEach((a, i) => {
    a.textContent = lang === 'ar' ? navAr[i] : navKeys[i];
  });

  /* HERO */
  el('heroTag').textContent       = t(C.hero.tag);
  el('heroLastName').textContent  = t(C.name.last);
  el('heroTitle').textContent     = t(C.hero.title);
  el('heroDesc').textContent      = t(C.hero.desc);
  el('heroCta1').textContent      = lang === 'ar' ? 'استعرض المشاريع ←' : 'View Projects →';
  el('heroCta2').textContent      = lang === 'ar' ? 'تحميل السيرة الذاتية' : 'Download CV';
  el('heroEmail').textContent     = lang === 'ar' ? 'البريد الإلكتروني' : 'Email';
  el('heroEmail').href            = 'mailto:' + C.hero.email;
  el('heroLinkedin').href         = C.hero.linkedin;
  el('heroCv').textContent        = lang === 'ar' ? 'السيرة الذاتية' : 'CV';
  el('scrollText').textContent    = lang === 'ar' ? 'تمرير' : 'Scroll';

  /* ABOUT labels */
  el('aboutLabel').textContent = lang === 'ar' ? '01 — نبذة عني' : '01 — About';
  el('aboutTitle').textContent = lang === 'ar' ? 'من أنا' : 'Who I Am';

  /* ABOUT text */
  el('aboutText').innerHTML = C.about.map(p =>
    <p>${t(p)}</p>
  ).join('');

  /* ABOUT stats */
  el('aboutStats').innerHTML = C.stats.map(s => `
    <div class="stat-card">
      <div class="stat-number">${s.number}</div>
      <div class="stat-label">${t(s.label)}</div>
    </div>
  `).join('');

  /* SKILLS labels */
  el('skillsLabel').textContent = lang === 'ar' ? '02 — المهارات' : '02 — Skills';
  el('skillsTitle').textContent = lang === 'ar' ? 'الأدوات التقنية' : 'Technical Arsenal';

  /* SKILLS grid */
  el('skillsGrid').innerHTML = C.skills.map(group => `
    <div class="skill-group">
      <div class="skill-group-title">${t(group.title)}</div>
      <div class="skill-tags">
        ${group.tags.map(tag => `<span class="skill-tag">${t(tag)}</span>`).join('')}
      </div>
    </div>
  `).join('');

  /* EDUCATION labels */
  el('eduLabel').textContent  = lang === 'ar' ? '03 — التعليم والشهادات' : '03 — Education & Certifications';
  el('eduTitle').textContent  = lang === 'ar' ? 'الخلفية الأكاديمية' : 'Academic Background';
  el('certsLabel').textContent = lang === 'ar' ? 'الشهادات' : 'Certifications';

  /* EDUCATION card */
  const edu = C.education;
  el('eduCard').innerHTML = `
    <div class="edu-degree">${t(edu.degree)}</div>
    <div class="edu-uni">${t(edu.university)}</div>
    <div class="divider"></div>
    <div class="edu-meta">
      <div class="edu-meta-item">
        ${lang === 'ar' ? 'التخرج' : 'Graduation'}<span>${edu.year}</span>
      </div>
      <div class="edu-meta-item">
        ${lang === 'ar' ? 'التقدير' : 'Grade'}<span>${t(edu.grade)}</span>
      </div>
      <div class="edu-meta-item">
        ${lang === 'ar' ? 'التخصص' : 'Specialization'}<span>${t(edu.specialization)}</span>
      </div>
    </div>
  `;

  /* CERTIFICATIONS */
  el('certsGrid').innerHTML = C.certifications.map(cert => `
    <div class="cert-card">
      <div class="cert-icon">◈</div>
      <div>
        <div class="cert-name">${t(cert.name)}</div>
        <div class="cert-issuer">${cert.issuer}</div>
      </div>
      ${cert.status
        ? <div class="cert-badge badge-progress">${t(cert.status)}</div>
        : `<div class="cert-badge badge-done">${cert.year}</div>`}
    </div>
  `).join('');

  /* PROJECTS labels */
  el('projLabel').textContent = lang === 'ar' ? '04 — المشاريع' : '04 — Projects';
  el('projTitle').textContent = lang === 'ar' ? 'أبرز الأعمال' : 'Selected Work';
  /* PROJECTS grid */
  el('projectsGrid').innerHTML = C.projects.map(p => `
    <div class="project-card ${p.featured ? 'featured' : ''}">
      <div class="project-number">${p.number}</div>
      <div class="project-tag">${t(p.tag)}</div>
      <div class="project-name">${t(p.title)}</div>
      <p class="project-desc">${t(p.desc)}</p>
      ${p.methods.length ? `
        <div class="project-methods">
          ${p.methods.map(m => `<span class="method-tag">${t(m)}</span>`).join('')}
        </div>` : ''}
      ${p.link
        ? `<a href="${p.link}" class="btn-primary" style="margin-top:0.5rem">
             ${lang === 'ar' ? 'عرض دراسة الحالة ←' : 'View Case Study →'}
           </a>`
        : `<div class="project-status soon">
             ${lang === 'ar' ? 'قريبًا' : 'Coming Soon'}
           </div>`}
    </div>
  `).join('');

  /* CONTACT */
  el('contactLabel').textContent = lang === 'ar' ? '05 — تواصل معي' : '05 — Contact';
  el('contactTitle').textContent = lang === 'ar' ? 'تواصل معي' : "Let's Connect";
  el('contactDesc').textContent  = t(C.contact.desc);
  el('contactCv').textContent    = lang === 'ar' ? 'تحميل السيرة الذاتية ←' : 'Download CV →';

  el('contactLinks').innerHTML = `
    <a href="mailto:${C.hero.email}" class="contact-link">
      <div class="contact-link-icon">✉</div>
      <div>
        <span class="contact-link-label">${lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</span>
        <div class="contact-link-text">${C.hero.email}</div>
      </div>
    </a>
    <a href="${C.hero.linkedin}" target="_blank" class="contact-link">
      <div class="contact-link-icon">in</div>
      <div>
        <span class="contact-link-label">LinkedIn</span>
        <div class="contact-link-text">${C.hero.linkedin.replace('https://', '')}</div>
      </div>
    </a>
  `;

  /* FOOTER */
  const year = new Date().getFullYear();
  el('footerLeft').textContent  = lang === 'ar'
    ? © ${year} أريام الصعيدي — خريجة نظم المعلومات الجغرافية
    : © ${year} Aryam Alsaidi — GIS Graduate;
  el('footerRight').textContent = t(C.footer.location);
}

/* ── LANGUAGE TOGGLE ── */
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.body.classList.toggle('ar', lang === 'ar');
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  el('btnEn').classList.toggle('active', lang === 'en');
  el('btnAr').classList.toggle('active', lang === 'ar');
  render();
}

/* ── REVEAL ON SCROLL ── */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        Array.from(e.target.children).forEach((child, i) => {
          child.style.transitionDelay = ${i * 0.08}s;
        });
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(r => observer.observe(r));
}

/* ── ACTIVE NAV ── */
function initNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
    });
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  initReveal();
  initNav();
});
