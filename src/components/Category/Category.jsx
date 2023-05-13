import "./Category.scss";

import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react";
import Product from "../Products/Product/Product";
import allProductsdata from "../Products/Product/Data";

const Category = () => {
  const data = allProductsdata;
  let category = "";
  const { id } = useParams();
  if (id == 1) {
    category = "Headphone";
  } else if (id == 2) {
    category = "Speaker";
  } else if (id == 3) {
    category = "smartwatch";
  } else if (id == 4) {
    category = "earpod";
  }

  const selectedProduct = useRef();

  useEffect(() => {
    selectedProduct.current.scrollIntoView();
  }, [id]);

  return (
    <div className="category-main-content" ref={selectedProduct}>
      <div className="layout">
        <div className="category-title">{category} category </div>
        <Product homeCategory={category} paramid={id}></Product>
      </div>
    </div>
  );
};

export default Category;
