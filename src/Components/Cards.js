import React from 'react';
import './Cards.css';
import anne from './anne-2.jpg';
import herman from './herman-2.jpg';
import dienstenFoto from './rapportage.png';
import ContactForm from "./ContactForm";
import { useEffect } from "react";
import ContactForm3 from './ContactForm3';

function Cards() {

  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (   
      <><div className='cards_container'>
      <div className='cards_wrapper'>
        <div className='cards'>
          <div className='text-wrapper'>
            <h1 className='main_heading'>Over ons</h1>
            <p className='over-ons-text'>
              ANBAKO Administratie is in 2005 gestart door Herman. Per 1 januari 2023 is het kantoor in een gezamenlijke vorm voortgezet met dochter Anne.
            </p>
            <br></br>
            <p className='over-ons-text'>Wij richten ons met name op het MKB en particulieren. Hierin staan persoonlijk contact en een laagdrempelige benadering centraal. Het uitgangspunt is om maatwerk te leveren door klantgericht te werken. Het is voor ons belangrijk om uw administratie naar uw wens in te richten en nemen daarbij graag de administratieve werkzaamheden uit handen. De mate waarin, bepaalt u zelf.
              Neem geheel vrijblijvend contact met ons op om de mogelijkheden voor u of uw onderneming te bespreken.
              </p>
            <br></br>
            <p className='over-ons-text'>Neem geheel vrijblijvend contact met ons op om de mogelijkheden voor u of uw onderneming te bespreken.</p>
            <br></br>
          </div>
          <div className='contact-container'>
            <div className='contact-card-container'>
              <img src={herman} alt="Herman" className='contact-foto' />
              <div className='contact-text'>
                <p className='contact-naam'>Herman Janssen</p>
                <a href="tel:0646438073">06 46438073</a>
                <a href = "mailto: herman@anbako.nl">herman@anbako.nl</a>
              </div>
            </div>
            <div className='contact-card-container'>
              <img src={anne} alt="Anne" className='contact-foto' />
              <div className='contact-text'>
                <p className='contact-naam'>Anne van Dinther-Janssen</p>
                <a href="tel:0631907197">06 31907197</a>
                <a href = "mailto: anne@anbako.nl">anne@anbako.nl</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className='diensten-container'>
      <h1>Diensten</h1>
      </div>    
      <div className='diensten-content'>
      <img src={dienstenFoto} alt="diensten" className='diensten-foto' />
      <div className='diensten-text'>
        <ul className='diensten-ul'>
          <li className='diensten-list'>Boekhouding &#13; 
          <p className='diensten-text-b'>Wij werken met AFAS Profit, maar ondersteunen ook andere boekhoudpakketten.</p>
          </li>
          <li className='diensten-list'>Aangifte omzetbelasting &#13; 
          <p className='diensten-text-b'>Tijdig indienen van de BTW aangifte per maand of kwartaal.</p>
          </li>
          <li className='diensten-list'>Jaarrekening &#13; 
          <p className='diensten-text-b'>Opmaken van de jaarlijkse balans en resultatenrekening voor eenmanszaak, VOF of BV.</p>
          </li>
          <li className='diensten-list'>Aangifte inkomstenbelasting &#13; 
          <p className='diensten-text-b'>Invullen van belastingaangifte voor ondernemers en particulieren.</p>
          </li>
          <li className='diensten-list'>Aangifte vennootschapsbelasting / deponering KvK &#13; 
          <p className='diensten-text-b'>Invullen van belastingaangifte voor BV en de daarbij horende formaliteiten.</p>
          </li>
          <li className='diensten-list-2'>Loonadministratie 
          </li>
          <li className='diensten-list-2'>Begeleiding bij opstarten van onderneming
          </li>
        </ul>
      </div>
      </div>

      <div className='contact-form-container'>
      <h1>Contact</h1>
      </div>    
      <div className='cf-content'>
        <ContactForm3 />
      </div>
      </>
     
  );
}

export default Cards;