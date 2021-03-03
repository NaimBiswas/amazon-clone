import React from 'react'
import { Button } from 'react-bootstrap'
import './Cart.css'
import NullRatting from '../Home/Product/NullRatting'
import { useStateValue } from '../../StateProvider'

const CartedProduct = ({ id, title, price, ratting, Link, key }) => {
   const [{ }, dispatch] = useStateValue()

   const RemoveFromBasket = () => {
      dispatch({
         type: "REMOVE_FROM_BASKET",
         id: id,
      })

   }
   return (
      <>
         <div key={key} className="row CardHover mb-5" >
            <div className="col-lg-5 mb-5">
               <div className="cartImage">
                  <img
                     className="img-fluid "
                     src={Link} alt="" />
               </div>
            </div>
            <div className="col-lg-7">
               <h2 className="ProductTitle">{title}</h2>
               <p>
                  {Array(ratting).fill().map((_, i) => (<span>⭐</span>))}
                  <span>
                     <NullRatting ratting={ratting}></NullRatting>
                  </span>
               </p>
               <p className='h5 bold mb-4'>${price} </p>
               <Button onClick={RemoveFromBasket} variant="warning">Remove from Basket</Button>
            </div>

         </div>
      </>
   )
}

export default CartedProduct
