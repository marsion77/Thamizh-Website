import React from 'react';
import { motion } from 'framer-motion';

import img1 from '../assets/media__1782216942418.jpg';
import img2 from '../assets/media__1782216942503.jpg';
import img3 from '../assets/media__1782216943739.jpg';
import img4 from '../assets/media__1782216943734.jpg';



const Gallery = () => {
  const images = [
    { src: img1, alt: "Ocean views", span: "md:col-span-2 md:row-span-2" },
    { src: img2, alt: "Nature", span: "col-span-1 row-span-1" },
    { src: img3, alt: "Birds and water", span: "col-span-1 row-span-2" },
    { src: img4, alt: "Surf and paddle", span: "col-span-1 row-span-1" },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-deepBlue mb-4"
          >
            Our Gallery
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-vibrantAccent mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group shadow-lg ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold text-xl drop-shadow-md">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
