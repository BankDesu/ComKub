import React from "react";

function Notebook_data({ data }) {
  const { title, content, img } = data;
  return (
    <>
      <div class=" border ml-10 m-6 p-3 border-black h-60 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
        <div className="border-2 border-zinc-400 ">
          <img className="w-7/12 h-28 p-0 mx-auto" src={img} alt="" />
        </div>
        <div className="p-1">
          {/* name cpu gpu ram price */}
          <h2 className="text-sm font-medium">Name: {title}</h2>
          <h2 className="text-sm">CPU: {title}</h2>
          <h2 className="text-sm">GPU: {title}</h2>
          <h2 className="text-sm">RAM: {title}</h2>
          <h2 className="text-sm">Price: {title}</h2>
        </div>
      </div>
    </>
  );
}

export default Notebook_data;
