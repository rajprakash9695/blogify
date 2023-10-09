import "./App.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import CustomModal from "./components/CustomModel";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <button onClick={handleOpen}>Open Modal</button>

      <CustomModal
        open={open}
        onClose={handleClose}
        title="Custom Modal"
        maxWidth={"sm"}
      >
        This is the content of the custom modal.
      </CustomModal>
      <LoginForm onLogin={handleLogin} onSignup={handleSignup} />
    </Box>
  );
}

export default App;
