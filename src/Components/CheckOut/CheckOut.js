import { Person, ShoppingBasket } from '@material-ui/icons'
import React from 'react'
import { Fragment } from 'react'
import { useStateValue } from '../../StateProvider'
import CartedProduct from '../CartPage/CartedProduct'
import SubTotal from '../CartPage/SubTotal'
import './CheckOut.css'

const CheckOut = () => {
   const [{ basket }] = useStateValue()
   return (
      <Fragment>
         <div style={{ minHeight: '100vh', background: '#f9f9f9!important' }} className="container  mt-5">


            <div className="checkOutbg ">
               <div className="row">
                  <div className="CkLeft col-lg-4 mt-3 mb-3">
                     <div className="card-group">
                        <div className="card">
                           <h4 className=' m-2 personalHeader'><Person /> Your Personal Info.</h4>
                           <div className="card-body">
                              <form action="">

                                 <div className="form-gorup mb-3">
                                    <label><span className='text-danger h5'>*</span> Email </label>
                                    <input className='form-control ckInput' type="text" />
                                 </div>

                                 <div className="form-gorup mb-3">
                                    <label><span className='text-danger h5'>*</span> Phone </label>
                                    <input className='form-control ckInput' type="text" />
                                 </div>


                                 <div className="form-gorup mb-3">
                                    <label><span className='text-danger h5'>*</span> Full Name </label>
                                    <input className='form-control ckInput' type="text" />
                                 </div>


                                 <div className="form-gorup mb-3">
                                    <label><span className='text-danger h5'>*</span>Password </label>
                                    <input className='form-control ckInput' type="text" />
                                 </div>


                                 <div className="form-gorup mb-3">
                                    <label><span className='text-danger h5'>*</span>Address </label>
                                    <input className='form-control ckInput' type="text" />
                                 </div>


                              </form>
                           </div>
                        </div>

                     </div>


                     <div className="card-group mt-4">
                        <div className="card">
                           <h4 className=' m-2 personalHeader'><Person /> Payment Getway</h4>
                           <div className="card-body">
                              <h3>Payment Getway will Come Soon</h3>
                           </div>
                        </div>

                     </div>



                  </div>
                  <div className="CkRight col-lg-8 mt-3 pr-4">
                     <div className="card-group">
                        <div className=" ClProduct">
                           <h4 className=' m-2 personalHeader'><ShoppingBasket /> Your Basket</h4>
                           <div className="card-body ">
                              {
                                 basket?.map((ite, index) => (

                                    <CartedProduct id={ite.id} key={index} Link={ite.image} title={ite.title} price={ite.price} ratting={ite.ratting} />
                                 ))
                              }
                              {
                                 basket.length == 0 ?

                                    <h2
                                       style={{ display: 'flex', flexDirection: 'column', minHeight: '40vh', justifyContent: 'center' }}
                                       className='text-danger bold '>😒! No Product Found In Your Basket</h2> : ''
                              }
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default CheckOut
