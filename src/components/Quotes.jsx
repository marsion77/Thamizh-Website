import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import dolphinImg from '../assets/CroppedDolphine.png';

const Quotes = () => {
  const quotes = [
    { text: "Adventure begins where the shore ends.", color: "text-vibrantAccent", bg: "bg-vibrantAccent/5", border: "border-vibrantAccent/30" },
    { text: "Life is better in the ocean.", color: "text-accentLime", bg: "bg-accentLime/5", border: "border-accentLime/30" },
    { text: "Catch waves, not worries.", color: "text-accentCyan", bg: "bg-accentCyan/5", border: "border-accentCyan/30" },
    { text: "Every paddle stroke creates a memory.", color: "text-accentOrange", bg: "bg-accentOrange/5", border: "border-accentOrange/30" }
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
    <section className="py-24 bg-white relative overflow-visible">
      {/* Stable Dolphin 1 (Right side) */}
      <img
        src={dolphinImg}
        alt="Dolphin"
        aria-hidden="true"
        className="absolute right-10 -top-16 lg:-top-24 w-32 md:w-48 lg:w-56 object-contain drop-shadow-2xl z-50 hidden md:block pointer-events-none"
      />
      {/* Stable Dolphin 2 (Left side) */}
      <img
        src={dolphinImg}
        alt="Dolphin"
        aria-hidden="true"
        className="absolute left-10 -top-16 lg:-top-24 w-32 md:w-48 lg:w-56 object-contain drop-shadow-2xl z-50 hidden md:block pointer-events-none"
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
              className={`rounded-3xl p-10 shadow-2xl relative overflow-visible border ${quote.border} bg-white group hover:${quote.bg} transition-colors duration-500`}
            >
              {/* Quote Icon */}
              <div className={`absolute -top-6 -left-4 ${quote.color} text-7xl drop-shadow-md`}>
                <FaQuoteLeft />
              </div>
              
              <p className="text-xl font-semibold text-gray-800 relative z-10 italic mt-4 text-center leading-relaxed">
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
