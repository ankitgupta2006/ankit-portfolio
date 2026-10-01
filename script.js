const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');
const detailsButton = document.querySelector('#detailsButton');
const projectBrief = document.querySelector('#projectBrief');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? '✕' : '☰';
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });
}

if (detailsButton && projectBrief) {
  detailsButton.addEventListener('click', () => {
    const open = projectBrief.classList.toggle('open');
    detailsButton.textContent = open ? 'Hide project brief ↘' : 'View project brief ↗';
    detailsButton.setAttribute('aria-expanded', String(open));
  });
}
