import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Corusel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='corusel_main'>
      <Carousel
        responsive={responsive}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style nuqta"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img src="./images/home/0001.jpg" alt="" />
        </div>
        <div>
          <img src="./images/home/o3.JPG" alt="" />
        </div>
        <div>
          <img src="./images/home/01.jpg" alt="" />
        </div>
        <div >
          <img src="./images/home/aaa.jpg" alt="" />
        </div>
      </Carousel>
      <span className='title'><h1>Assalomu alaykum va rahmatulloh!</h1></span>
    </div>
  )
}
