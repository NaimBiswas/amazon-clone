import React from 'react'
import { Button } from 'react-bootstrap'
import './Cart.css'
import CartedProduct from './CartedProduct'
import SubTotal from './SubTotal'
import { useStateValue } from '../../StateProvider'

const Cart = () => {
   const [{ basket, user }, action] = useStateValue()

   return (
      <>
         {/* Creackout section   */}
         <section style={{ minHeight: '100vh' }} className="bg-gray">
            <div className="container-fluid">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-7">
                        <div className=" checkoutLeft pt-5">
                           <div className="checkOut-add ">
                              <img style={{ height: '150px', width: '100%' }} className="img-fluid  " src="https://www.innoverto.com/content/uploads/2013/02/innoverto-training-banner.jpg" alt="" />
                           </div>
                           <div className="basket">

                              <h2 className='mt-5 basketHeader'>
                                 <small className='h5'>Hello, {user ? user.email : 'Guest'}</small> <br />
                                 Your Shopping Basket
                              </h2>
                              <hr />

                              {
                                 basket?.map((ite, index) => (

                                    <CartedProduct id={ite.id} key={index} Link={ite.image} title={ite.title} price={ite.price} ratting={ite.ratting} />
                                 ))
                              }
                              {
                                 basket.length == 0 ?

                                    <h2
                                       style={{ display: 'flex', flexDirection: 'column', minHeight: '40vh', justifyContent: 'center' }}
                                       className='text-danger bold '>😒! No Product Found In Your Basket</h2> : ''
                              }

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
