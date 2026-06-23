import React from 'react';
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
  return (
    <div className="font-poppins">
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
  );
}

export default App;
