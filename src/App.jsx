import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quotes from './components/Quotes';
import Adventures from './components/Adventures';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Owner from './components/Owner';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

function App() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["SportsActivityLocation", "LocalBusiness", "Organization"],
    "name": "East Coast Surf and Paddle",
    "description": "Premium surfing and stand-up paddle boarding (SUP) school located in Puducherry. Certified instructors, beginner surf lessons, and paddling adventures.",
    "url": "https://eastcoastsurf.com/",
    "telephone": ["+91 9791351801", "+91 9344702133"],
    "email": "eastcoastsurfeastcoastsurf@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "B23, South Street, Chinnamuthaliyarchavadi",
      "addressLocality": "Villupuram",
      "addressRegion": "TN",
      "postalCode": "605602",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.9686",
      "longitude": "79.8398"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "06:00",
      "closes": "18:00"
    }
  };

  return (
    <HelmetProvider>
      <div className="font-poppins">
        <SEO 
          title="Surf School in Puducherry | East Coast Surf and Paddle"
          description="Join the best surf school in Pondicherry. Learn surfing, stand-up paddle boarding (SUP), and enjoy water sports in Puducherry. Book your beginner surf lessons today!"
          name="East Coast Surf and Paddle"
          type="website"
          schema={schema}
        />
        <Navbar />
        <Hero />
        <Quotes />
        <Adventures />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Owner />
        <Contact />
        <FloatingWhatsApp />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
