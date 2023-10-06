import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      bgcolor={"ActiveBorder"}
      color={"white"}
      p={2}
      sx={{ position: "relative", bottom: "0" }}
    >
      <Typography textAlign={"center"}>All the Rights are reserved</Typography>
    </Box>
  );
}

export default Footer;
