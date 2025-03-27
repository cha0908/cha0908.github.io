// Main script file to initialize components and setup the website

// Main initialization function
function initWebsite() {
  // Get the current page
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop() || 'index.html';
  
  // Initialize theme
  initTheme();
  
  // Initialize components common to all pages
  initNavbar();
  
  // Page-specific initialization
  switch(currentPage) {
    case 'index.html':
      // Index page initialization
      initSocialLinks('bottom');
      break;
      
    case 'about.html':
      // About page initialization 
      // For the about page, social links are in the content area
      // They're already in the HTML, so we don't need to initialize them
      break;
      
    case 'exp.html':
      // Experience page initialization
      break;
      
    default:
      // Default initialization for any other pages
      initSocialLinks('bottom');
  }
}

// Initialize when DOM is ready
domReady(initWebsite); 