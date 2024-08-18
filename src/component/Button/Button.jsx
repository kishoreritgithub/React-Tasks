import React from 'react'
import './Button.css'
const Button = (prop) => {
  return (
    <div >
        <button className={prop.cname} style={{backgroundColor:prop.bg}}>{prop.txt}</button>
    </div>
  )
}

export default Button

// export const Lable=({txt,type,bg})=>{
//   return(
// <div>
//   <label htmlFor="" style={{backgroundColor:bg}}>{txt}</label>
//   <input type={type} />
// </div>
//   )
// }
export const Lable=(prop)=>{
  return(
<div>
  <label htmlFor="" style={{backgroundColor:prop.bg}}>{prop.txt}</label>
  <input type={prop.type} />
</div>
  )
}