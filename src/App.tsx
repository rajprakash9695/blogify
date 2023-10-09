import "./App.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";

function App() {
  const handleLogin = (email: string, password: string) => {
    // Implement your login logic here
    console.log("Login:", email, password);
  };

  const handleSignup = (email: string, password: string) => {
    // Implement your signup logic here
    console.log("Signup:", email, password);
  };
  return (
    <Box>
      <Navbar />
      <LoginForm onLogin={handleLogin} onSignup={handleSignup} />
    </Box>
  );
}

export default App;
