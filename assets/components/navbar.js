// Navbar component
function createNavbar() {
  // Determine current page to set active links
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Create navbar HTML
  const navbar = document.createElement('div');
  navbar.className = 'navbar';
  
  // Logo section
  const logoDiv = document.createElement('div');
  logoDiv.id = 'logo-div';
  
  const logoLink = document.createElement('a');
  logoLink.href = 'index.html';
  
  const logo = document.createElement('img');
  logo.id = 'logo';
  logo.src = 'assets/img/logoisaac.png';
  
  logoLink.appendChild(logo);
  logoDiv.appendChild(logoLink);
  
  // Navigation options
  const options = document.createElement('div');
  options.id = 'options';
  
  // Experience link
  const expLink = document.createElement('a');
  expLink.href = 'exp.html';
  expLink.textContent = 'past experience';
  expLink.className = currentPage === 'exp.html' ? 'on-page' : 'off-page';
  
  // About link
  const aboutLink = document.createElement('a');
  aboutLink.href = 'about.html';
  aboutLink.textContent = 'personal information';
  aboutLink.className = currentPage === 'about.html' ? 'on-page' : 'off-page';
  
  options.appendChild(expLink);
  options.appendChild(aboutLink);
  
  // Add sections to navbar
  navbar.appendChild(logoDiv);
  navbar.appendChild(options);
  
  return navbar;
}

// Function to initialize the navbar
function initNavbar() {
  const root = document.getElementById('root');
  if (root) {
    const navbar = createNavbar();
    if (root.firstChild) {
      root.insertBefore(navbar, root.firstChild);
    } else {
      root.appendChild(navbar);
    }
  }
}

// Initialize navbar when DOM is loaded
document.addEventListener('DOMContentLoaded', initNavbar); 