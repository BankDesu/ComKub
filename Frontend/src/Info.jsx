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
      <div className="box-border bg-gradient-to-br from-zinc-800 to-zinc-700 import text-black">
        <Nav />
        <div className="mt-3 mr-12 ml-12 mb-28 flex flex-col">
          <div className="w-full h-full grid grid-cols-2 grid-rows-1">
            <img
              className="w-[30rem] h-[22rem] ml-20 mx-auto border-2 border-black"
              src={pic_path}
              alt={notebook_name}
            />
            <div className=" grid grid-rows-2 mr-12 ">
              <div className="flex justify-around mb-2">
                <div className="w-5/12 h-full bg-white border-2 border-black rounded-lg"></div>
                <div className="w-5/12 h-full bg-white border-2 border-black"></div>
              </div>
              <div className="w-11/12 mx-auto bg-white border-2 border-black mt-2"></div>
            </div>
          </div>

          <div className="w-[70rem] h-[15rem] flex mx-auto p-6 bg-white border-2 border-black mt-5 rounded-xl">
            <div className="w-full bg-red-500">
              <p className="text-3xl pl-8">{notebook_name}</p>
              <p className="text-base pt-1 pl-16">Brand: {brand}</p>
              <p className="text-base pt-2 pl-16">Model: {model}</p>
              <p className="text-base pt-2 pl-16">Category: {category}</p>
              <p className="text-base pt-2 pl-16">CPU: {cpu}</p>
              <p className="text-base pt-2 pl-16">GPU: {gpu}</p>
            </div>
            <div className="w-full pl-16 border-l-2 border-black">
              <p className="text-base pt-1 pl-16">Display: {display}</p>
              <p className="text-base pt-1 pl-16">RAM: {ram}</p>
              <p className="text-base pt-1 pl-16">Storage: {storage}</p>
              <p className="text-base pt-1 pl-16">OS: {os}</p>
              <p className="text-base pt-1 pl-16">Price: {price}</p>
              <a className="text-base pt-1 pl-16" href={link}>click here for more infomation</a>
            </div>
          </div>
          <div className="w-[70rem] h-[15rem] mx-auto mt-5 grid grid-cols-2">
            <div className="w-full grid grid-rows-2">
              <div className="w-11/12 h-[7rem] bg-blue-300 border-2 border-black"></div>
              <div className="w-11/12 h-[7rem] bg-blue-300 border-2 border-black mt-2"></div>
            </div>
            <div className="w-full h-[15rem] bg-blue-300 border-2 border-black"></div>
          </div>
        </div>

        <About />
      </div>
    </>
  );
}

export default Info;
