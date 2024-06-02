import React from "react";
import Nav from "./Nav";
import './Article_container.css';

function Article() {
  return (
    <>
      <Nav />
      <div className="content-container-article">
        {/* <NotebookData/> */}
        <div className="data-article">1</div>
        <div className="data-article">2</div>
        <div className="data-article">3</div>
        <div className="data-article">4</div>
        <div className="data-article">5</div>
        <div className="data-article">6</div>
        <div className="data-article">7</div>
        <div className="data-article">8</div>
        <div className="data-article">9</div>
        <div className="data-article">10</div>
        <div className="data-article">11</div>
        <div className="data-article">12</div>
      </div>
    </>
  );
}

export default Article;
