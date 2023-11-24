import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Axios } from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function Login() {
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

  //   const validateForm = () => {
  //     const { email, password } = input;
  //     if (!email || !password) {
  //       Swal.fire({
  //         icon: "error",
  //         title: "All fields are required",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       return false;
  //     }

  //     // Add more complex validation if needed (e.g., email format)
  //     return true;
  //   };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await Axios.post(
        "http://localhost:3030/api/v1/user/login",
        input
      );
      console.log("res", res);

      if (res && res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Login has been Successful",
          showConfirmButton: true,
          confirmButtonText: "OK",
        });
        console.log("log", res.data.user);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Login  failed",
        text: "An error occurred during login.",
        showConfirmButton: true,
        confirmButtonText: "OK",
      });
    }

    // if (!validateForm()) {/
    //   return;
    // }

    // const res = await fetch("http://localhost:3030/api/v1/user/login", {
    //   method: "POST",
    //   body: JSON.stringify(input),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => setGetData(data));

    // if (getdata.error) {
    //   Swal.fire({
    //     icon: "error",
    //     title: getdata.message,
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
    // } else {
    //   Swal.fire({
    //     icon: "success",
    //     title: getdata.message,
    //     showConfirmButton: true,
    //     timer: 1500,
    //   });
    // }

    // setInput({
    //   email: "",
    //   password: "",
    // });
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
      </Container>
    </Box>
  );
}

export default Login;
