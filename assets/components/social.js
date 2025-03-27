// Social media links component
function createSocialLinks(position = 'bottom') {
  // Create social links container
  const socialContainer = document.createElement('div');
  socialContainer.className = 'social';
  
  let container = socialContainer;
  
  if (position === 'bottom') {
    container.style.position = 'absolute';
    container.style.bottom = '10px';
    container.style.left = '25px';
  } else {
    // For inline positioning (used in about page)
    const socialWrapper = document.createElement('div');
    socialWrapper.id = 'social-wrapper';
    container.appendChild(socialWrapper);
    container = socialWrapper;
  }
  
  // LinkedIn icon
  const linkedinLink = document.createElement('a');
  linkedinLink.className = 'icon';
  linkedinLink.href = 'https://www.linkedin.com/in/isaaccchan/';
  linkedinLink.target = '_blank';
  
  const linkedinIcon = document.createElement('img');
  linkedinIcon.id = 'linkedin';
  linkedinIcon.src = 'assets/img/linkedin.png';
  
  linkedinLink.appendChild(linkedinIcon);
  
  // Gmail icon
  const gmailLink = document.createElement('a');
  gmailLink.className = 'icon';
  gmailLink.href = 'mailto:cha0908@bu.edu';
  
  const gmailIcon = document.createElement('img');
  gmailIcon.id = 'gmail';
  gmailIcon.src = 'assets/img/gmail.png';
  
  gmailLink.appendChild(gmailIcon);
  
  // Add icons to container
  if (position === 'bottom') {
    container.appendChild(linkedinLink);
    container.appendChild(gmailLink);
  } else {
    container.appendChild(linkedinLink);
    container.appendChild(gmailLink);
  }
  
  return socialContainer;
}

// Function to initialize social links on a page
function initSocialLinks(position = 'bottom') {
  const root = document.getElementById('root');
  if (root) {
    const socialLinks = createSocialLinks(position);
    root.appendChild(socialLinks);
  }
}

// Export for use in other files
window.initSocialLinks = initSocialLinks; 