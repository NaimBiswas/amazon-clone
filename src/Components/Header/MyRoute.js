import React, { lazy } from 'react'
import { Suspense } from 'react'
import { Route } from 'react-router-dom'

import Home from '../Home/Home'
import Header from './Header'
const Cart = lazy(() => import('../CartPage/Cart'))

const MyRoute = () => {
   return (
      <div>
         <Route exact path="/" >
            <Header></Header>
            <Home></Home>
         </Route>
         <Route ></Route>
         <Route path='/cart' >
            <Header></Header>
            <Suspense fallback={<div><h3 className='text-info'
               style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >Loading...</h3></div>}>
               <Cart></Cart>
            </Suspense>
         </Route>
      </div>
   )
}

export default MyRoute
