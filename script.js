// Reveal on scroll
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

// Smooth cursor glow spotlight
const glow = document.querySelector('.cursor-glow');
let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

if (glow) {
  window.addEventListener('pointermove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.15;
    glowY += (mouseY - glowY) * 0.15;
    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
}

// 3D Tilt effect on Photo Frame
const photoFrame = document.querySelector('.photo-frame');
if (photoFrame) {
  photoFrame.addEventListener('mousemove', (e) => {
    const rect = photoFrame.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    photoFrame.style.transform = `rotateY(${x * 0.04}deg) rotateX(${-y * 0.04}deg)`;
  });

  photoFrame.addEventListener('mouseleave', () => {
    photoFrame.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
}

// Placeholder links
document.querySelectorAll('[data-placeholder]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Placeholder link — replace this with your real profile or project URL.');
  });
});

// Mobile menu toggle
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
  nav.style.background = 'rgba(251, 248, 241, 0.97)';
  nav.style.backdropFilter = 'blur(16px)';
  nav.style.flexDirection = 'column';
  nav.style.gap = '18px';
  nav.style.borderBottom = '1px solid var(--line)';
});
