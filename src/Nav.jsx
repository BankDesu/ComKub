import { useState } from "react";
import "./App.css";
import comkub from "./assets/comkub.png";
import paper2 from "./assets/paper2.png";
import review from "./assets/review.png";
import category from "./assets/category.png";
import search from "./assets/search.png";
import account from "./assets/account.png";
import moon from "./assets/moon.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/">
          <img className="comkub" src={comkub} height="150" />
        </Link>
        <Link to="/article">
          <img className="article" src={paper2} height="150" />
        </Link>{" "}
        <Link to="/review">
          <img className="review" src={review} height="150" />
        </Link>
        {/* Review */}
        <div className="search-section">
          <div className="category-section">
            <button className="category-btn">
              <img className="category-icon" src={category}></img>
            </button>
          </div>
          <div className="searchbar-section">
            <img className="search-icon" src={search} />
            <input className="search-bar" type="search" />
          </div>
        </div>
        <div className="darkmode-section">
          <button className="darkmode-btn">
            <img className="darkmode-icon" src={moon} />
          </button>
        </div>
        <div className="account-section">
          <Link to="/Account">
            <button className="account-btn">
              <img className="account-icon" src={account} />
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
