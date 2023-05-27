import { TextField, MenuItem, Box } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);

  const handleOnChange = (event) => {
    setCountry(event.target.value);
  };
  const handleOnChangeMultiple = (e) => {
    const value = e.target.value;
    console.log(value);
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px" display={"flex"} gap={"20px"} flexDirection={"column"}>
      <TextField
        select
        fullWidth
        value={country}
        onChange={handleOnChange}
        label="Select Country"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AUS">Australia</MenuItem>
      </TextField>
      <TextField
        select
        fullWidth
        value={countries}
        onChange={handleOnChangeMultiple}
        label="Select Country"
        color="secondary"
        size="small"
        helperText="Select Your Country"
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AUS">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
