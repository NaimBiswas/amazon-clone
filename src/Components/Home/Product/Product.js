import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Product = () => {
   return (
      <div>
         <Card >
            <Card.Img style={{ width: '100%', }} variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg" />
            <Card.Body>
               <Card.Title>Product Name</Card.Title>
               <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  <hr />
                  <p>Product Reating</p>
               </Card.Text>
               <Button variant="primary">Add to Busket</Button>
            </Card.Body>
         </Card>
      </div>
   )
}

export default Product
