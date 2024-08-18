import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoSearchCircleSharp } from "react-icons/io5";
import './Task.css'

const Task = () => {
    const ig ={
        logo:"https://hianime.to/images/logo.png?v=0.1"
    }
  return (
    <div id='left'>
        <img src={ig.logo} alt="LOGO" />
        
<div id='list'>
    <List txt={"Home"}/>
    <List txt={"Shop"}/>
    <List txt={"Product"}/>
    <List txt={"Cart"}/>
    <List txt={"Checkout"}/>
</div>

<div id='btn'>
<Button cname={"btnone"} txt={"Shoping"}/>
<Button cname={"btntwo"} txt={"Orders%"}/>
</div>

<div id='cart'>
<Cart icon={<FaShoppingCart/>} name={"CART"}/>
<Cart icon={<FcLike/>} name={"FAVORITE"}/>
<Cart icon={<IoSearchCircleSharp/>} name={"SEARCH"}/>
</div>

    </div>
  )
}

export default Task;

export const Button = (prop) => {
    return (
        <div>
            <button className={prop.cname}>{prop.txt}</button>
        </div>
    )
}

export const List = ({txt="list"}) => {
    return (
        <div>
            <li className='list'>{txt}</li>
        </div>
    )
}

export const Cart =(prop)=>{
    return(
        <div className='cart'>
            {prop.icon}
            <h4>{prop.name}</h4>
        </div>
    )
}
export const Social =(prop)=>{
    return(
        <div >
            {prop.icon}
            <h4>{prop.name}</h4>
        </div>
    )
}