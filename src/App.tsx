import './App.css';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';

import HomeBlog from './pages/HomeBlog';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Blogpost from './pages/Blogpost';
import NotFound from './components/NotFound';
import Search from './components/search';
import Signup from './pages/Signup';
import Login from './pages/Login';
import BlogCreationPage from './components/CreateBlogPage';

function App() {
  return (
    <Box>
      <Navbar />
      {/* <Signup /> */}
      <Box mt={9} pt={1}>
        <Routes>
          <Route path='/' element={<HomeBlog />} />
          {/* <Route
          path="/login"
          element={<LoginForm onLogin={handleLogin} onSignup={handleSignup} />}
        /> */}
          <Route path='/post' element={<BlogCreationPage />} />
          <Route path='/view/:id' element={<Blogpost />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/search' element={<Search />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
