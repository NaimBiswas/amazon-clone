import React from 'react'
import { Button } from 'react-bootstrap'
import './Cart.css'
import CartedProduct from './CartedProduct'
import SubTotal from './SubTotal'


const Cart = () => {
   return (
      <>
         {/* Creackout section   */}
         <section className="bg-gray">
            <div className="container-fluid">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-7">
                        <div className=" checkoutLeft pt-5">
                           <div className="checkOut-add ">
                              <img style={{ height: '150px', width: '100%' }} className="img-fluid  " src="https://www.innoverto.com/content/uploads/2013/02/innoverto-training-banner.jpg" alt="" />
                           </div>
                           <div className="basket">
                              <h2 className='mt-5 basketHeader'>Your Shopping Basket</h2>
                              <hr />
                              <CartedProduct title={'Honor v40 '} price={500} ratting={3} />

                              <CartedProduct title={'Honor v40 '} price={500} ratting={4} />
                              <CartedProduct title={'Honor v40 '} price={500} ratting={4} />
                              <CartedProduct title={'Honor v40 '} price={500} ratting={4} />
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-5">
                        <div className=" checkoutRight pt-5" >
                           <div className="checkOut-add ">
                              <img className="img-fluid w-100" src="https://www.innoverto.com/content/uploads/2013/02/innoverto-training-banner.jpg" alt="" />
                           </div>
                           <SubTotal></SubTotal>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Cart
