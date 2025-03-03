import React, { useEffect, useState } from 'react'
import  './Result.css'
import Layout from '../../Componet/Layout/Layout'
import axios from 'axios'
import { useParams } from 'react-router'
import { BaseURL } from '../../ApI/EndPoints'
import ProductCard from '../../Componet/Product/ProductCard'
function Result() {
  const { categoryName } = useParams();
  const [Result, setResult] = useState([])

  useEffect(() => {
    axios.get(`${BaseURL}products/category/${categoryName}`)
      .then(response => setResult(response.data))
      .catch(error => console.error(error));
  }, [categoryName]); // Re-fetch when categoryName changes
  
  return (
  
    <Layout>
      <section>
      <div className='Result_container_header'>
        <h1>Result</h1>
      <p>category{categoryName}</p></div>
      <hr />
      <div className = "Result_container">
            {Result?.map((Productdata) => (
              <ProductCard key={Productdata.id} Productdata={Productdata}
              />
            ))}
          </div>
      </section>
    </Layout>
  )
}

export default Result