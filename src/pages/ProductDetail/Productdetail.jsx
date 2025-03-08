import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import Layout from '../../Componet/Layout/Layout'
import { useParams } from 'react-router'
import axios from 'axios';
import { BaseURL } from '../../ApI/EndPoints';
import ProductCard from '../../Componet/Product/ProductCard';
import Loader from '../../Componet/Loader/Loader';

function Productdetail() {
  const { productId } = useParams();
 //console.log(productId)
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get(`${BaseURL}/products/${productId}`)
    .then((res) => {
      //console.log(res.data, productId);
      setProduct(res.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
}, []);
  
  return (
    <Layout>
   
     {
     isLoading ?(<Loader/>):(<ProductCard product={product}
      flex={true}
          renderDesc={true}
          renderAdd={true}
     />) 
      }
    </Layout>
    
  )
}

export default Productdetail