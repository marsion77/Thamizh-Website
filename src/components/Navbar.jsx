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
        <div className="flex items-center cursor-pointer relative" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logoImg} alt="East Coast Surf & Paddle Logo" className="absolute -left-2 md:-left-4 top-[-30px] md:top-[-42px] w-28 h-28 md:w-40 md:h-40 object-contain drop-shadow-2xl z-50" />
          <span className="text-2xl md:text-3xl font-black tracking-wide text-deepBlue leading-tight drop-shadow-sm ml-20 md:ml-28">
            East Coast<br/>
            <span className="text-oceanBlue">Surf & Paddle</span>
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-xl absolute w-full top-full left-0 overflow-hidden"
          >
            <ul className="flex flex-col items-center py-6 gap-4">
              {navLinks.map((link, index) => (
                <li key={index} className="w-full text-center">
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    activeClass="!text-oceanBlue border-l-4 border-oceanBlue bg-gray-50"
                    onClick={() => setNavOpen(false)}
                    className="block w-full py-2 px-4 text-xl font-bold text-gray-800 hover:text-oceanBlue border-l-4 border-transparent transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link to="adventures" smooth={true} duration={500} offset={-100} onClick={() => setNavOpen(false)} className="bg-vibrantAccent text-deepBlue font-bold px-8 py-3 rounded-full shadow-md cursor-pointer block text-center">
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
