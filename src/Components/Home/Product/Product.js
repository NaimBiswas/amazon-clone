import React from 'react'
import { Button, Card } from 'react-bootstrap'
import NullRatting from './NullRatting'
import './Product.css'
import Rate from './Rate.svg'

const Product = ({ Link, ratting }) => {

   return (
      <>
         <Card style={{ margin: '' }} className="" >
            <Card.Img style={{ width: '100%', }} variant="top" src={Link} className="img-fluid max-width: 100%" />
            <Card.Body>
               <Card.Title>Product Name</Card.Title>
               <p>$100.0
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
               <Card.Text>
                  <hr />
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  <hr />

               </Card.Text>
               <Button className='ProductButton' variant="">Add to Cart</Button>
            </Card.Body>
         </Card>
      </>
   )
}

export default Product
