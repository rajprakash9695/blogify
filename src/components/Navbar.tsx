import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <Box sx={{ bgcolor: "primary.main" }} p={3} position={"sticky"}>
      <Container>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h4" color={"white"}>
            Blogify
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
            <Button variant="contained" color="warning">
              Login
            </Button>
            <Button variant="contained" color="success">
              Signup
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
