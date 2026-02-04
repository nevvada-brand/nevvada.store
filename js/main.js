/* ===================================
   Nevada Fashion - Main JavaScript
   =================================== */

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Initialize dark mode from localStorage
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    updateThemeIcon();
  }
}

// Toggle dark mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  updateThemeIcon();
}

// Update theme icon
function updateThemeIcon() {
  const isDarkMode = document.body.classList.contains('dark-mode');
  if (themeToggle) {
    themeToggle.innerHTML = isDarkMode ? '☀️' : '🌙';
  }
}

// Set active nav link
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Event listeners
if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setActiveNavLink();
  updateThemeIcon();
});

// Watch for theme changes
if (themeToggle) {
  themeToggle.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleTheme();
    }
  });
}
