import React from 'react';
import { motion } from 'framer-motion';

import surfingImg from '../assets/surfing.png';
import supImg from '../assets/standup_paddle.png';
import singleKayakImg from '../assets/single_kayaking.png';
import doubleKayakImg from '../assets/double_kayaking.png';
import kayak3D from '../assets/kayak_3d.png';
import dolphinImg from '../assets/CroppedDolphine.png';
import kidKayakImg from '../assets/kidkayak.png';
import manKayakImg from '../assets/mankayak.png';
import manSurfImg from '../assets/mansurf.png';

const AdventureCard = ({ adv, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -20, scale: 1.03 }}
    className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-transparent hover:border-turquoise hover:shadow-[0_20px_40px_rgba(37,211,102,0.3)] transition-all duration-300 flex flex-col group"
  >
    <div className="relative h-64 overflow-hidden">
      <img 
        src={adv.image} 
        alt={`${adv.title} in Puducherry`} 
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      {/* Price Badge (Top Right) */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg font-extrabold text-oceanBlue border border-gray-100">
        {adv.price}
      </div>
      {/* Timing Badge (Bottom Left, on image) */}
      <div className="absolute bottom-4 left-4 bg-deepBlue/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg font-semibold text-sm text-white flex items-center gap-2 border border-white/20">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-vibrantAccent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        90 mins
      </div>
    </div>
    
    <div className="p-8 flex-grow flex flex-col text-center justify-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{adv.title}</h3>
      <p className="text-gray-600 flex-grow leading-relaxed">{adv.description}</p>
    </div>
  </motion.div>
);

const Adventures = () => {
  const surfingAdventures = [
    {
      id: 1,
      title: "Group Surfing Lessons",
      image: surfingImg,
      description: "Learn to ride the waves in a fun group environment.",
      price: "Rs. 1600"
    },
    {
      id: 2,
      title: "Private Surfing Lessons",
      image: surfingImg,
      description: "Get personalized 1-on-1 coaching to master surfing faster.",
      price: "Rs. 2000"
    },
    {
      id: 3,
      title: "Stand-Up Paddling (SUP)",
      image: supImg,
      description: "Enjoy peaceful paddling while exploring the beauty of the sea.",
      price: "Rs. 1800"
    }
  ];

  const kayakingAdventures = [
    {
      id: 4,
      title: "Single Seater Sea Kayaking",
      image: singleKayakImg,
      description: "Perfect for solo adventurers who love exploring the water.",
      price: "Rs. 1500"
    },
    {
      id: 5,
      title: "Double Seater Sea Kayaking",
      image: doubleKayakImg,
      description: "Share the adventure and enjoy memorable moments together.",
      price: "Rs. 2500"
    },
    {
      id: 6,
      title: "Mangrove Single Seater",
      image: singleKayakImg,
      description: "Explore the serene mangroves at your own pace.",
      price: "Rs. 1200"
    },
    {
      id: 7,
      title: "Mangrove Double Seater",
      image: doubleKayakImg,
      description: "Paddle through the beautiful mangroves with a partner.",
      price: "Rs. 2500"
    }
  ];

  return (
    <section id="adventures" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative">
        
        {/* SECTION 1: Surfing & SUP */}
        <div className="text-center mb-12 relative overflow-visible mt-10">
          
          {/* Static Man Surf Decoration (Left Side, above first heading) */}
          <img
            src={manSurfImg}
            alt="Man Surfing"
            aria-hidden="true"
            className="absolute -top-16 lg:-top-24 left-0 lg:left-10 w-32 md:w-48 lg:w-56 object-contain drop-shadow-2xl z-20 hidden md:block pointer-events-none"
            style={{ transform: 'scaleX(-1)' }}
          />

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-deepBlue mb-4"
          >
            Surfing & Stand-Up Paddling
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-vibrantAccent mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {surfingAdventures.map((adv, index) => (
            <AdventureCard key={adv.id} adv={adv} index={index} />
          ))}
        </div>

        {/* SECTION 2: Sea Kayaking & Mangroves */}
        <div className="text-center mb-12 relative overflow-visible mt-20">

          {/* Static Man Kayak Decoration (Left Side, Desktop/Tablet only) */}
          <img
            src={manKayakImg}
            alt="Man Kayaking"
            aria-hidden="true"
            className="absolute -top-10 lg:-top-20 left-0 lg:left-10 w-32 md:w-48 lg:w-56 object-contain drop-shadow-2xl z-20 hidden md:block pointer-events-none"
            style={{ transform: 'scaleX(-1)' }}
          />

          {/* Static Kid Kayak Decoration (Right Side, Desktop/Tablet only) */}
          <img
            src={kidKayakImg}
            alt="Kid Kayaking"
            aria-hidden="true"
            className="absolute -top-10 lg:-top-20 right-0 lg:right-10 w-32 md:w-48 lg:w-56 object-contain drop-shadow-2xl z-20 hidden md:block pointer-events-none"
          />

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-deepBlue mb-4"
          >
            Discover Sea Kayaking
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-vibrantAccent mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kayakingAdventures.map((adv, index) => (
            <AdventureCard key={adv.id} adv={adv} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Adventures;
