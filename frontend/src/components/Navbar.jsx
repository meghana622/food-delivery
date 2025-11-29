import React, { useContext } from "react";
import './Navbar.css'
import { assets } from "../assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/Storecontext";
const Navbar=({setShowLogin})=>{
    const [menu,setMenu]=useState("menu")
   const {getTotalCartAmount}=useContext(StoreContext)
   
    return(
        <div className="navbar">
        <ul className="nav">
            <Link to='/' onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>home</Link>
            <a href="#explore-menu" onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>menu</a>
            <a href="#app-download" onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}> mobile-app</a>
            <a href="#footer" onClick={()=>setMenu('contact us')} className={menu==='contact us'?'active':''}>contact us</a>
        </ul>
        <div className="navsearch">
        <img src={assets.search_icon}alt="search icon"/>
        </div>
        <div className="navbasket">
       <Link to='/cart'><img src={assets.basket_icon} alt="basket" /></Link>
        <div className={getTotalCartAmount()?'':'dot'}></div>
        </div>
        <div >
            <button onClick={()=>setShowLogin(true)} className="button">Sign in</button>
        </div>
        </div>
    )
}

export default Navbar

