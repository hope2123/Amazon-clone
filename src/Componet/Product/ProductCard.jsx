import React from 'react'
import './Product.css'
import Rating from '@mui/material/Rating';
import Currency from '../Currency/Currency';
function ProductCard({Productdata}) {
  const {image, title, id, rating, price} = Productdata;
  return (
 <>
<section className='ProductCard__container'>






<a href=""><img src={image} alt="" /></a>

        
 <div className='ProductCard__container_inner'>
  
         {title} 
  
              <div className='ProductCard__container_rating'>
               <Rating value={rating.rate} precision={0.1} />
                <small>{rating.count}</small>
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
