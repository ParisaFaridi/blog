import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="primary"
        align="center"
        padding="10px"
        mt={10}
      >
        Developed with 💓
      </Typography>
    </footer>
  );
}

export default Footer;
