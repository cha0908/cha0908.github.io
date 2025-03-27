// Utility functions for the website

/**
 * Utility function to check if the DOM is fully loaded
 * @param {Function} callback - Function to run after DOM is loaded
 */
function domReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
}

/**
 * Utility function to add multiple event listeners to an element
 * @param {HTMLElement} element - The DOM element to add listeners to
 * @param {Array} events - Array of event types
 * @param {Function} handler - Event handler function
 */
function addMultipleEventListeners(element, events, handler) {
  events.forEach(event => {
    element.addEventListener(event, handler);
  });
}

/**
 * Creates an element with attributes and children
 * @param {String} tag - The HTML tag name
 * @param {Object} attributes - Object containing attributes to set
 * @param {Array|HTMLElement|String} children - Child elements to append
 * @returns {HTMLElement} The created element
 */
function createElement(tag, attributes = {}, children = []) {
  const element = document.createElement(tag);
  
  // Set attributes
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'className') {
      element.className = value;
    } else if (key === 'style') {
      Object.entries(value).forEach(([prop, val]) => {
        element.style[prop] = val;
      });
    } else {
      element.setAttribute(key, value);
    }
  });
  
  // Add children
  if (children) {
    if (Array.isArray(children)) {
      children.forEach(child => {
        if (typeof child === 'string') {
          element.appendChild(document.createTextNode(child));
        } else if (child instanceof HTMLElement) {
          element.appendChild(child);
        }
      });
    } else if (typeof children === 'string') {
      element.textContent = children;
    } else if (children instanceof HTMLElement) {
      element.appendChild(children);
    }
  }
  
  return element;
}

// Export utilities
window.domReady = domReady;
window.addMultipleEventListeners = addMultipleEventListeners;
window.createElement = createElement; 