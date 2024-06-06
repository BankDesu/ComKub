import React from "react";
import Nav from "./Nav";
import Review_data from "./Review_data";
import { useState } from "react";

function Review() {
  const [dataR, setdataA] = useState([
    { title: "1", content: "Article Data" },
    { title: "2", content: "Article Data" },
    { title: "3", content: "Article Data" },
    { title: "4", content: "Article Data" },
    { title: "5", content: "Article Data" },
    { title: "6", content: "Article Data" },
    { title: "7", content: "Article Data" },
    { title: "8", content: "Article Data" },
    { title: "9", content: "Article Data" },
    { title: "10", content: "Article Data" },
    { title: "11", content: "Article Data" },
    { title: "12", content: "Article Data" },
  ]);
  return (
    <>
      <Nav />
      <div className="content-container-review justify-center grid grid-cols-2 grid-rows-1 pt-8 bg-zinc-800">
      {dataR.map((data) => {
          console.log(data);
          return <Review_data title={data.title} content={data.content} />;
        })}
      </div>
    </>
  );
}

export default Review;
