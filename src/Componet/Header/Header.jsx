import React from 'react'
import './Header.css'
import amazon_letter_logo from '../../assets/logo/amazon_letter_white_logo.png'
import { SlLocationPin } from "react-icons/sl"
import { BsSearch } from "react-icons/bs"
import { BiCart } from "react-icons/bi"
function Header() {
  return (
<div className='header__container'>
<div className='header__container_inner'>
     <div className='header__container__logo'>
             <a href="/">
              <img src={amazon_letter_logo} alt="amazon logo" />
            </a>
            <div className='delivery'>
              <span>
              <SlLocationPin />
              </span>
              <div>
                <p>Deliver href</p>
                <span>Ethiopia</span>
              </div>
            </div>
    </div>
            
 <div className='header__container__search'>   
    <select name="" id="">
    <option value="">All</option>
              <option value="">Art and crafts</option>
              <option value="">Auhrefmotive</option>
              <option value="">Books</option>
              <option value="">Electronics</option>
              <option value="">Software</option>
              <option value="">Baby</option>
        </select>
 <input type="text" placeholder='search product'/>
 <BsSearch size={42} />
 </div>

 <div className='header__container_right_side'>

     <a href="/" className="header__container_language">
<img
                src="https://cdn.britannica.com/12/12-050-81DC7939/Flag-Ethiopia.jpg"
                alt=""/>
<select name="" id="">
    <option value="">AM</option>
</select>
 </a>
 <div>
 <p>Hello, Sign In</p>
 <span>Account & Lists</span>
 </div>
 <a href="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </a>

            <a href="/cart" className={styles.cart}>
              <BiCart size={35} />
              <span>hreftalItem</span>
            </a>

</div>
<h1>gggg</h1>
</div>
<h1>hhee</h1>
</div>
    
  )
}

export default Header