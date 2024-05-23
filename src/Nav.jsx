import { useState } from "react";
import "./App.css";
import comkub from "./assets/comkub.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <div className="flex-start">
          <Link to="/">
            <img className="comkub" src={comkub} />
          </Link>
          <Link to="/article" className="article">
            <img
              className="article-img"
              src="https://icons.veryicon.com/png/o/miscellaneous/shaanxi-left-column-icon/article-management-3.png"
            />
            {/* <p className="article-text">บทความ</p> */}
          </Link>{" "}
          <Link to="/review" className="review">
            <img className="review-img" src="https://cdn-icons-png.flaticon.com/512/2701/2701190.png" />
            {/* <p className="article-text">รีวิว</p> */}
          </Link>
        </div>

        <div className="flex-end">
          <div className="darkmode-section">
            <button className="darkmode-btn">
              <img className="darkmode-icon" src="https://static-00.iconduck.com/assets.00/moon-icon-512x512-fm9crgpt.png" />
            </button>
          </div>
          <div className="account-section">
            <Link to="/Account">
              <button className="account-btn">
                <img className="account-icon" src="https://www.svgrepo.com/show/456992/account.svg" />
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
