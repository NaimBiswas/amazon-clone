
import React from 'react'
import { Fragment } from 'react'
import Product from './Product/Product'
import Slider from './Slider/Slider'

const Home = () => {
   return (
      <Fragment>
         {/* HOme SLider serction  */}
         <Slider />
         <section>
            <div className="container-fluid">
               <div className="home-row-one row ">
                  <div className="col-lg-6">
                     <Product />

                  </div>
                  <div className="col-lg-6">
                     <Product />
                  </div>
               </div>
               <div className="home-row-tow">
                  <div className="col-lg-4">

                  </div>
                  <div className="col-lg-4">

                  </div>
                  <div className="col-lg-4">

                  </div>
               </div>
               <div className="home-row-three">
                  <div className="col-lg-12">

                  </div>
               </div>
            </div>
         </section>
      </Fragment>
   )
}

export default Home
