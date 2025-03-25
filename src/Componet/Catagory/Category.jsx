import React from 'react'
import './Category.css';
import {CategoryData} from './CategoryData'
import CategoryCard from './CategoryCard'
function Category() {
  return (
    <>
    <div className='category__container'>
      {
        CategoryData.map((index)=>(
        <CategoryCard key={index.name} data = {index}/>
        ))
      }

    </div>
  

    </>
  )
}

export default Category