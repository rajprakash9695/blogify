import "./App.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";

import HomeBlog from "./components/HomeBlog";
import { Route, Routes } from "react-router-dom";

import LoginForm from "./components/LoginForm";

import Footer from "./components/Footer";
import Blogpost from "./components/Blogpost";
import MdEditor from "./components/MdEditor";
import NotFound from "./components/NotFound";
import Search from "./components/search";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Box>
      <Navbar />
      <Login />

      {/* <Routes>
        <Route path="/" element={<HomeBlog />} />
        <Route
          path="/login"
          element={<LoginForm onLogin={handleLogin} onSignup={handleSignup} />}
        />
        <Route path="/post" element={<MdEditor />} />
        <Route path="/view" element={<Blogpost />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> */}
      <Footer />
    </Box>
  );
}

export default App;
