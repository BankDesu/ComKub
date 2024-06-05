import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import "./Home.css";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import advtPic1 from "./assets/advtPic1.jpg";
import advtPic2 from "./assets/advtPic2.png";
import advtPic3 from "./assets/advtPic3.png";
import { Link } from "react-router-dom";
import Notebook_data from "./Notebook_data";

function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickOrder = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    console.log(event.target.innerText);
  };


  //เปลี่ยนเป็น backend
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
      <div className="search-section flex w-full h-20 justify-center bg-sky-600">
        <div className="category-section justify-self-end">
          <button className="category-btn h-10 w-10 border-0 mt-6 mr-2 bg-sky-600 transition-transform duration-150 hover:transform hover:scale-110">
            <img
              className="category-icon h-8 m-0"
              src="https://cdn-icons-png.flaticon.com/512/2603/2603910.png"
            ></img>
          </button>
        </div>
        <div className="searchbar-section flex mt-6 h-10 w-1/3 bg-white border-0 ">
          <input
            className="search-bar h-8.4 w-11/12 text-sm text-left m-0 pt-2.4 pl-3 border-0 focus:outline-none"
            type="search"
            placeholder="คุณมองหาอะไรอยู่?"
          />
          <button className="search-btn transition-transform duration-150 hover:transform hover:scale-110" type="submit">
            <img
              className="search-icon h-4 mt-0.8"
              src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
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
              src="https://cdn-icons-png.flaticon.com/512/2740/2740721.png"
              alt="เรียงตาม"
              className="w-8 h-7 absolute left-8 top-5"
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
      <div className="container flex">
        <Sidebar />
        <div className="data-wrap">
          <div className="slideset1">
            <div className="slide1">
              <Link to="/advt">
                <img
                  className="h-full w-full"
                  src={advtPic1}
                  alt="แนะนำสินค้า1"
                />
              </Link>
            </div>
            <div className="slide2">
              <Link to="/advt">
                <img
                  className="h-full w-full"
                  src={advtPic2}
                  alt="แนะนำสินค้า2"
                />
              </Link>
            </div>
            <div className="slide3">
              <Link to="/advt">
                <img
                  className="h-full w-full"
                  src={advtPic3}
                  alt="แนะนำสินค้า3"
                />
              </Link>
            </div>
          </div>

          <div className="content-container-home mb-4">
            {dataN.map((data) => {
              console.log(data);
              return (
                <Notebook_data title={data.title} content={data.content} />
              );
            })}
          </div>
        </div>
      </div>

      <div className="about-section">
        <svg
          className="wave"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="bg">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(130, 158, 249, 0.06)" }}
              ></stop>
              <stop
                offset="50%"
                style={{ stopColor: "rgba(76, 190, 255, 0.6)" }}
              ></stop>
              <stop
                offset="100%"
                style={{ stopColor: "rgba(115, 209, 72, 0.2)" }}
              ></stop>
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
           s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use href="#wave" opacity="0.3">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="10s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use href="#wave" opacity="0.6">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use href="#wave" opacity="0.9">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="0 230;-140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>

        <div className="about">
          <div className="about1" style={{ marginLeft: "5rem" }}>
            <h3 style={{ marginBottom: "3rem", fontWeight: "600" }}>
              เกี่ยวกับ Comkub
            </h3>
            <a
              href="https://youtu.be/xvFZjo5PgG0"
              target="_blank"
              style={{ color: "white" }}
            >
              เกี่ยวกับเรา
            </a>
            <p style={{ marginTop: "2rem" }}>ติดตามเรา</p>
            <div
              className="contact flex"
              style={{
                marginTop: "1rem",
                height: "2.5rem",
                width: "17rem",
                border: "solid",
                backgroundColor: "white",
                borderRadius: "15px",
              }}
            >
              <img
                className="fb"
                style={{
                  marginTop: "0.1rem",
                  marginLeft: "1rem",
                  width: "2rem",
                  height: "2rem",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
              />
              <img
                className="x"
                style={{
                  marginTop: "0.1rem",
                  marginLeft: "1rem",
                  width: "2rem",
                  height: "2rem",
                }}
                src="https://static.vecteezy.com/system/resources/previews/027/395/710/non_2x/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png"
              />
              <img
                className="ig"
                style={{
                  marginTop: "0.1rem",
                  marginLeft: "1rem",
                  width: "2rem",
                  height: "2rem",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"
              />
              <img
                className="yt"
                style={{
                  marginTop: "0.1rem",
                  marginLeft: "1.2rem",
                  width: "2rem",
                  height: "2rem",
                  scale: "1.5",
                }}
                src="https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
              />
              <img
                className="line"
                style={{
                  marginTop: "0.1rem",
                  marginLeft: "1.2rem",
                  width: "2rem",
                  height: "2rem",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/2/2e/LINE_New_App_Icon_%282020-12%29.png"
              />
            </div>
          </div>
          <div className="about2" style={{ marginLeft: "12rem" }}>
            <h4>ผู้จัดทำ</h4>
            <p style={{ marginTop: "1.5rem" }}>ปณชัย สุวิมลโอภาส</p>
            <p style={{ marginTop: "0.25rem" }}>65090500443</p>
            <p style={{ marginTop: "1.5rem" }}>สถาปนา ตินพ </p>
            <p style={{ marginTop: "0.25rem" }}>65090500456</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
