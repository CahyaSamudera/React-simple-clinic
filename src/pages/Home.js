import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Service from '../components/Service/Service';
import About from '../components/About/About';
import Gallery from '../components/Gallery/Gallery';
import Team from '../components/Team/Team';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Gallery />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
