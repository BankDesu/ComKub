import React from "react";

function Notebook_data({ title, content }) {
  return (
    <>
      <div class="self-center text-center align-middle border ml-10 border-black h-60 w-72 m-6 p-24 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </>
  );
}

export default Notebook_data;
