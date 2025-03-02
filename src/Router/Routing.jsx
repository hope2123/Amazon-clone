import React from 'react'
import Landing from '../pages/Landing/Landing'

import { Route, Routes } from "react-router"
function Routing() {
  return (
  
<Routes>
<Route path="/" element={<Landing/>}/>
</Routes>
  )
}

export default Routing