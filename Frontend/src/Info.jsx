import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";

const apiPATH = import.meta.env.VITE_API_PATH;

function Info() {
  const { notebook_id } = useParams();
  const [data, setData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newReviewValueP, setNewReviewValueP] = useState(3);
  const [hoverP, setHoverP] = useState(-1);
  const [newReviewValueS, setNewReviewValueS] = useState(3);
  const [hoverS, setHoverS] = useState(-1);
  const [userId, setUserId] = useState([]);

  console.log(isLoggedIn);
  console.log(userId);
  console.log(newReviewValueS);
  console.log(hoverP);
  console.log(hoverS);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiPATH}/notebook/lookupNotebook/${notebook_id}`);
        setData(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [notebook_id]);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get(`${apiPATH}/auth/check`, { withCredentials: true });
        setIsLoggedIn(true);
        setUserId(response.data.userid);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };
    checkLoginStatus();
  }, []);

  const labels = {
    1: "Useless",
    2: "Poor",
    3: "Ok",
    4: "Good",
    5: "Excellent",
  };

  const handleSubmit = async () => {
    if (!isLoggedIn) {
      alert("You need to be logged in to submit a review");
      return;
    }

    try {
      const response = await axios.post(
        `${apiPATH}/review/create`,
        {
          userid: userId,
          notebook_id,
          review_title: "My Review",
          performance_score: newReviewValueP,
          service_score: newReviewValueS,
        },
        { withCredentials: true }
      );
      console.log("Review submitted:", response.data);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  if (!data.notebook_name) {
    return <div>Loading...</div>;
  }

  const {
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
    pic_path,
    perfromance_score,
    service_score,
  } = data[0] || {}; // Change this line to handle array data

  function getLabelText(newReviewValue) {
    return `${newReviewValue} Star${newReviewValue !== 1 ? "s" : ""}, ${
      labels[newReviewValue]
    }`;
  }

  const [newReviewValueP, setNewReviewValueP] = useState(3);
  const [hoverP, setHoverP] = useState(-1);
  const [newReviewValueS, setNewReviewValueS] = useState(3);
  const [hoverS, setHoverS] = useState(-1);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="box-border bg-gradient-to-br from-zinc-800 to-zinc-700 import text-white">
        <Nav />
        <div className="mt-5 mr-12 ml-12 mb-32 flex flex-col">
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
                <h2 className="w-20 relative bottom-[9rem] left-[6.3rem] text-yellow-500 text-5xl font-semibold">
                  {performance_score?.toFixed(1) || 'N/A'}
                </h2>
                <Rating
                  className="relative bottom-[8.2rem] left-[3.75rem]"
                  name="performance-rating-read"
                  size="large"
                  value={performance_score || 0}
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
                <h2 className="w-20 relative bottom-[9rem] left-[6.3rem] text-yellow-500 text-5xl font-semibold">
                  {service_score?.toFixed(1) || 'N/A'}
                </h2>
                <Rating
                  className="relative bottom-[8.2rem] left-[3.75rem]"
                  name="service-rating-read"
                  size="large"
                  value={service_score || 0}
                  precision={0.5}
                  readOnly
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </div>
            </div>
          </div>
          <div className="w-[80rem] h-[15rem] flex mx-auto bg-zinc-600/80 border-2 border-gray-300/80 text-white mt-5 rounded-xl">
            <div className="w-full">
              <p className="text-3xl font-semibold pl-8 pt-4 ">{notebook_name}</p>
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
            </div>
          </div>
          <div className="w-[80rem] h-[10rem] flex flex-col mx-auto bg-white border-2 border-gray-300/80 mt-5 rounded-xl">
            <p className="relative w-36 left-8 pt-4 pl-2 text-lg text-black bg-white">
              Your Rating
            </p>
            <div className="flex justify-around">
              <div className="w-1/2">
                <p className="text-black">Performance</p>
                <Rating
                  name="hover-feedback-performance"
                  value={newReviewValueP}
                  precision={1}
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
                  <p className="text-sm">
                    {labels[hoverP !== -1 ? hoverP : newReviewValueP]}
                  </p>
                )}
              </div>
              <div className="w-1/2">
                <p className="text-black">Service</p>
                <Rating
                  name="hover-feedback-service"
                  value={newReviewValueS}
                  precision={1}
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
                {newReviewValueS !== null && (
                  <p className="text-sm">
                    {labels[hoverS !== -1 ? hoverS : newReviewValueS]}
                  </p>
                )}
              </div>
            </div>
            <button
              className="w-48 mt-5 bg-gradient-to-br from-yellow-300 to-yellow-500 text-white rounded-md p-1 mx-auto"
              onClick={handleSubmit}
            >
              Submit Review
            </button>
          </div>

        </div>
        <About />
      </div>
    </>
  );
}

export default Info;
