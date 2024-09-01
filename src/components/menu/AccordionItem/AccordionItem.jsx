import React from 'react';
import Card from './Card/Card';
import './AccordionItem.css'

const AccordionItem = ({ item }) => {
  return (
    <div className="accordion-item">
      <h3 className="accordion-header" id={`flush-heading${item.id}`}>
        <button
          className={`accordion-button collapsed ${item.class}`}
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${item.id}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${item.id}`}
        >
          <div className="overlay">
            <div className="cate">
              {item.title} <span className="ti-angle-down"></span>
            </div>
          </div>
        </button>
      </h3>
      <div
        id={`flush-collapse${item.id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`flush-heading${item.id}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          <div className="row row-cols-2 row-cols-md-3 g-4">
            {item.cards.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
