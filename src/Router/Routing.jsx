import React from 'react'
import Landing from '../pages/Landing/Landing'

import { Route, Routes } from "react-router"
 import Auth from '../pages/Auth/Auth'
 import Cart from '../pages/Cart/Cart'
import Order from '../pages/Order/Order'
import Page404 from '../pages/Page404/Page404'
import Payment from '../pages/Payment/Payment'
import Result from '../pages/Result/Result'
import Productdetail from '../pages/ProductDetail/Productdetail'
import ProtectedRoute from './ProtectedRoute'
//for stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


//provide public key and load it to stirpe
const stripePromise = loadStripe("pk_test_51R4lRz2NRJkjOpGOAd72pDovaXiHcr69WbmP75eYDdAo8eSdZF3z1AiP2LZ6IHAGhNQY67P6ZtKM65oRjdnJx8qy00i2lh77ZQ");
function Routing() {
  return (

<Routes>
<Route path="/" element={<Landing/>}/>
<Route path="/auth" element={<Auth/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route
          path="/order"
          element={
            <ProtectedRoute
              msg={"Please sign in to access your orders"}
              redirect={"/order"}
            >
              <Order />
            </ProtectedRoute>
          }
        />
<Route path="*" element={<Page404/>}/>
<Route
          path="/payment"
          element={
            // wrap payment component by Element from stripe and provide stripe prop with a value of stripePromise and hold that in protectedRoute
            <ProtectedRoute
              msg={
                "Please sign in to complete your payment. (You'll be redirected to the checkout page)"
              }
              redirect={"/payment"}
            >
           <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />    
<Route path="/products/:productId" element={<Productdetail/>}/>
<Route path="/category/:categoryName" element={<Result/>} />
</Routes>
  )
}

export default Routing