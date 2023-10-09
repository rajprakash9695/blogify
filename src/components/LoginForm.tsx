import React, { useState } from "react";
import { Button, Container, TextField, Typography } from "@mui/material";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  onSignup: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onSignup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    onLogin(email, password);
  };

  const handleSignup = () => {
    onSignup(email, password);
  };

  return (
    <div>
      <Container maxWidth={"sm"}>
        <Typography textAlign={"center"} variant="h5">
          {isLogin ? "Login" : "Signup"}
        </Typography>
        {isLogin ? (
          false
        ) : (
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
        )}

        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
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
          onClick={isLogin ? handleLogin : handleSignup}
        >
          {isLogin ? "Login" : "Signup"}
        </Button>
        <Typography
          variant="body2"
          align="center"
          style={{ marginTop: "16px" }}
        >
          {isLogin ? "Don't have an account? " : "Already have an account? "}
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
      </Container>
    </div>
  );
};

export default LoginForm;