import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './Product.css'
const Product = () => {
   return (
      <>
         <Card style={{ margin: '' }} className="" >
            <Card.Img style={{ width: '100%', }} variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg" />
            <Card.Body>
               <Card.Title>Product Name</Card.Title>
               <p>$100.0 <span>⭐⭐⭐⭐⭐</span></p>
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
               <Button className='ProductButton' variant="">Add to Busket</Button>
            </Card.Body>
         </Card>
      </>
   )
}

export default Product
