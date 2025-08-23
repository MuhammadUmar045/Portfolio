import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mobile', name: 'Mobile' },
  ];

  const projects = [
    {
      id: 1,
      title: 'AI Powered Space Mission and Satellite Tracking System',
      description: 'A full-stack platform for space mission planning, satellite tracking, and debris monitoring with AI-powered predictions, real-time tracking, collision risk assessment, and 3D visualizations.',
      image: 'Space-mission.png',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/AhmadFaraz007/AI-Powered-Space-Mission-and-Satellite-Tracking-System-',
      live: null, // No live demo available yet
      featured: true,
    },
    {
      id: 2,
      title: 'Multi-Vendor-Ecommerce',
      description: 'A multi-vendor eCommerce platform built with PHP and MySQL, featuring product browsing, secure shopping, and an admin dashboard to manage vendors, products, orders, and customers.',
      image: 'Multi-Vendor.png',
      category: 'fullstack',
      technologies: ['PHP', 'MySQL', 'Tailwind CSS'],
      github: 'https://github.com/AhmadFaraz007/Multi-Vendor-Ecommerce',
      live: null, // No live demo available yet
      featured: true,
    },
    {
      id: 3,
      title: 'WordPress-Administration-Panel ',
      description: 'A PHP-based backend interface that powers the WordPress admin dashboard, built with PHP, JavaScript, and CSS. It enables content management, user administration, plugin and theme management, and complete system configuration.',
      image: 'Wordpress-panel.png',
      category: 'fullstack',
      technologies: ['PHP', 'JavaScript', 'CSS3'],
      github: 'https://github.com/AhmadFaraz007/WordPress-Administration-Panel',
      live: null, // No live demo available yet
      featured: false,
    },
    {
      id: 4,
      title: 'SmartEducation_Portal',
      description: 'A centralized education platform with role-based dashboards for students, faculty, and admins, built with PHP and MySQL, enabling course exploration, enrollment, management, recommendations, and performance tracking.',
      image: 'SmartEDU-Portal.png',
      category: 'fullstack',
      technologies: ['Javascript', 'PHP', 'MySQL'],
      github: 'https://github.com/AhmadFaraz007/SmartEducation_Portal',
      live: null, // No live demo available yet
      featured: false,
    },
    {
      id: 5,
      title: 'Movie-Catalog-Web-App',
      description: 'A dynamic movie catalog web app built with PHP, MySQL, and AJAX, featuring movie browsing, search, ratings, comments, and user accounts, along with an admin dashboard for managing movies, users, and content.',
      image: 'CineScope.png',
      category: 'frontend',
      technologies: ['AJAX', 'PHP', 'MySQL', 'JavaScript'],
      github: 'https://github.com/AhmadFaraz007/Movie-Catalog-Web-App',
      live: null, // No live demo available yet
      featured: false,
    },
    {
      id: 6,
      title: 'GYM-Management-System',
      description: 'A comprehensive gym management system built with PHP, MySQL, Bootstrap, and JavaScript, featuring role-based dashboards for admins, trainers, and members. Includes membership and workout management, progress tracking, chat system, and AI-powered fitness recommendations.',
      image: 'Flexfusion.png',
      category: 'mobile',
      technologies: ['BootStrap', 'JavaScript', 'PHP'],
      github: 'https://github.com/AhmadFaraz007/GYM-Management-System',
      live: null, // No live demo available yet
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-900 mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge 
            and showcases different aspects of my development skills.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-dark-100 text-dark-600 hover:bg-dark-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-dark-100"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-dark-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-dark-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <FiGithub size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-dark-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      <FiExternalLink size={18} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-dark-600 mb-6">
            Want to see more of my work?
          </p>
          <button
            onClick={() => window.open('https://github.com/AhmadFaraz007', '_blank')}
            className="btn-primary inline-flex items-center gap-2"
          >
            <FiGithub size={20} />
            View More on GitHub
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 