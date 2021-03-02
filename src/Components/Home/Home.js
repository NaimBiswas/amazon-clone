
import React from 'react'
import { Fragment } from 'react'
import { Button, Card } from 'react-bootstrap'
import Product from './Product/Product'
import Slider from './Slider/Slider'
import './Home.css'

const Home = () => {

   return (
      <Fragment>
         {/* HOme SLider serction  */}
         <Slider />
         <section className=" ">
            <div className="container-fluid">
               <div className="home-row-one ProductCard row ">
                  <div className="col-lg-4">
                     <Product
                        id='118'
                        title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black"
                        price={93.99}
                        ratting={5}

                        Link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfE5GW9inTg0QtrF85d_frHWzUHb6gbb5y_dEtGQ5SFYSlcwSiL783YnYKWYGtbZdpQ1U&usqp=CAU&ec=45780877"} />
                  </div>
                  <div className="col-lg-4">
                     <Product
                        id='119'
                        title='SAMSUNG LC24F396FHNXZA 23.5" FHD Curved LED-Lit FreeSync Monito'
                        price={250}
                        ratting={'1'}
                        Link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvYE1NNww47WuthEMKqJYMa1uVei6-QZzMw&usqp=CAU"} />
                  </div>
                  <div className="col-lg-4">
                     <Product
                        id='120'
                        title="Sceptre 35 Inch Curved UltraWide 21: 9 LED Creative Monitor QHD 3440x1440 Frameless AMD Freesync HDMI"
                        price={200.43}
                        ratting={4}
                        Link={"https://m.media-amazon.com/images/I/81bkp5rYYuL._AC_UL320_.jpg"} />
                  </div>
               </div>



               <div className="home-row-tow row mt-5 mb-2">
                  <div className="col-lg-3">
                     <Product
                        id='121'
                        title="Sceptre 35 Inch Curved UltraWide 21: 9 LED Creative Monitor QHD 3440x1440 Frameless AMD Freesync HDMI"
                        price={200}
                        ratting={2}
                        Link={"https://m.media-amazon.com/images/I/914W+OtJQ-L._AC_UL320_.jpg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product
                        id='122'
                        title="LG 32QN600-B 32-Inch QHD (2560 x 1440) IPS Monitor with HDR 10, AMD FreeSync with Dual HDMI Inputs, Black"
                        price={400}
                        ratting={1}
                        Link={"https://m.media-amazon.com/images/I/81-lVaD1rAL._AC_UL320_.jpg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product
                        id='124'
                        title="LG 27GN950-B 27 Inch UHD (3840 x 2160) Nano IPS Display Ultragear Gaming Monitor with 1ms Response Time 144Hz"
                        price={475}
                        ratting={1}
                        Link={"https://m.media-amazon.com/images/I/81fdHiIG1dL._AC_UL320_.jpg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product
                        id='123'
                        title="LG 27GL850-B 27 Inch Ultragear QHD Nano IPS 1ms NVIDIA G-Sync Compatible Gaming Monitor, Black"
                        price={500}
                        ratting={3}
                        Link={"https://m.media-amazon.com/images/I/81ZYbkU1uKL._AC_UL320_.jpg"} />
                  </div>
               </div>




               <div className="home-row-three row mt-5">
                  <div className="col-lg-12 BigProduct">
                     <Product
                        id='12'
                        title="This is our product title"
                        price={1200}
                        ratting={3}
                        Link={"https://www.reviewgeek.com/p/uploads/2020/06/ea40ecd5.jpg"} />
                  </div>
               </div>
            </div>
         </section>
      </Fragment>
   )
}

export default Home
