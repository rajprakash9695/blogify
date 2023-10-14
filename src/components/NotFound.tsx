import { Box, Container, Typography } from "@mui/material";
import NotFoundImage from "../assets/404_illustration_4x.png";
import { Link } from "react-router-dom";
import HomeBlog from "./HomeBlog";

function NotFound() {
  return (
    <Container>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"85vh"}
      >
        <img src={NotFoundImage} height={500} />
        <Typography variant="h3">Page not found</Typography>
      </Box>
    </Container>
  );
}

export default NotFound;
