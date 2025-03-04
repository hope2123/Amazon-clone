import React from 'react'
import './Product.css'
import Rating from '@mui/material/Rating';
import Currency from '../Currency/Currency';
import { Link } from 'react-router';
function ProductCard({product}) {
  const {image, title, id, rating, price} = product;
  return (
 <>
<section className='ProductCard__container'>
<Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
 <div className='ProductCard__container_inner'>
  
         {title} 
  
              <div className='ProductCard__container_rating'>
               <Rating value={rating?.rate} precision={0.1} />
                <small>{rating?.count}</small>
              </div>
            <div className='ProductCard__container_price'>
            <Currency amount={price}/>
           </div>

</div>
 
<div className='ProductCard__container_cart'>
<button type="">ADD TO CART</button>
</div>


</section>
</>
  )
}

export default ProductCard
