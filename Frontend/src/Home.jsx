import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";
import Notebook_data from "./Notebook_data";
import Sidebar from "./Sidebar";
import advtPic1 from "./assets/advtPic1.jpg";
import advtPic2 from "./assets/advtPic2.png";
import advtPic3 from "./assets/advtPic3.png";
import "./index.css";

const VITE_API_PATH = import.meta.env.VITE_API_PATH


function Home() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClickOrder = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    console.log(event.target.innerText);
  };

  const slides = [
    {
      id: 1,
      src: advtPic1,
      alt: "แนะนำสินค้า1",
      data: {
        id:1,
        maintitle:
          "ชี้เป้า 10 โน้ตบุ๊กรุ่นไหนดี สเปกแรง ใช้ได้ทั้งทำงานและเล่นเกม คุ้มค่าราคา",
        image0:
          "https://shopee.co.th/blog/wp-content/uploads/2021/11/Shopee-blog-%E0%B9%82%E0%B8%99%E0%B9%89%E0%B8%95%E0%B8%9A%E0%B8%B8%E0%B9%8A%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%99%E0%B8%94%E0%B8%B5.jpg",
      },
    },
    {
      id: 2,
      src: advtPic2,
      alt: "แนะนำสินค้า2",
      data: {
        id:2,
        maintitle:
          "7 โน๊ตบุ๊คสำหรับนักเรียนและนักศึกษา ใช้เรียนดี ใช้เล่นได้ อัปเดตใหม่ล่าสุด ปี 2022",
        image0:
          "https://blog.bnn.in.th/wp-content/uploads/2022/04/BlogCover-recommend-7-notebook-for-student.jpg",
      },
    },
    {
      id: 3,
      src: advtPic3,
      alt: "แนะนำสินค้า3",
      data: {
        id:3,
        maintitle: "โน๊ตบุ๊คเล่นเกม 2024 รุ่นไหนต้องมีมาดูกัน",
        image0:
          "https://www.neoshop.co.th/wp-content/uploads/2023/12/podium-for-product-presentation-technology-in-galaxy-wallpaper-with-a-fantastic-bubble-reflection-blue-background-backdrop-pink-colors-smoke-floating-on-water-surface-18.png",
      },
    },
  ];

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
      <div className="body flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-zinc-800 to-zinc-700">
        <div className="search-section flex w-full h-16 justify-center bg-zinc-700">
          {/* <div className="category-section justify-self-end">
            <button className="category-btn h-10 w-10 border-0 mt-4 mr-2 bg-zinc-700 transition-transform duration-150 hover:transform hover:scale-110">
              <img
                className="category-icon h-8 m-0 filter invert"
                src="https://cdn-icons-png.flaticon.com/512/2603/2603910.png"
                alt="category"
              />
            </button>
          </div> */}
          <div className="searchbar-section flex mt-4 h-10 w-1/3 bg-white border-0">
            <input
              className="search-bar h-8.4 w-11/12 text-sm text-left m-0 pt-2.4 pl-3 border-0 focus:outline-none"
              type="search"
              placeholder="คุณมองหาอะไรอยู่?"
            />
            <button
              className="search-btn transition-transform duration-150 hover:transform hover:scale-110"
              type="submit"
            >
              <img
                className="search-icon h-4 mt-0.8"
                src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
                alt="search"
              />
            </button>
          </div>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickOrder}
            >
              <img
                className="order w-8 h-7 absolute left-3 top-3 transition-transform duration-150 hover:transform hover:scale-110 filter invert"
                src="https://cdn-icons-png.flaticon.com/512/2740/2740721.png"
                alt="เรียงตาม"
              />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>ราคาต่ำสุด</MenuItem>
              <MenuItem onClick={handleClose}>ราคาสูงสุด</MenuItem>
              <MenuItem onClick={handleClose}>ชื่อสินค้า A-Z</MenuItem>
              <MenuItem onClick={handleClose}>ชื่อสินค้า Z-A</MenuItem>
            </Menu>
          </div>
        </div>
        <div className="container flex w-full">
          <Sidebar />
          <div className="data-wrap w-full h-full">
            <div className="slideset1 h-56 w-full relative overflow-hidden">
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className={`absolute top-[5%] right-[-180%] h-40 w-[42rem] border-2 border-black text-center m-4 transition-transform duration-150 hover:transform hover:scale-105 filter hover:drop-shadow-[15px_15px_3px_rgba(0,0,0,0.30)] z-2 animate-autoplay1 `}
                >
                  <Link to="/advt" state={{ data: slide.data }}>
                    <img
                      className="h-full w-full"
                      src={slide.src}
                      alt={slide.alt}
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="content-container-home justify-center grid grid-cols-3">
              {dataN.map((data) => {
                return (
                  <Notebook_data
                    key={data.title}
                    title={data.title}
                    content={data.content}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <About />
      </div>
    </>
  );
}

export default Home;
