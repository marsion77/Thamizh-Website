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

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 bg-oceanBlue text-white p-10 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            <p className="mb-10 text-lightCyan">We'd love to hear from you. Reach out to us for any inquiries or to book your adventure.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-vibrantAccent text-2xl mt-1"><FaPhoneAlt /></div>
                <div>
                  <h4 className="font-semibold text-lg">Phone Number</h4>
                  <p className="text-gray-200">+91 9791351801<br/>+91 9344702133</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-vibrantAccent text-2xl mt-1"><FaEnvelope /></div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-200 break-all">eastcoastsurfeastcoastsurf@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-vibrantAccent text-2xl mt-1"><FaMapMarkerAlt /></div>
                <div>
                  <h4 className="font-semibold text-lg">Address</h4>
                  <p className="text-gray-200">B23, South Street, Chinnamuthaliyarchavadi,<br/>Villupuram, Tamil Nadu – 605602</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 p-10 lg:p-16">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-oceanBlue transition-shadow" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-oceanBlue transition-shadow" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-oceanBlue transition-shadow" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-oceanBlue transition-shadow" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-vibrantAccent text-deepBlue font-bold text-lg py-4 rounded-xl hover:bg-yellow-400 transition-colors shadow-md">
                Send Message
              </button>
            </form>
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
