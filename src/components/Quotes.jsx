import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import dolphinImg from '../assets/CroppedDolphine.png';

const Quotes = () => {
  const quotes = [
    { text: "Adventure begins where the shore ends.", color: "text-[#ff6b6b]", bg: "bg-deepBlue border-t-4 border-t-[#ff6b6b] shadow-[0_15px_30px_rgba(255,107,107,0.15)]" },
    { text: "Life is better in the ocean.", color: "text-[#00d4ff]", bg: "bg-deepBlue border-t-4 border-t-[#00d4ff] shadow-[0_15px_30px_rgba(0,212,255,0.15)]" },
    { text: "Catch waves, not worries.", color: "text-[#1dd1a1]", bg: "bg-deepBlue border-t-4 border-t-[#1dd1a1] shadow-[0_15px_30px_rgba(29,209,161,0.15)]" },
    { text: "Every paddle stroke creates a memory.", color: "text-[#feca57]", bg: "bg-deepBlue border-t-4 border-t-[#feca57] shadow-[0_15px_30px_rgba(254,202,87,0.15)]" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
  };

  return (
    <section className="pb-24 pt-32 lg:pt-48 bg-white relative overflow-visible">
      {/* Stable Dolphin 1 (Right side) */}
      <img
        src={dolphinImg}
        alt="Dolphin"
        aria-hidden="true"
        className="absolute right-10 top-2 lg:top-4 w-32 md:w-48 lg:w-56 object-contain drop-shadow-2xl z-10 hidden md:block pointer-events-none"
      />
      {/* Stable Dolphin 2 (Left side) */}
      <img
        src={dolphinImg}
        alt="Dolphin"
        aria-hidden="true"
        className="absolute left-10 top-2 lg:top-4 w-32 md:w-48 lg:w-56 object-contain drop-shadow-2xl z-10 hidden md:block pointer-events-none"
        style={{ transform: 'scaleX(-1)' }}
      />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {quotes.map((quote, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.05 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
                scale: { duration: 0.2 }
              }}
              className={`rounded-3xl p-10 relative overflow-visible ${quote.bg} group hover:-translate-y-4 hover:scale-105 transition-all duration-300`}
            >
              {/* Quote Icon */}
              <div className={`absolute -top-6 -left-4 ${quote.color} text-7xl drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]`}>
                <FaQuoteLeft />
              </div>
              
              <p className="text-xl font-medium relative z-10 italic mt-4 text-center leading-relaxed text-gray-200">
                "{quote.text}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Quotes;
