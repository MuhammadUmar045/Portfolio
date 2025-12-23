import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiUsers, FiAward, FiCoffee } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: FiCode, number: '30+', label: 'Projects Completed' },
    { icon: FiUsers, number: '20+', label: 'Happy Clients' },
    { icon: FiAward, number: '3+', label: 'Years Experience' },
    { icon: FiCoffee, number: '1000+', label: 'Cups of Coffee' },
  ];

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
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src={`${process.env.PUBLIC_URL}/umar.png`}
                  alt="Muhammad Umar Farooq"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="text-center text-primary-600">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <p className="text-lg font-medium">Muhammad Umar Farooq</p>
                    <p className="text-sm opacity-75">Add your photo to public/umar.png</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-dark-900 mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-primary-600 rounded-full mb-6"></div>
            </div>

            <div className="space-y-4 text-dark-600 leading-relaxed">
              <p>
                I'm a passionate Full Stack Web Developer with a strong foundation in modern web technologies. 
                I love creating elegant solutions to complex problems and building applications that make a difference.
              </p>
              <p>
                With expertise in both frontend and backend development, I specialize in creating responsive, 
                user-friendly web applications that deliver exceptional user experiences. I'm constantly 
                learning and staying up-to-date with the latest industry trends and best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center p-4 bg-dark-50 rounded-lg"
                >
                  <stat.icon className="mx-auto mb-2 text-primary-600" size={24} />
                  <div className="text-2xl font-bold text-dark-900">{stat.number}</div>
                  <div className="text-sm text-dark-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-6 flex gap-4">
              <a
                href="/umar_cv.pdf"
                download="umar_cv.pdf"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Download CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
              <a
                href="/Muhammad_Umar_Farooq_Resume.pdf"
                download="Muhammad_Umar_Farooq_Resume.pdf"
                className="btn-primary inline-flex items-center gap-2"
              >
                Download Resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 