import * as React from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  "&.Mui-expanded": {
    margin: "0 !important",
  },
}));

const Input = styled(MuiInput)`
  width: 70px;
`;

function valuetext(value) {
  return `${value}°C`;
}

export default function Sidebar() {
  const [checked, setChecked] = React.useState(true);

  const handleChangeChecked = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.name, event.target.checked);
  };

  const [value, setValue] = React.useState([7000, 80000]);

  const handleChangeRange = (event, newValue) => {
    setValue(newValue);
    console.log('Min',[value[0],value[1]],'Max');
  };

  const handleInputChangeMin = (event) => {
    const newValue = event.target.value === "" ? 0 : Number(event.target.value);
    setValue([newValue, value[1]]);
    console.log("Min:",[newValue]);
  };

  const handleInputChangeMax = (event) => {
    const newValue = event.target.value === "" ? 0 : Number(event.target.value);
    setValue([value[0], newValue]);
    console.log("Max:",[newValue]);
  };

  const handleBlur = () => {
    if (value[0] < 7000) {
      setValue([7000, value[1]]);
    } else if (value[1] > 80000) {
      setValue([value[0], 80000]);
    } else if (value[0] > value[1]) {
      setValue([value[1], value[0]]);
    }
  };

  return (
    <div className="w-60 bg-#A1C4FD z-10 mt-2">
      <CustomAccordion className="w-60 m-0 !important">
        <AccordionSummary
          className="max-h-10"
          expandIcon={<ArrowDropDownIcon />}
          sx={{backgroundColor: "#c2c2c2"}}
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
                  onChange={handleChangeChecked}
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
                  onChange={handleChangeChecked}
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
                  onChange={handleChangeChecked}
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
                  onChange={handleChangeChecked}
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
                  onChange={handleChangeChecked}
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
          sx={{backgroundColor: "#c2c2c2"}}
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
                  onChange={handleChangeChecked}
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
                  onChange={handleChangeChecked}
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
                  onChange={handleChangeChecked}
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
          sx={{backgroundColor: "#c2c2c2"}}
        >
          <Typography className="pl-5">PRICE RANGE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: 230, ml: 1 }}>
            <Slider
              getAriaLabel={() => "Price range"}
              value={value}
              onChange={handleChangeRange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              step={1000}
              min={7000}
              max={80000}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                mr: 2,
                ml: 1,
              }}
            >
              <Input
                value={value[0]}
                size="small"
                onChange={handleInputChangeMin}
                onBlur={handleBlur}
                inputProps={{
                  step: 1000,
                  min: 7000,
                  max: 80000,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
              <Box>-</Box>
              <Input
                value={value[1]}
                size="small"
                onChange={handleInputChangeMax}
                onBlur={handleBlur}
                inputProps={{
                  step: 1000,
                  min: 7000,
                  max: 80000,
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

// สำหรับ hover AccordionSummary
{/* <AccordionSummary
  expandIcon={<ArrowDropDownIcon sx={{ color: "success.dark" }} />}
  aria-controls="panel1a-content"
  id="panel1a-header"
  sx={{
    bgcolor: "success.light",

    color: "success.dark", 

    "&:hover": {
      bgcolor: "success.dark", 

      color: "success.light",

      "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
        color: "success.light",
      }, 
    },
  }}
>
  <Typography variant="h5" color="inherit">
    {" "}
    Accordion 1
  </Typography>
</AccordionSummary>; */}
