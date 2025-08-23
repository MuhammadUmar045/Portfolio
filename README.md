# Web Developer Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features a clean, minimal design with smooth animations and excellent user experience.

## 🚀 Features

- **Modern Design**: Clean, minimal design with beautiful gradients and animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Project Showcase**: Filterable project gallery with GitHub links and live demo options
- **Contact Form**: Functional contact form with EmailJS integration for real email sending
- **Performance Optimized**: Fast loading times and optimized bundle size
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Animation library for smooth transitions
- **React Icons** - Beautiful, customizable icons
- **React Scroll** - Smooth scrolling navigation
- **React Intersection Observer** - Scroll-triggered animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd web-developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view your portfolio

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.js`)
   - Change "Your Name" to your actual name
   - Update the description and title
   - Add your social media links

2. **About Section** (`src/components/About.js`)
   - Update the about text
   - Replace the placeholder image with your photo
   - Update statistics (projects, clients, experience, etc.)

3. **Skills Section** (`src/components/Skills.js`)
   - Modify skill categories and proficiency levels
   - Add or remove technologies as needed

4. **Projects Section** (`src/components/Projects.js`)
   - Replace placeholder projects with your actual projects
   - Update project images, descriptions, and links
   - Add your GitHub links
   - Set `live: null` for projects without live demos, or add live demo URLs
   - The "Live Demo" button only appears when a live URL is provided

5. **Contact Section** (`src/components/Contact.js`)
   - Update contact information (email, phone, location)
   - Configure EmailJS for real email sending (see `EMAILJS_SETUP.md`)
   - Alternative: Use `ContactBackup.js` for a simpler mailto approach

6. **Footer** (`src/components/Footer.js`)
   - Update social media links
   - Change contact information

### Styling

The portfolio uses Tailwind CSS with custom colors defined in `tailwind.config.js`. You can:

- Modify the primary color scheme in the config file
- Update fonts in the CSS variables
- Customize animations and transitions

### Adding Projects

To add your projects, edit the `projects` array in `src/components/Projects.js`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    image: 'path/to/project-image.jpg',
    category: 'frontend', // or 'fullstack', 'mobile'
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project',
    live: 'https://your-project.com', // Set to null if no live demo available
    featured: true, // Set to true for featured projects
  },
  // Add more projects...
];
```

**Note**: The "Live Demo" button only appears when `live` is not null. Set it to `null` for projects without live demos.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

### Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `build` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### GitHub Pages

1. **Add homepage to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio"
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 📝 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library for React
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icon library

## 📧 Contact Form Setup

The contact form is configured to send real emails using EmailJS. Follow these steps to set it up:

1. **Read the setup guide**: See `EMAILJS_SETUP.md` for detailed instructions
2. **Alternative approach**: If you prefer a simpler solution, you can use `ContactBackup.js` which opens the user's default email client

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Happy Coding! 🎉** 