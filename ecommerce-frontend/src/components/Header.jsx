import { NavLink } from "react-router";
import "./Header.css";
import logoWhiteImage from "../assets/images/logo-white.png";
import mobileLogoWhiteImage from "../assets/images/mobile-logo-white.png";
import { useNavigate } from "react-router";
import searchIconImage from "../assets/images/icons/search-icon.png";
import cartIconImage from "../assets/images/icons/cart-icon.png";
import { useState } from "react";

export default function Header({ cart, search }) {
  let totalQuantity = 0;
  cart &&
    cart.forEach((cartItem) => {
      totalQuantity += cartItem.quantity;
    });
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" src={logoWhiteImage} />
          <img className="mobile-logo" src={mobileLogoWhiteImage} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input
          className="search-bar"
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          type="text"
          placeholder="Search"
          value={search || searchValue}
        />

        <button
          className="search-button"
          onClick={(event) => {
            console.log(event.target.value);
            navigate(`/?search=${searchValue}`);
          }}
        >
          <img className="search-icon" src={searchIconImage} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={cartIconImage} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
