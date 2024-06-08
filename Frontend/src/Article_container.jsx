import React from "react";
import Nav from "./Nav";
import Article_data from "./Article_data";
import { useState } from "react";
import About from "./About";

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
      <div className="w-full h-full bg-zinc-800 ">
        <Nav />
        <div className="justify-center grid grid-cols-2 grid-rows-1 pt-8 pb-32 px-10 ">
          {dataA.map((data) => {
            console.log(data);
            return <Article_data title={data.title} content={data.content} />;
          })}
        </div>
      </div>
      <About />
    </>
  );
}

export default Article;
