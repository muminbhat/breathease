import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation settings for fade in
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="about"
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Ensures animation only plays once
    >
      <motion.h2
        style={{ textAlign: 'center', color: 'black' }}
        variants={containerVariants} // Use the same variants for a consistent animation
      >
        ABOUT
      </motion.h2>
      <motion.img
        src="/about-hero.png"
        alt="About Hero"
        style={{ width: '70%', height: 'auto' }} // Adjusted for better responsiveness
        variants={containerVariants} // Reuse the container variants for the image as well
      />
      <div className="plus-logo-container">
        <img src="/plus-logo.png" alt="Plus Logo" className="plus-logo" />
      </div>
    </motion.section>
  );
};

export default About;