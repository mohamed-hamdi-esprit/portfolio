/**
 * FILTERS & INTERACTIVITY CONTROLLER
 * Handles persona switching (Developer / Designer), typewriter role effect,
 * skills filtering, project filtering, and mobile navigation.
 */

import { PROFILE } from '../data/profile.js';

export function initFilters() {
  const root = document.documentElement;

  // 1. PERSONA SWITCHER & TYPEWRITER
  let currentMode = 'dev';
  let typeTimer = null;
  const devBtn = document.getElementById('mode-dev');
  const desBtn = document.getElementById('mode-des');
  const roleEl = document.getElementById('typewriter-role');
  const leadEl = document.getElementById('hero-lead');

  function startTypewriter(mode) {
    if (typeTimer) clearTimeout(typeTimer);
    if (!roleEl) return;

    const phrases = PROFILE.modes[mode].roles;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      roleEl.textContent = phrases[0];
      return;
    }

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function tick() {
      const current = phrases[phraseIdx];
      roleEl.textContent = current.slice(0, charIdx) + '▍';

      if (!isDeleting && charIdx === current.length) {
        isDeleting = true;
        typeTimer = setTimeout(tick, 1800);
        return;
      }

      if (isDeleting && charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }

      charIdx += isDeleting ? -1 : 1;
      typeTimer = setTimeout(tick, isDeleting ? 30 : 60);
    }

    tick();
  }

  function setPersonaMode(mode, syncProjects = true) {
    currentMode = mode;
    root.setAttribute('data-mode', mode === 'des' ? 'design' : 'code');

    if (devBtn) devBtn.setAttribute('aria-pressed', mode === 'dev');
    if (desBtn) desBtn.setAttribute('aria-pressed', mode === 'des');

    if (leadEl) {
      leadEl.textContent = PROFILE.modes[mode].lead;
    }

    startTypewriter(mode);

    if (syncProjects) {
      filterProjects(mode === 'des' ? 'des' : 'dev');
    }
  }

  if (devBtn) {
    devBtn.addEventListener('click', () => setPersonaMode('dev', true));
  }
  if (desBtn) {
    desBtn.addEventListener('click', () => setPersonaMode('des', true));
  }

  // Initialize persona
  setPersonaMode('dev', false);

  // 2. SKILL TABS FILTER
  const skillTabs = document.querySelectorAll('[data-skill-filter]');
  const skillCards = document.querySelectorAll('[data-skill-category]');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-skill-filter');

      skillTabs.forEach(t => t.setAttribute('aria-pressed', t === tab ? 'true' : 'false'));

      skillCards.forEach(card => {
        const category = card.getAttribute('data-skill-category');
        if (filter === 'all' || category === filter) {
          card.removeAttribute('hidden');
          card.style.display = '';
        } else {
          card.setAttribute('hidden', '');
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. PROJECT TABS FILTER
  const projectTabs = document.querySelectorAll('[data-project-filter]');
  const projectCards = document.querySelectorAll('[data-project-card]');

  function filterProjects(filter) {
    projectTabs.forEach(tab => {
      tab.setAttribute('aria-pressed', tab.getAttribute('data-project-filter') === filter ? 'true' : 'false');
    });

    projectCards.forEach(card => {
      const category = card.getAttribute('data-project-category');
      if (filter === 'all' || category === filter) {
        card.removeAttribute('hidden');
        card.style.display = '';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      } else {
        card.setAttribute('hidden', '');
        card.style.display = 'none';
      }
    });
  }

  projectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-project-filter');
      filterProjects(filter);
    });
  });

  // 4. MOBILE NAVIGATION
  const menuBtn = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('nav-open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('nav-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 5. INTERSECTION OBSERVER FOR ACTIVE NAV LINKS
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const isMatch = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', isMatch);
          });
        }
      });
    }, {
      rootMargin: '-30% 0px -60% 0px'
    });

    document.querySelectorAll('main section[id]').forEach(section => {
      observer.observe(section);
    });
  }
}
