import React from "react";
import Nav from "./Nav";
import "./Article_container.css";
import Notebook_data from "./Notebook_data";
import { useState } from "react";

function Article() {
  const [dataN, setDataN] = useState([
    { title: "1", content: "Notebook Data" },
    { title: "2", content: "Notebook Data" },
    { title: "3", content: "Notebook Data" },
    { title: "4", content: "Notebook Data" },
    { title: "5", content: "Notebook Data" },
    { title: "6", content: "Notebook Data" },
    { title: "7", content: "Notebook Data" },
    { title: "8", content: "Notebook Data" },
    { title: "9", content: "Notebook Data" },
    { title: "10", content: "Notebook Data" },
    { title: "11", content: "Notebook Data" },
    { title: "12", content: "Notebook Data" },
  ]);

  return (
    <>
      <Nav />
      <div className="content-container-article justify-center grid grid-cols-1 grid-rows-1 gap-8 md:gap-0 md:grid-cols-none md:grid-rows-none md:grid-rows-1 md:grid-cols-1">
        {dataN.map((data) => {
          console.log(data);
          return <Notebook_data title={data.title} content={data.content} />;
        })}
      </div>
    </>
  );
}

export default Article;
