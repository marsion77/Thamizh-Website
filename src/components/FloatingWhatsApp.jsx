import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const FloatingWhatsApp = () => {
  const phoneNumber = "919791351801";
  const message = `Hello East Coast Surf and Paddle,\n\nI came across your website and would like to know more about your ocean adventures and pricing.\n\nPlease share the details.\n\nThank you.`;
  const encodedMessage = encodeURIComponent(message);
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[#25D366]/60 transition-all duration-300 flex items-center justify-center group animate-bounce"
    >
      <BsWhatsapp className="text-3xl" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat with us!
        {/* Tooltip Arrow */}
        <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
