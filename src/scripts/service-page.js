document.addEventListener('DOMContentLoaded', () => {
  const serviceMenuButtons = document.querySelectorAll('[data-service-menu-button]');
  const serviceMenu = document.querySelector('#serviceMenu');

  serviceMenuButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = serviceMenu?.classList.toggle('menu-open');
      button.setAttribute('aria-expanded', String(open));
    });
  });

  serviceMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      serviceMenu.classList.remove('menu-open');
      serviceMenuButtons.forEach(button => button.setAttribute('aria-expanded', 'false'));
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (serviceMenu?.classList.contains('menu-open') && !serviceMenu.contains(e.target) && ![...serviceMenuButtons].some(btn => btn.contains(e.target))) {
      serviceMenu.classList.remove('menu-open');
      serviceMenuButtons.forEach(button => button.setAttribute('aria-expanded', 'false'));
    }
  });

  window.dataLayer = window.dataLayer || [];
  document.querySelectorAll('[id^="click_btn"]').forEach(button => {
    button.addEventListener('click', () => {
      window.dataLayer.push({
        event: button.id,
        button_id: button.id,
        button_text: button.textContent.trim().replace(/\s+/g, ' '),
        link_url: button.href || null,
        service: document.body.dataset.service || null
      });
    });
  });
});
