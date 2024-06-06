import React from "react";
import Nav from "./Nav";
import Article_data from "./Article_data";
import { useState } from "react";

function Article() {
  const [dataA, setdataA] = useState([
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
      <div className="content-container-article w-full pt-8 grid grid-cols-1 grid-rows-1 gap-8 bg-zinc-800">
        {dataA.map((data) => {
          console.log(data);
          return <Article_data title={data.title} content={data.content} />;
        })}
      </div>
    </>
  );
}

export default Article;
