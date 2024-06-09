import React from "react";
import Nav from "./Nav";
import About from "./About";
import { useState } from "react";

function Recommend() {
  
  return (
    <>
      <div className="h-full w-full bg-zinc-800">
        <Nav />
        <div className="grid grid-cols-1 pt-8 pb-32 mx-16">
          <div className="h-[5rem] w-[20rem] bg-zinc-600 border-2 border-white text-white text-2xl rounded-xl pt-6 pl-9">Price range max-20000</div>
          <div className="flex">
            <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-60 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
              <p className="text-sm font-thin font-mono">{/* {brand} */}</p>
              <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                <img
                  className="w-6/12 h-24 p-0 mx-auto"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  // {pic_path}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h2 className="text-sm font-medium">
                  Name:
                  {/* {notebook_name} */}
                </h2>
                <h2 className="text-xs">
                  CPU:
                  {/* {cpu} */}
                </h2>
                <h2 className="text-xs">
                  GPU:
                  {/* {gpu} */}
                </h2>
                <h2 className="text-xs">
                  RAM:
                  {/* {ram} */}
                </h2>
                <h2 className="text-xs">
                  Price:
                  {/* {price} */}
                </h2>
              </div>
            </div>
            <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-60 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
              <p className="text-sm font-thin font-mono">{/* {brand} */}</p>
              <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                <img
                  className="w-6/12 h-24 p-0 mx-auto"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  // {pic_path}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h2 className="text-sm font-medium">
                  Name:
                  {/* {notebook_name} */}
                </h2>
                <h2 className="text-xs">
                  CPU:
                  {/* {cpu} */}
                </h2>
                <h2 className="text-xs">
                  GPU:
                  {/* {gpu} */}
                </h2>
                <h2 className="text-xs">
                  RAM:
                  {/* {ram} */}
                </h2>
                <h2 className="text-xs">
                  Price:
                  {/* {price} */}
                </h2>
              </div>
            </div>
            <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-60 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
              <p className="text-sm font-thin font-mono">{/* {brand} */}</p>
              <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                <img
                  className="w-6/12 h-24 p-0 mx-auto"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  // {pic_path}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h2 className="text-sm font-medium">
                  Name:
                  {/* {notebook_name} */}
                </h2>
                <h2 className="text-xs">
                  CPU:
                  {/* {cpu} */}
                </h2>
                <h2 className="text-xs">
                  GPU:
                  {/* {gpu} */}
                </h2>
                <h2 className="text-xs">
                  RAM:
                  {/* {ram} */}
                </h2>
                <h2 className="text-xs">
                  Price:
                  {/* {price} */}
                </h2>
              </div>
            </div>
            <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-60 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
              <p className="text-sm font-thin font-mono">{/* {brand} */}</p>
              <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                <img
                  className="w-6/12 h-24 p-0 mx-auto"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  // {pic_path}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h2 className="text-sm font-medium">
                  Name:
                  {/* {notebook_name} */}
                </h2>
                <h2 className="text-xs">
                  CPU:
                  {/* {cpu} */}
                </h2>
                <h2 className="text-xs">
                  GPU:
                  {/* {gpu} */}
                </h2>
                <h2 className="text-xs">
                  RAM:
                  {/* {ram} */}
                </h2>
                <h2 className="text-xs">
                  Price:
                  {/* {price} */}
                </h2>
              </div>
            </div>
          </div>
          <div className="h-[5rem] w-[20rem] bg-zinc-600 border-2 border-white text-white text-2xl rounded-xl pt-6 pl-9 mt-12">Price range max-50000</div>
          <div className="flex">
            <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-60 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
              <p className="text-sm font-thin font-mono">{/* {brand} */}</p>
              <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                <img
                  className="w-6/12 h-24 p-0 mx-auto"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  // {pic_path}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h2 className="text-sm font-medium">
                  Name:
                  {/* {notebook_name} */}
                </h2>
                <h2 className="text-xs">
                  CPU:
                  {/* {cpu} */}
                </h2>
                <h2 className="text-xs">
                  GPU:
                  {/* {gpu} */}
                </h2>
                <h2 className="text-xs">
                  RAM:
                  {/* {ram} */}
                </h2>
                <h2 className="text-xs">
                  Price:
                  {/* {price} */}
                </h2>
              </div>
            </div>
            <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-60 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
              <p className="text-sm font-thin font-mono">{/* {brand} */}</p>
              <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                <img
                  className="w-6/12 h-24 p-0 mx-auto"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  // {pic_path}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h2 className="text-sm font-medium">
                  Name:
                  {/* {notebook_name} */}
                </h2>
                <h2 className="text-xs">
                  CPU:
                  {/* {cpu} */}
                </h2>
                <h2 className="text-xs">
                  GPU:
                  {/* {gpu} */}
                </h2>
                <h2 className="text-xs">
                  RAM:
                  {/* {ram} */}
                </h2>
                <h2 className="text-xs">
                  Price:
                  {/* {price} */}
                </h2>
              </div>
            </div>
            <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-60 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
              <p className="text-sm font-thin font-mono">{/* {brand} */}</p>
              <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                <img
                  className="w-6/12 h-24 p-0 mx-auto"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  // {pic_path}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h2 className="text-sm font-medium">
                  Name:
                  {/* {notebook_name} */}
                </h2>
                <h2 className="text-xs">
                  CPU:
                  {/* {cpu} */}
                </h2>
                <h2 className="text-xs">
                  GPU:
                  {/* {gpu} */}
                </h2>
                <h2 className="text-xs">
                  RAM:
                  {/* {ram} */}
                </h2>
                <h2 className="text-xs">
                  Price:
                  {/* {price} */}
                </h2>
              </div>
            </div>
            <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-60 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
              <p className="text-sm font-thin font-mono">{/* {brand} */}</p>
              <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                <img
                  className="w-6/12 h-24 p-0 mx-auto"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  // {pic_path}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h2 className="text-sm font-medium">
                  Name:
                  {/* {notebook_name} */}
                </h2>
                <h2 className="text-xs">
                  CPU:
                  {/* {cpu} */}
                </h2>
                <h2 className="text-xs">
                  GPU:
                  {/* {gpu} */}
                </h2>
                <h2 className="text-xs">
                  RAM:
                  {/* {ram} */}
                </h2>
                <h2 className="text-xs">
                  Price:
                  {/* {price} */}
                </h2>
              </div>
            </div>
          </div>
          <div className="h-[5rem] w-[20rem] bg-zinc-600 border-2 border-white text-white text-2xl rounded-xl pt-6 pl-9 mt-12">Price range max-100000</div>
          <div className="flex">
            <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-60 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
              <p className="text-sm font-thin font-mono">{/* {brand} */}</p>
              <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                <img
                  className="w-6/12 h-24 p-0 mx-auto"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  // {pic_path}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h2 className="text-sm font-medium">
                  Name:
                  {/* {notebook_name} */}
                </h2>
                <h2 className="text-xs">
                  CPU:
                  {/* {cpu} */}
                </h2>
                <h2 className="text-xs">
                  GPU:
                  {/* {gpu} */}
                </h2>
                <h2 className="text-xs">
                  RAM:
                  {/* {ram} */}
                </h2>
                <h2 className="text-xs">
                  Price:
                  {/* {price} */}
                </h2>
              </div>
            </div>
            <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-60 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
              <p className="text-sm font-thin font-mono">{/* {brand} */}</p>
              <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                <img
                  className="w-6/12 h-24 p-0 mx-auto"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  // {pic_path}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h2 className="text-sm font-medium">
                  Name:
                  {/* {notebook_name} */}
                </h2>
                <h2 className="text-xs">
                  CPU:
                  {/* {cpu} */}
                </h2>
                <h2 className="text-xs">
                  GPU:
                  {/* {gpu} */}
                </h2>
                <h2 className="text-xs">
                  RAM:
                  {/* {ram} */}
                </h2>
                <h2 className="text-xs">
                  Price:
                  {/* {price} */}
                </h2>
              </div>
            </div>
            <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-60 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
              <p className="text-sm font-thin font-mono">{/* {brand} */}</p>
              <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                <img
                  className="w-6/12 h-24 p-0 mx-auto"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  // {pic_path}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h2 className="text-sm font-medium">
                  Name:
                  {/* {notebook_name} */}
                </h2>
                <h2 className="text-xs">
                  CPU:
                  {/* {cpu} */}
                </h2>
                <h2 className="text-xs">
                  GPU:
                  {/* {gpu} */}
                </h2>
                <h2 className="text-xs">
                  RAM:
                  {/* {ram} */}
                </h2>
                <h2 className="text-xs">
                  Price:
                  {/* {price} */}
                </h2>
              </div>
            </div>
            <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-60 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
              <p className="text-sm font-thin font-mono">{/* {brand} */}</p>
              <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                <img
                  className="w-6/12 h-24 p-0 mx-auto"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  // {pic_path}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h2 className="text-sm font-medium">
                  Name:
                  {/* {notebook_name} */}
                </h2>
                <h2 className="text-xs">
                  CPU:
                  {/* {cpu} */}
                </h2>
                <h2 className="text-xs">
                  GPU:
                  {/* {gpu} */}
                </h2>
                <h2 className="text-xs">
                  RAM:
                  {/* {ram} */}
                </h2>
                <h2 className="text-xs">
                  Price:
                  {/* {price} */}
                </h2>
              </div>
            </div>
          </div>
          <div className="h-[5rem] w-[20rem] bg-zinc-600 border-2 border-white text-white text-2xl rounded-xl pt-6 pl-20 mt-12">Price range All</div>
          <div className="flex">
            <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-60 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
              <p className="text-sm font-thin font-mono">{/* {brand} */}</p>
              <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                <img
                  className="w-6/12 h-24 p-0 mx-auto"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  // {pic_path}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h2 className="text-sm font-medium">
                  Name:
                  {/* {notebook_name} */}
                </h2>
                <h2 className="text-xs">
                  CPU:
                  {/* {cpu} */}
                </h2>
                <h2 className="text-xs">
                  GPU:
                  {/* {gpu} */}
                </h2>
                <h2 className="text-xs">
                  RAM:
                  {/* {ram} */}
                </h2>
                <h2 className="text-xs">
                  Price:
                  {/* {price} */}
                </h2>
              </div>
            </div>
            <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-60 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
              <p className="text-sm font-thin font-mono">{/* {brand} */}</p>
              <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                <img
                  className="w-6/12 h-24 p-0 mx-auto"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  // {pic_path}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h2 className="text-sm font-medium">
                  Name:
                  {/* {notebook_name} */}
                </h2>
                <h2 className="text-xs">
                  CPU:
                  {/* {cpu} */}
                </h2>
                <h2 className="text-xs">
                  GPU:
                  {/* {gpu} */}
                </h2>
                <h2 className="text-xs">
                  RAM:
                  {/* {ram} */}
                </h2>
                <h2 className="text-xs">
                  Price:
                  {/* {price} */}
                </h2>
              </div>
            </div>
            <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-60 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
              <p className="text-sm font-thin font-mono">{/* {brand} */}</p>
              <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                <img
                  className="w-6/12 h-24 p-0 mx-auto"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  // {pic_path}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h2 className="text-sm font-medium">
                  Name:
                  {/* {notebook_name} */}
                </h2>
                <h2 className="text-xs">
                  CPU:
                  {/* {cpu} */}
                </h2>
                <h2 className="text-xs">
                  GPU:
                  {/* {gpu} */}
                </h2>
                <h2 className="text-xs">
                  RAM:
                  {/* {ram} */}
                </h2>
                <h2 className="text-xs">
                  Price:
                  {/* {price} */}
                </h2>
              </div>
            </div>
            <div className="border-4 ml-10 m-6 p-2 border-black rounded-lg h-60 w-72 data-home hover:transform hover:scale-105 hover:bg-white hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] bg-white">
              <p className="text-sm font-thin font-mono">{/* {brand} */}</p>
              <div className="border-2 mx-auto border-zinc-400 p-2 ml-6 mr-6">
                <img
                  className="w-6/12 h-24 p-0 mx-auto"
                  src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                  // {pic_path}
                  alt=""
                />
              </div>
              <div className="p-1">
                <h2 className="text-sm font-medium">
                  Name:
                  {/* {notebook_name} */}
                </h2>
                <h2 className="text-xs">
                  CPU:
                  {/* {cpu} */}
                </h2>
                <h2 className="text-xs">
                  GPU:
                  {/* {gpu} */}
                </h2>
                <h2 className="text-xs">
                  RAM:
                  {/* {ram} */}
                </h2>
                <h2 className="text-xs">
                  Price:
                  {/* {price} */}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <About />
      </div>
    </>
  );
}

export default Recommend;
