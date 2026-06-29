import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul S.",
      text: "Fantastic experience! The instructors were amazing and the surfing session was unforgettable.",
    },
    {
      name: "Priya M.",
      text: "Stand-up paddling during sunrise was magical. Highly recommended!",
    },
    {
      name: "Karthik R.",
      text: "Excellent service and great equipment. Will definitely come back.",
    },
    {
      name: "Sarah J.",
      text: "The kayaking experience with my family was incredible.",
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-deepBlue relative overflow-visible">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Happy Customers
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-vibrantAccent mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white/20 flex flex-col items-center text-center hover:scale-105 transition-all duration-300"
            >
              <div className="flex text-vibrantAccent mb-4 gap-1 text-xl">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic flex-grow">"{review.text}"</p>
              <h4 className="font-bold text-oceanBlue">{review.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
