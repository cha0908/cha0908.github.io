// Theme toggle component to switch between light and dark mode

/**
 * Creates and appends the theme toggle button to the page
 */
function createThemeToggle() {
  // Create button element
  const themeToggle = document.createElement('button');
  themeToggle.id = 'theme-toggle';
  themeToggle.title = 'Toggle dark/light mode';
  themeToggle.setAttribute('aria-label', 'Toggle dark/light mode');
  
  // Create SVG for sun/moon icon
  const isDarkMode = document.body.classList.contains('dark-theme');
  themeToggle.innerHTML = isDarkMode 
    ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 9c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-18c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>` 
    : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10s-4.48-10-10-10z"/></svg>`;
  
  // Add click event listener
  themeToggle.addEventListener('click', toggleTheme);
  
  // Append to body
  document.body.appendChild(themeToggle);
  
  return themeToggle;
}

/**
 * Toggles between light and dark theme
 */
function toggleTheme() {
  const isDarkMode = document.body.classList.contains('dark-theme');
  const themeToggle = document.getElementById('theme-toggle');
  
  if (isDarkMode) {
    // Switch to light mode
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65s-2.01 6.92-5 8.65c1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10s-4.48-10-10-10z"/></svg>`;
  } else {
    // Switch to dark mode
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 9c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-18c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`;
  }
}

/**
 * Initializes the theme based on user preference
 */
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-theme');
  }
  
  createThemeToggle();
}

// Export for use in other files
window.initTheme = initTheme; 