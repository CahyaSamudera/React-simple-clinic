import React from 'react';
import './Gallery.css';
import Image1 from '../../images/gallery-1.jpg';
import Image2 from '../../images/gallery-2.jpg';
import Image3 from '../../images/gallery-3.jpg';
import Image4 from '../../images/gallery-4.jpg';
import Image5 from '../../images/gallery-5.jpg';
import Image6 from '../../images/gallery-6.jpg';
import Image7 from '../../images/gallery-7.jpg';
import Image8 from '../../images/gallery-8.jpg';

const Gallery = () => {
  return (
    <>
      <div className='camp'>
        <div className='container text-center'>
          <h2 className='py-3'>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            qui blanditiis officiis fugit veniam doloribus.
          </p>
        </div>
        <div className='camp-grid'>
          <div className='row'>
            <div className='col-lg-3 col-sm-6 col-xs-12'>
              <div className='card card-block'>
                <img src={Image1} alt='Camp' />
                <div className='camp-text'>
                  <div className=''>
                    <h3 className='card-title'>Lorem Ipsum</h3>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-xs-12'>
              <div className='card card-block'>
                <img src={Image2} alt='Camp' />
                <div className='camp-text'>
                  <div className=''>
                    <h3 className='card-title'>Lorem Ipsum</h3>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-xs-12'>
              <div className='card card-block'>
                <img src={Image3} alt='Camp' />
                <div className='camp-text'>
                  <div className=''>
                    <h3 className='card-title'>Lorem Ipsum</h3>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-xs-12'>
              <div className='card card-block'>
                <img src={Image4} alt='Camp' />
                <div className='camp-text'>
                  <div className=''>
                    <h3 className='card-title'>Lorem Ipsum</h3>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-xs-12'>
              <div className='card card-block'>
                <img src={Image5} alt='Camp' />
                <div className='camp-text'>
                  <div className=''>
                    <h3 className='card-title'>Lorem Ipsum</h3>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-xs-12'>
              <div className='card card-block'>
                <img src={Image6} alt='Camp' />
                <div className='camp-text'>
                  <div className=''>
                    <h3 className='card-title'>Lorem Ipsum</h3>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-xs-12'>
              <div className='card card-block'>
                <img src={Image7} alt='Camp' />
                <div className='camp-text'>
                  <div className=''>
                    <h3 className='card-title'>Lorem Ipsum</h3>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-xs-12'>
              <div className='card card-block'>
                <img src={Image8} alt='Camp' />
                <div className='camp-text'>
                  <div className=''>
                    <h3 className='card-title'>Lorem Ipsum</h3>
                    <p className='card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
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

export default Gallery;
