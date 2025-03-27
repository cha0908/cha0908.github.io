# Isaac Chan's Personal Website

A modern, responsive personal portfolio website for Isaac Chan.

## Project Structure

```
.
├── assets/
│   ├── components/    # Reusable JavaScript components
│   │   ├── navbar.js  # Navigation bar component
│   │   ├── social.js  # Social media links component
│   │   └── theme-toggle.js # Dark/light mode toggle
│   ├── docs/          # Documents (resume, etc.)
│   ├── fonts/         # Custom fonts
│   ├── img/           # Images and logos
│   ├── js/            # JavaScript files
│   │   ├── carousel.js # Image carousel functionality
│   │   ├── main.js    # Main JavaScript file
│   │   └── utils.js   # Utility functions
│   └── styles/        # CSS stylesheets
│       ├── about.css  # About page styles
│       ├── common.css # Shared styles
│       ├── exp.css    # Experience page styles
│       └── index.css  # Home page styles
├── about.html         # About page
├── exp.html           # Experience page
├── index.html         # Home page
└── README.md          # This file
```

## Features

- Responsive design that works on desktop, tablet, and mobile devices
- Modular JavaScript components for easier maintenance
- CSS variables for consistent styling
- Optimized for performance
- Semantic HTML for better accessibility
- Dark/light mode toggle with system preference detection and user preference saving

## Running the Website

This is a static website, so you can run it locally by:

1. Clone the repository
2. Open any of the HTML files in a web browser

Alternatively, you can use a simple local server like Python's built-in HTTP server:

```bash
# If you have Python 3 installed
python -m http.server

# If you have Python 2 installed
python -m SimpleHTTPServer
```

Then visit `http://localhost:8000` in your browser.

## Development

### Adding a New Page

1. Create a new HTML file based on the existing templates
2. Add appropriate links in the navbar component
3. Create a CSS file in the assets/styles/ directory if needed
4. Update the main.js file to handle any page-specific initialization

### Modifying Components

The website uses a component-based architecture for maintainability:

- `navbar.js` - Controls the navigation bar at the top of each page
- `social.js` - Manages the social media links
- `theme-toggle.js` - Handles dark/light mode preferences
- `utils.js` - Contains utility functions used across the site
- `main.js` - Initializes components and handles page-specific logic

### Dark Mode

The website supports both light and dark mode:

- Automatically detects user's system preference
- Allows manual toggling via a button in the bottom-right corner
- Saves user preference in localStorage
- Uses CSS variables for easy theming

## Browser Support

The website is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- Fonts: ITC Avant Garde Gothic, Roboto
- Built with HTML, CSS, and JavaScript
