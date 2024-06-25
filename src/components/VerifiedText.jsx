import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function VerifiedText(props) {
  return (
    <Stack alignItems="center" direction="row" gap={2} sx={{ pt: 1 }}>
      { props.icon &&
        <img src={props.icon} alt="" />
      }
      <Typography variant="body1">
        {props.children}
      </Typography>
    </Stack>
  );
}

export default VerifiedText;
