import React from 'react';
import './offers.css'; // Assuming you have a separate CSS file for styling
const offer1 = '../../img/offer1.jpg';
const offer2 = '../../img/offer2.jpg';
const offer3 = '../../img/offer3.jpg'


const offersData = [
  {
    image: offer1,
    title: 'Free Burger',
    description: 'Get free burger from orders higher than $40!',
    conditions: [
      'Only on Tuesdays',
      'Order higher than $40',
      'Unless one Burger in a cart'
    ]
  },
  {
    image: offer2,
    title: 'Free Small Pizza',
    description: 'Get free small pizza from orders higher than $40!',
    conditions: [
      'Only on Weekends',
      'Order higher than $40',
      'Unless one Pizza in a cart'
    ]
  },
  {
    image: offer3,
    title: 'Chip Friday',
    description: '10% Off for all dishes!',
    conditions: [
      'Only on Friday',
      'All products'
    ]
  }
];

const Offers = () => {
  return (
    <div id="offers" className="offers">
      <h1 className="our-offers">Our Offers</h1>
      <div className="container">
        {offersData.map((offer, index) => (
          <div className="offer" key={index}>
            <div className="offer-image">
              <img src={offer.image} alt={offer.title} />
            </div>
            <div className="offer-content">
              <h2 className="mb-2">{offer.title}</h2>
              <h5 className="text-muted mb-5">{offer.description}</h5>
              <ul className="list-check text-lg mb-0">
                {offer.conditions.map((condition, idx) => (
                  <li key={idx} className="false">
                    <span className="ti-close"></span> {condition}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
