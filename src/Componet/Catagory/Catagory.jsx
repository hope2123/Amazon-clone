import React from 'react'
import './Catagory.css'
import {CatagoryData} from './CatagoryData'
import CatagoryCard from './CatagoryCard'
function Catagory() {
  return (
    <>
    <div className='Catagory__container'>
      {
        CatagoryData.map((index)=>(
        <CatagoryCard data = {index}/>
        ))
      }

    </div>
  

    </>
  )
}

export default Catagory