# Kirtana's Portfolio

A modern, responsive, and animated portfolio website built with React and Vite. This portfolio showcases projects, skills, and contact information with smooth animations and a professional design.

## Features

- ✨ **Smooth Animations** - Beautiful fade-in, slide-in, and floating animations throughout
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Custom CSS Design** - No Tailwind - pure CSS with gradients and modern styling
- ⚡ **Built with Vite** - Lightning-fast development and build process
- 🚀 **React 18** - Latest version of React for optimal performance
- 📂 **Organized Structure** - Clean component-based architecture

## Sections

1. **Header Navigation** - Fixed header with smooth scroll navigation
2. **Hero Section** - Eye-catching intro with CTAs and animated shapes
3. **About** - Personal information with highlights
4. **Skills** - Categorized technical skills with animations
5. **Projects** - Showcase of featured work with hover effects
6. **Contact** - Contact form and information
7. **Footer** - Links and social media

## Technologies Used

- React 18
- Vite
- CSS3 (Animations, Gradients, Flexbox, Grid)
- JavaScript ES6+

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

Build for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── styles/
│   ├── Header.css
│   ├── Hero.css
│   ├── About.css
│   ├── Skills.css
│   ├── Projects.css
│   ├── Contact.css
│   └── Footer.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Customization

### Colors
The portfolio uses a purple gradient (`#667eea` to `#764ba2`). To change colors, update the gradient values in the CSS files.

### Content
Edit the component files to add your own information:
- Update personal details in `About.jsx`
- Add your skills in `Skills.jsx`
- Showcase your projects in `Projects.jsx`
- Update contact information in `Contact.jsx`

### Images
Replace placeholder images with your own profile pictures in the `public/` directory.

## Animation Details

The portfolio includes several animation types:
- **Fade In Up** - Elements fade in and slide up on page load
- **Slide In** - Left and right slides for different sections
- **Float** - Continuous floating animation for decorative shapes
- **Pulse** - Pulsing animations for skill dots
- **Hover Effects** - Interactive transitions on hover

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px to 1023px
- Mobile: Below 768px

## Performance Tips

1. Optimize images before deploying
2. Use lazy loading for images if needed
3. Minify CSS and JavaScript in production
4. Consider adding Web Vitals monitoring

## License

This project is open source and available under the MIT License.
