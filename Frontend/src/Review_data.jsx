import React from "react";

function Review_data({ title, content }) {
  return (
    <>
      <div class="w-full grid grid-cols-3">
        <div className="h-[10rem] w-[20rem] bg-white border-2 border-grey-300/70"></div>
        <div className="h-[10rem] w-[20rem] bg-cyan-500 border-2 border-grey-300/70"></div>
      </div>
    </>
  );
}

export default Review_data;
