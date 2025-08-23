import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white relative overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-0 items-center w-full h-full">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 px-8 lg:px-16 xl:px-24"
        >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl lg:text-4xl font-bold gradient-text"
            >
              <span className="mr-2">👋</span>
              Hi! I'm Ahmad Faraz
            </motion.div>

            {/* Theme Toggles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex gap-3"
            >
          
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold text-dark-900 leading-tight"
            >
              Freelance{' '}
              <span className="gradient-text">Web Developer</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-dark-600 leading-relaxed max-w-lg"
            >
              I create modern, responsive web applications with clean code and exceptional user experiences. 
              Passionate about turning ideas into reality through innovative web solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Hire Me
              </Link>
              <a 
                href="/Ahmad_Faraz_CV.pdf" 
                download="Ahmad_Faraz_CV.pdf"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">30+</div>
                <div className="text-sm text-dark-600">Worldwide Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">50+</div>
                <div className="text-sm text-dark-600">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">5+</div>
                <div className="text-sm text-dark-600">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Full Colorful Background */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative min-h-screen w-full h-full bg-gradient-to-br from-blue-800 via-indigo-900 to-slate-800 flex items-center justify-center"
          >
            {/* Photo - Enhanced with visual harmony */}
            <div className="relative z-20 flex items-center justify-center p-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-slate-800/50 via-indigo-900/50 to-blue-800/50 shadow-2xl border border-white/10">
                <img
                  src="/ahmad-faraz.png"
                  alt="Ahmad Faraz"
                  className="w-auto h-auto max-w-[420px] max-h-[85vh] object-contain rounded-xl shadow-lg"
                  style={{
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15)'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center" style={{ display: 'none' }}>
              <div className="text-center text-gray-600">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-lg font-medium">Ahmad Faraz</p>
                <p className="text-sm opacity-75">Add your photo to public/ahmad-faraz.png</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default Hero; 