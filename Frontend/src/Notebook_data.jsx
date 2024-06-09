import React from "react";

function Notebook_data({ data }) {
  const { brand, notebook_name, cpu, gpu, ram, price, pic_path } = data;
  return (
    <>
      <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-64 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
        <p className="text-sm font-thin font-mono">{brand}</p>
        <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
          <img className="w-6/12 h-24 p-0 mx-auto" src={pic_path} alt="" />
        </div>
        <div className="p-1">
          <h2 className="text-sm font-medium">Name: {notebook_name}</h2>
          <h2 className="text-xs">CPU: {cpu}</h2>
          <h2 className="text-xs">GPU: {gpu}</h2>
          <h2 className="text-xs">RAM: {ram}</h2>
          <h2 className="text-xs">Price: {price}</h2>
        </div>
      </div>
    </>
  );
}

export default Notebook_data;
