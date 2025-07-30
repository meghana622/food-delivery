import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState({})
    const addToCart=(itemId)=>{
        //Adds an item into the cart
        if(!cartItems[itemId]){
           setCartItems((prev)=>({...prev,[itemId]:1}))

        }
        // If that product does not have id createsone and add
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    // removes an item from the cart
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalCartAmount=()=>{
        let totalAmount=0
        for (const item in cartItems)   
        {
            if(cartItems[item]>0){
                      
            let itemInfo=food_list.find((product)=>product._id===item)
            totalAmount +=itemInfo.price * cartItems[item]
            }
        }
         return totalAmount
    }
    
    //Passing above 3 into contextValue
    const contextValue={
       food_list,
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart,
       getTotalCartAmount
}
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
            </StoreContext.Provider>
    )
}
export default StoreContextProvider