import React, { lazy } from 'react'
import { Suspense } from 'react'
import { Route } from 'react-router-dom'

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
         </Route>
         <Route path='/cart' >
            <Header></Header>
            <Suspense fallback={<div><h3 className='text-info'
               style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >Loading...</h3></div>}>
               <Cart></Cart>
            </Suspense>
         </Route>

         {/* Login Page Route  */}
         <Route path='/log-in' >
            <Suspense fallback={<div><h3 className='text-info'
               style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >Loading...</h3></div>}>
               <Login></Login>
            </Suspense>
         </Route>
      </div>
   )
}

export default MyRoute
