import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
          <h1>ANBAKO</h1>
          <p>Uw maat voor administratie!</p>
          <div className='color_block'>
          <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'>
              Onze diensten
            </Button>
          </div>
          </div>
          
        </div>
      );
    }

export default HeroSection