/**
 * PROJECT MODAL CONTROLLER
 * Controls opening, populating, and closing the project detail modal.
 */

import { PROJECTS } from '../data/projects.js';

export function initModal() {
  const dialog = document.getElementById('project-modal');
  if (!dialog) return;

  const modalImg = document.getElementById('modal-img');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalFeatures = document.getElementById('modal-features');
  const modalTags = document.getElementById('modal-tags');
  const modalLink = document.getElementById('modal-link');
  const closeBtn = document.getElementById('modal-close-btn');

  // Attach click listeners to cards
  const projectCards = document.querySelectorAll('[data-project-id]');

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-project-id');
      const project = PROJECTS.find(p => p.id === id);
      if (!project) return;

      openModal(project);
    });
  });

  function openModal(p) {
    if (modalImg) {
      modalImg.src = p.image || '/images/desktop-app.jpg';
      modalImg.alt = p.title;
    }

    if (modalCategory) {
      modalCategory.textContent = p.categoryLabel || (p.category === 'dev' ? 'Software Engineering' : 'Design & Motion');
    }

    if (modalTitle) {
      modalTitle.textContent = p.title;
    }

    if (modalDesc) {
      modalDesc.textContent = p.description;
    }

    if (modalFeatures) {
      if (p.features && p.features.length > 0) {
        modalFeatures.innerHTML = `
          <h4>Key Highlights & Architecture</h4>
          <ul>
            ${p.features.map(f => `<li>${escapeHtml(f)}</li>`).join('')}
          </ul>
        `;
        modalFeatures.style.display = 'block';
      } else {
        modalFeatures.innerHTML = '';
        modalFeatures.style.display = 'none';
      }
    }

    if (modalTags) {
      modalTags.innerHTML = p.tags.map(tag => `<span class="badge">${escapeHtml(tag)}</span>`).join('');
    }

    if (modalLink) {
      if (p.link) {
        modalLink.href = p.link;
        modalLink.style.display = 'inline-flex';
        modalLink.innerHTML = `
          <span>${p.category === 'dev' ? 'Explore Code / Demo' : 'View on Behance'}</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
        `;
      } else {
        modalLink.style.display = 'none';
      }
    }

    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (typeof dialog.close === 'function') {
      dialog.close();
      document.body.style.overflow = '';
    }
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Click outside backdrop to close
  dialog.addEventListener('click', (e) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      closeModal();
    }
  });

  // Handle escape key
  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
  });

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}
