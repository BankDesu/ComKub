import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MuiInput from "@mui/material/Input";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  "&.Mui-expanded": {
    margin: "0 !important",
  },
}));

const Input = styled(MuiInput)`
  width: 60px;
`;

function valuetext(value) {
  return `${value}°C`;
}

export default function Sidebar({
  onSelectBrand,
  onSelectCategory,
  onSelectPrice,
}) {
  const [data, setData] = React.useState([]);
  const [selectedBrands, setSelectedBrands] = React.useState([]);
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [priceRange, setPriceRange] = React.useState([0, 200000]);
  const [value, setValue] = React.useState([15000, 85000]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_PATH}/notebook/displayNotebook`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    onSelectCategory(selectedCategories);
  }, [selectedCategories]);

  React.useEffect(() => {
    onSelectPrice(priceRange);
  }, [priceRange]);

  const handleBrandChange = (brand) => (event) => {
    const isChecked = event.target.checked;
    setSelectedBrands((prev) =>
      isChecked ? [...prev, brand] : prev.filter((b) => b !== brand)
    );
  };

  const handleCategorieChange = (category) => (event) => {
    const isChecked = event.target.checked;
    setSelectedCategories((prev) =>
      isChecked ? [...prev, category] : prev.filter((b) => b !== category)
    );
  };

  const handleChangeRange = (event, newValue) => {
    setValue(newValue);
    setPriceRange(newValue);
  };

  const handleInputChangeMin = (event) => {
    const newValue = event.target.value === "" ? 0 : Number(event.target.value);
    setValue([newValue, value[1]]);
    setPriceRange([newValue, priceRange[1]]);
  };

  const handleInputChangeMax = (event) => {
    const newValue = event.target.value === "" ? 0 : Number(event.target.value);
    setValue([value[0], newValue]);
    setPriceRange([priceRange[0], newValue]);
  };

  const handleBlur = () => {
    if (value[0] < 0) {
      setValue([0, value[1]]);
      setPriceRange([0, priceRange[1]]);
    } else if (value[1] > 200000) {
      setValue([value[0], 200000]);
      setPriceRange([priceRange[0], 200000]);
    } else if (value[0] > value[1]) {
      setValue([value[1], value[0]]);
      setPriceRange([value[1], value[0]]);
    }
  };

  return (
    <div className="sidebar-content bg-#A1C4FD z-10 mt-4 ml-4 w-[20rem]">
      <CustomAccordion className="w-60 m-0 !important">
        <AccordionSummary
          className="max-h-10"
          expandIcon={<ArrowDropDownIcon />}
          sx={{ backgroundColor: "" }}
        >
          <Typography className="pl-5">BRAND</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup className="mr-7 h-10">
            <FormControlLabel
              className="border-b-2"
              control={
                <Checkbox
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                  onChange={handleBrandChange("Acer")}
                  checked={selectedBrands.includes("Acer")}
                  inputProps={{ "aria-label": "controlled" }}
                  name="Acer"
                />
              }
              label="Acer"
              labelPlacement="start"
            />
          </FormGroup>
          <FormGroup className="mr-7 h-10">
            <FormControlLabel
              className="border-b-2"
              control={
                <Checkbox
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                  onChange={handleBrandChange("Asus")}
                  checked={selectedBrands.includes("Asus")}
                  inputProps={{ "aria-label": "controlled" }}
                  name="Asus"
                />
              }
              label="Asus"
              labelPlacement="start"
            />
          </FormGroup>
          <FormGroup className="mr-7 h-10">
            <FormControlLabel
              className="border-b-2"
              control={
                <Checkbox
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                  onChange={handleBrandChange("HP")}
                  checked={selectedBrands.includes("HP")}
                  inputProps={{ "aria-label": "controlled" }}
                  name="HP"
                />
              }
              label="HP"
              labelPlacement="start"
            />
          </FormGroup>
          <FormGroup className="mr-7 h-10">
            <FormControlLabel
              className="border-b-2"
              control={
                <Checkbox
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                  onChange={handleBrandChange("Lenovo")}
                  checked={selectedBrands.includes("Lenovo")}
                  inputProps={{ "aria-label": "controlled" }}
                  name="Lenovo"
                />
              }
              label="Lenovo"
              labelPlacement="start"
            />
          </FormGroup>
          <FormGroup className="mr-7 h-10">
            <FormControlLabel
              className="border-b-2"
              control={
                <Checkbox
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                  onChange={handleBrandChange("MSI")}
                  checked={selectedBrands.includes("MSI")}
                  inputProps={{ "aria-label": "controlled" }}
                  name="MSI"
                />
              }
              label="MSI"
              labelPlacement="start"
            />
          </FormGroup>
        </AccordionDetails>
      </CustomAccordion>

      <CustomAccordion className="w-60 m-0!important">
        <AccordionSummary
          className="max-h-10"
          expandIcon={<ArrowDropDownIcon />}
          sx={{ backgroundColor: "" }}
        >
          <Typography className="pl-5">CATEGORY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup className="mr-7 h-10">
            <FormControlLabel
              className="border-b-2"
              control={
                <Checkbox
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                  onChange={handleCategorieChange("โน๊ตบุ้คทั่วไป")}
                  checked={selectedCategories.includes("โน๊ตบุ้คทั่วไป")}
                  inputProps={{ "aria-label": "controlled" }}
                  name="โน๊ตบุ้คทั่วไป"
                />
              }
              label="โน๊ตบุ้คทั่วไป"
              labelPlacement="start"
            />
          </FormGroup>
          <FormGroup className="mr-7 h-10">
            <FormControlLabel
              className="border-b-2"
              control={
                <Checkbox
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                  onChange={handleCategorieChange("โน๊ตบุ้คบางเบา")}
                  checked={selectedCategories.includes("โน๊ตบุ้คบางเบา")}
                  inputProps={{ "aria-label": "controlled" }}
                  name="โน๊ตบุ้คบางเบา"
                />
              }
              label="โน๊ตบุ้คบางเบา"
              labelPlacement="start"
            />
          </FormGroup>
          <FormGroup className="mr-7 h-10">
            <FormControlLabel
              className="border-b-2"
              control={
                <Checkbox
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 25 } }}
                  onChange={handleCategorieChange("โน๊ตบุ้คเกมมิ่ง")}
                  checked={selectedCategories.includes("โน๊ตบุ้คเกมมิ่ง")}
                  inputProps={{ "aria-label": "controlled" }}
                  name="โน๊ตบุ้คเกมมิ่ง"
                />
              }
              label="โน๊ตบุ้คเกมมิ่ง"
              labelPlacement="start"
            />
          </FormGroup>
        </AccordionDetails>
      </CustomAccordion>

      <CustomAccordion className="w-60">
        <AccordionSummary
          className="max-h-10"
          expandIcon={<ArrowDropDownIcon />}
          sx={{ backgroundColor: "" }}
        >
          <Typography className="pl-5">PRICE RANGE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: 205, ml: 1 }}>
            <Slider
              getAriaLabel={() => "Price range"}
              value={value}
              onChange={handleChangeRange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              step={1000}
              min={0}
              max={200000}
              sx={{
                color: "#545454",
                height: 6,
                "& .MuiSlider-thumb": {
                  height: 20,
                  width: 20,
                  backgroundColor: "#fff",
                  border: "2px solid currentColor",
                  "&:focus, &:hover, &.Mui-active": {
                    boxShadow: "0px 1px 5px 1px rgba(0, 0, 0, 0.5)",
                  },
                },
                "& .MuiSlider-valueLabel": {
                  lineHeight: 1.2,
                  fontSize: 8,
                  background: "unset",
                  padding: 0,
                  width: 42,
                  height: 42,
                  borderRadius: "50% 50% 50% 0",
                  backgroundColor: "#545454",
                  transformOrigin: "bottom left",
                  transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
                  "&::before": { display: "none" },
                  "&.MuiSlider-valueLabelOpen": {
                    transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
                  },
                  "& > *": {
                    transform: "rotate(45deg)",
                  },
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                mr: 2,
                ml: 2,
              }}
            >
              <Input
                sx={{ width: 80 }}
                value={value[0]}
                size="small"
                onChange={handleInputChangeMin}
                onBlur={handleBlur}
                inputProps={{
                  step: 1000,
                  min: 0,
                  max: 200000,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
              <Box>-</Box>
              <Input
                sx={{ width: 80 }}
                value={value[1]}
                size="small"
                onChange={handleInputChangeMax}
                onBlur={handleBlur}
                inputProps={{
                  step: 1000,
                  min: 0,
                  max: 200000,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
            </Box>
          </Box>
        </AccordionDetails>
      </CustomAccordion>
    </div>
  );
}
