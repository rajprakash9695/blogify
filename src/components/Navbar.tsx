import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

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
            <TextField
              id="search"
              type="search"
              size="small"
              sx={{
                width: 300,
                backgroundColor: "white",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Typography variant="h6" color={"white"} px={3}>
              User
            </Typography>
            <Typography variant="h6" color={"white"} px={3}>
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
