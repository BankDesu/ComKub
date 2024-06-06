import React, { useState } from "react";
import Nav from "./Nav";
import Advt_data from "./Advt_data";
import { useLocation } from "react-router-dom";

function Advt() {
  const location = useLocation();
  const { data } = location.state || {};

  if (!data) {
    return <div>Advt not found</div>;
  }

  return (
    <>
      <Nav />
      <Advt_data title={data.title} content={data.content} image={data.image} />
    </>
  );
}

export default Advt;
