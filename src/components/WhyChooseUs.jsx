import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCheck, FaLifeRing, FaMapMarkedAlt, FaSmile } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserCheck />,
      title: "Certified Instructors",
      description: "Safe and professional training.",
      colorClass: "text-vibrantAccent" // Coral
    },
    {
      icon: <FaLifeRing />,
      title: "Quality Equipment",
      description: "Modern and reliable gear.",
      colorClass: "text-accentLime" // Lime
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Scenic Locations",
      description: "Experience breathtaking coastal beauty.",
      colorClass: "text-accentOrange" // Orange
    },
    {
      icon: <FaSmile />,
      title: "Memorable Adventures",
      description: "Fun experiences for everyone.",
      colorClass: "text-accentCyan" // Cyan
    }
  ];

  return (
    <section className="py-20 bg-deepBlue text-white relative overflow-hidden">
      {/* Decorative floating bubbles for more animation */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-32 h-32 bg-oceanBlue/30 rounded-full blur-2xl"
      ></motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-48 h-48 bg-turquoise/20 rounded-full blur-3xl"
      ></motion.div>
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-vibrantAccent mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl text-center hover:-translate-y-2 hover:shadow-2xl transition-all border border-gray-100 shadow-xl"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                className={`text-6xl ${feature.colorClass} mb-6 flex justify-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]`}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-deepBlue">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
