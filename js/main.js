/* ==========================================
   KAIDI YANG — PORTFOLIO JS
   Particle System + Interactions
   ========================================== */

// ===== PARTICLE SYSTEM =====
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let animFrame;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.3;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.color = Math.random() > 0.7 ? '#7b2fff' : '#00d4ff';
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.reset();
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

function initParticles() {
  const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 180);
  particles = Array.from({ length: count }, () => new Particle());
}

function drawConnections() {
  const maxDist = 120;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = '#00d4ff';
        ctx.globalAlpha = (1 - dist / maxDist) * 0.12;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  drawConnections();
  animFrame = requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
window.addEventListener('resize', () => { initParticles(); });

// ===== TYPING EFFECT =====
const roles = [
  'Software Engineer',
  'IT Operations Specialist',
  'Full-Stack Developer',
  'Data Engineer',
  'VR / AI Developer'
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-role');

function typeRole() {
  if (!typedEl) return;
  const current = roles[roleIndex];
  if (!isDeleting) {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeRole, 2000);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeRole, isDeleting ? 50 : 80);
}
setTimeout(typeRole, 800);

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // Scrolled class
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active nav link
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinksList = document.querySelector('.nav-links');
hamburger && hamburger.addEventListener('click', () => {
  navLinksList.classList.toggle('open');
});
navLinks.forEach(link => {
  link.addEventListener('click', () => navLinksList.classList.remove('open'));
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== SKILL BAR ANIMATION (Intersection Observer) =====
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(fill => {
        const w = fill.getAttribute('data-w');
        fill.style.width = w + '%';
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(cat => skillObserver.observe(cat));

// ===== FADE-IN-UP ANIMATION =====
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, entry.target.dataset.delay || 0);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Add fade-in-up to key elements
const fadeTargets = [
  '.project-card',
  '.edu-item',
  '.stat-card',
  '.contact-item',
  '.highlight-item',
  '.timeline-item',
  '.tool-badge',
  '.skill-category'
];
fadeTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('fade-in-up');
    el.dataset.delay = i * 80;
    fadeObserver.observe(el);
  });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contact-form');
contactForm && contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  const original = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
  btn.style.background = 'linear-gradient(135deg, #00ff88, #00d4ff)';
  setTimeout(() => {
    btn.innerHTML = original;
    btn.style.background = '';
    this.reset();
  }, 3000);
});

// ===== CURSOR GLOW TRAIL =====
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// ===== CARD TILT EFFECT =====
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -5;
    const rotY = ((x - cx) / cx) * 5;
    card.style.transform = `translateY(-5px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ===== GRID SCANLINE EFFECT (subtle) =====
function drawScanlines() {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 212, 255, 0.01) 2px,
      rgba(0, 212, 255, 0.01) 4px
    );
    pointer-events: none;
    z-index: 9999;
    animation: scanmove 8s linear infinite;
  `;
  document.body.appendChild(overlay);
  const style = document.createElement('style');
  style.textContent = `@keyframes scanmove { from { background-position: 0 0; } to { background-position: 0 100px; } }`;
  document.head.appendChild(style);
}
drawScanlines();

// ===== NUMBER COUNTER ANIMATION =====
function animateCounter(el, target, duration = 1500, suffix = '') {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target + suffix;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start) + suffix;
    }
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statCards = entry.target.querySelectorAll('.stat-card');
      const data = [
        { val: 2, suffix: '+' },
        { val: 100, suffix: 'K+' },
        { val: 90, suffix: '%' },
        { val: 7.0, suffix: '' }
      ];
      statCards.forEach((card, i) => {
        const numEl = card.querySelector('.stat-num');
        if (numEl && data[i]) {
          animateCounter(numEl, data[i].val, 1500, data[i].suffix);
        }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

const statSection = document.querySelector('.stat-cards');
if (statSection) statsObserver.observe(statSection.parentElement || statSection);

// ===== CONSOLE GREETING =====
console.log(`
%c
██╗  ██╗ █████╗ ██╗██████╗ ██╗    ██╗   ██╗ █████╗ ███╗   ██╗ ██████╗
██║ ██╔╝██╔══██╗██║██╔══██╗██║    ╚██╗ ██╔╝██╔══██╗████╗  ██║██╔════╝
█████╔╝ ███████║██║██║  ██║██║     ╚████╔╝ ███████║██╔██╗ ██║██║  ███╗
██╔═██╗ ██╔══██║██║██║  ██║██║      ╚██╔╝  ██╔══██║██║╚██╗██║██║   ██║
██║  ██╗██║  ██║██║██████╔╝██║       ██║   ██║  ██║██║ ╚████║╚██████╔╝
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═════╝ ╚═╝       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝
`, 'color: #00d4ff; font-family: monospace;');
console.log('%cHello, recruiter! 👋 Kaidi Yang — Software Engineer / IT Operations', 'color: #7b2fff; font-size: 14px;');
console.log('%c📧 2924335217@qq.com', 'color: #00ff88;');
