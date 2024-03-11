import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  // Animation variants for the hover effect
  const hoverVariants = {
    hover: { scale: 1.1 }, // Enlarges the image by 10%
  };

  return (
    <motion.section id="services" className="services-section" style={{ textAlign: 'center' }}>
      <h2>SERVICES</h2>
      <div className="services-images">
        {/* Existing images */}
        <motion.img src="/serv-1.png" alt="Service 1" variants={hoverVariants} whileHover="hover" className="service-image" />
        <motion.img src="/serv-2.png" alt="Service 2" variants={hoverVariants} whileHover="hover" className="service-image" />
        <motion.img src="/serv-3.png" alt="Service 3" variants={hoverVariants} whileHover="hover" className="service-image" />
      </div>
      <div className="services-new-images" style={{ backgroundImage: "url('/rectangle.jpeg')" }}>
        {/* New images with rectangle.jpeg as a background */}
        {[4, 5, 6, 7, 8].map((index) => (
          <motion.img
            key={index}
            src={`/serv-${index}.png`}
            alt={`Service ${index}`}
            variants={hoverVariants}
            whileHover="hover"
            className="new-service-image"
          />
        ))}
      </div>
      <div className="plus-logo-container-2">
        <img src="/plus-2.png" alt="Plus Logoo" className="plus-logo-2" />
      </div>
    </motion.section>
  );
};

export default Services;