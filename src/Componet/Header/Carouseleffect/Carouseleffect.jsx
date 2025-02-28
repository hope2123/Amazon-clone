import React from 'react'
import {img} from './CarouseleffectData'
import './Carouseleffect.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Carouseleffect() {
return (
<>
<Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
>
{img?.map((imageitem,i) => {
    console.log(imageitem)
    return <img key={i} src={imageitem}/>
})}
</Carousel>
<div className='banner__img_bottom'></div>
</>
)
}

export default Carouseleffect