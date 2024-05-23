import React from "react";
import Nav from "./Nav";
import "./Home.css";

function Home() {
  return (
    <>
      <Nav />
      <div className="search-section">
        <div className="category-section">
          <button className="category-btn">
            <img
              className="category-icon"
              src="https://cdn-icons-png.flaticon.com/512/2603/2603910.png"
            ></img>
          </button>
        </div>
        <div className="searchbar-section">
          <input
            className="search-bar"
            type="search"
            placeholder="คุณมองหาอะไรอยู่?"
          />
          <button className="search-btn" type="submit">
            <img
              className="search-icon"
              src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
            />
          </button>
        </div>
      </div>
      <div className="slideset1">
        <div className="slide1">
          <h1>This is slide 1</h1>
          <p>Slide 1</p>
          <p>
            It has a <a href="./">link.</a>
          </p>
        </div>
        <div className="slide2">
          <h1>This is the second slide</h1>
          <p>Second slide</p>
        </div>
        <div className="slide3">
          <h1>This is slide number 3</h1>
          <p>Slide number 3</p>
        </div>
      </div>

      <div className="content-container-home">
        {/* <NotebookData/> */}
        <div className="data-home">1</div>
        <div className="data-home">2</div>
        <div className="data-home">3</div>
        <div className="data-home">4</div>
        <div className="data-home">5</div>
        <div className="data-home">6</div>
        <div className="data-home">7</div>
        <div className="data-home">8</div>
        <div className="data-home">9</div>
        <div className="data-home">10</div>
        <div className="data-home">11</div>
        <div className="data-home">12</div>
        <div className="data-home">13</div>
      </div>
    </>
  );
}

export default Home;
