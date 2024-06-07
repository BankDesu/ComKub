import React, { useState } from "react";
import Nav from "./Nav";
import Advt_data from "./Advt_data";
import { useLocation } from "react-router-dom";
import About from "./About";

function Advt() {
  const location = useLocation();
  const { data } = location.state || {};
  console.log(location.state)

  if (!data) {
    return <div>Advt not found</div>;
  }

  return (
    <>
    <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 import text-white ">
      <Nav />
      <Advt_data data={data} />
      <About/>
    </div>
    </>
  );
}

export default Advt;
