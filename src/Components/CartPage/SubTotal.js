import React from 'react'
import { Button } from 'react-bootstrap'
import { useStateValue } from '../../StateProvider'

const SubTotal = () => {
   const [{ basket },] = useStateValue()



   return (
      <>
         <div className="Card">
            <h3>Subtotal ({basket.length} item) : $ 10</h3>
            <input type="checkbox" /><span className='ml-2'>This order contain a gif</span><br />
            <Button className='d-block w-100 mt-4 ' variant='warning'>Proceed to Checkout</Button>
         </div>
      </>
   )
}

export default SubTotal
