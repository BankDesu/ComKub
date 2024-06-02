import React from "react";
import Nav from "./Nav";
import { useState } from "react";
import Advt_data from "./Advt_data";

function Advt() {
  const [advtData, setAdvtData] = useState([
    {
      title: "1",
      content: "A",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg",
    },
    {
      title: "2",
      content: "B",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg",
    },
    {
      title: "3",
      content: "C",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg",
    },
  ]);

  return (
    <>
      <Nav />
      {advtData.map((i) => {
        console.log(i);
        return (
          <Advt_data title={i.title} content={i.content} image={i.image} />
        );
      })}
    </>
  );
}

export default Advt;
