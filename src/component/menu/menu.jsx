import React, { useState } from "react";
import { useEffect } from "react";
import MenuCard from "../menuCard/menucard";


const Menu = (props ) => {
  const {infor} = props;
 
  const menuInfor = infor.map((data, index) => {
    if (index !== 2) {
      return (
        <MenuCard
          data={data}
          key={data.id}
          onClick={props.onClick}
        />
      );
    }
  });



  return (
    <div>
      <div>{menuInfor}  </div>
    </div>
  );
};

export default Menu;
