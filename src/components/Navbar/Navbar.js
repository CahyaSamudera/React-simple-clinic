import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg nav-back fixed-top' id='nav'>
        <div className='container'>
          <a href='#hero' className='navbar-brand'>
            Prasta Clinic
          </a>
          <button
            className='navbar-toggler navbar-toggler-right'
            type='button'
            data-toggle='collapse'
            data-target='#myNavbar'
            aria-controls='myNavbar'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i className='fas fa-bars fa-2x'></i>
          </button>
          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <a href='#hero' className='nav-link'>
                  Beranda
                </a>
              </li>
              <li className='nav-item'>
                <a href='#services' className='nav-link'>
                  Layanan
                </a>
              </li>
              <li className='nav-item'>
                <a href='#about' className='nav-link'>
                  Tentang Kami
                </a>
              </li>
              <li className='nav-item'>
                <a href='#team' className='nav-link'>
                  Team
                </a>
              </li>
              <li className='nav-item'>
                <a href='#contact' className='nav-link'>
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
