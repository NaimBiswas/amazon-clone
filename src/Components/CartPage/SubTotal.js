import React from 'react'
import { Button } from 'react-bootstrap'

const SubTotal = () => {
   return (
      <>
         <div className="Card">
            <h3>Subtotal (5 item) : $ 04043</h3>
            <input type="checkbox" /><span className='ml-2'>This order contain a gif</span><br />
            <Button className='d-block w-100 mt-3 ' variant='warning'>Proceed to Checkout</Button>
         </div>
      </>
   )
}

export default SubTotal
