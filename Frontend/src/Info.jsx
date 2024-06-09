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
  const [userid, setUserid] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiPATH}/notebook/lookupNotebook/${notebook_id}`
        );
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
        const response = await axios.get(`${apiPATH}/auth/check/`, {
          withCredentials: true,
        });
        console.log("Login status response:", response.data);
        setIsLoggedIn(true);
        setUserid(response.data.userid);
      } catch (error) {
        console.error("Error checking login status:", error);
        setIsLoggedIn(false);
      }
    };
    checkLoginStatus();
  }, []);

  useEffect(() => {
    console.log("User ID:", userid); // Debugging to see when userid is set
  }, [userid]);

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
          userid,
          notebook_id,
          performance_score: newReviewValueP,
          service_score: newReviewValueS,
        },
        { withCredentials: true }
      );
      console.log("Review submitted:", response.data);

      // Call the update scores endpoint
      await axios.get(`${apiPATH}/notebook/updateScores/${notebook_id}`, {
        withCredentials: true,
      });

      // Optionally, you can fetch the updated data
      const updatedData = await axios.get(
        `${apiPATH}/notebook/lookupNotebook/${notebook_id}`
      );
      setData(updatedData.data[0]);
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
    category,
    cpu,
    gpu,
    display,
    ram,
    storage,
    os,
    price,
    pic_path,
    performance_score,
    service_score,
  } = data;

  return (
    <>
      <div className="box-border bg-gradient-to-br from-zinc-800 to-zinc-700 text-white">
        <Nav />
        <div className="mt-5 mr-12 ml-12 mb-32 flex flex-col">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
            <img
              className="drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] w-full md:w-[30rem] h-full md:h-[22rem] mx-auto border-4 border-gray-300/80 rounded-xl"
              src={pic_path}
              alt={notebook_name}
            />
            <div className="flex justify-around">
              <div className="mt-8 w-[17rem] h-[10rem] bg-white border-2 border-gray-300/80 rounded-lg">
                <div className="m-4 h-[8rem] border-2 border-black rounded-3xl"></div>
                <p className="relative w-44 bottom-[9.8rem] left-8 pl-2 text-lg text-black bg-white">
                  Performance Rating
                </p>
                <h2 className="w-20 relative bottom-[9rem] left-[6rem] text-yellow-500 text-5xl font-semibold">
                  {performance_score?.toFixed(1) }
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
                <h2 className="w-20 relative bottom-[9rem] left-[6.5rem] text-yellow-500 text-5xl font-semibold">
                  {service_score?.toFixed(1)}
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
            </div>
          </div>
          <div className="w-[80rem] h-[15rem] flex flex-col mx-auto bg-zinc-600/80 border-2 border-gray-300/80 mt-8 rounded-xl p-5 text-white">
            <p className="text-white h-[12rem] mb-4 pt-20 pr-16 ml-12 text-3xl font-semibold absolute border-r-2 border-white">
              Your Rating
            </p>
            <div className="flex w-[60rem] mb-8 justify-center relative top-5 left-60">
              <div className="h-[8rem] w-[20rem] grid grid-rows-2 mr-36 pb-16">
                <p className="text-white text-2xl pt-0 pl-16">
                  Performance Score
                </p>
                <div className="flex">
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
                    size="large"
                    className="bg-zinc-400 h-12 border-2 border-white p-2 rounded-3xl ml-24 mt-4"
                  />
                  {newReviewValueP !== null && (
                    <p className="bg-white w-[8rem] h-8 text-center text-black text-lg ml-4 mt-6 mb-2 rounded-xl">
                      {labels[hoverP !== -1 ? hoverP : newReviewValueP]}
                    </p>
                  )}
                </div>
              </div>
              <div className=" h-[8rem] w-[20rem] grid grid-rows-2 mr-36 pb-16 border-l-2 boede-white">
                <p className="text-white text-2xl pt-0 pl-12 ">Service</p>
                <div className="flex">
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
                    size="large"
                    className="bg-zinc-400 h-12 border-2 border-white p-2 rounded-3xl ml-16 mt-4"
                  />
                  {newReviewValueS !== null && (
                    <p className="bg-white w-[8rem] h-8 text-center text-black text-lg ml-4 mt-6 mb-2 rounded-xl">
                      {labels[hoverS !== -1 ? hoverS : newReviewValueS]}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
              <button
                className="px-10 py-2 mt-0 ml-52 bg-gray-300 text-black rounded-lg hover:bg-gray-500 hover:text-white"
                onClick={handleSubmit}
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
        <About />
      </div>
    </>
  );
}

export default Info;
