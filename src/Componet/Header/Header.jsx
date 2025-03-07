import React, { useContext } from 'react'
import './Header.css'
import amazon_letter_logo from '../../assets/image/logo/amazon_letter_white_logo.png'
import { SlLocationPin } from "react-icons/sl"
import { BsSearch } from "react-icons/bs"
import { BiCart } from "react-icons/bi"
import Lower from './Lower'
import {Link } from 'react-router'
import { DataContext } from '../DataProvider/DataProvider'
function Header() {

  const [{basket}, dispatch] = useContext(DataContext);
   console.log(basket.length)



  return (
    <section className='header__container_outer'>
<div>
<div className='header__container_inner'>
     <div className='header__container__logo'>
             <Link to="/">
              <img src={amazon_letter_logo} alt="amazon logo" />
            </Link>
            <div className='header__container__delivery'>
              <span>
              <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
    </div>
            
 <div className='header__container__search'>   
    <select name="" id="">
              <option value="">All</option>
              <option value="">Art and crafts</option>
              <option value="">Automotive</option>
              <option value="">Books</option>
              <option value="">Electronics</option>
              <option value="">Software</option>
              <option value="">Baby</option>
        </select>
 <input type="text" placeholder='search'/>
 <BsSearch size={42} />
 </div>

 <div className='header__container_right_side'>

     <Link to="/" className="header__container_language">
<img src="https://cdn.britannica.com/12/12-050-81DC7939/Flag-Ethiopia.jpg"alt=""/>
<select name="" id="">
    <option value="">AM</option>
</select>
 </Link>
 <div className='header__container_sign'>
<Link to="/auth">
<p>Hello, Sign In</p>
<span>Account & Lists</span>
</Link>
 </div>
<div className="header__container_order">
<Link to="/order">
              <p>returns</p>
              <span>& Orders</span>
            </Link>

</div>
            <div className="header__container_cart">
            <Link to="/cart">
              <BiCart size={45} />
              <span>{basket.length}</span>
              
            </Link>
            <p>carts</p>
            </div>

</div>
</div>
</div>
<Lower />
</section>
  )
}

export default Header