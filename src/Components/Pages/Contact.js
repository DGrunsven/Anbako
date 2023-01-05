import React from 'react';
import '../../App.css';
import ContactForm3 from './../ContactForm3';

export default function Contact() {
  return <><div>
      <div className='contact-form-container'>
      <h1>Contact</h1>
      </div> 
      <p className='cf-text'>Neem voor meer informatie vrijblijvend contact met ons op via het onderstaande contact formulier.</p>   
      <div className='cf-content'>
        <ContactForm3 />
      </div>
  </div></>;
}