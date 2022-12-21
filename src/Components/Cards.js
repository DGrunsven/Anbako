import React from 'react';
import './Cards.css';
import photo from './man.jpg';

function Cards() {
  return (   
      <div className='cards_container'>
        <div className='cards_wrapper'>
        <div className='cards'>
      <h1 class="main_heading">Over ons</h1>
      <div className='text-wrapper'>
      <p className='inhoud-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst quisque sagittis purus sit amet volutpat. Dapibus ultrices in iaculis nunc. Augue mauris augue neque gravida in fermentum. Tincidunt id aliquet risus feugiat in ante metus dictum at. Euismod nisi porta lorem mollis aliquam ut. Metus vulputate eu scelerisque felis. Elit at imperdiet dui accumsan sit amet nulla. Neque egestas congue quisque egestas. Vitae purus faucibus ornare suspendisse sed nisi. Sed vulputate mi sit amet mauris commodo quis imperdiet.
</p>
<div className='empty-block-text'></div>
<img src={photo} alt="Anne en Herman" className='anne-herman'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;