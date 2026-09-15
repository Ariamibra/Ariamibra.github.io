/**
 * =============================================================
 *  CENTRAL LINK & ASSET CONFIG
 * =============================================================
 *  Edit this file ONLY to add your real links, files, and images.
 *  Every button, image, and download link on the site reads from
 *  here — you never need to touch index.html to update a link.
 *
 *  HOW TO USE
 *  - Replace any string starting with "LINK_PLACEHOLDER_" with
 *    your real URL (e.g. a PDF hosted on GitHub, a Power BI
 *    "publish to web" link, a live site, a repo).
 *  - Leave a value as null if that link does not exist yet.
 *    The button for it will stay hidden instead of showing a
 *    broken/empty link.
 *  - Image paths point to /assets/... — just drop your image
 *    files into an "assets" folder next to this file using the
 *    same filenames, or edit the paths below to match your files.
 * =============================================================
 */

const SITE_LINKS = {

  // ---- Personal ----
  cv: "assets/cv.pdf",                         // Download CV button (hero + contact)
  linkedin: "https://linkedin.com/in/aryam-alsaidi",
  email: "ariam.gis@outlook.com",

  // ---- Flagship project: IDRM (Dammam Industrial Development Readiness Model) ----
  idrm: {
    heroImage: "assets/idrm-hero.png",         // large visual at top of the IDRM section
    gallery: [
      { src: "assets/idrm-kde.png",          caption: "Industrial concentration (Kernel Density Estimation), 2025" },
      { src: "assets/idrm-growth.png",       caption: "Temporal expansion across D1, D2 and D3, 2000–2025" },
      { src: "assets/idrm-accessibility.png",caption: "Spatial accessibility and infrastructure proximity" }
    ],
    dashboardPreview: "assets/idrm-dashboard.png",
    reportUrl: "LINK_PLACEHOLDER_IDRM_REPORT",         // full research report / case study PDF
    dashboardUrl: "https://app.powerbi.com/view?r=eyJrIjoiZGRiNzQzYzgtNGRiNS00MTQxLWEyNWQtZGY5ZWE3YzMyZmU4IiwidCI6IjUxNGZhYTE5LThjODQtNGNlZi04YWU5LTJiOWRiY2U5MzNjZCIsImMiOjl9", // Power BI dashboard — used for both the embedded iframe and the external "Open Dashboard" button
    githubUrl: null,
    demoUrl: null
  },

  // ---- Applied project: Wejhatna (Tuwaiq Riyadh hackathon) ----
  wejhatna: {
    coverImage: "assets/wejhatna-cover.png",
    reportUrl: "LINK_PLACEHOLDER_WEJHATNA_REPORT",
    githubUrl: "LINK_PLACEHOLDER_WEJHATNA_GITHUB",
    demoUrl: null
  },

  // ---- Additional / academic work (expand this array as more projects are ready) ----
  additionalWork: []
};

// Do not edit below this line — this wires the config above to the page.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-link]').forEach(el => {
    const path = el.getAttribute('data-link').split('.');
    let value = SITE_LINKS;
    for (const key of path) value = value ? value[key] : undefined;

    const isPlaceholder = typeof value === 'string' && value.startsWith('LINK_PLACEHOLDER_');

    if (!value || isPlaceholder) {
      if (el.hasAttribute('data-hide-if-empty')) {
        el.setAttribute('hidden', '');
      } else {
        el.setAttribute('data-state', 'soon');
        el.setAttribute('aria-disabled', 'true');
      }
      return;
    }

    if (el.tagName === 'A') {
      const prefix = el.getAttribute('data-href-prefix') || '';
      el.setAttribute('href', prefix + value);
    } else if (el.tagName === 'IMG' || el.tagName === 'IFRAME') {
      el.setAttribute('src', value);
    }
  });
});
