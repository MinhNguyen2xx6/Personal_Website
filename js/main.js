// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

// FontAwesome Icons
const iconDark = `<i class="fa-solid fa-moon"></i>`;
const iconLight = `<i class="fa-solid fa-sun"></i>`;

// Check local storage or system preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Initialize theme
if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
  htmlEl.setAttribute('data-theme', 'light');
  if (themeToggleBtn) themeToggleBtn.innerHTML = iconDark;
} else {
  if (themeToggleBtn) themeToggleBtn.innerHTML = iconLight;
}

// Toggle listener
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    if (currentTheme === 'light') {
      htmlEl.removeAttribute('data-theme'); // default is dark
      localStorage.setItem('theme', 'dark');
      themeToggleBtn.innerHTML = iconLight;
    } else {
      htmlEl.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      themeToggleBtn.innerHTML = iconDark;
    }
  });
}
