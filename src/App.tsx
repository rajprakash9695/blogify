import "./App.css";

import Pages from "./pages";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import Layout from "./layout/Layout";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Box>
      <Layout />
      <Login />
      <Signup />
      <Pages />
      <Footer />
    </Box>
  );
}

export default App;
