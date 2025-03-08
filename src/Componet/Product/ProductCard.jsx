import React, { useContext } from 'react'
import './Product.css'
import Rating from '@mui/material/Rating';
import Currency from '../Currency/Currency';
import { Link } from 'react-router';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';
function ProductCard({product,flex,renderDesc,renderAdd}) {
  const {image, title, id, rating, price, description } = product;


  const [state, dispatch] = useContext(DataContext);
  
// console.log(state)


  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating,price,description}
    });
  };

  return (
 <>
<section className={`ProductCard__container ${flex ? "product__flexed" : ""}`}>
<Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
 <div className='ProductCard__container_inner'>
  
         {title} 
         {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
              <div className='ProductCard__container_rating'>
               <Rating value={rating?.rate} precision={0.1} />
                <small>{rating?.count}</small>
              </div>
            <div className='ProductCard__container_price'>
            <Currency amount={price}/>
           </div>

</div>
 
<div className='ProductCard__container_cart'>
  {
    renderAdd &&(
<button type="" onClick={addToCart}>ADD TO CART</button>
  )
  }

</div>


</section>
</>
  )
}

export default ProductCard
