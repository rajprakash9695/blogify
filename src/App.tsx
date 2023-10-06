import "./App.css";
import Layout from "./layout/Layout";
import Pages from "./pages";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Layout />
      <Pages />
      <Footer />
    </Box>
  );
}

export default App;
