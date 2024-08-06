import React from 'react';
import './contact.css'; // Assuming you have a separate CSS file for styling

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="row">
          <div className="info col-md-5">
            <h3>Fiverr</h3>
            <p>Address: <span>St John 21/52, Carcow, Poland</span></p>
            <p>Phone: +48 21200 2122 221</p>
            <p>Working Days/Hours: SAT – THU, 9:00AM – 5:00PM</p>
            <p>For Complains & Suggessions: info@fiverr.com</p>
          </div>
          <div className="links col-md-6 offset-md-1">
            <h5>Subscribe Now!</h5>
            <div className="input-group">
              <input className="form-control" name="email" type="email" placeholder="Type your e-mail here..." />
              <button type="submit" className="contactor"><span>Subscribe</span></button>
            </div>
            <div className="social">
              <h5>Social Media</h5>
              <div className="icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter-square"></i>
                <i className="fa-brands fa-instagram-square"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
