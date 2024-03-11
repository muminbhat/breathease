import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  // Animation variants for the hover effect
  const hoverVariants = {
    hover: { scale: 1.1 } // Enlarges the image by 10%
  };

  return (
    <motion.section id="services" className="services-section" style={{ textAlign: 'center' }}>
      <h2>SERVICES</h2>
      <div className="services-images">
        <motion.img
          src="/serv-1.png"
          alt="Service 1"
          variants={hoverVariants}
          whileHover="hover"
          className="service-image"
        />
        <motion.img
          src="/serv-2.png"
          alt="Service 2"
          variants={hoverVariants}
          whileHover="hover"
          className="service-image"
        />
        <motion.img
          src="/serv-3.png"
          alt="Service 3"
          variants={hoverVariants}
          whileHover="hover"
          className="service-image"
        />
      </div>
    </motion.section>
  );
};

export default Services;