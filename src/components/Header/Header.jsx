import { useState, useEffect } from "react";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./Header.scss";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, SetShowCart] = useState(false);
  const [showSearch, SetShowSearch] = useState(false);

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll > 250) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <Link className="linkHome" to="/">
            <p className="center">ZealAudio</p>
          </Link>

          <div className="right">
            <TbSearch
              onClick={() => {
                SetShowSearch(true);
              }}
            ></TbSearch>
            <AiOutlineHeart></AiOutlineHeart>
            <span
              className="cart-icon"
              onClick={() => {
                SetShowCart(true);
              }}
            >
              <CgShoppingCart></CgShoppingCart>
              <span>5</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart SetShowCart={SetShowCart}></Cart>}
      {showSearch && <Search SetShowSearch={SetShowSearch}></Search>}
    </>
  );
};

export default Header;
