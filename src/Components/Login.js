import React, { useState } from 'react'
import { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Login.css'
import AmazonDark from './AmazonDark.svg'
const Login = () => {
   const [Email, setEmail] = useState()
   const [Password, setPassword] = useState()
   const SignIn = (e) => {
      e.preventDefault()
   }
   return (
      <Fragment>
         <form action="">


            <div className="loginpage">
               <h2 className='text-center'>
                  <Link to='/'>
                     <img className='mb-4' src={AmazonDark} alt="" />
                  </Link>
               </h2>


               <div className="form border col-lg-5">
                  <h2 className='mt-4 '>Sign In</h2>
                  <div className="form-group row mt-4 ">
                     <div className="form-left col-lg-3 ">
                        <h5 className=''>Email:👉</h5>
                     </div>
                     <div className="form-right col-lg-9">
                        <input value={Email} onChange={(e) => setEmail(e.target.value)} required type="email" className='form-control' />
                     </div>
                  </div>

                  <div className="form-group row ">
                     <div className="form-left col-lg-3">
                        <h5>Password:👉</h5>
                     </div>
                     <div className="form-right col-lg-9">
                        <input value={Password} onChange={(e) => setPassword(e.target.value)} required type="password" className='form-control' />
                     </div>
                  </div>

                  <div className="form-group row ">
                     <Button onClick={SignIn} type='submit' variant='warning' className='d-block w-100 mr-3 ml-3  mb-2 mt-3'>Sign In</Button>
                  </div>
                  <div className="form-group row  ">
                     <p className='ml-3 mr-3'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi suscipit deserunt dolore consectetur harum eius, ipsa soluta corporis error, ipsum facere veniam sunt sequi itaque reprehenderit labore similique, dicta doloremque?
                    </p>
                  </div>

                  <div className="form-group row ">
                     <Button variant='outline-warning' className='d-block w-100 mr-3 ml-3 mb-3 createAccount'>Create An Account</Button>
                  </div>

               </div>



            </div>

         </form>
      </Fragment >
   )
}

export default Login
