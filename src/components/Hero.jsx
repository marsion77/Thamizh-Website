import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import heroBg from '../assets/elegant_hero_bg.png';
import surfingImg from '../assets/surfing.png';
import supImg from '../assets/standup_paddle.png';
import singleKayakImg from '../assets/single_kayaking.png';
import doubleKayakImg from '../assets/double_kayaking.png';

const Hero = () => {
  const whatsappUrl = "https://wa.me/919791351801?text=Hello%20East%20Coast%20Surf%20and%20Paddle%2C%0A%0AI%20came%20across%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20ocean%20adventures%20and%20pricing.%0A%0APlease%20share%20the%20details.%0A%0AThank%20you.";

  const floatingCards = [
    { title: "Surfing", img: surfingImg, delay: 0.2, yOffset: -20 },
    { title: "Stand-Up Paddling", img: supImg, delay: 0.4, yOffset: 20 },
    { title: "Single Kayaking", img: singleKayakImg, delay: 0.6, yOffset: -10 },
    { title: "Double Kayaking", img: doubleKayakImg, delay: 0.8, yOffset: 30 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-deepBlue/90 via-oceanBlue/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-white mb-16 lg:mb-0 -translate-y-4 md:-translate-y-10"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-white tracking-tight"
            style={{ textShadow: "0px 10px 30px rgba(0,0,0,0.8)" }}
          >
            Surfing & Paddling Adventures in <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500 drop-shadow-lg">Pondicherry</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-lg"
          >
            Surf the waves, paddle through paradise, and create unforgettable memories with East Coast Surf and Paddle.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link to="adventures" smooth={true} duration={500} offset={-70} className="flex">
              <button className="inline-flex items-center justify-center px-8 py-3 md:py-4 md:px-10 text-base md:text-lg font-bold bg-oceanBlue text-white rounded-full hover:bg-turquoise hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg border border-oceanBlue">
                Explore Adventures
              </button>
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center px-8 py-3 md:py-4 md:px-10 text-base md:text-lg font-bold text-deepBlue transition-all duration-300 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] hover:-translate-y-1 hover:scale-105 overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white via-[#e0f7fa] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></span>
              <span className="relative flex items-center gap-2">
                Book Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 text-[#00d4ff] group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Cards */}
        <div className="lg:w-1/2 w-full relative h-[400px] md:h-[500px]">
          <div className="grid grid-cols-2 gap-4 h-full relative">
            {floatingCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: card.yOffset }}
                transition={{ 
                  duration: 0.8, 
                  delay: card.delay,
                  type: "spring", 
                  stiffness: 100 
                }}
                whileHover={{ scale: 1.05, rotate: -2, zIndex: 20 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border-2 border-white/20 hover:border-turquoise hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300"
                style={{ height: '80%' }}
              >
                <img src={card.img} alt={`${card.title} classes in Puducherry`} loading="eager" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <h3 className="text-white font-bold text-lg">{card.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
