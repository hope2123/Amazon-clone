import React, { useEffect, useState } from 'react'
import  "./Product.css";
import axios from 'axios';
import ProductCard from './ProductCard';

function Product() {
  const [Products, setProduct] = useState()
  useEffect(() => {
axios.get('https://fakestoreapi.com/products')
  .then(response =>{
   //console.log(response)
   setProduct(response.data)
  }).catch((err) =>{
  console.log(err)
})
  }, [])
  
  return (
    <>
    <section className='Product__container'>
{
Products?.map((singleproduct) => {
  return   <ProductCard Productdata={singleproduct} key={singleproduct.id}/>
})
}

    </section>
    </>
  )
}

export default Product
