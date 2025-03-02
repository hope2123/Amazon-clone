import React from 'react'
import numeral from 'numeral'
const Currency =({amount})=>{
    const formatcurrency = numeral(amount).format("$0,0.00")
  return <div>{formatcurrency}</div>
}

export default Currency