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
import { useTheme, styled } from "@mui/material/styles";

const CustomAccordionSummary = styled(AccordionSummary)(
  ({ theme, expanded }) => ({
    backgroundColor: expanded ? "grey" : "inherit",
    color: expanded ? "white" : "inherit",
  })
);

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  const handleChangeExpanded = () => {
    setExpanded((prev) => !prev);
  };

  const [checked, setChecked] = React.useState(true);

  const handleChangeChecked = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.name, event.target.checked);
  };

  return (
    <div className="w-60 bg-black">
      <Accordion
        className="w-60"
        expanded={expanded}
        onChange={handleChangeExpanded}
      >
        <CustomAccordionSummary
          className="h-10 text-base"
          expandIcon={<ArrowDropDownIcon />}
          expanded={expanded}
        >
          <Typography>BRAND</Typography>
        </CustomAccordionSummary>
        <AccordionDetails>
          <FormGroup className="mr-7 h-8">
            <FormControlLabel
              className=""
              control={
                <Checkbox
                  defaultChecked
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
          <FormGroup className="mr-7 h-8">
            <FormControlLabel
              className=""
              control={
                <Checkbox
                  defaultChecked
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
          <FormGroup className="mr-7 h-8">
            <FormControlLabel
              className=""
              control={
                <Checkbox
                  defaultChecked
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
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
