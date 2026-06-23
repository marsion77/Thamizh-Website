import React from 'react';
import { motion } from 'framer-motion';
import ownerImg from '../assets/media__1782216943734.jpg';


const Owner = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-lightCyan rounded-full opacity-20 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-oceanBlue rounded-full opacity-10 translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 w-full flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-oceanBlue rounded-full blur-2xl opacity-30 transform translate-x-4 translate-y-4"></div>
              <img 
                src={ownerImg} 
                alt="Founder and Owner" 
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-2xl" 
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 w-full text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-6">Message from the Founder</h2>
            <div className="mb-6">
              <svg className="w-10 h-10 text-oceanBlue opacity-50 mb-4 inline-block md:block" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"></path>
              </svg>
              <p className="text-xl md:text-2xl text-gray-700 italic font-medium leading-relaxed">
                "Our mission is to help people discover the joy and excitement of ocean adventures while creating memories that last a lifetime."
              </p>
            </div>
            <div>
              <h4 className="font-bold text-oceanBlue text-xl">Founder & Owner</h4>
              <p className="text-gray-500 font-medium">East Coast Surf and Paddle</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Owner;
