
import React from 'react'
import { Fragment } from 'react'
import Slider from './Slider/Slider'

const Home = () => {
   return (
      <Fragment>
         {/* HOme SLider serction  */}
         <Slider />
         <section>
            <div className="home-row-one ">
               <div className="col-lg-6"></div>
               <div className="col-lg-6"></div>
            </div>
            <div className="home-row-tow">
               <div className="col-lg-4"></div>
               <div className="col-lg-4"></div>
               <div className="col-lg-4"></div>
            </div>
            <div className="home-row-three">
               <div className="col-lg-12">

               </div>
            </div>
         </section>
      </Fragment>
   )
}

export default Home
