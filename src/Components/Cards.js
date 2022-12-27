import React from 'react';
import './Cards.css';
import anne from './anne.jpg';
import herman from './herman.jpg';

function Cards() {
  return (   
      <div className='cards_container'>
        <div className='cards_wrapper'>
        <div className='cards'>
      <div className='text-wrapper'>
      <h1 className='main_heading'>Over ons</h1>
      <p>
      ANBAKO Administratie is in 2005 gestart door Herman. Per 1 januari 2023 wordt het kantoor in een gezamenlijke vorm voortgezet met dochter Anne.
      </p>
      <br></br>
      <p>Wij richten ons met name op het MKB en particulieren. Hierin staan persoonlijk contact en een laagdrempelige benadering centraal. Het uitgangspunt is om maatwerk te leveren door klantgericht te werken. Het is voor ons belangrijk om uw administratie naar uw wens in te richten en nemen daarbij graag de administratieve werkzaamheden uit handen. De mate waarin, bepaalt u zelf. 
      Neem geheel vrijblijvend contact met ons op om de mogelijkheden voor u of uw onderneming te bespreken.
      test</p>
      <br></br>
      <p>Neem geheel vrijblijvend contact met ons op om de mogelijkheden voor u of uw onderneming te bespreken.</p>
      <br></br>
      </div>
      <div className='contact-container'>
      <div className='contact-card-container'>
      <img src={herman} alt="Herman" className='contact-foto'/>
      <div className='contact-text'>
      <p>Herman Janssen</p>
      <p>06-46438073</p>
      <p>herman@anbako.nl</p>
      </div>
      </div>
      <div className='contact-card-container'>
      <img src={anne} alt="Anne" className='contact-foto'/>
      <div className='contact-text'>
      <p>Anne van Dinther-Janssen</p>
      <p>06-31907197</p>
      <p>anne@anbako.nl</p>
      </div>
      </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;