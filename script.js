const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

document.querySelectorAll('[data-placeholder]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Placeholder link — replace this with your real profile or project URL.');
  });
});

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '82px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '22px 6vw';
  nav.style.background = 'rgba(251,248,241,.97)';
  nav.style.flexDirection = 'column';
  nav.style.gap = '18px';
});
