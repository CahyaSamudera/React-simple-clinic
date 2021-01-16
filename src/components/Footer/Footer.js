import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className='footer py-4 mt-5'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-4 text-lg-left'>
              Copyright &copy; Prasta Clinic 2021
            </div>
            <div className='col-lg-4 my-3 my-lg-0'>
              <a href='#hero' className='btn btn-back btn-social mx-2'>
                <i className='fab fa-facebook'></i>
              </a>
              <a href='#hero' className='btn btn-back btn-social mx-2'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='#hero' className='btn btn-back btn-social mx-2'>
                <i className='fab fa-instagram'></i>
              </a>
            </div>
            <div className='col-lg-4 text-lg-right'>
              <p>
                Powered by:{' '}
                <a
                  href='https://prasta.id/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mr-3 text'
                >
                  Prasta
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
