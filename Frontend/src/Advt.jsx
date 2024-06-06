import React, { useState } from "react";
import Nav from "./Nav";
import Advt_data from "./Advt_data";
import { useParams } from "react-router-dom";

function Advt() {
  const [advtData, setAdvtData] = useState([
    {
      id: 1,
      title: "1",
      content: "A",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg",
    },
    {
      id: 2,
      title: "2",
      content: "B",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2I6nYeu4fQzu0d7ApgDYmGwbz82nyHZ13xQ&s",
    },
    {
      id: 3,
      title: "3",
      content: "C",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/250px-Gatto_europeo4.jpg",
    },
  ]);

  const { id } = useParams();

  const selectedAdvt = advtData.find((item) => item.id === parseInt(id));

  return (
    <>
      <Nav />
      {/* {advtData.map((i) => {
        return (
          <Advt_data
            key={i.id}
            title={i.title}
            content={i.content}
            image={i.image}
          />
        );
      })} */}
      {selectedAdvt ? (
        <Advt_data
          title={selectedAdvt.title}
          content={selectedAdvt.content}
          image={selectedAdvt.image}
        />
      ) : (
        <p>ไม่พบข้อมูล</p>
      )}
    </>
  );
}

export default Advt;
