import React from 'react'
import { Button } from 'react-bootstrap'
import './Cart.css'


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
                              <img style={{ height: '150px' }} className="img-fluid w-100 " src="https://www.innoverto.com/content/uploads/2013/02/innoverto-training-banner.jpg" alt="" />
                           </div>
                           <div className="basket">
                              <h2 className='mt-5 basketHeader'>Your Shopping Basket</h2>
                              <hr />
                              <div className="row">
                                 <div className="col-lg-5">
                                    <div className="cartImage">
                                       <img
                                          style={{ height: '400px' }}
                                          className="img-fluid w-100"
                                          src="https://m.media-amazon.com/images/I/61id45RQjoL._AC_UY218_.jpg" alt="" />
                                    </div>
                                 </div>
                                 <div className="col-lg-7">
                                    <h2>Title</h2>
                                    <p>Rating</p>
                                    <p>Price</p>
                                    <Button variant="warning">Remove from Basket</Button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-5">
                        <div className=" checkoutRight pt-5" >
                           <div className="checkOut-add ">
                              <img className="img-fluid w-100" src="https://www.innoverto.com/content/uploads/2013/02/innoverto-training-banner.jpg" alt="" />
                           </div>
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
