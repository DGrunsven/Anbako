import React from 'react';
import './Footer.css';
import logo from './anbako-mock-white2.png';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
      <img src={logo} alt="Logo Anbako" className='logo-Anbako'/>

        <p className='footer-subscription-text'>
          Uw maat voor administratie!
        </p>
          <p>
          Vlierdenseweg 169
          </p>
          <p>
          5756 AA  Vlierden
          </p>
          <a href="tel:0646438073">Herman: 06 46438073</a>
          <a href="tel:0631907197">Anne: 06 31907197</a>
        <a href = "mailto: h.janssen@anbako.nl">h.janssen@anbako.nl</a>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
              Door Donna Janssen
          </div>
          <div class='website-rights'>Anbako © 2022</div>
        </div>
      </section>
    </div>
  );
}

export default Footer;