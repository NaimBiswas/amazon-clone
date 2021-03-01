import React from 'react'
import { Route } from 'react-router-dom'
import Cart from '../CartPage/Cart'
import Home from '../Home/Home'
import Header from './Header'

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
            <Cart></Cart>
         </Route>
      </div>
   )
}

export default MyRoute
