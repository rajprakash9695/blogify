import { Box, Container, Typography, Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Box sx={{ bgcolor: "primary.main" }} p={3} position={"sticky"}>
      <Container>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h4" color={"white"}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Blogify
            </Link>
          </Typography>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <NavLink
              to="/search"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography>Search Blog</Typography>
            </NavLink>

            <Typography variant="h6" color={"white"} px={2}>
              User
            </Typography>
            <Typography variant="h6" color={"white"} px={2}>
              <Link
                to="/post"
                style={{ textDecoration: "none", color: "white" }}
              >
                Create Blog
              </Link>
            </Typography>
            <Button variant="contained" color="warning">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                Login
              </Link>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
