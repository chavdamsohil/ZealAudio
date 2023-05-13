import { MdClose } from "react-icons/md";
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
import { useSelector } from "react-redux";
import allProductsdata from "../Products/Product/Data";
import { useEffect, useState } from "react";

const Cart = ({ SetShowCart }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalCartValue = cartItems?.reduce((total, item) => {
      let prodValue = allProductsdata[item.prodId - 1].price * item.itemCount;
      return total + prodValue;
    }, 0);
    setTotal(totalCartValue);
  }, [cartItems]);

  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span
            className="close-btn"
            onClick={() => {
              SetShowCart(false);
            }}
          >
            <MdClose className="close-btn" />
            <span className="text">close</span>
          </span>
        </div>

        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal:</span>
              <span className="text total">₹{total}</span>
            </div>
            <div className="button">
              <button
                className="checkout-cta"
                onClick={() => {
                  SetShowCart(false);
                  alert("Congratulation You purchased product");
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
