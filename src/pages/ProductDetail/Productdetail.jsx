import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import Layout from '../../Componet/Layout/Layout'
import { useParams } from 'react-router'
import axios from 'axios';
import { BaseURL } from '../../ApI/EndPoints';
import ProductCard from '../../Componet/Product/ProductCard';

function Productdetail() {
  const { productId } = useParams();
 //console.log(productId)
  const [product, setProduct] = useState({})
  useEffect(() => {
    axios.get(`${BaseURL}/products/${productId}`)
    .then((res) => {
      console.log(res.data, productId);
      setProduct(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);
  
  return (
    <Layout>
     <h1>test</h1>
     {<ProductCard product={product}/>}
    </Layout>
    
  )
}

export default Productdetail