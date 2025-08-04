const toggleBtn = document.getElementById('dark-mode-toggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');

    // Optional: toggle dark mode on links too
    document.querySelectorAll('a').forEach(link => {
      link.classList.toggle('dark-mode');
    });

    // Save preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      toggleBtn.textContent = '☀️ Light Mode';
    } else {
      localStorage.setItem('theme', 'light');
      toggleBtn.textContent = '🌙 Dark Mode';
    }
  });

  // Load saved theme preference
  window.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      document.querySelector('header').classList.add('dark-mode');
      document.querySelector('footer').classList.add('dark-mode');
      document.querySelectorAll('a').forEach(link => {
        link.classList.add('dark-mode');
      });
      toggleBtn.textContent = '☀️ Light Mode';
    }
  });
  const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



