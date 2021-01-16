import React from 'react';
import './About.css';
import Image1 from '../../images/doctor-1.jpg';

const About = () => {
  return (
    <>
      <div className='about-section clearfix py-5' id='about'>
        <div className='container'>
          <div class='section-title'>
            <h2 class='text-center'>Tentang Kami</h2>
            <p class='text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              dolorum.
            </p>
          </div>
          <div className='about'>
            <img
              src={Image1}
              alt='about'
              className='about-img img-fluid mb-3 mb-lg-0 rounded'
            />
            <div className='about-text left-0 text-center bg-faded p-5 rounded'>
              <h2 className='about-heading mb-4'>
                <span className='about-heading-upper'>Selamat Datang!</span>
                <span className='about-heading-lower'>Di Prasta Clinic</span>
              </h2>
              <p className='mb-3'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                sed tempore officiis animi, corporis vel nostrum architecto
                dignissimos. Accusantium animi aut eligendi quibusdam
                voluptates! Fugit possimus consequuntur dolore laborum unde?
              </p>
              <div className='about-button mx-auto'>
                <a href='#hero' className='btn btn-color btn-lg'>
                  Baca
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
