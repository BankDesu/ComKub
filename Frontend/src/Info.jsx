import React from "react";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import About from "./About";

function Info() {
  const location = useLocation();
  const { data } = location.state || {}; 
  console.log(location.state);

  if (!data) {
    return <div>Info not found</div>;
  }

  const {
    notebook_id,
    notebook_name,
    brand,
    model,
    model_year,
    category,
    cpu,
    gpu,
    display,
    ram,
    storage,
    os,
    price,
    link,
    pic_path,
  } = data;

  return (
    <>
      <div className="box-content bg-gradient-to-br from-zinc-800 to-zinc-700 import text-black">
        <Nav />
        <div className="mt-3 mr-12 ml-12 flex flex-col">
          <div className="w-full h-full grid grid-cols-2 grid-rows-1">
            <img
              className="w-[30rem] mx-auto border-2 border-black"
              src={pic_path}
              alt={notebook_name}
            />
            <div className="grid grid-rows-2">
              <div className="flex justify-around mb-2">
                <div className="w-5/12 h-full bg-white border-2 border-black"></div>
                <div className="w-5/12 h-full bg-white border-2 border-black"></div>
              </div>
              <div className="bg-white border-2 border-black mt-2"></div>
            </div>
          </div>

          <div className="w-full h-full">2</div>
          <div className="w-full h-full">3</div>
        </div>

        <About />
      </div>
    </>
  );
}

export default Info;
