import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'

const SubTotal = () => {
   const [{ basket, user },] = useStateValue()
   const history = useHistory();
   var total = 0;
   basket.map(itm => (
      total += parseFloat(itm.price)
   ))
   const ProceedToCheckOut = () => {
      if (user) {
         history.push('/check-out')
      } else {
         history.push('/log-in')
      }
   }


   return (
      <>
         <div className="Card">
            <h3>Subtotal ({basket.length} item) : $ {total}</h3>
            <input type="checkbox" /><span className='ml-2'>This order contain a gif</span><br />
            <Button onClick={ProceedToCheckOut} className='d-block w-100 mt-4 ' variant='warning'>Proceed to Checkout</Button>
         </div>
      </>
   )
}

export default SubTotal
