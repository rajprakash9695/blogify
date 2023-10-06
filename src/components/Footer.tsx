import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      bgcolor={"#12486B"}
      color={"white"}
      p={2}
      sx={{ position: "relative", bottom: "0" }}
    >
      <Typography textAlign={"center"}>
        All the Rights are reserved 2023 by @ Blogify
      </Typography>
    </Box>
  );
}

export default Footer;
