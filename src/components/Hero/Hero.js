import React from 'react';
import './Hero.css';
import background from '../../images/doctor.jpg';

const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '100vh',
    width: '100%',
    display: 'table',
  };
  return (
    <>
      <div
        id='hero'
        className='d-flex align-items-center'
        style={backgroundStyle}
      >
        <div className='container text-center position-relative'>
          <h1>Layanan 24 Jam</h1>
          <h2 className='text-uppercase'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
            quia.
          </h2>
          <a href='#services' className='main-btn'>
            Discover
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
