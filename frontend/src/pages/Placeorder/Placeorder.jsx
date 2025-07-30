import React, { useContext } from "react";
import './Placeorder.css'
import { StoreContext } from "../../context/Storecontext";
const Placeorder=()=>{
    const{getTotalCartAmount}=useContext(StoreContext)
return(
    <div>
        <form className="place-order">
            <div className="place-order-left">
               <p className="title">Delivery Information</p>
               <div className="multi-fields">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                </div> 
                <input type="text" placeholder="Email address"/>
                <input type="text" placeholder="Street"/>
                <div className="multi-fields">
                <input type="text" placeholder="City"/>
                <input type="text" placeholder="State"/>
                </div>
                <div>
                    <input type="text" placeholder="PIN code"/>
                <input type="text" placeholder="Country"/>
                </div>
                <input type="text" placeholder="Phone" />
            </div>
            <div>
            <div className="place-order-right">

               <div className="cart-total">
                <h2>Cart Total</h2>
                 <div>
                   <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>₹{getTotalCartAmount()}</p>
                   </div>
                   <hr />
                    <div className="cart-total-details">
                        <p>Delivery Fee</p>
                        <p>₹{40}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <b>Total</b>
                        <b>₹{getTotalCartAmount()+40}</b>
                    </div>
                
                 </div>
                 <button >PROCEED TO PAYMENT</button>
              </div>
              
            </div>
            
            
        </div>
        </form>
        
    </div>
)
}
export default Placeorder