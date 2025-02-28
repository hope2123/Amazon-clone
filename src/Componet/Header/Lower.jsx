import React from 'react'
import './Lower.css'
import { AiOutlineMenu } from "react-icons/ai";
function Lower() {
  return (

<section className='Lower__container_outer'>
    <section className='Lower__container_inner'>
<ul>
    <li className='Lower__container_out-line'>
        <AiOutlineMenu />
        <p>All</p></li>
            <li>Today's Deals</li>
            <li>Costumer Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
</ul>
    </section>
</section>
  )
}

export default Lower