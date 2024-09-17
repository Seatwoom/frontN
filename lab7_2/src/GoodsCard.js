import React from "react";
import "./styles.css";

const GoodsCard = ({ image, title, price, isActive }) => {
  return (
    <div className={`goods-card ${isActive ? "active" : ""}`}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price} usdt</p>
    </div>
  );
};

export default GoodsCard;
