import React from 'react'
import './Icon.css'

const Icon = (prop) => {
    
  return (
    <div>
<div className='cont'>

    <img src={prop.img} alt="" />

<h4>{prop.txt}</h4>

</div>


    </div>
  )
}

export default Icon;