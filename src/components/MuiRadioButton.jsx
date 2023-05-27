import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

const MuiRadioButton = () => {
  const [experience, setExperience] = useState("");
  console.log(experience);
  const handleChange = (e) => {
    setExperience(e.target.value);
  };
  return (
    <div>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years Of Experience
        </FormLabel>
        <RadioGroup
          aria-labelledby="job-experience-group-label"
          name="job-experience-group"
          value={experience}
          onChange={handleChange}
        >
          <FormControlLabel control={<Radio />} label="0-2" value={"0-2"} />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-8" value="6-8" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default MuiRadioButton;
