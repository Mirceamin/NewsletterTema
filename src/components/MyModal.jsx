import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import FirstPhoto from "../assets/images/FirstPhoto.svg";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconSuccess from "../assets/images/IconSuccess.svg";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  width: "800px",
  p: 3,
  borderRadius: 10,
};

export default function MyModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container alignItems="stretch">
            <Grid item xs={7} display="flex">
              <Box sx={{ px: 6 }}>
                <Stack direction="column" alignItems="flex-start">
                  <Typography variant="h3" fontWeight="bold" sx={{ pt: 3 }}>
                    Stay updated!
                  </Typography>
                  <Typography sx={{ pt: 2 }}>
                    Join 60,000+ product managers receiving monthly updates on:
                  </Typography>

                  <Stack
                    alignItems="center"
                    direction="row"
                    gap={2}
                    sx={{ pt: 1 }}
                  >
                    <img src={IconSuccess} alt="" />
                    <Typography variant="body1">
                      Product discovery and building what matters
                    </Typography>
                  </Stack>

                  <Stack
                    alignItems="center"
                    direction="row"
                    gap={2}
                    sx={{ pt: 1 }}
                  >
                    <img src={IconSuccess} alt="" />
                    <Typography variant="body1">
                      Measuring to ensure updates are a success
                    </Typography>
                  </Stack>

                  <Stack
                    alignItems="center"
                    direction="row"
                    gap={2}
                    sx={{ pt: 1 }}
                  >
                    <img src={IconSuccess} alt="" />
                    <Typography variant="body1">And much more!</Typography>
                  </Stack>

                  <Typography
                    variant="h7"
                    fontWeight="bold"
                    sx={{ pt: 4, pb: 1 }}
                  >
                    Email address
                  </Typography>
                  <TextField
                    sx={{ pb: 3 }}
                    fullWidth
                    id="outlined-basic"
                    label="email@company.com"
                    variant="outlined"
                  />

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "black",
                      textTransform: "none",
                      height: 50,
                    }}
                  >
                    Subscribe to monthly newsletter
                  </Button>

                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel htmlFor="my-input" variant="standard">
                      Select
                    </InputLabel>
                    <NativeSelect id="my-input">
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </NativeSelect>
                  </FormControl>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={5} display="flex">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "stretch",
                }}
              >
                <img
                  src={FirstPhoto}
                  alt=""
                  style={{
                    width: "100%", // Make the image fit the width of the grid cell
                    height: "auto", // Maintain the aspect ratio
                    maxWidth: "100%", // Ensure the image doesn't exceed the grid cell
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
