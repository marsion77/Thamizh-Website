import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCheck, FaLifeRing, FaMapMarkedAlt, FaSmile } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserCheck />,
      title: "Certified Instructors",
      description: "Safe and professional training."
    },
    {
      icon: <FaLifeRing />,
      title: "Quality Equipment",
      description: "Modern and reliable gear."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Scenic Locations",
      description: "Experience breathtaking coastal beauty."
    },
    {
      icon: <FaSmile />,
      title: "Memorable Adventures",
      description: "Fun experiences for everyone."
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
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
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl text-center hover:-translate-y-2 hover:bg-white/20 transition-all border border-white/10"
            >
              <div className="text-5xl text-vibrantAccent mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
