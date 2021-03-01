import React from 'react'
import { Button } from 'react-bootstrap'
import './Cart.css'

const CartedProduct = () => {
   return (
      <>

         <div className="col-lg-5 mb-5">
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
            <hr />
         </div>
      </>
   )
}

export default CartedProduct
