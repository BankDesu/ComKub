import React from "react";
import Nav from "./Nav";
import "./Home.css"

function Home() {
  return (
    <>
      <Nav />
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
      </div>
    </>
  );
}

export default Home;
