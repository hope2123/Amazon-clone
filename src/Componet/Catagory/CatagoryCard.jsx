import React from 'react'
import './Catagory.css'
function CatagoryCard({data}) {
  return (
    <>
    <div className='CatagoryCard__container'>
    <a href="">
    <span>
  <h2>{data.title}</h2>
    </span>
   <img src={data.imgLink} alt=""/>
     <p>shop now</p>
        </a>
    </div>
    </>
  )
}

export default CatagoryCard