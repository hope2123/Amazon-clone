import React from 'react'
import Landing from '../pages/Landing/Landing'

import { Route, Routes } from "react-router"
 import Auth from '../pages/Auth/Auth'
 import Cart from '../pages/Cart/Cart'
import Order from '../pages/Order/Order'
import Page404 from '../pages/Page404/Page404'
import Payment from '../pages/Payment/Payment'
import Result from '../pages/Result/Result'
import Productdetail from '../pages/ProductDetail/ProductDetail'
function Routing() {
  return (

<Routes>
<Route path="/" element={<Landing/>}/>
<Route path="/auth" element={<Auth/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/order" element={<Order/>}/>
<Route path="*" element={<Page404/>}/>
<Route path="/payment" element={<Payment/>}/>
<Route path="/productdetail" element={<Productdetail/>}/>
<Route path="/category/:categoryName" element={<Result/>} />
</Routes>
  )
}

export default Routing