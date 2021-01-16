import React from 'react';
import './Team.css';
import Team1 from '../../images/doctor-3.jpg';
import Team2 from '../../images/doctor-11.jpg';
import Team3 from '../../images/doctor-2.jpg';
import Team4 from '../../images/doctor-4.jpg';

const Team = () => {
  return (
    <>
      <div id='team' className='team mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='section-title'>
                <h2>Tim Kami</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam quibusdam maxime fuga perspiciatis. Eaque vero quasi
                  adipisci ab assumenda excepturi?
                </p>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='member'>
                    <div className='image'>
                      <img src={Team1} alt='our-team' className='img-fluid' />
                    </div>
                    <div className='info'>
                      <h4>John Doe</h4>
                      <span>Executive Officer</span>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Deserunt cumque consequatur, architecto unde atque
                        voluptatum.
                      </p>
                      <div className='social'>
                        <a href='#hero'>
                          <i className='fab fa-facebook'></i>
                        </a>
                        <a href='#hero'>
                          <i className='fab fa-twitter'></i>
                        </a>
                        <a href='#hero'>
                          <i className='fab fa-instagram'></i>
                        </a>
                        <a href='#hero'>
                          <i className='fab fa-linkedin'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 mt-4 mt-lg-0'>
                  <div className='member'>
                    <div className='image'>
                      <img src={Team2} alt='our-team' className='img-fluid' />
                    </div>
                    <div className='info'>
                      <h4>Jane Doe</h4>
                      <span>Executive Officer</span>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Deserunt cumque consequatur, architecto unde atque
                        voluptatum.
                      </p>
                      <div className='social'>
                        <a href='#hero'>
                          <i className='fab fa-facebook'></i>
                        </a>
                        <a href='#hero'>
                          <i className='fab fa-twitter'></i>
                        </a>
                        <a href='#hero'>
                          <i className='fab fa-instagram'></i>
                        </a>
                        <a href='#hero'>
                          <i className='fab fa-linkedin'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 mt-4 mt-lg-2'>
                  <div className='member'>
                    <div className='image'>
                      <img src={Team3} alt='our-team' className='img-fluid' />
                    </div>
                    <div className='info'>
                      <h4>Jenny Doe</h4>
                      <span>Executive Officer</span>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Deserunt cumque consequatur, architecto unde atque
                        voluptatum.
                      </p>
                      <div className='social'>
                        <a href='#hero'>
                          <i className='fab fa-facebook'></i>
                        </a>
                        <a href='#hero'>
                          <i className='fab fa-twitter'></i>
                        </a>
                        <a href='#hero'>
                          <i className='fab fa-instagram'></i>
                        </a>
                        <a href='#hero'>
                          <i className='fab fa-linkedin'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 mt-4 mt-lg-2'>
                  <div className='member'>
                    <div className='image'>
                      <img src={Team4} alt='our-team' className='img-fluid' />
                    </div>
                    <div className='info'>
                      <h4>Jessica Doe</h4>
                      <span>Executive Officer</span>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Deserunt cumque consequatur, architecto unde atque
                        voluptatum.
                      </p>
                      <div className='social'>
                        <a href='#hero'>
                          <i className='fab fa-facebook'></i>
                        </a>
                        <a href='#hero'>
                          <i className='fab fa-twitter'></i>
                        </a>
                        <a href='#hero'>
                          <i className='fab fa-instagram'></i>
                        </a>
                        <a href='#hero'>
                          <i className='fab fa-linkedin'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
