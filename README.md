# Rescatanimal Landing Page

Simple, efficient landing page for Rescatanimal built with vanilla HTML, CSS, and JavaScript.

## About

This is a lightweight static landing page that:
- Randomly displays a cat or dog illustration
- Provides information about the Rescatanimal project
- Links to social media and contact information

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Responsive styling with flexbox
- **Vanilla JavaScript** - Minimal JavaScript for random image selection
- **No build step required** - Direct deployment of static files

## Project Structure

```
public/
├── index.html           # Main HTML file
├── styles.css           # All CSS styles
├── script.js            # JavaScript for random image
├── rescatanimal-cat.svg # Cat illustration
├── rescatanimal-dog.svg # Dog illustration
├── favicon.ico
├── logo192.png
├── logo512.png
├── manifest.json
└── robots.txt
```

## Development

To run the site locally:

```bash
npm start
```

This will start a simple HTTP server on `http://localhost:8080` using Python 3.

**Prerequisites:**
- Python 3 (for the development server)

Alternatively, you can use any static file server:

```bash
cd public
python3 -m http.server 8080
# or
npx serve public
```

## Deployment

The site is deployed using GitHub Pages:

```bash
npm run deploy
```

This will publish the `public` directory to GitHub Pages with the custom domain `rescatanimal.com`.

## Benefits of This Approach

- ✅ **Small bundle size**: ~112 KB total (vs 1.3 MB+ with React)
- ✅ **Fast load times**: No framework overhead
- ✅ **No build step**: Direct file editing and deployment
- ✅ **No dependencies**: Zero security vulnerabilities
- ✅ **Better SEO**: Content is immediately visible in HTML
- ✅ **Works without JavaScript**: Progressive enhancement
- ✅ **Easy maintenance**: Simple, straightforward codebase

## Previous Version

This landing page was previously built with React (Create React App). The conversion to vanilla HTML/CSS/JS was done to improve performance, reduce complexity, and eliminate dependency management overhead for this simple static site.
