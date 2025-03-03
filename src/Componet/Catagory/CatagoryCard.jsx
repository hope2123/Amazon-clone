import React from 'react'
import './Catagory.css'
import { Link } from 'react-router'
function CatagoryCard({data}) {
  return (
    <>
    <div className='CatagoryCard__container'>
    <Link to="/catagory">
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

export default CatagoryCard