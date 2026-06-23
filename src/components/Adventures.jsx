import React from 'react';
import { motion } from 'framer-motion';

import surfingImg from '../assets/surfing.png';
import supImg from '../assets/standup_paddle.png';
import singleKayakImg from '../assets/single_kayaking.png';
import doubleKayakImg from '../assets/double_kayaking.png';

const Adventures = () => {
  const adventures = [
    {
      id: 1,
      title: "Surfing",
      image: surfingImg,
      description: "Learn to ride the waves with expert guidance and experience the excitement of surfing.",
      price: "₹1,499"
    },
    {
      id: 2,
      title: "Stand-Up Paddling",
      image: supImg,
      description: "Enjoy peaceful paddling while exploring the beauty of the sea.",
      price: "₹999"
    },
    {
      id: 3,
      title: "Single Kayaking",
      image: singleKayakImg,
      description: "Perfect for solo adventurers who love exploring the water.",
      price: "₹799"
    },
    {
      id: 4,
      title: "Double Kayaking",
      image: doubleKayakImg,
      description: "Share the adventure and enjoy memorable moments together.",
      price: "₹1,299"
    }
  ];

  return (
    <section id="adventures" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-deepBlue mb-4"
          >
            Our Adventures
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-vibrantAccent mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {adventures.map((adv, index) => (
            <motion.div
              key={adv.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={adv.image} 
                  alt={adv.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md font-bold text-oceanBlue">
                  {adv.price}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{adv.title}</h3>
                <p className="text-gray-600 flex-grow mb-6">{adv.description}</p>
                <button className="w-full py-3 rounded-full border-2 border-oceanBlue text-oceanBlue font-semibold hover:bg-oceanBlue hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Adventures;
