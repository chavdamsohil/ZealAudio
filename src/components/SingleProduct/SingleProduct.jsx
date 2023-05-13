import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

import "./SingleProduct.scss";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import allProductsdata from "../Products/Product/Data";
import Product from "../Products/Product/Product";

const SingleProduct = () => {
  const [itemCount, setItemCount] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const selectedProduct = useRef();

  useEffect(() => {
    selectedProduct.current.scrollIntoView();
    setItemCount(1);
  }, [id]);
  const { id: prodId, img, name, price, categaory } = allProductsdata[id - 1];

  return (
    <div className="single-product-main-content" ref={selectedProduct}>
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={img} alt="" />
          </div>
          <div className="right">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
            <span className="desc">Product description</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span
                  className="button"
                  onClick={() => {
                    if (itemCount > 1) setItemCount((pre) => pre - 1);
                  }}
                >
                  -
                </span>
                <span>{itemCount}</span>
                <span
                  className="button"
                  onClick={() => {
                    setItemCount((pre) => pre + 1);
                  }}
                >
                  +
                </span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  dispatch(
                    addToCart({ prodId, itemCount }),
                    alert("added to cart")
                  );
                }}
              >
                <FaCartPlus size={20}></FaCartPlus>
                Add to cart
              </button>
            </div>
            <span className="divider"></span>
            <div className="info-item">
              <span className="text-bold">
                Category: <span>{categaory}</span>
              </span>
              <span className="tetx-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16}></FaFacebookF>
                  <FaTwitter> size={16}</FaTwitter>
                  <FaInstagram size={16}></FaInstagram>
                  <FaLinkedinIn size={16}></FaLinkedinIn>
                  <FaPinterest size={16}></FaPinterest>
                </span>
              </span>
            </div>
          </div>
        </div>
        <Product heading={"Related Products"} category={categaory}></Product>
      </div>
    </div>
  );
};

export default SingleProduct;
