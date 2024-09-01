import React from 'react';
import './about.css'; // Assuming you have a separate CSS file for styling
 const aboutImage = '../../../public/img/about.png';
const signImage ='../../img/sign.svg';

const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="about-us">About Us</h1>
      <div className="container">
        <div className="row">
          <div className="about-img d-none d-md-block col-3">
            <img src={aboutImage} alt="About Us" />
          </div>
          <div className="about-text col-12 col-md-8 offset-md-1">
            <div className="rate">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <h1 className="about-heading">The best food in London!</h1>
            <p className="about-des text-muted">
              In 1954 in the USA there was a milkshake machine salesman named Ray Kroc. Ray received an order from the Fiverr brothers' hamburger outlet in California, and was impressed by their company - the menu was simple and cheap but the hamburgers were good; the fries were made in-store; and the shakes were thicker than usual.
            </p>
            <p className="author-name">Mark Johnson, Chef</p>
            <img src={signImage} alt="Signature" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
