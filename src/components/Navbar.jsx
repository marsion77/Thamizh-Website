import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Adventures', to: 'adventures' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-white shadow-md py-3 transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logoImg} alt="East Coast Surf & Paddle Logo" className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-md" />
          <span className="text-base md:text-xl font-bold tracking-wide text-deepBlue leading-tight drop-shadow-sm">
            East Coast<br/>
            <span className="text-oceanBlue text-sm md:text-xl block md:inline">Surf & Paddle</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  activeClass="!text-oceanBlue border-b-2 border-oceanBlue"
                  className="cursor-pointer font-bold text-gray-800 hover:text-oceanBlue transition-colors border-b-2 border-transparent pb-1"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="adventures" smooth={true} duration={500} offset={-100} className="bg-vibrantAccent text-deepBlue font-bold px-6 py-3 rounded-full hover:bg-yellow-400 hover:scale-105 transition-all shadow-lg cursor-pointer">
            Book Now
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)} className="text-3xl text-deepBlue focus:outline-none">
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {navOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setNavOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 w-64 h-screen bg-white shadow-2xl z-50 md:hidden flex flex-col"
            >
              <div className="flex justify-end p-6">
                <button onClick={() => setNavOpen(false)} className="text-3xl text-deepBlue focus:outline-none">
                  <FaTimes />
                </button>
              </div>
              <ul className="flex flex-col py-4 mt-2">
                {navLinks.map((link, index) => (
                  <li key={index} className="w-full">
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      activeClass="!text-oceanBlue border-l-4 border-oceanBlue bg-gray-50"
                      onClick={() => setNavOpen(false)}
                      className="block w-full py-4 px-8 text-xl font-bold text-gray-800 hover:text-oceanBlue border-l-4 border-transparent transition-all"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-8 px-6">
                  <Link to="adventures" smooth={true} duration={500} offset={-100} onClick={() => setNavOpen(false)} className="bg-vibrantAccent text-deepBlue font-bold py-4 rounded-full shadow-md cursor-pointer block text-center w-full">
                    Book Now
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
