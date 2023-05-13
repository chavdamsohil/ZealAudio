import React from "react";
import "./PoppularProducts.scss";
import { useNavigate } from "react-router-dom";

import allProductsdata from "./Data";
import Product from "./Product";

const data = allProductsdata;

const PopularProduct = () => {
  const navigate = useNavigate();

  return (
    <section className="popular-section">
      <div className="heading">
        <p>Popular Products </p>
      </div>
      <div className="main">
        {data
          .filter(function (el) {
            return el.popular == true;
          })
          .map((prod, id) => {
            return (
              <div
                className="product-card"
                onClick={() => {
                  navigate(`/${prod.id}`);
                }}
                key={id}
              >
                <div className="thumbnail">
                  <img src={prod.img} alt="product" />
                </div>
                <div className="prod-details">
                  <span className="name">{prod.name}</span>
                  <span className="price">₹{prod.price}</span>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default PopularProduct;
