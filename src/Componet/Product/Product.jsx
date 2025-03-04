import React, { useEffect, useState } from 'react'
import  "./Product.css";
import axios from 'axios';
import ProductCard from './ProductCard';
import Loader from '../Loader/Loader';

function Product() {
  const [Products, setProduct] = useState()
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
axios.get('https://fakestoreapi.com/products')
  .then(response =>{
   //console.log(response)
   setProduct(response.data)
   setIsLoading(false);
  }).catch((err) =>{
  console.log(err)
  setIsLoading(false);
})
  }, [])
  
  return (
    <>
    {isLoading ? (
        <Loader />
      ) : (<section className='Product__container'>
        {
        Products?.map((singleproduct) => {
          return   <ProductCard product={singleproduct} key={singleproduct.id}/>
        })
        }
        
            </section>)}
    
    </>
  )
}

export default Product
