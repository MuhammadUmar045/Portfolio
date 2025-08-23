import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.USER_ID);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: EMAILJS_CONFIG.TO_EMAIL,
        },
        EMAILJS_CONFIG.USER_ID
      );
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'farazcui007@gmail.com',
      href: 'mailto:farazcui007@gmail.com',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+92 306 5371114',
      href: 'tel:+923065371114',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Vehari, Pakistan',
      href: 'https://www.google.com/maps/place/Vehari,+Punjab,+Pakistan/@30.1833333,71.6666667,13z/data=!3m1!4b1!4m5!3m4!1s0x393b2a377168419b:0x16b03542b8cf7575!8m2!3d30.1833333!4d71.6666667',
    },
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
    <section id="contact" className="section-padding bg-dark-50">
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to work together or just want to say hello!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-dark-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-dark-600 leading-relaxed mb-8">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 group"
                >
                  <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors duration-200">
                    <info.icon className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-900">{info.title}</h4>
                    <p className="text-dark-600">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-dark-900 mb-2">Current Status</h4>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-dark-600">Available for new opportunities</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-dark-900 mb-6">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm">Thank you for your message. I will get back to you soon.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <p className="font-medium">Failed to send message.</p>
                  <p className="text-sm">Please try again or contact me directly at farazcui007@gmail.com</p>
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="farazcui007@gmail.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 