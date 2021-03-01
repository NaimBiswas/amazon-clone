import React from 'react'
import { Button } from 'react-bootstrap'
import './Cart.css'

const CartedProduct = () => {
   return (
      <>
         <div className="row CardHover" >
            <div className="col-lg-5 mb-5">
               <div className="cartImage">
                  <img
                     className="img-fluid "
                     src="https://www.mobiledokan.co/wp-content/uploads/2020/09/Honor-V40-5G-Titanium-Silver.jpg" alt="" />
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
