import { useNavigate } from "react-router-dom";
import "./Product.scss";

import allProductsdata from "./Data";

const data = allProductsdata;

const Product = ({ heading, category, paramid }) => {
  let homecategory = "";
  if (paramid == 1) {
    homecategory = "headphone";
  } else if (paramid == 2) {
    homecategory = "speaker";
  } else if (paramid == 3) {
    homecategory = "smartwatch";
  } else if (paramid == 4) {
    homecategory = "earpod";
  }

  const navigate = useNavigate();

  return (
    <div className="main">
      <p>{heading}</p>
      <div className="products-container">
        {data
          .filter(function (el) {
            return el.categaory == category || el.categaory == homecategory;
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
    </div>
  );
};

export default Product;
