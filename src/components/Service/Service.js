import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <>
      <div id='services' className='services mt-5 mb-3 py-3'>
        <div className='container'>
          <div className='section-title'>
            <h2 className='text-center'>Layanan</h2>
            <p className='text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              dolorum.
            </p>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 d-flex align-items-stretch'>
              <div className='service shadow'>
                <div className='icon'>
                  <i className='fas fa-tooth'></i>
                </div>
                <h4>Dental Care</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sequi dicta, deleniti repudiandae ad doloribus quis suscipit
                  rem ratione voluptate illo!
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0'>
              <div className='service shadow'>
                <div className='icon'>
                  <i className='fas fa-lungs'></i>
                </div>
                <h4>Lungs Care</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sequi dicta, deleniti repudiandae ad doloribus quis suscipit
                  rem ratione voluptate illo!
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0'>
              <div className='service shadow'>
                <div className='icon'>
                  <i className='fas fa-heart'></i>
                </div>
                <h4>Cardiology</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sequi dicta, deleniti repudiandae ad doloribus quis suscipit
                  rem ratione voluptate illo!
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4'>
              <div className='service shadow'>
                <div className='icon'>
                  <i className='fas fa-dna'></i>
                </div>
                <h4>Lab</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sequi dicta, deleniti repudiandae ad doloribus quis suscipit
                  rem ratione voluptate illo!
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4'>
              <div className='service shadow'>
                <div className='icon'>
                  <i className='fas fa-ambulance'></i>
                </div>
                <h4>Ambulance</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sequi dicta, deleniti repudiandae ad doloribus quis suscipit
                  rem ratione voluptate illo!
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4'>
              <div className='service shadow'>
                <div className='icon'>
                  <i className='fas fa-allergies'></i>
                </div>
                <h4>Allergies</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sequi dicta, deleniti repudiandae ad doloribus quis suscipit
                  rem ratione voluptate illo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
