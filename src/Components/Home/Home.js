
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
         <section className=" ProductCard">
            <div className="container-fluid">
               <div className="home-row-one row ">
                  <div className="col-lg-4">
                     <Product Link={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"} />
                  </div>
                  <div className="col-lg-4">
                     <Product Link={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"} />
                  </div>
                  <div className="col-lg-4">
                     <Product Link={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"} />
                  </div>
               </div>



               <div className="home-row-tow row mt-5 mb-2">
                  <div className="col-lg-3">
                     <Product Link={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product Link={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product Link={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product Link={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"} />
                  </div>
               </div>




               <div className="home-row-three row mt-5">
                  <div className="col-lg-12 BigProduct">
                     <Product Link={"https://www.reviewgeek.com/p/uploads/2020/06/ea40ecd5.jpg"} />
                  </div>
               </div>
            </div>
         </section>
      </Fragment>
   )
}

export default Home
