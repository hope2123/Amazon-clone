import React from 'react'
import './category.css'
import {CategoryData} from './CategoryData'
import CategoryCard from './CategoryCard'
function Category() {
  return (
    <>
    <div className='category__container'>
      {
        CategoryData.map((index)=>(
        <CategoryCard data = {index}/>
        ))
      }

    </div>
  

    </>
  )
}

export default Category