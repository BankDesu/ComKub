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

  const [value, setValue] = React.useState([15000, 85000]);

  const handleChangeRange = (event, newValue) => {
    setValue(newValue);
    console.log("Min", [value[0], value[1]], "Max");
  };

  const handleInputChangeMin = (event) => {
    const newValue = event.target.value === "" ? 0 : Number(event.target.value);
    setValue([newValue, value[1]]);
    console.log("Min:", [newValue]);
  };

  const handleInputChangeMax = (event) => {
    const newValue = event.target.value === "" ? 0 : Number(event.target.value);
    setValue([value[0], newValue]);
    console.log("Max:", [newValue]);
  };

  const handleBlur = () => {
    if (value[0] < 0) {
      setValue([0, value[1]]);
    } else if (value[1] > 200000) {
      setValue([value[0], 200000]);
    } else if (value[0] > value[1]) {
      setValue([value[1], value[0]]);
    }
  };

  return (
    <div className="w-svw bg-#A1C4FD z-10 mt-2">
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
          sx={{ backgroundColor: "" }}
        >
          <Typography className="pl-5">PRICE RANGE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: 220, ml: 1 }}>
            <Slider
              getAriaLabel={() => "Price range"}
              value={value}
              onChange={handleChangeRange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              step={1000}
              min={0}
              max={200000}
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
                  min: 0,
                  max: 200000,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
              <Box>-</Box>
              <Input sx={{width:80}}
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

      <CustomAccordion className="w-60 m-0!important">
        <AccordionSummary
          className="max-h-10"
          expandIcon={<ArrowDropDownIcon />}
          sx={{ backgroundColor: "" }}
        >
          <Typography className="pl-5">CPU</Typography>
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
                  name="Intel Core i5"
                />
              }
              label="Intel Core i5"
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
                  name="Intel Core i7"
                />
              }
              label="Intel Core i7"
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
                  name="Intel Core i9"
                />
              }
              label="Intel Core i9"
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
                  name="AMD Ryzen 5"
                />
              }
              label="AMD Ryzen 5"
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
                  name="AMD Ryzen 7"
                />
              }
              label="AMD Ryzen 7"
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
                  name="AMD Ryzen 9"
                />
              }
              label="AMD Ryzen 9"
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
          <Typography className="pl-5">GPU</Typography>
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
                  name="Intel"
                />
              }
              label="Intel"
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
                  name="Nvidia"
                />
              }
              label="Nvidia"
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
                  name="AMD"
                />
              }
              label="AMD"
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
          <Typography className="pl-5">MEMORY</Typography>
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
                  name="8GB"
                />
              }
              label="8GB"
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
                  name="16GB"
                />
              }
              label="16GB"
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
                  name="32GB"
                />
              }
              label="32GB"
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
                  name="64GB"
                />
              }
              label="64GB"
              labelPlacement="start"
            />
          </FormGroup>
        </AccordionDetails>
      </CustomAccordion>
    </div>
  );
}

// สำหรับ hover AccordionSummary
{
  /* <AccordionSummary
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
</AccordionSummary>; */
}
