import React from "react";
import "../css/Header.css";
import { Link, useHistory } from "react-router-dom";
import {
  Search,
  ShoppingBasket,
  ShoppingBasketOutlined,
} from "@material-ui/icons";
import { useStateValue } from "../StateProvider";
import { auth } from "./Firebase";
import { isEmpty } from "@firebase/util";

function Header() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  let result;
  if(user){
    let str = user.email.split("@");
    result = str[0];
  }
 

  return (
    <nav className="header">
      {/* logo */}
      <Link to="/">
        <img className="header__logo" src="./images/amazon_logo.png" alt="" />
      </Link>
      {/* search input */}
      <div className="header__search">
        <input type="text" className="header_searchInput" />
        <Search className="header__searchIcon" />
      </div>
      {/* 3 links */}
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={handleAuth} className="header__option">
            <span className="header__optionLineone">
              {!user ? "hey" : result}
            </span>
            <span className="header__optionLinetwo">
              {user ? "sign Out" : "sign In"}
            </span>
          </div>
        </Link>
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineone">Return </span>
            <span className="header__optionLinetwo">& order</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineone">Your</span>
            <span className="header__optionLinetwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketOutlined />
            <span className="header__optionLinetwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
