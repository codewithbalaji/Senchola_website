import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './assets/images/Rectangle 4587.png';
import img2 from './assets/images/Rectangle 45922.png';
import img3 from './assets/images/Rectangle 46200.png';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Slide 3" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
