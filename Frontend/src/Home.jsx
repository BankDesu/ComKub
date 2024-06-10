import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";
import Notebook_data from "./Notebook_data";
import Sidebar from "./Sidebar";
import advtPic1 from "./assets/advtPic1.jpg";
import advtPic2 from "./assets/advtPic2.png";
import advtPic3 from "./assets/advtPic3.png";
import "./index.css";

function Home() {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [selectedFilters, setSelectedFilters] = useState({
    brands: [],
    categories: [],
    cpus: [],
    gpus: [],
    rams: [],
    priceRange: [],
  });

  const [dataN, setDataN] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  const handleSelectedCategories = (e) => {
    setSelectedCategories(e);
  };
  React.useEffect(() => {
    console.log(selectedCategories, "Categories");
  }, [selectedCategories]);

  const [selectedCPUs, setSelectedCPUs] = useState([]);
  const handleSelectedCPUs = (e) => {
    setSelectedCPUs(e);
  };
  React.useEffect(() => {
    console.log(selectedCPUs, "CPU");
  }, [selectedCPUs]);

  const [selectedGPUs, setSelectedGPUs] = useState([]);
  const handleSelectedGPUs = (e) => {
    setSelectedGPUs(e);
  };
  React.useEffect(() => {
    console.log(selectedGPUs, "GPU");
  }, [selectedGPUs]);

  const [selectedRams, setSelectedRams] = useState([]);
  const handleSelectedRams = (e) => {
    setSelectedRams(e);
  };
  React.useEffect(() => {
    console.log(selectedRams, "Ram");
  }, [selectedRams]);

  const [priceRange, setPriceRange] = useState([]);
  const handleSelectedPrice = (e) => {
    setPriceRange(e);
  };
  React.useEffect(() => {
    console.log(priceRange, "Price");
  }, [priceRange]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleClickOrder = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    const selectedSortOption = event.target.innerText;
    setSortOption(event.target.innerText);
  };


  const slides = [
    {
      id: 1,
      src: advtPic1,
      alt: "แนะนำสินค้า1",
      data: {
        id: 1,
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
        id: 2,
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
        id: 3,
        maintitle: "โน๊ตบุ๊คเล่นเกม 2024 รุ่นไหนต้องมีมาดูกัน",
        image0:
          "https://www.neoshop.co.th/wp-content/uploads/2023/12/podium-for-product-presentation-technology-in-galaxy-wallpaper-with-a-fantastic-bubble-reflection-blue-background-backdrop-pink-colors-smoke-floating-on-water-surface-18.png",
      },
    },
  ];

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_PATH}/notebook/displayNotebook`
      );
      setDataN(response.data);
      console.log(response.data, "Fetched data");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchFilteredData = async () => {
    try {
      const params = {};
      if (selectedBrands.length > 0) {
        params.brand = selectedBrands.join(",");
      }
      if (selectedCategories.length > 0) {
        params.category = selectedCategories.join(",");
      }
      if (priceRange.length > 0) {
        params.minPrice = priceRange[0];
        params.maxPrice = priceRange[1];
      }

      const response = await axios.get(
        `${import.meta.env.VITE_API_PATH}/notebook/displayNotebook`,
        { params }
      );
      setDataN(response.data);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchFilteredData();
  }, [selectedBrands, selectedCategories, priceRange]);


  const sortData = (data) => {
    switch (sortOption) {
      case "Lowest price":
        return [...data].sort((a, b) => a.price - b.price);
      case "Highest price":
        return [...data].sort((a, b) => b.price - a.price);
      case "Name: A-Z":
        return [...data].sort((a, b) =>
          a.notebook_name.localeCompare(b.notebook_name)
        );
      case "Name: Z-A":
        return [...data].sort((a, b) =>
          b.notebook_name.localeCompare(a.notebook_name)
        );
      default:
        return data;
    }
  };

  const filteredData0 = dataN.filter((item) => {
    return (
      (search.toLowerCase() === "" ||
        item.notebook_name.toLowerCase().includes(search) ||
        item.cpu.toLowerCase().includes(search) ||
        item.gpu.toLowerCase().includes(search) ||
        item.ram.toLowerCase().includes(search))
    );
  });

  const sortedFilteredData = sortData(filteredData0);
  const totalPages = Math.ceil(filteredData0.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedFilteredData.slice(startIndex, endIndex);
  };


  return (
    <>
      <Nav />
      <div className="body flex flex-col justify-center items-center bg-gradient-to-br from-zinc-800 to-zinc-700">
        <div className="search-section flex w-full h-16 justify-center bg-zinc-700/80 border-b-2 border-gray-300/75">
          <div className="searchbar-section flex mt-3 h-10 w-1/3 bg-white border-0">
            <input
              className="search-bar h-8.4 w-11/12 text-sm text-left m-0 pt-2.4 pl-3 border-0 focus:outline-none"
              type="search"
              placeholder="What are you looking for?"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <img
                className="order w-8 h-7 absolute left-3 top-2 transition-transform duration-150 hover:transform hover:scale-110 filter invert"
                src="https://cdn-icons-png.flaticon.com/512/2740/2740721.png"
                alt="เรียงตาม"
              />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
              MenuListProps={{ "aria-labelledby": "basic-button" }}
            >
              <MenuItem onClick={(e) => setSortOption(e.target.innerText)}>
                Lowest price
              </MenuItem>
              <MenuItem onClick={(e) => setSortOption(e.target.innerText)}>
                Highest price
              </MenuItem>
              <MenuItem onClick={(e) => setSortOption(e.target.innerText)}>
                Name: A-Z
              </MenuItem>
              <MenuItem onClick={(e) => setSortOption(e.target.innerText)}>
                Name: Z-A
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="container flex w-full mb-32">
          <Sidebar
            onSelectBrand={setSelectedBrands}
            onSelectCategory={setSelectedCategories}
            onSelectPrice={setPriceRange}
          />
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
              {getPageData().map((data, index) => (
                <Link key={index} to={`/info/${data.notebook_id}`}>
                  <Notebook_data data={data} />
                </Link>
              ))}
            </div>
            <div className="pagination-controls flex justify-center mt-4">
              <Button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`prev-next-btn text-white hover:bg-gray-300 hover:text-white ${
                  currentPage === 1 ? "bg-white" : "bg-transparent"
                }`}
              >
                &lt;
              </Button>
              {[...Array(totalPages).keys()].map((num) => (
                <Button
                  sx={{ backgroundColor: "grey" }}
                  key={num + 1}
                  onClick={() => setCurrentPage(num + 1)}
                  variant={currentPage === num + 1 ? "contained" : "outlined"}
                  className={`pagination-btn ${
                    currentPage === num + 1 ? "current-page" : ""
                  }`}
                >
                  {num + 1}
                </Button>
              ))}
              <Button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`prev-next-btn text-white hover:bg-gray-300 hover:text-white ${
                  currentPage === totalPages ? "bg-white" : "bg-transparent"
                }`}
              >
                &gt;
              </Button>
            </div>
          </div>
        </div>
        <About />
      </div>
    </>
  );
}

export default Home;