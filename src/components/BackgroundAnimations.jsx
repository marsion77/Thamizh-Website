import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-transparent">
      
      {/* Dolphin */}
      <motion.div
        className="absolute top-1/4 left-0 w-32 h-32 text-oceanBlue/20"
        animate={{
          x: ['-10vw', '110vw'],
          y: [0, -30, 0, -40, 0],
          rotate: [0, -10, 5, -15, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 512 512" fill="currentColor" style={{ transform: 'scaleX(-1)' }}>
          <path d="M495.9 238c-12-8.3-26.6-13-41.9-13-39 0-77.9 19.3-107.5 45.4-3.5-9.1-10.4-16.7-19.9-20.9-13.4-5.9-28.7-4.1-40.4 4.1C250.7 207 192.5 160 128 160c-17.7 0-32 14.3-32 32s14.3 32 32 32c14.2 0 27.6 3.6 39.8 10-18.7 13.9-39.7 33-60.5 58.2C85.5 318.5 61.1 352 32 352c-17.7 0-32 14.3-32 32s14.3 32 32 32c48.6 0 88.5-47.5 119.5-86.4 20.3-25.5 39.6-49.7 61.5-68.5 6.4 8.7 17.5 13.3 29.3 11.7 13-1.8 24.3-11.4 27.4-24.1 33.7-25.1 76-43.7 114.3-43.7 10 0 19.3 2.1 27.6 5.8 4.2 16.5 10 33.5 17.7 50.8 15.6 35.1 35.6 62.4 56.6 62.4 17.7 0 32-14.3 32-32 0-31.1-23.7-56-51.9-66z"/>
        </svg>
      </motion.div>

      {/* Fish 1 (Small, close) */}
      <motion.div
        className="absolute top-1/2 left-0 w-16 h-16 text-turquoise/30"
        animate={{
          x: ['-5vw', '115vw'],
          y: [0, 20, -20, 10, 0],
          scale: [1, 1.2, 0.9, 1.1, 1]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
      >
        <svg viewBox="0 0 512 512" fill="currentColor">
          <path d="M492.3 227c-31.5-25.4-78.2-41-131-41-13.8 0-27.1 1.6-40.1 4.5-26.6-41.9-74.8-70.5-129.2-70.5-62 0-116.3 37.3-138.8 91.5-6.8 1.9-13.7 3.9-20.9 6.2C13.5 223.7 0 236.4 0 256s13.5 32.3 32.3 38.3c7.2 2.3 14.1 4.3 20.9 6.2 22.5 54.2 76.8 91.5 138.8 91.5 54.4 0 102.6-28.6 129.2-70.5 13 2.9 26.3 4.5 40.1 4.5 52.8 0 99.5-15.6 131-41 12.8-10.4 21.6-22.1 21.6-34 0-11.9-8.8-23.6-21.6-34zM192 344c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"/>
        </svg>
      </motion.div>

      {/* Fish 2 (Medium, slow) */}
      <motion.div
        className="absolute bottom-1/4 right-0 w-24 h-24 text-lightCyan/40"
        animate={{
          x: ['110vw', '-10vw'],
          y: [0, -15, 15, -10, 0]
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 512 512" fill="currentColor" style={{ transform: 'scaleX(-1)' }}>
          <path d="M492.3 227c-31.5-25.4-78.2-41-131-41-13.8 0-27.1 1.6-40.1 4.5-26.6-41.9-74.8-70.5-129.2-70.5-62 0-116.3 37.3-138.8 91.5-6.8 1.9-13.7 3.9-20.9 6.2C13.5 223.7 0 236.4 0 256s13.5 32.3 32.3 38.3c7.2 2.3 14.1 4.3 20.9 6.2 22.5 54.2 76.8 91.5 138.8 91.5 54.4 0 102.6-28.6 129.2-70.5 13 2.9 26.3 4.5 40.1 4.5 52.8 0 99.5-15.6 131-41 12.8-10.4 21.6-22.1 21.6-34 0-11.9-8.8-23.6-21.6-34zM192 344c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"/>
        </svg>
      </motion.div>

      {/* Kayak / Surfboard moving across water line */}
      <motion.div
        className="absolute top-[15%] left-0 w-40 h-40 text-vibrantAccent/20"
        animate={{
          x: ['-20vw', '120vw'],
          y: [0, 5, -5, 0],
          rotate: [0, 2, -2, 0]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
          delay: 10
        }}
      >
        <svg viewBox="0 0 512 512" fill="currentColor">
           <path d="M496 224L256 160 16 224C6.1 226.6 0 234.9 0 245.2 0 262.1 20 272 32 272h448c12 0 32-9.9 32-26.8 0-10.3-6.1-18.6-16-21.2z"/>
        </svg>
      </motion.div>

    </div>
  );
};

export default BackgroundAnimations;
