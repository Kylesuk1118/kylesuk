// ============================================================
//  Kyle Suk — Profile site interactions
//  Dark mode · reveal-on-scroll · scrollspy nav · footer year
// ============================================================

(function () {
  'use strict';

  const root = document.documentElement;
  const sunIcon = document.getElementById('icon-sun');
  const moonIcon = document.getElementById('icon-moon');
  const themeToggle = document.getElementById('theme-toggle');

  // ---------- Dark mode (dark-first editorial default) ----------
  function applyTheme(theme) {
    const isDark = theme === 'dark';
    root.classList.toggle('dark', isDark);
    if (sunIcon && moonIcon) {
      sunIcon.classList.toggle('hidden', !isDark);  // sun shows in dark mode (click -> light)
      moonIcon.classList.toggle('hidden', isDark);  // moon shows in light mode (click -> dark)
    }
  }

  // Default to dark unless the user has explicitly chosen light before.
  const savedTheme = localStorage.getItem('theme');
  applyTheme(savedTheme || 'dark');

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const next = root.classList.contains('dark') ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      applyTheme(next);
    });
  }

  // ---------- Reveal on scroll ----------
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ---------- Scrollspy (active nav link) ----------
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function setActive(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + id);
    });
  }

  if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    const spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

    sections.forEach(function (section) { spyObserver.observe(section); });
  }

  // ---------- Footer year ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
