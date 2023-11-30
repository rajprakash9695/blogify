import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Signup() {
  const [input, setInput] = useState({
    fullname: "",
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

  const validateForm = () => {
    const { fullname, email, password } = input;
    if (!fullname || !email || !password) {
      Swal.fire({
        icon: "error",
        title: "All fields are required",
        showConfirmButton: false,
        timer: 1500,
      });
      return false;
    }

    // Add more complex validation if needed (e.g., email format)
    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const response = await fetch("http://localhost:3030/api/v1/user/signup", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setData(response));

    if (data.error) {
      Swal.fire({
        icon: "error",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Signed up Success, Please Login..!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    setInput({
      fullname: "",
      email: "",
      password: "",
    });
  };

  return (
    <Box sx={{ height: "80vh" }} mt={4}>
      <Container maxWidth={"sm"}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" textAlign={"center"}>
            Signup Form
          </Typography>
          <TextField
            label=" Full Name"
            fullWidth
            margin="normal"
            name="fullname"
            value={input.fullname}
            onChange={handleInput}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            name="email"
            value={input.email}
            onChange={handleInput}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            name="password"
            margin="normal"
            value={input.password}
            onChange={handleInput}
          />
          <Button variant="contained" color="primary" fullWidth type="submit">
            Signup
          </Button>
        </form>
        <Typography mt={2} textAlign={"center"}>
          If user already Exist Please <Link to="/login">Login</Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Signup;
