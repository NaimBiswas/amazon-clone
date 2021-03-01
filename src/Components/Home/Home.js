
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
                        title="This is our product title"
                        price={100.00}
                        ratting={5}

                        Link={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"} />
                  </div>
                  <div className="col-lg-4">
                     <Product
                        title="This is our product title"
                        price={100.00}
                        ratting={'1'
                        } Link={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"} />
                  </div>
                  <div className="col-lg-4">
                     <Product
                        title="This is our product title"
                        price={200.43}
                        ratting={4}
                        Link={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"} />
                  </div>
               </div>



               <div className="home-row-tow row mt-5 mb-2">
                  <div className="col-lg-3">
                     <Product
                        title="This is our product title"
                        price={100.00}
                        ratting={2}
                        Link={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product
                        title="This is our product title"
                        price={100.00}
                        ratting={1}
                        Link={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product
                        title="This is our product title"
                        price={100.00}
                        ratting={1}
                        Link={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product
                        title="This is our product title"
                        price={100.00}
                        ratting={3}
                        Link={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"} />
                  </div>
               </div>




               <div className="home-row-three row mt-5">
                  <div className="col-lg-12 BigProduct">
                     <Product
                        title="This is our product title"
                        price={100.00}
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
