import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Quotes = () => {
  const quotes = [
    "Adventure begins where the shore ends.",
    "Life is better in the ocean.",
    "Catch waves, not worries.",
    "Every paddle stroke creates a memory."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-lightCyan/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {quotes.map((quote, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden border border-gray-100 group"
            >
              <div className="absolute top-4 left-4 text-oceanBlue/10 text-6xl group-hover:text-oceanBlue/20 transition-colors">
                <FaQuoteLeft />
              </div>
              <p className="text-xl font-medium text-gray-700 relative z-10 italic mt-6 text-center">
                "{quote}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Quotes;
