import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={card.image} className="card-img-top" alt={card.title} />
        <div className="card-body">
          <h6 className="card-title">{card.title}</h6>
          <p className="card-text text-muted">{card.description}</p>
          <div className="text-md mt-3 mb-4">
            <span className="text-muted">from</span> ${card.price}
          </div>
          <button className="btn order">
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
