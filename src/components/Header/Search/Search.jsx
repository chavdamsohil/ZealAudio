import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import allProductsdata from "../../Products/Product/Data";

const Search = ({ SetShowSearch }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchedProduct =
    search !== "" &&
    allProductsdata?.filter((prod) => {
      return prod.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          autoFocus
          type="text"
          placeholder="Search for products"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <MdClose
          className="close-btn"
          onClick={() => {
            SetShowSearch(false);
          }}
        />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {searchedProduct.length
            ? searchedProduct.map((prod) => {
                return (
                  <div
                    className="search-result-item"
                    key={prod.id}
                    onClick={() => {
                      navigate(`/${prod.id}`);
                      SetShowSearch(false);
                    }}
                  >
                    <div className="image-container">
                      <img src={prod.img} alt="product" />
                    </div>
                    <div className="prod-details">
                      <span className="name">{prod.name}</span>
                      <span className="desc">Product Description</span>
                    </div>
                  </div>
                );
              })
            : "No product Found ... "}
        </div>
      </div>
    </div>
  );
};

export default Search;
