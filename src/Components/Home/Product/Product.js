import React from 'react'
import { Button, Card, } from 'react-bootstrap'
import { useStateValue } from '../../../StateProvider'
import NullRatting from './NullRatting'
import './Product.css'
import Rate from './Rate.svg'

const Product = ({ id, Link, ratting, title, price, }) => {
   const [sate, dispatch] = useStateValue()
   const addToBasket = () => {
      dispatch({
         type: "ADD_TO_BASKET",
         item: {
            id: id,
            title: title,
            price: price,
            ratting: ratting,
            image: Link,
         }
      })
   }
   return (
      <>
         <Card style={{ margin: '' }} className="" >
            <Card.Img style={{ padding: '20px' }} variant="top" src={Link} className="img-fluid max-width: 100%" />
            <Card.Body>
               <Card.Title>{title}</Card.Title>
               <p><span className="h5 price">${price}</span>
                  <span className='ml-1'>
                     {
                        Array(ratting).fill().map((_, i) => (
                           <span>⭐</span>
                        ))
                     }
                     <span>
                        <NullRatting ratting={ratting}></NullRatting>
                     </span>
                  </span>
               </p>
               <Card.Text className='ProductDiscription'>
                  <hr />

                  {/* Discription are if anyone need  */}
               </Card.Text>
               <Button onClick={addToBasket} className='ProductButton' variant="">Add to Cart</Button>
            </Card.Body >
         </Card >


      </ >

   )
}

export default Product
