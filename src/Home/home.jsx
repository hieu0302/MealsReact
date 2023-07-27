import Header from "../component/header/header";
import "./home.css";
import Menu from "../component/menu/menu";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [infor, setInfor] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [addCart, setAddCart] = useState([]);
 
  
  const getInfor = async () => {
    try {
      const res = await axios.get(
        "https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals"
      );

      if (res) {
        const { data } = res;
        setInfor(data);
      }
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {
    getInfor();
    
  }, []);
  
  const handleClick = (inputValue,index) => {
    const findOder = infor.find((p)=>p.id === index)
    setQuantity([...quantity,Number(inputValue)])
    setAddCart([findOder,{inputValue}]);
    
  };
  
  const sum = quantity.reduce((total, num) => total + num,0)

  return (
    <div>
      <Header 
        quantity = {sum}
        addCart = {addCart}
       
      />
      <div className="body">
        <div className="coverImage" style={{ height: "18rem" }}>
          <img
            style={{ width: "100%", objectFit: "cover", height: "100%" }}
            src={require("../images/banner.jpg")}
          />
        </div>
        <div className="overview">
          <h2> Delicious Food, Delivered To You </h2>
          <p>
            Choose your favorite meal from our board selection of avaliable
            meals and enjoy a delicious lunch or dinner at home{" "}
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs
          </p>
        </div>
        <div className="menu">
          <Menu infor={infor} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Home;
