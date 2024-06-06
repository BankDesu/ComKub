import React from "react";

function Review_data({ title, content }) {
  return (
    <>
      <div class="data-review justify-self-center text-center m-8 p-24 border-2 border-black h-60 w-2/3 bg-white">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </>
  );
}

export default Review_data;
