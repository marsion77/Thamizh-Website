import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-deepBlue mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-vibrantAccent mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="max-w-5xl mx-auto bg-oceanBlue text-white p-6 md:p-16 rounded-3xl shadow-2xl flex flex-col items-center text-center">
          <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
          <p className="mb-12 text-lightCyan max-w-2xl text-lg">We'd love to hear from you. Reach out to us for any inquiries or to book your adventure.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-accentLime text-4xl mb-2"><FaPhoneAlt /></div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-deepBlue">Phone Number</h4>
                <p className="text-gray-600 font-medium">+91 9791351801<br/>+91 9344702133</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-vibrantAccent text-4xl mb-2"><FaEnvelope /></div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-deepBlue">Email</h4>
                <p className="text-gray-600 font-medium break-all">eastcoastsurfeastcoastsurf<br/>@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-2xl shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-accentOrange text-4xl mb-2"><FaMapMarkerAlt /></div>
              <div>
                <h4 className="font-bold text-xl mb-2 text-deepBlue">Address</h4>
                <p className="text-gray-600 font-medium">B23, South Street,<br/>Chinnamuthaliyarchavadi,<br/>Villupuram (Pondicherry), TN – 605602</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-lg h-96 relative border border-gray-200">
          {/* We use an iframe for Google maps placeholder of East Coast Road, Chennai */}
          <iframe 
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124403.45422896695!2d80.1706691!3d12.9348123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525cf015482315%3A0xc367cefc7f6ebdc6!2sEast%20Coast%20Rd%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1655883204938!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
