import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Axios } from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [getdata, setGetData] = useState([]);

  const handleInput = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { email, password } = input;
    if (!email || !password) {
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

    const res = await fetch("http://localhost:3030/api/v1/user/login", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setGetData(data));

    if (getdata.error) {
      Swal.fire({
        icon: "error",
        title: getdata.message,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate = false;
    } else {
      Swal.fire({
        icon: "success",
        title: "User Login Successsfully",
        showConfirmButton: true,
        timer: 1500,
      });
      navigate("/post");
    }

    setInput({
      email: "",
      password: "",
    });
  };

  return (
    <Box sx={{ height: "80vh" }} mt={4}>
      <Container maxWidth={"sm"}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" textAlign={"center"}>
            Login Form
          </Typography>
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
            Login
          </Button>
        </form>
        <Typography mt={2} textAlign={"center"}>
          If User doesn't exist please <Link to="/signup">Register</Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Login;
