import React from 'react';
import img01 from '../../img/carousel01.jpg'
import img02 from '../../img/carousel02.jpg'
import img03 from '../../img/carousel03.jpeg'
import img04 from '../../img/carousel04.jpg'
import img05 from '../../img/carousel05.jpg'
import img06 from '../../img/carousel06.webp'
const CarouselComponent = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" id="our-menu" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="7500">
          <img src={img01} className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h2>Burgers</h2>
            <p>100% real beef patties that have no fillers, additives or preservatives are the foundation for every burger we proudly serve.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img02} className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h2>Pizza</h2>
            <p>Irresistible flavors come to the table with our wide selection of beef and chicken pizzas.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img03} className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h2>Sushi</h2>
            <p>Our Sushi is meant to be enjoyed, not buried under other flavors, check out our variety of Sushi dishes.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img04} className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h2>Pasta</h2>
            <p>Our pasta dishes are delish enough that you'll be happy to have more and more of them.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img05} className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h2>Desserts</h2>
            <p>Looking for tasty desserts? We are very creative when it comes to cookies, cakes, and brownies. Check out our menu!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img06} className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h2>Drinks</h2>
            <p>Satisfy your thirst with a variety of our beverages from refreshing options, to juices and premium bean coffees.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <div className="btn-bg"><span className="carousel-control-prev-icon" aria-hidden="true"></span></div>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <div className="btn-bg"><span className="carousel-control-next-icon" aria-hidden="true"></span></div>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
