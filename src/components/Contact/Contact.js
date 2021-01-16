import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className='contact' id='contact'>
        <div className='container'>
          <div className='section-title text-center mt-5'>
            <h2>Contact</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              similique vitae dolor iusto culpa asperiores!
            </p>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='contact-box'>
                    <i className='fas fa-map signs'></i>
                    <h3>Adreess</h3>
                    <p>Jl Sudirman no.21, Jakarta</p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='contact-box mt-4'>
                    <i className='fas fa-envelope'></i>
                    <h3>Email</h3>
                    <p>
                      dentalcare@gmail.com <br />
                      contactus@gmail.com
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='contact-box mt-4'>
                    <i className='fas fa-phone'></i>
                    <h3>Call Us</h3>
                    <p>
                      021 000000007 <br />
                      021 111111117
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <form>
                <div className='form-row'>
                  <div className='col-md-6 form-group'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='name'
                      placeholder='Nama'
                    />
                  </div>
                  <div className='col-md-6 form-group'>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      id='email'
                      placeholder='Email'
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    name='subjek'
                    id='subjek'
                    placeholder='Subjek'
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='textarea'
                    rows='5'
                    className='form-control'
                  ></textarea>
                </div>
                <div className='text-center'>
                  <button type='submit'>Kirim Pesan</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
