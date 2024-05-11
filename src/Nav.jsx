import { useState } from "react";
import "./App.css";
import comkub from "./assets/comkub.png";
import paper2 from "./assets/paper2.png";
import review from "./assets/review.png";
import category from "./assets/category.png";
import search from "./assets/search.png";
import account from "./assets/account.png";
import moon from "./assets/moon.png";

function Nav() {
  return (
    <>
      <nav>
        <a href="#">
          <img className="comkub" src={comkub} height="150" />
        </a>
        {/*Home */}
        <a href="#">
          <img className="article" src={paper2} height="150" />
        </a>{" "}
        {/* Article */}
        <a href="#">
          <img className="review" src={review} height="150" />
        </a>
        {/* Review */}
        <div className="search-section">
          <button className="category-btn">
            <img className="category-icon" src={category}></img>
          </button>
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
          <button className="account-btn">
            <img className="account-icon" src={account} />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
