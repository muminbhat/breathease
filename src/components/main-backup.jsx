import '../style.css';
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import About from './About';
import { motion } from 'framer-motion';


const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" // Adjust the size as needed
    height="24" // Adjust the size as needed
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFFFFF" // White check mark
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-check-circle"
  >
    <circle cx="12" cy="12" r="10" fill="#F33764" /> {/* Red circle */}
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const Main = () => {
  return (

    <div>
      <div className="top-bar">
        <div className="contact-info">
          <FiPhoneCall /> 9650328664
          <a href="mailto:pulmonologist.dr.tarunsharma@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
            <MdEmail /> pulmonologist.dr.tarunsharma@gmail.com
          </a>
        </div>
      </div>
      <nav className="navbar" style={{ backgroundColor: '#F3F3F3' }}>
        <div className="nav-container">
          <img src="/breathease-top.jpg" alt="Breathease Logo" className="logo" />
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#get-in-touch">Get in Touch</a>
            <button onClick={() => window.location.href = '#bookanappointment'}>Book an Appointment</button>
          </div>
        </div>
      </nav>
      {/* New Section Below Navbar */}
      <section className="main-gallery">
        
  <div className="gallery-text">
    <div className="texts">
      <h2>Chest Medicine</h2>
      <p> <CheckIcon /> Diagnosis and Treatment: Respiratory condition identification, intervention.</p>
      <p><CheckIcon /> Pulmonary Function: Lung capacity assessment, airflow optimization.</p>
      <p><CheckIcon /> Preventive Care: Smoking cessation, vaccination, environmental education.</p>
    </div>
  </div>
  <div className="button-container">
    <button onClick={() => window.location.href = '#services'} className="view-services-btn">View Services</button>
  </div>
</section>
<About /> 


      {/* Additional content can be added here */}
      
    </div>
    
  );
  
};

export default Main;