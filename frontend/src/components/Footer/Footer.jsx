
import React from "react";
import './Footer.css'
import { assets } from "../../assets/assets";

const Footer=()=>{
   return(
    <div className="footer" id="footer">
     <div className="footer-content">
     <div className="footer-left">
      
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam dicta veritatis nesciunt reprehenderit enim dolor ratione ducimus sunt dolorem iste, recusandae minima deleniti sint est voluptates! Nulla quam nisi deleniti?</p>
      <div className="footer-social-icons">
       <img src={assets.facebook_icon} alt="" />
       <img src={assets.twitter_icon} alt="" />
       <img src={assets.linkedin_icon} alt="" />
      </div>
     </div>
      <div className="footer-center">
      <h2>COMPANY</h2>
      <ul>
        <li> Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy policy</li>
      </ul>
     </div>
     <div className="footer-right">
      <h2>GET IN TOUCH</h2>
      <li>+91 6305907188</li>
      <li className="mail">bmeghana885@gmail.com</li>
     </div>
    
</div>
         <hr />
         <p className="footer-copyright">Copyright ©2025 - All Rights Reserved.</p>
    </div>
   )
}
export default Footer