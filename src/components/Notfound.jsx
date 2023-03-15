import { Button, Image } from '@chakra-ui/react';
import React from 'react'
import { Link , NavLink} from 'react-router-dom';
import img1 from './../assets/404-img.png';



const Notfound = () => {
  return (
    <div className='Notfound_Page'>
        <h1>It looks like you’re lost...</h1>
        <img src={img1} alt="" className='Image_notFound'/>
       <NavLink className="Button_Style" to={"/"}>Go to Home Page</NavLink>
    </div>
  )
}

export default Notfound
