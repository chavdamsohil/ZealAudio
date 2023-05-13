import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  removeCartItem,
} from "../../../features/cart/cartSlice";
import { useSelector } from "react-redux";
import allProductsdata from "../../Products/Product/Data";
import "./CartItem.scss";

const CartItem = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-products">
      {cartItems.map(({ prodId, itemCount }, index) => {
        return (
          <div className="cart-product" key={prodId}>
            <div className="img-container">
              <img src={allProductsdata[prodId - 1].img} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">{allProductsdata[prodId - 1].name}</span>
              <MdClose
                className="close-btn"
                onClick={() => {
                  dispatch(removeCartItem(index));
                }}
              ></MdClose>
              <div className="quantity-buttons">
                <span
                  className="button"
                  onClick={() => {
                    dispatch(decrement(index));
                  }}
                >
                  -
                </span>
                <span className="button">{itemCount}</span>
                <span
                  onClick={() => {
                    dispatch(increment(index));
                  }}
                >
                  +
                </span>
              </div>
              <div className="text">
                <span>{itemCount}</span>
                <span>*</span>
                <span className="highlight">
                  {allProductsdata[prodId - 1].price}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
