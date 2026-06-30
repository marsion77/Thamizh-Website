import React from 'react';
import { Link } from 'react-scroll';
import { FaFacebookF, FaInstagram, FaTwitter, FaWater, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // or hardcode 2026 as per prompt

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-4 border-vibrantAccent">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 border-b border-white/20 pb-10">
          
          {/* Brand */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <FaWater className="text-4xl text-vibrantAccent" />
              <span className="text-2xl font-bold text-white tracking-wide">EC Surf & Paddle</span>
            </div>
            <p className="text-gray-300 max-w-sm italic mb-6">
              "Ride the Waves, Explore the Ocean, Create Memories."
            </p>
            <div className="text-gray-400 text-sm space-y-3">
              <p className="flex items-center gap-3 justify-center md:justify-start">
                <FaPhoneAlt className="text-vibrantAccent text-lg" />
                9791351801, 9344702133
              </p>
              <p className="flex items-center gap-3 justify-center md:justify-start">
                <FaEnvelope className="text-vibrantAccent text-lg" />
                eastcoastsurfeastcoastsurf@gmail.com
              </p>
              <p className="flex items-start gap-3 justify-center md:justify-start">
                <FaMapMarkerAlt className="text-vibrantAccent text-lg mt-1 flex-shrink-0" />
                <span className="text-left">
                  B23, South Street, Chinnamuthaliyarchavadi,<br/>
                  Villupuram (Pondicherry), Tamil Nadu – 605602
                </span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-lightCyan">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Adventures', 'Gallery', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link.toLowerCase()} 
                    smooth={true} 
                    duration={500} 
                    offset={-70}
                    className="text-gray-300 hover:text-vibrantAccent cursor-pointer transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-lightCyan">Operating Hours</h4>
            <div className="text-gray-300 space-y-2">
              <p className="font-semibold text-white text-lg">Open All Days</p>
              <p className="text-vibrantAccent text-xl font-bold">5:30 AM - 6:30 PM</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-lightCyan">Follow Us</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" aria-label="Visit our Facebook page" className="bg-white/10 p-3 rounded-full hover:bg-[#1877F2] hover:text-white transition-colors text-xl">
                <FaFacebookF aria-hidden="true" />
              </a>
              <a href="#" aria-label="Visit our Instagram page" className="bg-white/10 p-3 rounded-full hover:bg-gradient-to-r hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all text-xl">
                <FaInstagram aria-hidden="true" />
              </a>
              <a href="#" aria-label="Visit our Twitter page" className="bg-white/10 p-3 rounded-full hover:bg-[#1DA1F2] hover:text-white transition-colors text-xl">
                <FaTwitter aria-hidden="true" />
              </a>
              <a href="#" aria-label="Visit our YouTube channel" className="bg-white/10 p-3 rounded-full hover:bg-[#FF0000] hover:text-white transition-colors text-xl">
                <FaYoutube aria-hidden="true" />
              </a>
              <a href="#" aria-label="Contact us on WhatsApp" className="bg-white/10 p-3 rounded-full hover:bg-[#25D366] hover:text-white transition-colors text-xl">
                <BsWhatsapp aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-400">
          <p>&copy; {currentYear} East Coast Surf and Paddle. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
