import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

// Import hero images so they get preloaded
import heroBg from '../assets/elegant_hero_bg.png';
import surfingImg from '../assets/surfing.png';
import supImg from '../assets/standup_paddle.png';
import singleKayakImg from '../assets/single_kayaking.png';
import doubleKayakImg from '../assets/double_kayaking.png';

const HERO_IMAGES = [heroBg, surfingImg, supImg, singleKayakImg, doubleKayakImg];

const Preloader = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [isSplitting, setIsSplitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount++;
      setProgress(Math.round((loadedCount / HERO_IMAGES.length) * 100));

      if (loadedCount === HERO_IMAGES.length) {
        // Show 100% briefly, then trigger wave split
        setTimeout(() => {
          setIsSplitting(true);
          // After split animation completes, remove preloader
          setTimeout(() => {
            setIsDone(true);
            onFinished();
          }, 1200);
        }, 500);
      }
    };

    HERO_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      if (img.complete) {
        handleImageLoad();
      } else {
        img.onload = handleImageLoad;
        img.onerror = handleImageLoad;
      }
    });
  }, [onFinished]);

  if (isDone) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">

      {/* ===== TOP WAVE CURTAIN ===== */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isSplitting ? '-100%' : 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 w-full h-1/2 z-[9999]"
      >
        <div className="w-full h-full bg-gradient-to-b from-[#03045e] to-[#0077b6] relative">
          {/* Wavy bottom edge */}
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="absolute -bottom-[1px] left-0 w-full h-20 sm:h-24"
          >
            <motion.path
              fill="#0077b6"
              d="M0,40 C180,100 360,0 540,50 C720,100 900,10 1080,60 C1200,90 1350,30 1440,50 L1440,0 L0,0 Z"
              animate={!isSplitting ? {
                d: [
                  "M0,40 C180,100 360,0 540,50 C720,100 900,10 1080,60 C1200,90 1350,30 1440,50 L1440,0 L0,0 Z",
                  "M0,70 C180,10 360,90 540,30 C720,0 900,80 1080,20 C1200,50 1350,80 1440,40 L1440,0 L0,0 Z",
                  "M0,40 C180,100 360,0 540,50 C720,100 900,10 1080,60 C1200,90 1350,30 1440,50 L1440,0 L0,0 Z"
                ]
              } : undefined}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </div>
      </motion.div>

      {/* ===== BOTTOM WAVE CURTAIN ===== */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isSplitting ? '100%' : 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 w-full h-1/2 z-[9999]"
      >
        <div className="w-full h-full bg-gradient-to-t from-[#03045e] to-[#0077b6] relative">
          {/* Wavy top edge */}
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="absolute -top-[1px] left-0 w-full h-20 sm:h-24"
          >
            <motion.path
              fill="#0077b6"
              d="M0,80 C180,20 360,110 540,60 C720,20 900,100 1080,50 C1200,20 1350,80 1440,60 L1440,120 L0,120 Z"
              animate={!isSplitting ? {
                d: [
                  "M0,80 C180,20 360,110 540,60 C720,20 900,100 1080,50 C1200,20 1350,80 1440,60 L1440,120 L0,120 Z",
                  "M0,50 C180,100 360,20 540,80 C720,110 900,30 1080,90 C1200,60 1350,30 1440,70 L1440,120 L0,120 Z",
                  "M0,80 C180,20 360,110 540,60 C720,20 900,100 1080,50 C1200,20 1350,80 1440,60 L1440,120 L0,120 Z"
                ]
              } : undefined}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </div>
      </motion.div>

      {/* ===== FOAM / SPRAY PARTICLES on split ===== */}
      <AnimatePresence>
        {isSplitting && (
          <>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 1,
                  x: `${10 + Math.random() * 80}vw`,
                  y: '50%',
                  scale: 0.5 + Math.random() * 0.5
                }}
                animate={{ 
                  opacity: 0,
                  y: `${i % 2 === 0 ? -20 - Math.random() * 30 : 120 + Math.random() * 30}%`,
                  x: `${10 + Math.random() * 80}vw`,
                  scale: 0
                }}
                transition={{ duration: 0.8 + Math.random() * 0.4, ease: 'easeOut' }}
                className="absolute z-[10000] w-2 h-2 sm:w-3 sm:h-3 bg-white/60 rounded-full blur-[1px]"
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* ===== CENTER CONTENT (Logo + Progress) ===== */}
      <motion.div
        animate={{ 
          opacity: isSplitting ? 0 : 1,
          scale: isSplitting ? 1.3 : 1
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="absolute inset-0 z-[10001] flex flex-col items-center justify-center pointer-events-none"
      >
        {/* Floating bubbles background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: ['-10%', '10%', '-10%'], y: ['5%', '-5%', '5%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full bg-white/5"
          />
          <motion.div
            animate={{ x: ['10%', '-10%', '10%'], y: ['-3%', '3%', '-3%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/5"
          />
        </div>

        {/* Logo with spinning rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="relative z-10 flex items-center justify-center"
        >
          {/* Rotating outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle
                cx="100" cy="100" r="95"
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="2"
                strokeDasharray="15 10"
              />
            </svg>
          </motion.div>

          {/* Rotating inner glow ring (opposite direction) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="absolute"
            style={{ width: '85%', height: '85%' }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle
                cx="100" cy="100" r="95"
                fill="none"
                stroke="rgba(0,180,216,0.4)"
                strokeWidth="3"
                strokeDasharray="40 30"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* Logo image */}
          <motion.img
            src={logo}
            alt="East Coast Surf and Paddle"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] rounded-full relative z-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative z-10 mt-8 w-48 sm:w-56"
        >
          <div className="h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00b4d8] via-white to-[#90e0ef] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Preloader;
