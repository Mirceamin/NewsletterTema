import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import FirstPhoto from "../assets/images/FirstPhoto.svg";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconSuccess from "../assets/images/IconSuccess.svg";
import VerifiedText from "./VerifiedText";
import SubscribeEmail from "./SubscribeEmail";
import Snackbar from "@mui/material/Snackbar";

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

const texts = [
  { text: "Join 60,000+ product managers receiving monthly updates on:" },
  { text: "Product discovery and building what matters", icon: IconSuccess },
  { text: "Measuring to ensure updates are a success", icon: IconSuccess },
  { text: "And much more!", icon: IconSuccess },
];

export default function MyModal() {
  const [open, setOpen] = React.useState(false);
  const [snackBarOpen, setSnackBarOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const subscribeEvent = () => {
    handleClose();
    setSnackBarOpen(true);
  };

  const handleSnackBarClose = () => {
    setSnackBarOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>

      <Snackbar
        open={snackBarOpen}
        autoHideDuration={5000}
        onClose={handleSnackBarClose}
        message="Success"
      />

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

                  {texts.map((obj) => {
                    return (
                      <VerifiedText icon={obj.icon}>{obj.text}</VerifiedText>
                    );
                  })}

                  <SubscribeEmail
                    propSnack={subscribeEvent}
                    sx={{ mt: 4 }}
                  ></SubscribeEmail>
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
