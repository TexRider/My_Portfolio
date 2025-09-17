// Contact.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email using EmailJS
    emailjs.sendForm(
      'service_23di8re', // Replace with your EmailJS service ID
      'template_9xcv29c', // Replace with your EmailJS template ID
      formRef.current,
      'OTe1d1ZGgbZsRUDuc' // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error(error.text);
      alert("Failed to send message. Please try again.");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  // Phone number and WhatsApp functions
  const phoneNumber = "+94761987997";
  
  const handleCall = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}`);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.h2
          className="section-title text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Let's talk about your project
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm currently available for freelance work. If you have a project
              that you want to get started or think you need my help with
              something, then get in touch.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-indigo-600 dark:text-indigo-400"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Colombo 14, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <i className="fas fa-envelope text-indigo-600 dark:text-indigo-400"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Email
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    it18038910study@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <i className="fas fa-phone text-indigo-600 dark:text-indigo-400"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Phone
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +94 (76) 198-7997
                  </p>
                  <div className="flex gap-3 mt-3">
                    <motion.button
                      onClick={handleCall}
                      className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg flex items-center justify-center gap-2 w-full shadow-lg"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px -10px rgba(59, 130, 246, 0.5)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.5 }
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 2
                        }}
                        className="w-5 h-5 flex items-center justify-center"
                      >
                        <i className="fas fa-phone"></i>
                      </motion.div>
                      <span>Call Now</span>
                    </motion.button>
                    
                    <motion.button
                      onClick={handleWhatsApp}
                      className="px-4 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg flex items-center justify-center gap-2 w-full shadow-lg"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px -10px rgba(34, 197, 94, 0.5)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.7 }
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                        className="w-5 h-5 flex items-center justify-center"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </motion.div>
                      <span>WhatsApp</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn-primary w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;