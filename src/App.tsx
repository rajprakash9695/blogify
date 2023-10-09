import "./App.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";

import HomeBlog from "./components/HomeBlog";
import { Route, Routes } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import MdEditor from "./components/CreateBolg";
import Footer from "./components/Footer";
import Blogpost from "./components/Blogpost";

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
      <Routes>
        <Route path="/" element={<HomeBlog />} />
        <Route
          path="/login"
          element={<LoginForm onLogin={handleLogin} onSignup={handleSignup} />}
        />
        <Route path="/post" element={<MdEditor />} />
        <Route path="/view" element={<Blogpost />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
