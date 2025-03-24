import React from 'react'
import './Category.css'
import { Link } from 'react-router'
function CategoryCard({data}) {
  //console.log(data);
  return (
    <>
    <div className='categoryCard__container'>
    <Link to={`/category/${data?.name}`}>
    <span>
  <h2>{data.title}</h2>
    </span>
   <img src={data.imgLink} alt=""/>
     <p>shop now</p>
        </Link>
    </div>
    </>
  )
}

export default CategoryCard