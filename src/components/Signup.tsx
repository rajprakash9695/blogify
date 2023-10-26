import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

function Signup() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [data, setData] = useState();

  const handleInput = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log("Submitted Data:", input);

    const response = fetch("http://localhost:8080/user/signup", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setData(response));

    // console.log(response);
    // localStorage.setItem("response");
  };

  console.log(data);

  return (
    <Box sx={{ height: "80vh" }} mt={4}>
      <Container maxWidth={"sm"}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" textAlign={"center"}>
            {" "}
            Signup Form
          </Typography>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            name="name"
            onChange={handleInput}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            name="email"
            onChange={handleInput}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            name="password"
            margin="normal"
            onChange={handleInput}
          />
          <Button variant="contained" color="primary" fullWidth type="submit">
            Signup
          </Button>
        </form>

        <Box>
          <Typography>{data}</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Signup;
