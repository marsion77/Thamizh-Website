import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const whatsappUrl = "https://wa.me/919791351801?text=Hello%20East%20Coast%20Surf%20and%20Paddle%2C%0A%0AI%20came%20across%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20ocean%20adventures%20and%20pricing.%0A%0APlease%20share%20the%20details.%0A%0AThank%20you.";

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
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-1' : 'bg-white py-2'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logoImg} alt="East Coast Surf & Paddle Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-md" />
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
          <div className="hidden lg:flex flex-col items-end mr-2">
            <span className="text-sm font-bold text-gray-800">Open All Days</span>
            <span className="text-xs font-bold text-oceanBlue">5:30 AM - 6:30 PM</span>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-oceanBlue text-white font-bold px-6 py-3 rounded-full hover:bg-deepBlue hover:scale-105 transition-all shadow-lg cursor-pointer">
            Book Now
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)} aria-label="Toggle Navigation" className="text-3xl text-deepBlue focus:outline-none">
            {navOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
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
                <button onClick={() => setNavOpen(false)} aria-label="Close Navigation" className="text-3xl text-deepBlue focus:outline-none">
                  <FaTimes aria-hidden="true" />
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
                <li className="pt-6 px-6 text-center">
                  <span className="block text-sm font-bold text-gray-600">Open All Days</span>
                  <span className="block text-base font-bold text-oceanBlue">5:30 AM - 6:30 PM</span>
                </li>
                <li className="pt-4 px-6">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setNavOpen(false)} className="bg-oceanBlue text-white font-bold py-4 rounded-full shadow-md cursor-pointer block text-center w-full hover:bg-deepBlue transition-colors">
                    Book Now
                  </a>
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
