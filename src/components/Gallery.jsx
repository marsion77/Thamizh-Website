import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';

import img1 from '../assets/media__1782216942418.jpg';
import img2 from '../assets/media__1782216942503.jpg';
import img3 from '../assets/media__1782216943739.jpg';
import img4 from '../assets/media__1782216943734.jpg';

// Mock data: This structure allows you to drop in hundreds of images/videos easily.
const galleryData = [
  { id: 1, type: 'image', category: 'Surfing', src: img1, alt: "Surfing the waves" },
  { id: 2, type: 'image', category: 'Nature', src: img2, alt: "Beautiful coastal nature" },
  { id: 3, type: 'image', category: 'Paddling', src: img3, alt: "Paddling in the lake" },
  { id: 4, type: 'image', category: 'Surfing', src: img4, alt: "Catching a massive wave" },
  { id: 5, type: 'video', category: 'Videos', src: img1, alt: "Surfing Tutorial Highlights" }, // Video thumbnail
  { id: 6, type: 'image', category: 'Paddling', src: img2, alt: "Sunrise paddle session" },
  { id: 7, type: 'image', category: 'Nature', src: img3, alt: "Ocean views at dusk" },
  { id: 8, type: 'image', category: 'Surfing', src: img4, alt: "Surf camp group photo" },
  { id: 9, type: 'image', category: 'Paddling', src: img1, alt: "Group paddle adventure" },
  { id: 10, type: 'image', category: 'Surfing', src: img2, alt: "Longboard cruising" },
  { id: 11, type: 'video', category: 'Videos', src: img3, alt: "Paddling Highlights Reel" },
  { id: 12, type: 'image', category: 'Nature', src: img4, alt: "Beach sunset" },
  { id: 13, type: 'image', category: 'Surfing', src: img1, alt: "High tide action" },
  { id: 14, type: 'image', category: 'Paddling', src: img2, alt: "Morning calm waters" },
  { id: 15, type: 'image', category: 'Nature', src: img3, alt: "Mangrove exploration" },
  { id: 16, type: 'image', category: 'Surfing', src: img4, alt: "Sunset surfing" }
];

const categories = ["All", "Surfing", "Paddling", "Nature", "Videos"];
const ITEMS_PER_PAGE = 8; // Number of items to load at a time

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Filter the data based on the active tab
  const filteredData = activeFilter === "All" 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);

  // Get only the items that should be visible based on visibleCount
  const visibleData = filteredData.slice(0, visibleCount);
  
  const hasMore = visibleCount < filteredData.length;

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setVisibleCount(ITEMS_PER_PAGE); // Reset pagination when filter changes
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 min-h-screen relative">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-deepBlue mb-4"
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

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleFilterChange(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category 
                  ? 'bg-oceanBlue text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {visibleData.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedMedia(item)}
                className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer aspect-square bg-gray-200"
              >
                {/* Lazy Loading Implemented Native via loading="lazy" */}
                <img 
                  src={item.src} 
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                  {item.type === 'video' && (
                    <FaPlay className="text-white text-4xl mb-3 drop-shadow-lg" />
                  )}
                  <span className="text-white font-bold text-lg text-center px-4 drop-shadow-md">
                    {item.alt}
                  </span>
                </div>
                
                {/* Video Indicator Badge */}
                {item.type === 'video' && (
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <FaPlay size={10} /> VIDEO
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={handleLoadMore}
              className="px-8 py-3 bg-white text-deepBlue border-2 border-oceanBlue font-bold rounded-full hover:bg-oceanBlue hover:text-white transition-colors duration-300 shadow-md flex items-center gap-2"
            >
              Load More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
        )}

      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedMedia(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all z-50"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMedia(null);
              }}
            >
              <FaTimes size={24} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
            >
              {selectedMedia.type === 'image' ? (
                <img 
                  src={selectedMedia.src} 
                  alt={selectedMedia.alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <div className="w-full aspect-video bg-black rounded-lg shadow-2xl flex items-center justify-center border border-white/10 relative overflow-hidden">
                  {/* Replace this with actual <video> tag when real videos are added */}
                  <img src={selectedMedia.src} className="w-full h-full object-cover opacity-50 blur-sm" />
                  <div className="absolute flex flex-col items-center">
                    <FaPlay className="text-white text-6xl mb-4 opacity-80" />
                    <p className="text-white text-xl">Video Player Placeholder</p>
                    <p className="text-white/70 text-sm mt-2">Replace with actual .mp4 source</p>
                  </div>
                </div>
              )}
              
              <div className="absolute -bottom-10 left-0 w-full text-center">
                <p className="text-white text-lg font-medium">{selectedMedia.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;
