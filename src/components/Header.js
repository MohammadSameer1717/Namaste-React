import {CDN_URL} from "../../utils/constants"
import { useState } from "react";


const Header = () => {
const [btnNameReact, setBtnNameReact] =useState("login")
console.log("Header render");


  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_URL} alt="App Logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button 
           className="login"
           onClick={() =>{
            btnNameReact === "logout"
            ? setBtnNameReact("Logout")
            : setBtnNameReact("Login") 
            }}
          >
             {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
