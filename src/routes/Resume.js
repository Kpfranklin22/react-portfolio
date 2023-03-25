import react from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

import React from 'react';

const Resume = () => {
  return <div>
     <Navbar />
      <HeroImg2
        heading="RESUME."
        text="Click for a downloadable PDF"
      />
      <AboutContent />
      <Footer />
  </div>;
};

export default Resume;
