import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Secondary Small" color="secondary" size="small" />
        <TextField label="Password" required type="password" />
        <TextField
          label="Disabled"
          required
          helperText="Password should be 8 digits"
          disabled
        />
        <TextField
          label="Read Only"
          required
          helperText="Password should be 8 digits"
          InputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
        <TextField
          label="Error"
          required
          error={!value}
          helperText={
            value
              ? "Don't share you password with anyone alse"
              : "Password should be 8 digits"
          }
          onChange={(e) => setValue(e.target.value)}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
