import "./App.css";

import Footer from "./components/Footer";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Card from "./components/Card";

function App() {
  return (
    <Box>
      <Navbar />
      <Card />
      <Signup />
      <Footer />
    </Box>
  );
}

export default App;
