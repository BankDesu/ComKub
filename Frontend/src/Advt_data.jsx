import React from "react";

function Advt_data({ title, content, image }) {
  return (
    <>
      <div className="">
      <h1 className="text-lg font-semibold">{title}</h1>
      {image && <img src={image} alt={title} className="article-image" />}
      <div className="article-content">
        {content}
      </div>
    </div>
    </>
  );
}

export default Advt_data;
