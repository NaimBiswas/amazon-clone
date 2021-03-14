import React, { lazy } from 'react'
import { Suspense } from 'react'
import { Route } from 'react-router-dom'
import CheckOut from '../CheckOut/CheckOut'
import Footer from '../Footer/Footer'

import Home from '../Home/Home'
import Login from '../Login'
import Header from './Header'
const Cart = lazy(() => import('../CartPage/Cart'))

const MyRoute = () => {
   return (
      <div>
         <Route exact path="/" >
            <Header></Header>
            <Home></Home>
            <Footer />
         </Route>
         <Route path='/cart' >
            <Header></Header>
            <Suspense fallback={<div><h3 className='text-info'
               style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >Loading...</h3></div>}>
               <Cart></Cart>
            </Suspense>
            <Footer />
         </Route>

         {/* Login Page Route  */}
         <Route path='/log-in' >
            <Suspense fallback={<div><h3 className='text-info'
               style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >Loading...</h3></div>}>
               <Login></Login>
            </Suspense>
         </Route>

         {/* Check Out Page Page Route  */}
         <Route path='/check-out' >
            <Header></Header>
            <Suspense fallback={<div><h3 className='text-info'
               style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >Loading...</h3></div>}>
               <CheckOut></CheckOut>
            </Suspense>
            <Footer />
         </Route>
      </div>
   )
}

export default MyRoute
