import React, { useState } from "react";
import Cart from "../cart/cart";
const Header = (props) => {

 
  
  return (
    <header
      style={{
        position:"sticky",
        top:'0px',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#802408",
        color: "white",
        padding: "10px 10%",
        zIndex:"10",
        
      }}
    >
      <div className="titleHeader">
        <h2> ReactMeals </h2>
      </div>
      <div>
        <Cart {...props}/>
      </div>
    

    </header>
  );
};

export default Header;
