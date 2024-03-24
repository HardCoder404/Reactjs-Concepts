import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div> 
     <h1>logo</h1>
     <nav>  
        <ul>  
          <li>
            <NavLink to={"/"}>Home</NavLink>    
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
     </nav>
    </div>
  )
}

export default Header



// Navlink tha use krne se hume ye pta chal jata hai ki avi hum kon se page pe hai..meaans like active page... or uske according jo krna h krlo...like mujhe ye krna hai ki... jis v page pe mai avi hu..uska colour change hojaye ...so that i know, mai es page pe hu.. toh Navlink ka use krlo..qki wo kya krta hai ki...wo ek active class generate kr deta hai automatic..or jis se hum css me jake us active ko target krk..uska color change kr sakte hia ... 'U kahlo..Link ke Bad aaya Navlink' 


// ek chiz or.... jab tum espe click krte ho ..toh by default esme red color lga hota h navlink me...toh us se dikkt na lena..wo tum change v kr sakte ho . 