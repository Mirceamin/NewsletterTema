import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function SubscribeEmail(props) {
  return (
    <Box sx={props.sx}>
      <Typography variant="h7" fontWeight="bold" sx={{ pb: 1 }}>
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
    </Box>
  );
}
export default SubscribeEmail;
