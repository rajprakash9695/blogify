import { Box, Button, TextField } from "@mui/material";

import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    console.log(search);
  };
  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  };
  return (
    <Box
      my={5}
      sx={{
        height: "80vh",
      }}
    >
      <Box sx={{ display: "flex", margin: "auto" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="search"
            type="search"
            size="small"
            onChange={handleSearch}
            sx={{
              width: 300,
              backgroundColor: "white",
            }}
          />
          <Button variant="outlined">Submit</Button>
        </form>
      </Box>

      <Box>{search}</Box>
    </Box>
  );
}

export default Search;
