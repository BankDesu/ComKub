import { useState } from "react";
import "./App.css";
import comkub from "./assets/comkub.png";
import paper2 from "./assets/paper2.png";
import review from "./assets/review.png";
import category from "./assets/category.png";
import search from "./assets/search.png";

function Nav() {
  return (
    <>
      <nav>
        <a href="#">
          <img src={comkub} height="150" />
        </a>
        {/*Home */}
        <a href="#">
          <img src={paper2} height="150" />
        </a>{" "}
        {/* Article */}
        <a href="#">
          <img src={review} height="150" />
        </a>
        {/* Review */}
        <div className="search-section">
          <button className="category-btn">
            <img className="category" src={category}></img>
          </button>
          <img className="search-icon" src={search} />
          <input className="search-bar" type="search" />
        </div>
      </nav>
    </>
  );
}

export default Nav;
