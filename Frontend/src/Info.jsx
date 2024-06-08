import React from "react";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import About from "./About";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

function Info() {
  const location = useLocation();
  const { data } = location.state || {};
  console.log(location.state);

  if (!data) {
    return <div>Info not found</div>;
  }

  const {
    notebook_id,
    notebook_name,
    brand,
    model,
    model_year,
    category,
    cpu,
    gpu,
    display,
    ram,
    storage,
    os,
    price,
    link,
    pic_path,
  } = data;

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  function getLabelTextP(newReviewValueP) {
    return `${newReviewValueP} Star${newReviewValueP !== 1 ? "s" : ""}, ${
      labels[newReviewValueP]
    }`;
  }

  const [newReviewValueP, setNewReviewValueP] = React.useState(2.5);
  const [hoverP, setHoverP] = React.useState(-1);

  function getLabelTextS(newReviewValueP) {
    return `${newReviewValueS} Star${newReviewValueS !== 1 ? "s" : ""}, ${
      labels[newReviewValueS]
    }`;
  }

  const [newReviewValueS, setNewReviewValueS] = React.useState(2.5);
  const [hoverS, setHoverS] = React.useState(-1);

  return (
    <>
      <div className="box-border bg-gradient-to-br from-zinc-800 to-zinc-700 import text-white">
        <Nav />
        <div className="mt-5 mr-12 ml-12 mb-28 flex flex-col">
          <div className="w-full h-full grid grid-cols-2 grid-rows-1">
            <img
              className="drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] w-[30rem] h-[22rem] ml-32 border-4 border-gray-300/80 rounded-xl"
              src={pic_path}
              alt={notebook_name}
            />
            <div className="flex justify-around">
              <div className="mt-8 w-[17rem] h-[10rem] bg-white border-2 border-gray-300/80 rounded-lg">
                <div className="m-4 h-[8rem] border-2 border-black rounded-3xl"></div>
                <p className="relative w-44 bottom-[9.8rem] left-8 pl-2 text-lg text-black bg-white">
                  Performance Rating
                </p>
                {/* ข้อมูล review */}
                <h2 className="relative bottom-[9rem] left-[6.3rem] text-yellow-500 text-5xl font-semibold">
                  2.5
                </h2>
                <Rating
                  className="relative bottom-[8.2rem] left-[3.75rem]"
                  name="performence-rating-read"
                  size="large"
                  defaultValue={2.5}
                  // value={}
                  // onChange={(event, newValue) => {
                  //   setNewReviewValueP(newValue);
                  // }}
                  precision={0.5}
                  readOnly
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </div>
              <div className="mt-8 w-[17rem] h-[10rem] bg-white border-2 border-gray-300/80 rounded-xl">
                <div className="m-4 h-[8rem] border-2 border-black rounded-3xl"></div>
                <p className="relative w-32 bottom-[9.8rem] left-8 pl-2 text-lg text-black bg-white">
                  Service Rating
                </p>
                {/* ข้อมูล review */}
                <h2 className="relative bottom-[9rem] left-[6.3rem] text-yellow-500 text-5xl font-semibold">
                  2.5
                </h2>
                <Rating
                  className="relative bottom-[8.2rem] left-[3.75rem]"
                  name="performence-rating-read"
                  size="large"
                  defaultValue={2.5}
                  // value={}
                  // onChange={(event, newValue) => {
                  //   setNewReviewValueP(newValue);
                  // }}
                  precision={0.5}
                  readOnly
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </div>
            </div>
          </div>
          <div className="w-[70rem] h-[15rem] flex mx-auto p-6 bg-zinc-600/80 border-2 border-gray-300/80 text-white mt-5 rounded-xl">
            <div className="w-full">
              <p className="text-3xl font-semibold pl-8 pt-4">
                {notebook_name}
              </p>
              <p className="text-lg pt-4 pl-16">Brand: {brand}</p>
              <p className="text-lg pt-2 pl-16">Model: {model}</p>
              <p className="text-lg pt-2 pl-16">Category: {category}</p>
            </div>
            <div className="w-full border-x-2 border-gray-300/80">
              <p className="text-lg pt-8 pl-16">CPU: {cpu}</p>
              <p className="text-lg pt-2 pl-16">GPU: {gpu}</p>
              <p className="text-lg pt-2 pl-16">Display: {display}</p>
              <p className="text-lg pt-2 pl-16">RAM: {ram}</p>
            </div>
            <div className="w-full">
              <p className="text-lg pt-8 pl-16">Storage: {storage}</p>
              <p className="text-lg pt-2 pl-16">OS: {os}</p>
              <p className="text-lg pt-2 pl-16">Price: {price}.-</p>
              <button className="px-2 py-2 rounded-lg bg-white text-black hover:text-white text-lg mt-6 ml-48 absolute transition-transform duration-150 hover:transform hover:scale-105 hover:bg-zinc-500/90">
                <a className="" href={link} target="_blank">
                  Click here to Order
                </a>
              </button>
            </div>
          </div>
          <div className="w-[70rem] h-[9rem] mx-auto mt-5 grid grid-cols-2">
            <div className="w-11/12 h-[7rem] pt-3 pl-8 bg-zinc-600/80 border-2 border-gray-300/80 text-white rounded-xl mx-auto">
              <div className="flex">
                <p className="text-2xl">Rate Performence score</p>
                <div className="pt-0.5 w-10 h-10 relative left-5 bottom-1 flex justify-center bg-white rounded-full opacity-90">
                  <img
                    className="w-8 h-8"
                    src="https://cdn-icons-png.flaticon.com/128/9751/9751072.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex pt-2 pl-24">
                <Rating
                  className="bg-white rounded-lg px-2 py-1"
                  name="hover-feedback"
                  value={newReviewValueP}
                  size="large"
                  precision={0.5}
                  getLabelText={getLabelTextP}
                  onChange={(event, newValue) => {
                    setNewReviewValueP(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHoverP(newHover);
                  }}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                {newReviewValueP !== null && (
                  <div className="pt-1 ml-5 w-32 text-center text-xl text-white bg-zinc-700 rounded-lg">
                    {labels[hoverP !== -1 ? hoverP : newReviewValueP]}
                  </div>
                )}
              </div>
            </div>
            <div className="w-11/12 h-[7rem] pt-3 pl-8 bg-zinc-600/80 border-2 border-gray-300/80 text-white rounded-xl mx-auto">
              <div className="flex">
                <p className="text-2xl">Rate Service score</p>
                <div className="pt-0.5 w-10 h-10 relative left-5 bottom-1 flex justify-center bg-white rounded-full opacity-90">
                  <img
                    className="w-8 h-8"
                    src="https://cdn-icons-png.flaticon.com/128/2252/2252184.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex pt-2 pl-24">
                <Rating
                  className="bg-white rounded-lg px-2 py-1"
                  name="hover-feedback"
                  value={newReviewValueS}
                  size="large"
                  precision={0.5}
                  getLabelTextP={getLabelTextS}
                  onChange={(event, newValue) => {
                    setNewReviewValueS(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHoverS(newHover);
                  }}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                {newReviewValueP !== null && (
                  <div className="pt-1 ml-5 w-32 text-center text-xl text-white bg-zinc-700 rounded-lg">
                    {labels[hoverS !== -1 ? hoverS : newReviewValueP]}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <About />
      </div>
    </>
  );
}

export default Info;
