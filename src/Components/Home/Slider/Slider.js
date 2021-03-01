import React from 'react'
import { useState } from 'react';
import { Carousel } from 'react-bootstrap'

const Slider = () => {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };
   return (
      <>
         <Carousel activeIndex={index} onSelect={handleSelect}>

            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
                  alt="Third slide"
               />

               {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                     Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
               </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
                  alt="First slide"
               />
               {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                  alt="Second slide"
               />

               {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className="d-block w-100"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
                  alt="Third slide"
               />

               {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                     Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
               </Carousel.Caption> */}
            </Carousel.Item>
         </Carousel>
      </>
   )
}

export default Slider
