import React from 'react';
import './marquee.css'

const Marquee = () => {
  return (
    <div id="our-menu2">
      <div className="page-title">
        <marquee style={{ width: '50%' }}>
          <h1>Our Menu</h1>
        </marquee>
      </div>
    </div>
  );
};

export default Marquee;
