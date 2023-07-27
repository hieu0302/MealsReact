import React, { useState } from "react";
import "./menucard.css";
import { Button } from "antd";

const MenuCard = ({ data, onClick }) => {
  const [inputValue, setInputValue] = useState(1);

  const { id, name, description, price, image } = data;

  const handleClickChild = () => {
    onClick(inputValue, id, name);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={"cardMenu"} style={{ color: "black" }}>
      <div className="imageOverview">
        <img style={{ width: "100px", borderRadius: "10px" }} src={image} />
        <div>
          <h4>{name}</h4>
          <p style={{ fontStyle: "italic" }}>{description}</p>
          <h5 style={{ color: "#960319" }}>{price}$</h5>
        </div>
      </div>
      <div className="addProduct">
        <div className="input_quantity">
          <h6 style={{ margin: "0px" }}>Amount:</h6>

          <input
            style={{
              width: "60px",
              borderRadius: "10px",
              outline: "none",
              border: "solid 1px gray"
            }}
            onChange={handleChange}
            value={inputValue}
            min={1}
            type="number"
            defaultValue={1}
          />
        </div>
        <Button
          onClick={handleClickChild}
          type="primary"
          style={{
            background: "#820014",
            width: "100%",
            borderRadius: "20px",
            outline: "none",
          }}
        >
          Add +
        </Button>
      </div>
    </div>
  );
};

export default MenuCard;
