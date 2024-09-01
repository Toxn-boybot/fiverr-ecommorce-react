import React from 'react';
import AccordionItem from './AccordionItem/AccordionItem';


const Accordion = ({ items }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            {items.map((item, index) => (
              <AccordionItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
