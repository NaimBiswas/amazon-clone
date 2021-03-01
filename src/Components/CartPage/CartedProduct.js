import React from 'react'
import { Button } from 'react-bootstrap'
import './Cart.css'

const CartedProduct = () => {
   return (
      <>
         <div className="row " >
            <div className="col-lg-5 mb-5">
               <div className="cartImage">
                  <img
                     className="img-fluid "
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
      </>
   )
}

export default CartedProduct
