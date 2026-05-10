const toggle = document.querySelector('.nav-toggle');
const header = document.querySelector('.site-header');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
