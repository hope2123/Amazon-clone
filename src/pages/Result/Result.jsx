import React, { useEffect, useState } from 'react'
import  './Result.css'
import Layout from '../../Componet/Layout/Layout'
import axios from 'axios'
import { useParams } from 'react-router'
import { BaseURL } from '../../ApI/EndPoints'
import ProductCard from '../../Componet/Product/ProductCard'
import Loader from '../../Componet/Loader/Loader'
function Result() {
  const { categoryName } = useParams();
  const [Result, setResult] = useState({})
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    setIsloading(true);
    axios.get(`${BaseURL}/products/category/${categoryName}`)
      .then(response => setResult(response.data))
      setIsloading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsloading(false);
  }, []); 
  
  return (
  
    <Layout>
      <section>
      <div className='Result_container_header'>
        <h1>Result</h1>
      <p>category{categoryName}</p></div>
      <hr />
      <hr />
      {isLoading ? (
          <Loader />
        ) : (<div className = "Result_container">
          {Result?.map((product) => (
            <ProductCard key={product.id} product={product}
            />
          ))}
        </div>)}
      
      </section>
    </Layout>
  )
}

export default Result