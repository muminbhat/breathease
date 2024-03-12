import React, { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import api from '../key/backend';

const swal = require("sweetalert2");

const BookAnAppointment = () => {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        comments: "",
      });
    
      const [loading, setLoading] = useState(false);
      const [errorMessage, setErrorMessage] = useState(null); // Use errorMessage state for displaying errors
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const response = await axios.post(
            `${api}api/appointment/post/`,
            formData
          );
          if (response.status === 201) {
            // Contact created successfully
            setLoading(false);
            setErrorMessage(null);
            console.log("Contact created successfully");
            setSubmitted(true);
            swal.fire({
              title: "Contact Successful",
              icon: "success",
              toast: true,
              timer: 6000,
              position: "top-right",
              timerProgressBar: true,
              showConfirmButton: false,
            });
          }
        } catch (error) {
          if (error.response && error.response.status === 400) {
            console.error("Error:", error.response.data);
            setErrorMessage("Failed to contact. Please try again.");
            setLoading(false);
            swal.fire({
              title: "Failed to Contact",
              icon: "error",
              toast: true,
              timer: 5000,
              position: "top-right",
              timerProgressBar: false,
              showCloseButton: true,
              showConfirmButton: false,
            });
          } else {
            console.error("Network Error:", error);
            setErrorMessage("Network error. Please try again later.");
            setLoading(false);
            swal.fire({
              title: "Please Try Again Later",
              icon: "error",
              toast: true,
              timer: 5000,
              position: "top-right",
              timerProgressBar: false,
              showCloseButton: true,
              showConfirmButton: false,
            });
          }
        }
      };

    const [modalContent, setModalContent] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showTerms = (e) => {
        e.preventDefault();
        setModalContent(
          <p><b>Terms and Conditions for Online Appointment Booking with Dr. Tarun Sharma</b><br></br> 
          Welcome to Dr. Tarun Sharma’s online appointment booking. By booking an appointment through our website, you agree to be bound by these Terms and Conditions. Please read them carefully before making an appointment.<br></br>
          <b>1. Acceptance of Terms:</b> By booking an appointment, you signify your agreement to these terms. If you do not agree to these terms, please do not proceed with booking an appointment.<br></br>
  <b>2. Appointment Booking:</b> Appointments made are subject to confirmation. You will receive a confirmation via email or SMS. Dr. Tarun Sharma reserves the right to reschedule or cancel appointments due to unforeseen circumstances.<br></br>
  <b>3. Cancellation Policy:</b> If you need to cancel or reschedule your appointment, please do so at least 24 hours in advance to avoid cancellation fees.<br></br>
  <b>4. Privacy Policy:</b> Your personal information will be processed in accordance with our privacy policy. By accepting these terms, you also agree to our privacy policy.<br></br>
  <b>5. Payment:</b> Payment for consultations is due at the time of service. We accept various forms of payment, detailed on our website.<br></br>
  <b>6. Disclaimer:</b> The medical information provided by Dr. Tarun Sharma is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.<br></br>
  <b>7. Limitation of Liability:</b> Dr. Tarun Sharma shall not be liable for any damages arising out of or in connection with your use of the appointment booking service.<br></br>
  <b>8. Changes to Terms:</b> Dr. Tarun Sharma reserves the right to modify these terms at any time. Your continued use of the appointment booking service following any such change constitutes your agreement to the new terms.<br></br>
  <b>9. Governing Law:</b> These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Dr. Tarun Sharma practices, without giving effect to any principles of conflicts of law.<br></br>
  For any questions or concerns regarding these terms, please contact us.<br></br>
  <b>Thank you for choosing Dr. Tarun Sharma for your pulmonology needs.</b>
  </p>
        );
        setIsModalVisible(true);
    };

    const showPrivacyPolicy = (e) => {
        e.preventDefault();
        setModalContent(
          <p>
          <b>Privacy Policy for Dr. Tarun Sharma’s Pulmonology Booking Website</b><br></br>
          Welcome to Dr. Tarun Sharma’s pulmonology booking website. Your privacy is critically important to us. This privacy policy outlines the types of personal information received and collected by our website and how it is used.<br></br>
          <b>1. Information Collection:</b> We collect information from you when you book an appointment, including your name, contact information, and medical history relevant to your pulmonology care. This information is used to schedule your appointments and provide personalized medical care.<br></br>
          <b>2. Use of Information:</b> Your information is used to fulfill your appointment requests, improve our service, and communicate with you about your appointments or services we think may be of interest to you.<br></br>
          <b>3. Confidentiality:</b> We respect your confidentiality. Your personal information will not be shared with third parties, except as necessary to provide our services (e.g., sharing information with medical billing services) or as required by law.<br></br>
          <b>4. Data Security:</b> We are committed to ensuring that your information is secure. We have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.<br></br>
          <b>5. Cookies:</b> Our website may use "cookies" to enhance user experience. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.<br></br>
          <b>6. Links to Other Websites:</b> Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites.<br></br>
          <b>7. Changes to This Privacy Policy:</b> We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.<br></br>
          <b>8. Your Acceptance of These Terms:</b> By using this site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our site.<br></br>
          <b>9. Contacting Us:</b> If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us.<br></br>
          <b>Your privacy is of utmost importance to us at Dr. Tarun Sharma’s clinic.</b>
          </p>
        );
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <section id="bookanappointment" className="book-appointment-section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
            <h2>Book An Appointment</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '900px', width: '100%', margin: 'auto', flexWrap: 'wrap' }}>
                <form onSubmit={handleSubmit} style={{ width: '60%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <input type="text" name="first_name" placeholder="First Name" 
                    value={formData.first_name}
                    onChange={handleChange}
                    required style={{ width: '48%' }} />
                    <input type="text" name="last_name" placeholder="Last Name" required style={{ width: '48%' }}
                    value={formData.last_name}
                    onChange={handleChange}
                    />
                    <input type="email" name="email" placeholder="Email" required style={{ width: '100%' }} 
                    value={formData.email}
                    onChange={handleChange}
                    />
                    <input type="number" name="phone_number" placeholder="Phone Number" required style={{ width: '100%' }}
                    value={formData.phone_number}
                    onChange={handleChange}
                    />
                    <textarea name="comments" placeholder="Comments" style={{ width: '100%' }}
                    value={formData.comments}
                    onChange={handleChange}
                    ></textarea>
                    <div style={{ width: '100%', margin: '10px 0' }}>
                        <input type="checkbox" id="terms" name="terms" required />
                        <label htmlFor="terms" style={{ marginLeft: '5px' }}>
                            By Submitting you are agreed to the <a href="#!" onClick={showTerms}>Terms & Conditions</a>, and <a href="#!" onClick={showPrivacyPolicy}>Privacy Policy</a>.
                        </label>
                    </div>
                    <button type="submit" style={{ backgroundColor: '#00B2EC', color: '#FFFFFF', borderRadius: '20px', padding: '10px 20px', border: 'none', cursor: 'pointer', width: '100%' }}>Submit</button>
                </form>
                <img src="/book-desk.png" alt="Book Desk" className="slide-in-right" style={{ width: '35%', right: '-90px', position: 'relative' }} />
            </div>
            <Modal 
                isVisible={isModalVisible} 
                content={<p>{modalContent}</p>} 
                onClose={closeModal} 
            />
        </section>
    );
};

export default BookAnAppointment;
