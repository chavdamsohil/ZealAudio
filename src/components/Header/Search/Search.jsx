import React from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/headphone-prod-4.webp";
const Search = ({ SetShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input autoFocus type="text" placeholder="Search for products" />
        <MdClose
          className="close-btn"
          onClick={() => {
            SetShowSearch(false);
          }}
        />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="image-container">
              <img src={prod} alt="product" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="desc">Product Description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
