import React from 'react'
import './Loder.css'
import {FadeLoader} from 'react-spinners'
function Loader() {
  return (
    <div className='loader__contatener'>
<FadeLoader color= "#36d7b7" />
    </div>
  )
}

export default Loader