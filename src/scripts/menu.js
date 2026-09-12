document.addEventListener('astro:page-load', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('#mobile-navigation');
  const menuIcon = hamburger.querySelector('[data-icon="lucide:menu"]');
  const closeIcon = hamburger.querySelector('[data-icon="lucide:x"]');

  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';

    navLinks.classList.toggle('max-h-96', !isExpanded);
    navLinks.classList.toggle('opacity-100', !isExpanded);
    menuIcon.classList.toggle('hidden', !isExpanded);
    closeIcon.classList.toggle('hidden', isExpanded);
    hamburger.setAttribute('aria-expanded', String(!isExpanded));
    hamburger.setAttribute('aria-label', isExpanded ? 'Open menu' : 'Close menu');
  });
})
