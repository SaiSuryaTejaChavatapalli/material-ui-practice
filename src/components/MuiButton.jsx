import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
const MuiButton = () => {
  const [formats, setFormats] = useState(null);
  console.log(formats);
  const handleFormatChange = (event, updatedFormats) => {
    console.log({ updatedFormats });
    setFormats(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Button variant="text">Text</Button>
        <Button variant="outlined" href="https://www.google.com">
          Outlined
        </Button>
        <Button variant="contained">Contained</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="secondary" variant="outlined">
          Secondary
        </Button>
        <Button color="info" variant="outlined">
          Info
        </Button>
        <Button color="warning" variant="contained">
          Warning
        </Button>
        <Button color="error" variant="text">
          Error
        </Button>
        <Button color="success" variant="contained">
          Success
        </Button>
      </Stack>
      <Stack spacing={2} direction={"row"} display={"block"}>
        <Button size="small" variant="contained">
          Small
        </Button>
        <Button size="medium" variant="contained">
          Medium
        </Button>
        <Button size="large" variant="contained">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton
          color="success"
          aria-label="send"
          size="medium"
          onClick={() => alert("Button Clicked")}
        >
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <ButtonGroup
          variant="contained"
          color="secondary"
          size="small"
          orientation="horizontal"
          aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button onClick={() => alert("Center Clicked")}>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <ToggleButtonGroup
          aria-label="text formatting"
          color="primary"
          value={formats}
          onChange={handleFormatChange}
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underline" aria-label="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
