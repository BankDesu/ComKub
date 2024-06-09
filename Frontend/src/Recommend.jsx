import React from "react";
import Nav from "./Nav";
import About from "./About";
import { useState, useEffect } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

function Recommend() {
  const [dataTop20k, setDataTop20k] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_PATH}/notebook/displayTop4PriceEqualto20k`
        );
        setDataTop20k(response.data, "Fetched data");
        console.log(response.data, "data20k");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [dataTop20_50k, setDataTop20_50k] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_PATH
          }/notebook/displayTop4PriceBetweenmor20kto50k`
        );
        setDataTop20_50k(response.data, "Fetched data");
        console.log(response.data, "data20_50k");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [dataTop50_100k, setDataTop50_100k] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_PATH
          }/notebook/displayTop4PriceBetweenmor50kto100k`
        );
        setDataTop50_100k(response.data, "Fetched data");
        console.log(response.data, "data50_100k");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [dataTop100_200k, setDataTop100_200k] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_PATH
          }/notebook/displayTop4PriceMorethan100k`
        );
        setDataTop100_200k(response.data, "Fetched data");
        console.log(response.data, "data100_200k");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="h-full w-full bg-zinc-800">
        <Nav />
        <div className="grid grid-cols-1 pt-8 pb-32 mx-16">
          <div className="h-[5rem] w-[28rem] bg-zinc-600 border-2 border-white text-white text-2xl rounded-xl pt-6 pl-9">
            TOP RATING Maximum price 20,000
          </div>
          <div className="flex">
            {dataTop20k.map((data) => (
              <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-72 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
                <div className="flex justify-between">
                  <p className="text-base font-thin font-mono">{data.brand}</p>
                  <Rating
                    className="bottom-1"
                    name="performance-rating-read"
                    size="large=="
                    value={data.performance_score || 0}
                    precision={0.5}
                    readOnly
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </div>
                <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                  <img
                    className="w-6/12 h-24 p-0 mx-auto"
                    src={data.pic_path}
                    alt=""
                  />
                </div>
                <div className="p-1">
                  <h2 className="text-sm font-medium">
                    Name:
                    {data.notebook_name}
                  </h2>
                  <h2 className="text-xs">
                    CPU:
                    {data.cpu}
                  </h2>
                  <h2 className="text-xs">
                    GPU:
                    {data.gpu}
                  </h2>
                  <h2 className="text-xs">
                    RAM:
                    {data.ram}
                  </h2>
                  <h2 className="text-xs">
                    Price:
                    {data.price}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          <div className="h-[5rem] w-[31rem] bg-zinc-600 border-2 border-white text-white text-2xl rounded-xl pt-6 pl-9 mt-12">
            TOP RATING Price range 20,000 - 50,000
          </div>
          <div className="flex">
            {dataTop20_50k.map((data) => (
              <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-72 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
                <div className="flex justify-between">
                  <p className="text-base font-thin font-mono">{data.brand}</p>
                  <Rating
                    className=" bottom-1"
                    name="performance-rating-read"
                    size="large=="
                    value={data.performance_score || 0}
                    precision={0.5}
                    readOnly
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </div>
                <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                  <img
                    className="w-6/12 h-24 p-0 mx-auto"
                    src={data.pic_path}
                    alt=""
                  />
                </div>
                <div className="p-1">
                  <h2 className="text-sm font-medium">
                    Name:
                    {data.notebook_name}
                  </h2>
                  <h2 className="text-xs">
                    CPU:
                    {data.cpu}
                  </h2>
                  <h2 className="text-xs">
                    GPU:
                    {data.gpu}
                  </h2>
                  <h2 className="text-xs">
                    RAM:
                    {data.ram}
                  </h2>
                  <h2 className="text-xs">
                    Price:
                    {data.price}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          <div className="h-[5rem] w-[31rem] bg-zinc-600 border-2 border-white text-white text-2xl rounded-xl pt-6 pl-9 mt-12">
            TOP RATING Price range 50,000 - 100,000
          </div>
          <div className="flex">
            {dataTop50_100k.map((data) => (
              <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-72 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
                <div className="flex justify-between">
                  <p className="text-base font-thin font-mono">{data.brand}</p>
                  <Rating
                    className="bottom-1"
                    name="performance-rating-read"
                    size="large=="
                    value={data.performance_score || 0}
                    precision={0.5}
                    readOnly
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </div>
                <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                  <img
                    className="w-6/12 h-24 p-0 mx-auto"
                    src={data.pic_path}
                    alt=""
                  />
                </div>
                <div className="p-1">
                  <h2 className="text-sm font-medium">
                    Name:
                    {data.notebook_name}
                  </h2>
                  <h2 className="text-xs">
                    CPU:
                    {data.cpu}
                  </h2>
                  <h2 className="text-xs">
                    GPU:
                    {data.gpu}
                  </h2>
                  <h2 className="text-xs">
                    RAM:
                    {data.ram}
                  </h2>
                  <h2 className="text-xs">
                    Price:
                    {data.price}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          <div className="h-[5rem] w-[32rem] bg-zinc-600 border-2 border-white text-white text-2xl rounded-xl pt-6 pl-9 mt-12">
            TOP RATING Price range 100,000 - 200,000
          </div>
          <div className="flex">
            {dataTop100_200k.map((data) => (
              <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-72 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
                <div className="flex justify-between">
                  <p className="text-base font-thin font-mono">{data.brand}</p>
                  <Rating
                    className="bottom-1"
                    name="performance-rating-read"
                    size="large=="
                    value={data.performance_score || 0}
                    precision={0.5}
                    readOnly
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </div>
                <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                  <img
                    className="w-6/12 h-24 p-0 mx-auto"
                    src={data.pic_path}
                    alt=""
                  />
                </div>
                <div className="p-1">
                  <h2 className="text-sm font-medium">
                    Name:
                    {data.notebook_name}
                  </h2>
                  <h2 className="text-xs">
                    CPU:
                    {data.cpu}
                  </h2>
                  <h2 className="text-xs">
                    GPU:
                    {data.gpu}
                  </h2>
                  <h2 className="text-xs">
                    RAM:
                    {data.ram}
                  </h2>
                  <h2 className="text-xs">
                    Price:
                    {data.price}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <About />
      </div>
    </>
  );
}

export default Recommend;
