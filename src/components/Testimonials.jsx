import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    { name: "Rahul S.", text: "Fantastic experience! The instructors were amazing and the surfing session was unforgettable." },
    { name: "Priya M.", text: "Stand-up paddling during sunrise was magical. Highly recommended!" },
    { name: "Karthik R.", text: "Excellent service and great equipment. Will definitely come back." },
    { name: "Sarah J.", text: "The kayaking experience with my family was incredible." },
    { name: "Arjun V.", text: "First time surfing, and I felt so safe and supported by the team!" },
    { name: "Neha D.", text: "The sunset paddle session was breathtaking. Such a core memory." },
    { name: "Vikram K.", text: "Super chill vibe, top-tier gear, and the best waves. 10/10." },
    { name: "Anita P.", text: "Loved exploring the mangroves. A peaceful and beautiful escape." },
    { name: "Rohan C.", text: "The coaches really know their stuff. I actually stood up on the board!" },
    { name: "Deepa L.", text: "Great energy and community. Highly recommend for any water lovers." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeIn" }
    })
  };

  return (
    <section id="testimonials" className="py-24 bg-deepBlue relative overflow-visible">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
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

        <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center">
          
          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 md:-left-12 z-20 w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-deepBlue rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-lg"
          >
            <FaChevronLeft className="text-xl -ml-1" />
          </button>

          <div className="w-full overflow-hidden relative min-h-[300px] md:min-h-[250px] px-4 md:px-0">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col items-center text-center mx-auto max-w-3xl"
              >
                <div className="flex text-vibrantAccent mb-6 gap-1 text-2xl">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 italic text-lg md:text-2xl font-light leading-relaxed">
                  "{reviews[currentIndex].text}"
                </p>
                <h4 className="font-bold text-oceanBlue text-lg tracking-wide uppercase">
                  {reviews[currentIndex].name}
                </h4>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className="absolute right-0 md:-right-12 z-20 w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-deepBlue rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-lg"
          >
            <FaChevronRight className="text-xl -mr-1" />
          </button>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex ? 'w-8 h-3 bg-vibrantAccent' : 'w-3 h-3 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
