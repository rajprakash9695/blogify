import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  onSignup: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onSignup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (values: any) => {
    if (isLogin) {
      // Login
      onLogin(values.email, values.password);
    } else {
      // Signup
      onSignup(
        values.name,
        values.email,
        values.password,
        values.confirmPassword
      );
    }

    // Log the form data to the console
    console.log("Form Data Submitted:", values);
  };

  const handleLogin = () => {
    onLogin(email, password);
  };

  const handleSignup = () => {
    console.log("log");

    onSignup(name, email, password, confirmPassword);
  };

  return (
    <Box
      my={5}
      height={"75vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Container maxWidth={"sm"}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form onSubmit={handleSubmit}>
            <Typography textAlign={"center"} variant="h4">
              {isLogin ? "Login" : "Signup"}
            </Typography>
            {isLogin ? (
              false
            ) : (
              <TextField
                label="Name"
                variant="outlined"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
              />
            )}

            <TextField
              label="Email"
              variant="outlined"
              value={email}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
            />

            {isLogin ? (
              false
            ) : (
              <TextField
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
                margin="normal"
              />
            )}

            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              onClick={isLogin ? handleLogin : handleSignup}
            >
              {isLogin ? "Login" : "Signup"}
            </Button>
            <Typography
              variant="body2"
              align="center"
              style={{ marginTop: "16px" }}
            >
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <span
                style={{
                  cursor: "pointer",
                  color: "blue",
                  textDecoration: "underline",
                }}
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Signup here." : "Login here."}
              </span>
            </Typography>
          </Form>
        </Formik>
      </Container>
    </Box>
  );
};

export default LoginForm;
